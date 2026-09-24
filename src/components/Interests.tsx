import { interests } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function Interests() {
  return (
    <section id="interests" aria-labelledby="interests-title" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Interests"
          title="What I'm interested in"
          subtitle="The areas of technology and engineering that keep me curious and learning."
          titleId="interests-title"
        />

        <ul className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {interests.map((interest, i) => (
            <Reveal
              key={interest.title}
              delay={i * 70}
              as="li"
              className="card card-hover group h-full p-5"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/10 dark:text-brand-400"
              >
                <interest.icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-ink-900 dark:text-white">
                {interest.title}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                {interest.description}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
