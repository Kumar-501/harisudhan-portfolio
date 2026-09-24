import { techStack } from "../data/portfolio";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";
import { TechIcon } from "./ui/icons";

export function TechStack() {
  return (
    <section
      aria-labelledby="tech-title"
      className="section bg-slate-50/80 pt-0 dark:bg-navy-900/40"
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Technology Stack"
          title="Tools and technologies I work with"
          subtitle="Python and MySQL are documented on my resume; the web technologies are ones I am currently exploring."
          titleId="tech-title"
        />

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {techStack.map((tech, i) => {
            const core = tech.status === "Core Skill";
            return (
              <Reveal
                key={tech.name}
                delay={i * 80}
                as="li"
                className={cn(
                  "card card-hover group flex h-full flex-col items-center gap-3 p-5 text-center",
                  core && "border-brand-200 dark:border-brand-500/40"
                )}
              >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "flex h-14 w-14 items-center justify-center rounded-2xl border transition-transform duration-300 group-hover:scale-105",
                      core
                        ? "border-brand-200 bg-brand-50 dark:border-brand-500/30 dark:bg-brand-500/10"
                        : "border-slate-200 bg-white dark:border-slate-700 dark:bg-navy-800"
                    )}
                  >
                    <TechIcon name={tech.icon} className={cn("h-7 w-7", tech.tint)} />
                  </span>
                  <h3 className="text-sm font-bold text-ink-900 dark:text-white">
                    {tech.name}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-0.5 text-[11px] font-semibold",
                      core
                        ? "bg-brand-600/10 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300"
                        : "bg-slate-100 text-ink-500 dark:bg-white/5 dark:text-slate-400"
                    )}
                  >
                  {tech.status}
                </span>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
