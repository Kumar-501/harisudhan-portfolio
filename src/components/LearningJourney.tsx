import { learningJourney } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";

export function LearningJourney() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-title"
      className="section relative overflow-hidden bg-navy-900"
    >
      {/* Decorative glow + dots */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="bg-dots absolute inset-0 opacity-40 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]" />
        <div className="absolute top-1/2 left-1/2 h-72 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/10 blur-3xl" />
      </div>

      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center text-brand-400">
            <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
            My Learning Journey
          </p>
          <h2
            id="journey-title"
            className="h2 mt-4 text-white"
          >
            Where I am today, and where I&apos;m heading
          </h2>
          <p className="lead mt-4 text-slate-400">
            A first-year student building steadily — one concept, one project and
            one skill at a time.
          </p>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
          {/* Rail: vertical on mobile, horizontal from md up */}
          <span
            aria-hidden="true"
            className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-brand-400/70 via-brand-400/25 to-transparent md:left-0 md:right-0 md:top-7 md:bottom-auto md:h-px md:w-auto md:bg-gradient-to-r"
          />

          {learningJourney.map((step, i) => (
            <li key={step.id} className="relative pl-24 md:pl-0 md:pt-24">
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-2xl border border-brand-400/40 bg-navy-800 text-brand-400 shadow-lg shadow-brand-950/40"
              >
                <step.icon className="h-6 w-6" />
              </span>

              <Reveal delay={i * 120}>
                <article className="h-full rounded-2xl border border-slate-700/70 bg-navy-800/70 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50">
                  <div className="flex items-center gap-2">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-400">
                      {step.period}
                    </p>
                    {step.badge && (
                      <span className="rounded-full bg-brand-500/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-300">
                        {step.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">
                    {step.description}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
