import { stats } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";

export function Stats() {
  return (
    <section aria-label="Quick statistics" className="relative -mt-px border-y border-slate-200 bg-white py-12 dark:border-slate-700/60 dark:bg-navy-950">
      <div className="container-x">
        <dl className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90}>
              <div className="card card-hover group h-full p-5 text-center sm:p-6">
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-400"
                >
                  <stat.icon className="h-5 w-5" />
                </span>
                <dd className="mt-4 font-display text-2xl font-bold text-ink-900 sm:text-3xl dark:text-white">
                  {stat.value}
                </dd>
                <dt className="mt-1 text-sm font-medium text-ink-600 dark:text-slate-400">
                  {stat.label}
                </dt>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
