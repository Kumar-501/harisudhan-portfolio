import { GraduationCap, Cpu, Terminal, Database, Brain } from "lucide-react";
import { aboutInfo } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const corePillars = [
  {
    icon: Cpu,
    title: "Electronics & Hardware",
    detail: "Circuit wiring, amplifier interfacing & hands-on soldering",
  },
  {
    icon: Terminal,
    title: "Python Programming",
    detail: "Scripting fundamentals & structured problem solving",
  },
  {
    icon: Database,
    title: "MySQL Databases",
    detail: "Relational data modeling, queries & management",
  },
  {
    icon: Brain,
    title: "Analytical Thinking",
    detail: "Data analysis, documentation & collaborative teamwork",
  },
];

export function About() {
  return (
    <section id="about" className="section bg-slate-50/80 dark:bg-navy-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="About Me"
          title="Building my foundation in technology, electronics, and problem solving."
          titleId="about-title"
        />

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Left column — Option A: Clean Technical Foundation Card (No User Image) */}
          <Reveal className="mx-auto w-full max-w-sm">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -inset-3 rounded-[2.25rem] border border-dashed border-brand-500/25 dark:border-brand-400/20"
              />
              <div className="overflow-hidden rounded-[1.75rem] bg-white p-1.5 shadow-[0_24px_50px_-28px_rgba(15,23,42,0.35)] ring-1 ring-slate-900/5 dark:bg-navy-800 dark:ring-white/10">
                <div className="relative flex flex-col justify-between overflow-hidden rounded-[1.35rem] bg-gradient-to-b from-brand-50/60 via-white to-slate-50 p-6 pb-9 dark:from-navy-900 dark:via-navy-900 dark:to-navy-950">
                  <div
                    aria-hidden="true"
                    className="bg-grid pointer-events-none absolute inset-0 opacity-60"
                  />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white shadow-md shadow-brand-600/25">
                        HA
                      </span>
                      <span className="rounded-full border border-brand-200 bg-white px-3 py-1 text-[11px] font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-navy-800 dark:text-brand-300">
                        Core Focus Areas
                      </span>
                    </div>

                    <h3 className="mt-4 font-display text-lg font-bold text-ink-900 dark:text-white">
                      Harisudhan A G
                    </h3>
                    <p className="text-xs font-medium text-ink-500 dark:text-slate-400">
                      B.E. ECE • KPRIET, Coimbatore
                    </p>
                  </div>

                  <ul className="relative mt-5 space-y-2.5">
                    {corePillars.map((pillar) => (
                      <li
                        key={pillar.title}
                        className="flex items-start gap-3 rounded-xl border border-slate-200/80 bg-white/90 p-3 shadow-2xs dark:border-slate-700/70 dark:bg-navy-800/80"
                      >
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                        >
                          <pillar.icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-ink-900 dark:text-white">
                            {pillar.title}
                          </p>
                          <p className="mt-0.5 text-[11px] leading-snug text-ink-500 dark:text-slate-400">
                            {pillar.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold whitespace-nowrap text-ink-800 shadow-lg dark:border-slate-700 dark:bg-navy-800 dark:text-slate-100">
                <GraduationCap
                  className="h-4 w-4 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                First-Year ECE Student
              </div>
            </div>
          </Reveal>

          {/* Text + info card */}
          <Reveal delay={120}>
            <div className="space-y-5">
              <p className="lead">
                I&apos;m <strong className="font-semibold text-ink-900 dark:text-white">Harisudhan A G</strong>,
                a first-year Electronics and Communication Engineering student at{" "}
                <strong className="font-semibold text-ink-900 dark:text-white">
                  KPR Institute of Engineering and Technology, Coimbatore
                </strong>
                .
              </p>
              <p className="lead">
                I am currently developing my foundation in electronics,
                programming, database systems, and analytical problem solving. I
                enjoy learning through practical projects and applying technical
                concepts to real-world problems.
              </p>
              <p className="lead">
                My current technical interests include Python programming, MySQL
                database management, electronics, data analysis, and hands-on
                hardware projects.
              </p>
            </div>

            {/* Information card */}
            <dl className="mt-8 grid gap-3 sm:grid-cols-2">
              {aboutInfo.map((item) => (
                <div
                  key={item.label}
                  className="card card-hover flex items-start gap-3 p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                  >
                    <item.icon className="h-[18px] w-[18px]" />
                  </span>
                  <div className="min-w-0">
                    <dt className="text-xs font-semibold uppercase tracking-wider text-ink-500 dark:text-slate-500">
                      {item.label}
                    </dt>
                    <dd className="mt-0.5 text-sm font-medium text-ink-900 dark:text-slate-200">
                      {item.value}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>

            <p className="mt-6 text-sm text-ink-500 dark:text-slate-500">
              Currently focused on studies and practical learning — building
              experience through academic work and personal projects.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
