import { ArrowRight, Mail } from "lucide-react";
import { Reveal } from "./ui/Reveal";

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="section pb-0">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-navy-900 px-6 py-16 text-center sm:px-12">
            {/* Decorative layers */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-60 [mask-image:radial-gradient(65%_65%_at_50%_40%,black,transparent)]" />
              <div className="absolute -bottom-24 left-1/2 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
            </div>

            <div className="relative">
              <p className="eyebrow justify-center text-brand-400">
                <span aria-hidden="true" className="h-px w-6 bg-brand-400" />
                Let&apos;s Connect
              </p>
              <h2 id="cta-title" className="h2 mt-4 text-white">
                Let&apos;s Build Something
              </h2>
              <p className="lead mx-auto mt-4 max-w-xl text-slate-400">
                I&apos;m currently focused on learning, building practical
                projects, and growing as an ECE student.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a href="#projects" className="btn btn-primary w-full sm:w-auto">
                  View My Project
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  className="btn w-full border border-slate-600 bg-transparent text-slate-200 hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-300 sm:w-auto"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
