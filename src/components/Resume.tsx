import { useEffect, useMemo, useState } from "react";
import { Download, Eye } from "lucide-react";
import { profile } from "../data/portfolio";
import { buildResumePdf } from "../utils/resumePdf";
import { Reveal } from "./ui/Reveal";
import { Toast } from "./ui/Toast";

export function Resume() {
  const [toast, setToast] = useState<string | null>(null);

  /* Build the resume PDF once and keep a revocable object URL */
  const resumeUrl = useMemo(() => URL.createObjectURL(buildResumePdf()), []);

  useEffect(() => {
    return () => URL.revokeObjectURL(resumeUrl);
  }, [resumeUrl]);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 2600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleDownload = () => {
    setToast("Resume download started");
  };

  return (
    <section id="resume" aria-labelledby="resume-title" className="section">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-50 via-white to-slate-50 px-6 py-14 text-center shadow-[0_24px_60px_-32px_rgba(13,148,136,0.35)] sm:px-12 dark:border-brand-500/25 dark:from-navy-800 dark:via-navy-900 dark:to-navy-950">
            <div
              aria-hidden="true"
              className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]"
            />

            <div className="relative">
              <p className="eyebrow justify-center">Resume</p>
              <h2 id="resume-title" className="h2 mt-4">
                Want to know more?
              </h2>
              <p className="lead mx-auto mt-4 max-w-xl">
                View my resume for a complete overview of my education, skills,
                and project experience.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary w-full sm:w-auto"
                >
                  <Eye className="h-4 w-4" aria-hidden="true" />
                  View Resume
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
                <a
                  href={resumeUrl}
                  download={profile.resumeFileName}
                  onClick={handleDownload}
                  className="btn btn-primary w-full sm:w-auto"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download Resume
                </a>
              </div>

              <p className="mt-5 text-xs text-ink-500 dark:text-slate-500">
                PDF • {profile.resumeFileName}
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      {toast && <Toast message={toast} />}
    </section>
  );
}
