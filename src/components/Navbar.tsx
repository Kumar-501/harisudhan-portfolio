import { useEffect, useRef, useState } from "react";
import { Menu, X, Palette, Check, ArrowUpRight, Mail } from "lucide-react";
import { navLinks, profile, sectionIds } from "../data/portfolio";
import { themes, type ThemeId } from "../data/themes";
import { useActiveSection } from "../hooks/useActiveSection";
import { cn } from "../utils/cn";
import { LinkedInIcon } from "./ui/icons";

export function Navbar({
  themeId,
  onSelectTheme,
}: {
  themeId: ThemeId;
  onSelectTheme: (id: ThemeId) => void;
}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const active = useActiveSection(sectionIds);
  const dropRef = useRef<HTMLDivElement>(null);

  /* Hide the pill when scrolling down, reveal when scrolling up */
  useEffect(() => {
    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      setHidden(y > 140 && y > lastY);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close overlays on Escape */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDrawerOpen(false);
      setDropOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* Close the theme dropdown on outside click */
  useEffect(() => {
    if (!dropOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!dropRef.current?.contains(e.target as Node)) setDropOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [dropOpen]);

  /* Lock body scroll while the drawer is open */
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = drawerOpen ? "hidden" : previous;
    return () => {
      document.body.style.overflow = previous;
    };
  }, [drawerOpen]);

  const themeList = (
    <>
      {themes.map((t) => (
        <button
          key={t.id}
          type="button"
          onClick={() => {
            onSelectTheme(t.id);
            setDropOpen(false);
          }}
          aria-pressed={themeId === t.id}
          className={cn("drop-btn", themeId === t.id && "active")}
        >
          <span
            aria-hidden="true"
            className="h-3.5 w-3.5 shrink-0 rounded-full ring-1 ring-white/25"
            style={{ background: t.swatch }}
          />
          <span className="flex-1">{t.label}</span>
          {themeId === t.id && <Check className="h-3.5 w-3.5" aria-hidden="true" />}
        </button>
      ))}
    </>
  );

  return (
    <>
      <header className={cn("nav-wrapper", hidden && !drawerOpen && "hide")}>
        <div className="nav-glass">
          {/* Logo */}
          <a
            href="#home"
            className="flex shrink-0 flex-col"
            aria-label={`${profile.name} — back to top`}
          >
            <span className="font-display text-[1.1rem] font-extrabold leading-none tracking-[-0.5px] text-white">
              HARISUDHAN
            </span>
            <span
              className="mt-[3px] font-mono text-[0.5rem] font-bold tracking-[1.5px]"
              style={{ color: "var(--accent-400)" }}
            >
              ECE STUDENT
            </span>
          </a>

          {/* Desktop links */}
          <nav aria-label="Primary" className="mx-auto hidden lg:block">
            <ul className="flex items-center gap-0.5">
              {navLinks.map((link) => {
                const id = link.href.slice(1);
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      aria-current={active === id ? "page" : undefined}
                      className={cn("nav-item", active === id && "active")}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Actions */}
          <div className="ml-auto flex shrink-0 items-center gap-2">
            {/* Theme picker */}
            <div ref={dropRef} className="relative">
              <button
                type="button"
                onClick={() => setDropOpen((o) => !o)}
                aria-expanded={dropOpen}
                aria-haspopup="menu"
                aria-label="Change color theme"
                className="icon-btn"
              >
                <Palette className="h-[17px] w-[17px]" aria-hidden="true" />
              </button>
              {dropOpen && (
                <div role="menu" className="drop-menu animate-pop-in">
                  <p className="px-3 pb-1.5 pt-1 font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-white/40">
                    Theme
                  </p>
                  {themeList}
                </div>
              )}
            </div>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile (opens in a new tab)"
              className="icon-btn hidden sm:flex"
            >
              <LinkedInIcon className="h-[15px] w-[15px]" aria-hidden="true" />
            </a>

            <a
              href="#contact"
              className="hidden items-center gap-1.5 rounded-full px-4 py-2 text-[13px] font-bold text-white transition-transform duration-300 hover:scale-[1.03] lg:inline-flex"
              style={{ background: "var(--accent-600)" }}
            >
              Let&apos;s Connect
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={drawerOpen}
              className="icon-btn lg:hidden"
            >
              <Menu className="h-[18px] w-[18px]" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {drawerOpen && (
        <>
          <div
            className="animate-fade-in fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            className="animate-slide-in-right fixed inset-y-0 right-0 z-[61] flex w-4/5 max-w-[320px] flex-col overflow-y-auto p-6 lg:hidden"
            style={{ background: "var(--surface-1)" }}
          >
            <div className="mb-7 flex items-center justify-between">
              <span className="font-display text-base font-extrabold text-white">
                HARISUDHAN
              </span>
              <button
                type="button"
                onClick={() => setDrawerOpen(false)}
                aria-label="Close menu"
                className="icon-btn"
              >
                <X className="h-[18px] w-[18px]" aria-hidden="true" />
              </button>
            </div>

            <nav aria-label="Mobile">
              <ul className="flex flex-col">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setDrawerOpen(false)}
                      className="block border-b border-white/5 py-3 text-lg font-semibold text-white transition-all duration-200 hover:pl-1.5"
                      style={
                        active === link.href.slice(1)
                          ? { color: "var(--accent-400)" }
                          : undefined
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <a
              href="#contact"
              onClick={() => setDrawerOpen(false)}
              className="mt-6 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
              style={{ background: "var(--accent-600)" }}
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Let&apos;s Connect
            </a>

            {/* Theme list */}
            <div className="mt-auto pt-8">
              <p className="mb-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-white/40">
                Choose Theme
              </p>
              <div className="flex flex-col gap-1.5">{themeList}</div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
