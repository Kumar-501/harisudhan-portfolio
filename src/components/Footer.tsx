import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, profile } from "../data/portfolio";
import { LinkedInIcon } from "./ui/icons";

const socialLinks = [
  {
    label: "LinkedIn",
    href: profile.linkedinUrl,
    icon: LinkedInIcon,
    external: true,
  },
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
];

const contactItems = [
  {
    icon: Mail,
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    value: profile.phone,
    href: profile.phoneHref,
  },
  {
    icon: MapPin,
    value: profile.locationShort,
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-slate-50 dark:border-slate-700/60 dark:bg-navy-900/60">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="group flex items-center gap-2.5">
              <span
                aria-hidden="true"
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 font-display text-sm font-bold text-white shadow-md shadow-brand-600/30 transition-transform group-hover:scale-105"
              >
                HA
              </span>

              <span className="font-display text-base font-bold tracking-[0.18em] text-ink-900 dark:text-white">
                HARISUDHAN
              </span>
            </a>

            <p className="mt-4 text-sm font-medium text-ink-700 dark:text-slate-300">
              {profile.name}
            </p>

            <p className="text-sm text-ink-500 dark:text-slate-500">
              ECE Student | Technology Enthusiast
            </p>

            <ul className="mt-5 flex gap-2">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.external
                      ? {
                          target: "_blank",
                          rel: "noopener noreferrer",
                        }
                      : {})}
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-ink-600 transition-colors hover:border-brand-400 hover:text-brand-700 dark:border-slate-700 dark:bg-navy-800 dark:text-slate-300 dark:hover:border-brand-400 dark:hover:text-brand-300"
                  >
                    <social.icon
                      className="h-[18px] w-[18px]"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer">
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-500 dark:text-slate-500">
              Navigate
            </h2>

            <ul className="mt-4 space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-500 dark:text-slate-500">
              Contact
            </h2>

            <ul className="mt-4 space-y-3">
              {contactItems.map((item) => (
                <li key={item.value}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="flex items-start gap-2.5 text-sm text-ink-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
                    >
                      <item.icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
                        aria-hidden="true"
                      />

                      {item.value}
                    </a>
                  ) : (
                    <span className="flex items-start gap-2.5 text-sm text-ink-600 dark:text-slate-400">
                      <item.icon
                        className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400"
                        aria-hidden="true"
                      />

                      {item.value}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* LinkedIn card */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-ink-500 dark:text-slate-500">
              Connect
            </h2>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card card-hover mt-4 flex items-center gap-3 p-4"
            >
              <span
                aria-hidden="true"
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A66C2]/10 text-[#0A66C2]"
              >
                <LinkedInIcon className="h-5 w-5" />
              </span>

              <span>
                <span className="block text-sm font-semibold text-ink-900 dark:text-white">
                  LinkedIn
                </span>

                <span className="block text-xs text-ink-500 dark:text-slate-500">
                  {profile.linkedin}
                </span>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 sm:flex-row dark:border-slate-700/60">
          {/* Copyright */}
          <p className="text-xs text-ink-500 dark:text-slate-500">
            © 2026 {profile.name}. All rights reserved.
          </p>

          {/* Designed & Developed By */}
          <p className="text-xs text-ink-500 dark:text-slate-500">
            Designed &amp; Developed by{" "}
            <a
              href="https://kumaravelan-portfolio.web.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-600 transition-colors hover:text-brand-700 hover:underline dark:text-brand-400 dark:hover:text-brand-300"
            >
              Kumaravelan
            </a>
          </p>

          {/* Back to top */}
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-600 transition-colors hover:text-brand-700 dark:text-slate-400 dark:hover:text-brand-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}