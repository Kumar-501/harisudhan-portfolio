import {
  ArrowRight,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Database,
  Cpu,
  GraduationCap,
  CircuitBoard,
} from "lucide-react";
import { profile } from "../data/portfolio";
import { CircuitDecor } from "./ui/CircuitDecor";
import { LinkedInIcon } from "./ui/icons";
import profileImage from "../assets/harisudhanprofile.jpeg";

const floatingChips = [
  {
    label: "Python",
    icon: Terminal,
    className: "animate-floaty -left-6 top-10",
  },
  {
    label: "MySQL",
    icon: Database,
    className: "animate-floaty-slow -right-5 top-1/3",
  },
  {
    label: "Electronics",
    icon: Cpu,
    className: "animate-floaty -left-4 bottom-12",
    delay: "1.2s",
  },
];

export function Hero() {
  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 lg:pb-24"
    >
      {/* Background decoration */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />

        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-brand-400/15 blur-3xl dark:bg-brand-500/10" />

        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl dark:bg-brand-400/5" />
      </div>

      <div className="container-x relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* =========================================================
              LEFT COLUMN
          ========================================================== */}
          <div className="reveal is-visible text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
              <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
              ECE STUDENT • DEVELOPER • TECH ENTHUSIAST
            </p>

            <h1 className="h1 mt-6">
              <span className="block text-2xl font-semibold text-ink-500 sm:text-3xl dark:text-slate-400">
                Hi, I&apos;m
              </span>

              <span className="mt-2 block">Harisudhan A G</span>
            </h1>

            <p className="mt-5 font-display text-lg font-semibold text-ink-800 sm:text-xl dark:text-slate-200">
              First-Year{" "}
              <span className="text-brand-600 dark:text-brand-400">
                Electronics &amp; Communication Engineering
              </span>{" "}
              Student
            </p>

            <p className="lead mx-auto mt-5 max-w-xl lg:mx-0">
              I&apos;m a first-year ECE student building a strong foundation in
              electronics, Python programming, database management, and practical
              technical projects.
            </p>

            {/* Action buttons */}
            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
              <a href="#projects" className="btn btn-primary">
                View My Projects
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail className="h-4 w-4" aria-hidden="true" />
                Contact Me
              </a>

              <a
                href={profile.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost border border-slate-200 dark:border-slate-700"
              >
                <LinkedInIcon className="h-4 w-4" aria-hidden="true" />
                LinkedIn Profile
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>

            {/* Location and availability */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <span className="chip">
                <MapPin
                  className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />
                Coimbatore, Tamil Nadu
              </span>

              <span className="chip border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                <span
                  className="relative flex h-2 w-2"
                  aria-hidden="true"
                >
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-500 opacity-75" />

                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-600" />
                </span>

                Open to internship &amp; learning opportunities
              </span>
            </div>
          </div>

          {/* =========================================================
              RIGHT COLUMN — PROFILE IMAGE / ECE IDENTITY CARD
          ========================================================== */}
          <div className="reveal is-visible relative mx-auto w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[400px]">
            <CircuitDecor
              className="absolute -inset-8 h-[calc(100%+4rem)] w-[calc(100%+4rem)]"
            />

            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-[2.75rem] border border-dashed border-brand-500/30 dark:border-brand-400/25"
            />

            <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-brand-100 to-slate-100 p-1.5 shadow-[0_30px_60px_-30px_rgba(13,148,136,0.45)] ring-1 ring-slate-900/5 dark:from-navy-800 dark:to-navy-900 dark:ring-white/10">
              <div
                role="region"
                aria-label="Harisudhan A G Engineering Identity Card"
                className="relative flex aspect-square w-full flex-col justify-between overflow-hidden rounded-[1.85rem] bg-white p-6 sm:p-7 dark:bg-navy-900"
              >
                {/* Subtle technical grid */}
                <div
                  aria-hidden="true"
                  className="bg-dots pointer-events-none absolute inset-0 opacity-60"
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-brand-500/15 blur-2xl dark:bg-brand-400/15"
                />

                {/* =====================================================
                    TOP STATUS BAR
                ====================================================== */}
                <div className="relative flex items-center justify-between border-b border-slate-100 pb-3.5 dark:border-slate-800">
                  <div
                    className="flex items-center gap-1.5"
                    aria-hidden="true"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-brand-500" />

                    <span className="h-2.5 w-2.5 rounded-full bg-brand-300 dark:bg-brand-700" />

                    <span className="h-2.5 w-2.5 rounded-full bg-slate-200 dark:bg-slate-700" />
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-brand-700 dark:bg-brand-500/10 dark:text-brand-300">
                    <CircuitBoard
                      className="h-3 w-3"
                      aria-hidden="true"
                    />
                    B.E. ECE • 2026
                  </span>
                </div>

                {/* =====================================================
                    PROFILE IMAGE
                ====================================================== */}
                <div className="relative my-auto flex flex-col items-center py-3 text-center">
                  <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
                    {/* Outer dashed border */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full border border-dashed border-brand-400/50 dark:border-brand-400/30"
                    />

                    {/* Outer glow ring */}
                    <span
                      aria-hidden="true"
                      className="absolute -inset-2 rounded-full border border-brand-500/15 dark:border-brand-400/10"
                    />

                    {/* Profile image container */}
                    <div className="relative h-28 w-28 overflow-hidden rounded-full border-4 border-white bg-gradient-to-br from-brand-100 to-slate-100 shadow-xl shadow-brand-600/20 dark:border-navy-800 dark:from-navy-800 dark:to-navy-900 sm:h-32 sm:w-32">
                      <img
                        src={profileImage}
                        alt="Harisudhan A G"
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>

                  <p className="mt-4 font-display text-lg font-bold text-ink-900 sm:text-xl dark:text-white">
                    {profile.name}
                  </p>

                  <p className="mt-0.5 text-xs font-medium text-brand-600 dark:text-brand-400">
                    Electronics &amp; Communication Engineering
                  </p>
                </div>

                {/* =====================================================
                    BOTTOM COLLEGE & CORE FOCUS READOUT
                ====================================================== */}
                <div className="relative rounded-2xl border border-slate-200/80 bg-slate-50/90 p-3.5 backdrop-blur-sm dark:border-slate-700/70 dark:bg-navy-800/80">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400">
                      <GraduationCap
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    </span>

                    <div className="min-w-0 text-left">
                      <p className="truncate text-xs font-bold text-ink-900 dark:text-white">
                        KPRIET, Coimbatore
                      </p>

                      <p className="truncate text-[11px] text-ink-500 dark:text-slate-400">
                        First Year • Python • MySQL • Electronics
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* =========================================================
                FLOATING TECH CHIPS
            ========================================================== */}
            {floatingChips.map((chip) => (
              <span
                key={chip.label}
                style={
                  chip.delay
                    ? { animationDelay: chip.delay }
                    : undefined
                }
                className={`${chip.className} absolute hidden items-center gap-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-2 text-xs font-semibold text-ink-800 shadow-lg shadow-slate-900/5 backdrop-blur sm:flex dark:border-slate-700 dark:bg-navy-800/95 dark:text-slate-100`}
              >
                <chip.icon
                  className="h-4 w-4 text-brand-600 dark:text-brand-400"
                  aria-hidden="true"
                />

                {chip.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}