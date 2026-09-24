import { useEffect, useRef } from "react";
import { X, Target, Lightbulb, ListChecks, Cpu, Wrench, PartyPopper } from "lucide-react";
import { project } from "../data/portfolio";

type ProjectModalProps = {
  open: boolean;
  onClose: () => void;
};

const sections = [
  { id: "overview", title: "Overview", icon: Target, body: project.overview },
  { id: "problem", title: "Problem", icon: Lightbulb, body: project.problem },
  { id: "approach", title: "Approach", icon: ListChecks, body: project.approach },
] as const;

export function ProjectModal({ open, onClose }: ProjectModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="animate-fade-in fixed inset-0 z-[60] flex items-end justify-center bg-navy-950/70 p-4 backdrop-blur-sm sm:items-center"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="animate-pop-in max-h-[88vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-8 dark:border-slate-700 dark:bg-navy-900"
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="eyebrow">{project.tagline}</p>
            <h2
              id="project-modal-title"
              className="mt-2 font-display text-2xl font-bold text-ink-900 dark:text-white"
            >
              {project.title}
            </h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="flex h-10 w-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-slate-200 text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        <div className="divider my-6" />

        {/* Overview / Problem / Approach */}
        <div className="space-y-6">
          {sections.map((section) => (
            <section key={section.id}>
              <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                <section.icon className="h-4 w-4" aria-hidden="true" />
                {section.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                {section.body}
              </p>
            </section>
          ))}

          {/* Implementation */}
          <section>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
              <Wrench className="h-4 w-4" aria-hidden="true" />
              Implementation
            </h3>
            <ul className="mt-2 space-y-2">
              {project.implementation.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-slate-400"
                >
                  <span
                    aria-hidden="true"
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Components */}
          <section>
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
              <Cpu className="h-4 w-4" aria-hidden="true" />
              Components &amp; Technologies
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {project.components.map((component) => (
                <li key={component} className="chip">
                  {component}
                </li>
              ))}
            </ul>
          </section>

          {/* Outcome */}
          <section className="rounded-xl border border-brand-200 bg-brand-50/60 p-4 dark:border-brand-500/25 dark:bg-brand-500/10">
            <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-brand-700 dark:text-brand-300">
              <PartyPopper className="h-4 w-4" aria-hidden="true" />
              Outcome
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-700 dark:text-slate-300">
              {project.outcome}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
