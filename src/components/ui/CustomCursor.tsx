import { useEffect, useRef, useState } from "react";

const INTERACTIVE = 'a, button, input, textarea, select, [role="button"]';

/**
 * Glowing dot + trailing ring cursor, matching the reference portfolio.
 * Automatically disabled on touch devices and for reduced-motion users.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    let dotX = window.innerWidth / 2;
    let dotY = window.innerHeight / 2;
    let ringX = dotX;
    let ringY = dotY;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as Element | null;
      const hit = !!target?.closest?.(INTERACTIVE);
      ringRef.current?.classList.toggle("cursor-hover", hit);
      dotRef.current?.classList.toggle("cursor-dot-hover", hit);
    };

    const render = () => {
      // Ring eases toward the pointer for a subtle trailing effect
      ringX += (dotX - ringX) * 0.18;
      ringY += (dotY - ringY) * 0.18;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotX}px, ${dotY}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      frame = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    frame = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
