import { MapPin } from "lucide-react";
import { education } from "../data/portfolio";
import { cn } from "../utils/cn";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section bg-slate-50/80 dark:bg-navy-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Education"
          title="Academic background"
          subtitle="My schooling and current engineering studies, with scores as recorded."
          titleId="education-title"
        />

        <ol className="relative mt-14 space-y-8">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/70 via-slate-200 to-transparent md:left-1/2 dark:via-slate-700"
          />

          {education.map((item, i) => {
            const alignRight = i % 2 === 0;
            return (
            <li key={item.id} className="relative pl-14 md:pl-0">
              {/* Node */}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-0 top-6 flex h-10 w-10 items-center justify-center rounded-full border-2 bg-white text-brand-600 shadow-sm md:left-1/2 md:-translate-x-1/2 dark:bg-navy-900 dark:text-brand-400",
                  item.current
                    ? "border-brand-500"
                    : "border-slate-300 dark:border-slate-600"
                )}
              >
                <item.icon className="h-[18px] w-[18px]" />
              </span>

              <div className="md:grid md:grid-cols-2 md:gap-16">
                <Reveal
                  delay={i * 100}
                  className={i % 2 === 1 ? "md:col-start-2" : "md:text-right"}
                >
                  <article className="card card-hover p-6">
                    <div
                      className={cn(
                        "flex flex-wrap items-center gap-2",
                        alignRight && "md:justify-end"
                      )}
                    >
                      <h3 className="h3">{item.institution}</h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-600/10 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wider text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                          Current
                        </span>
                      )}
                    </div>

                    <p
                      className={cn(
                        "mt-1.5 flex items-center gap-1.5 text-sm text-ink-500 dark:text-slate-500",
                        alignRight && "md:justify-end"
                      )}
                    >
                      <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                      {item.city}
                    </p>

                    <dl className="mt-4 space-y-1.5 text-sm">
                      <div className="flex flex-wrap gap-x-2">
                        <dt className="font-semibold text-ink-900 dark:text-slate-200">
                          {item.qualification}
                        </dt>
                        <dd className="text-ink-600 dark:text-slate-400">
                          — {item.stream}
                        </dd>
                      </div>
                    </dl>

                    <div
                      className={cn(
                        "mt-4 flex flex-wrap gap-2",
                        alignRight && "md:justify-end"
                      )}
                    >
                      <span className="chip font-semibold">{item.status}</span>
                      {item.score && (
                        <span className="chip border-brand-200 bg-brand-50 font-semibold text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-300">
                          Percentage: {item.score}
                        </span>
                      )}
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                      {item.description}
                    </p>
                  </article>
                </Reveal>
              </div>
            </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
