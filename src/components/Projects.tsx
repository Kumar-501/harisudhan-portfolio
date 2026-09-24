import { useState } from "react";
import { ArrowRight, FolderOpen } from "lucide-react";
import { project } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { SpeakerIllustration } from "./ui/SpeakerIllustration";
import { ProjectModal } from "./ProjectModal";

export function Projects() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Projects"
          title="Featured Project"
          subtitle="A hands-on electronics build where I applied classroom concepts to a real device."
          titleId="projects-title"
        />

        <Reveal className="mt-14">
          <article className="card overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Illustration */}
              <div className="group relative border-b border-slate-200 bg-slate-50/60 p-6 sm:p-8 lg:border-b-0 lg:border-r dark:border-slate-700/60 dark:bg-navy-900/40">
                <SpeakerIllustration className="mx-auto w-full max-w-lg transition-transform duration-500 group-hover:scale-[1.02]" />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-9 lg:p-11">
                <p className="eyebrow">{project.tagline}</p>
                <h3 className="mt-3 font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
                  {project.title}
                </h3>
                <p className="lead mt-4 text-sm sm:text-base">{project.description}</p>

                <h4 className="mt-7 text-xs font-bold uppercase tracking-wider text-ink-500 dark:text-slate-500">
                  Technologies Used
                </h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <li key={tech} className="chip">
                      <span
                        aria-hidden="true"
                        className="h-1.5 w-1.5 rounded-full bg-brand-500"
                      />
                      {tech}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="btn btn-primary"
                  >
                    Project Details
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <span className="text-xs text-ink-500 dark:text-slate-500">
                    Overview, approach, components &amp; outcome
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Honest placeholder for future work */}
        <Reveal delay={120} className="mt-6">
          <div className="flex flex-col items-center gap-3 rounded-2xl border border-dashed border-slate-300 px-6 py-8 text-center dark:border-slate-700">
            <span
              aria-hidden="true"
              className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-ink-500 dark:bg-white/5 dark:text-slate-400"
            >
              <FolderOpen className="h-5 w-5" />
            </span>
            <p className="text-sm font-medium text-ink-700 dark:text-slate-300">
              More projects on the way
            </p>
            <p className="max-w-md text-sm text-ink-500 dark:text-slate-500">
              I&apos;m continuing to build practical projects as part of my
              coursework and self-learning. This section will grow as new work is
              completed.
            </p>
          </div>
        </Reveal>
      </div>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
