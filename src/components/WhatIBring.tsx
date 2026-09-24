import { Compass } from "lucide-react";
import { strengths } from "../data/portfolio";
import { Reveal } from "./ui/Reveal";
import { SectionHeading } from "./ui/SectionHeading";

export function WhatIBring() {
  return (
    <section id="about-me" aria-labelledby="bring-title" className="section bg-slate-50/80 dark:bg-navy-900/40">
      <div className="container-x">
        <SectionHeading
          eyebrow="Student Profile"
          title="What I bring"
          subtitle="The strengths I'm developing as a first-year engineering student — built through coursework, projects and collaboration."
          titleId="bring-title"
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {strengths.map((strength, i) => (
            <Reveal
              key={strength.title}
              delay={i * 80}
              as="li"
              className="card card-hover group h-full p-6"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-600/10 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-500/15 dark:text-brand-400"
              >
                <strength.icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="h3 mt-4">{strength.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-slate-400">
                {strength.description}
              </p>
            </Reveal>
          ))}

          {/* Filler card keeps the grid balanced */}
          <Reveal
            delay={strengths.length * 80}
            as="li"
            className="flex h-full flex-col justify-center rounded-2xl border border-dashed border-brand-300 bg-brand-50/50 p-6 text-center dark:border-brand-500/30 dark:bg-brand-500/5"
          >
            <Compass
              className="mx-auto h-8 w-8 text-brand-600 dark:text-brand-400"
              aria-hidden="true"
            />
            <p className="mt-3 font-display text-base font-bold text-ink-900 dark:text-white">
              Always learning, always building
            </p>
            <p className="mt-2 text-sm text-ink-600 dark:text-slate-400">
              Focused on growing my skills through coursework, projects and
              real-world practice.
            </p>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
