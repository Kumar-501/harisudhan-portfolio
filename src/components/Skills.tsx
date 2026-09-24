import { skillCategories, type SkillLevel } from "../data/portfolio";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

const levelStyles: Record<SkillLevel, string> = {
  Learning:
    "border-slate-200 bg-slate-50 text-ink-600 dark:border-slate-600 dark:bg-white/5 dark:text-slate-300",
  Developing:
    "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300",
  Practicing:
    "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-300",
};

const levelDot: Record<SkillLevel, string> = {
  Learning: "bg-ink-500 dark:bg-slate-400",
  Developing: "bg-brand-500",
  Practicing: "bg-emerald-500",
};

export function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Skills I'm currently developing and applying through academic and practical work."
          subtitle="Every skill below is something I am actively building — labelled honestly by stage rather than by percentage."
          titleId="skills-title"
        />

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {skillCategories.map((category, i) => (
            <Reveal key={category.id} delay={i * 100}>
              <article className="card card-hover h-full p-6 sm:p-7">
                <header className="flex items-center gap-3">
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 dark:bg-brand-500/15 dark:text-brand-400"
                  >
                    <category.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="h3">{category.title}</h3>
                    <p className="text-xs text-ink-500 dark:text-slate-500">
                      {category.skills.length}{" "}
                      {category.skills.length === 1 ? "skill" : "skills"}
                    </p>
                  </div>
                </header>

                <ul className="mt-6 space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill.name}
                      className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/40 dark:border-slate-700/50 dark:bg-white/[0.03] dark:hover:border-brand-500/30 dark:hover:bg-brand-500/5"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-semibold text-ink-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <span
                          className={cn(
                            "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
                            levelStyles[skill.level]
                          )}
                        >
                          <span
                            aria-hidden="true"
                            className={cn(
                              "h-1.5 w-1.5 rounded-full",
                              levelDot[skill.level]
                            )}
                          />
                          {skill.level}
                        </span>
                      </div>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                        {skill.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
