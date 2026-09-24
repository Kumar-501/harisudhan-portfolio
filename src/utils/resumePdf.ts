/**
 * Builds a valid single/multi-page PDF resume at runtime (no dependencies).
 * All offsets are computed while assembling the file, so the xref table is
 * always correct. Content is restricted to ASCII for the standard PDF fonts.
 */

type Font = "F1" | "F2" | "F3";
type RGB = [number, number, number];

type Op =
  | { kind: "text"; x: number; y: number; size: number; font: Font; text: string; color: RGB }
  | { kind: "rule"; x: number; y: number; width: number; height: number; color: RGB };

const PAGE_W = 595.28; // A4 portrait
const PAGE_H = 841.89;
const MARGIN = 56;
const TOP = PAGE_H - 70;
const BOTTOM = 70;

const TEAL: RGB = [0.05, 0.58, 0.53];
const CHARCOAL: RGB = [0.1, 0.12, 0.16];
const GRAY: RGB = [0.36, 0.4, 0.47];

function escapeText(input: string): string {
  return input
    .replace(/[^\x20-\x7E]/g, "-")
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function wrap(text: string, maxChars: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let line = "";
  for (const word of words) {
    if (!line) line = word;
    else if ((line + " " + word).length <= maxChars) line += " " + word;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

class ResumeBuilder {
  private pages: Op[][] = [];
  private current: Op[] = [];
  private y = TOP;

  constructor() {
    this.pages.push(this.current);
  }

  private ensureSpace(needed: number) {
    if (this.y - needed < BOTTOM) {
      this.current = [];
      this.pages.push(this.current);
      this.y = TOP;
    }
  }

  private advance(amount: number) {
    this.y -= amount;
  }

  heading(text: string) {
    this.advance(20);
    this.ensureSpace(30);
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size: 11.5,
      font: "F2",
      text: text.toUpperCase(),
      color: TEAL,
    });
    this.advance(7);
    this.current.push({
      kind: "rule",
      x: MARGIN,
      y: this.y,
      width: PAGE_W - MARGIN * 2,
      height: 0.8,
      color: [0.82, 0.86, 0.88],
    });
    this.advance(16);
    return this;
  }

  title(text: string) {
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size: 23,
      font: "F2",
      text,
      color: CHARCOAL,
    });
    this.advance(26);
    return this;
  }

  subtitle(text: string) {
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size: 11,
      font: "F2",
      text,
      color: TEAL,
    });
    this.advance(16);
    return this;
  }

  meta(text: string) {
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size: 9,
      font: "F1",
      text,
      color: GRAY,
    });
    this.advance(13);
    return this;
  }

  boldLine(text: string, size = 10.5) {
    this.ensureSpace(size + 6);
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size,
      font: "F2",
      text,
      color: CHARCOAL,
    });
    this.advance(size + 5);
    return this;
  }

  line(text: string, size = 10, color: RGB = CHARCOAL, font: Font = "F1") {
    this.ensureSpace(size + 5);
    this.current.push({
      kind: "text",
      x: MARGIN,
      y: this.y,
      size,
      font,
      text,
      color,
    });
    this.advance(size + 4.5);
    return this;
  }

  paragraph(text: string, size = 10) {
    for (const wrapped of wrap(text, 92)) {
      this.line(wrapped, size);
    }
    return this;
  }

  gap(amount = 8) {
    this.advance(amount);
    return this;
  }

  rule() {
    this.current.push({
      kind: "rule",
      x: MARGIN,
      y: this.y,
      width: PAGE_W - MARGIN * 2,
      height: 0.8,
      color: [0.82, 0.86, 0.88],
    });
    this.advance(10);
    return this;
  }

  build(): Blob {
    const pageCount = this.pages.length;
    const firstPageObj = 3;
    const fontObj = firstPageObj + pageCount * 2;

    const objects: string[] = [];
    objects[1] = "<< /Type /Catalog /Pages 2 0 R >>";
    const kids = this.pages
      .map((_, i) => `${firstPageObj + i * 2} 0 R`)
      .join(" ");
    objects[2] = `<< /Type /Pages /Kids [${kids}] /Count ${pageCount} >>`;

    this.pages.forEach((ops, i) => {
      const pageObj = firstPageObj + i * 2;
      const contentObj = pageObj + 1;
      const stream = ops
        .map((op) => {
          if (op.kind === "text") {
            const [r, g, b] = op.color;
            return `BT /${op.font} ${op.size} Tf ${r} ${g} ${b} rg ${op.x} ${op.y.toFixed(
              2
            )} Td (${escapeText(op.text)}) Tj ET`;
          }
          const [r, g, b] = op.color;
          return `${r} ${g} ${b} rg ${op.x} ${op.y.toFixed(2)} ${op.width} ${op.height} re f`;
        })
        .join("\n");

      objects[pageObj] =
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PAGE_W} ${PAGE_H}] ` +
        `/Resources << /Font << /F1 ${fontObj} 0 R /F2 ${fontObj + 1} 0 R /F3 ${
          fontObj + 2
        } 0 R >> >> /Contents ${contentObj} 0 R >>`;
      objects[contentObj] = `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`;
    });

    objects[fontObj] = "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>";
    objects[fontObj + 1] =
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>";
    objects[fontObj + 2] =
      "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>";

    let pdf = "%PDF-1.4\n";
    const offsets: number[] = [];
    const total = objects.length;
    for (let i = 1; i < total; i++) {
      offsets[i] = pdf.length;
      pdf += `${i} 0 obj\n${objects[i]}\nendobj\n`;
    }

    const startxref = pdf.length;
    pdf += `xref\n0 ${total}\n0000000000 65535 f \n`;
    for (let i = 1; i < total; i++) {
      pdf += `${String(offsets[i]).padStart(10, "0")} 00000 n \n`;
    }
    pdf += `trailer\n<< /Size ${total} /Root 1 0 R >>\nstartxref\n${startxref}\n%%EOF`;

    return new Blob([pdf], { type: "application/pdf" });
  }
}

/** Resume content — only information provided by the profile owner. */
export function buildResumePdf(): Blob {
  const r = new ResumeBuilder();

  r.title("HARISUDHAN A G");
  r.subtitle("First-Year Electronics & Communication Engineering Student");
  r.meta(
    "Coimbatore, Tamil Nadu, India - 641407  |  +91 98439 65687  |  26ec094@kpriet.ac.in  |  linkedin.com/in/harisudhan-a-g"
  );
  r.rule();

  r.heading("Summary");
  r.paragraph(
    "First-year ECE student with a foundation in Python programming and database management. Completed hands-on projects applying analytical and technical skills. Seeking internship opportunities to deliver results through data-driven development."
  );
  r.gap(4);

  r.heading("Education");
  r.boldLine("KPR Institute of Engineering and Technology, Coimbatore");
  r.line("Bachelor of Engineering - Electronics and Communication Engineering");
  r.line("Status: First Year", 10, GRAY, "F3");
  r.gap(6);
  r.boldLine("Jaivins Academy, Senior Secondary School, Attur");
  r.line("Grade XII - CBSE  |  Score: 407 / 500 (81.4%)");
  r.gap(6);
  r.boldLine("Jaivins Academy, Senior Secondary School, Attur");
  r.line("Grade X - CBSE  |  Score: 423 / 500 (84.6%)");
  r.gap(4);

  r.heading("Technical Skills");
  r.line("Programming: Python Programming");
  r.line("Database: MySQL Database Management");
  r.line("Analytical: Data Analysis, Problem Solving, Analytical Thinking");
  r.line(
    "Professional: Technical Documentation, Team Collaboration, Effective Communication, Adaptability"
  );
  r.gap(4);

  r.heading("Project");
  r.boldLine("Bluetooth Speaker Conversion");
  r.paragraph(
    "Converted a conventional wired speaker into a wireless Bluetooth speaker using a Bluetooth audio amplifier module, including circuit wiring, power integration, and speaker interfacing."
  );
  r.line(
    "Technologies: Bluetooth Audio Amplifier, Basic Electronics, Soldering",
    10,
    GRAY
  );

  return r.build();
}
