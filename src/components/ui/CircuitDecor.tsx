/**
 * Subtle circuit-board style decoration used behind the hero portrait.
 * Purely decorative — hidden from assistive technology.
 */
export function CircuitDecor({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 480"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      {/* Traces */}
      <g
        className="stroke-brand-500/35 dark:stroke-brand-400/40"
        strokeWidth="1.5"
        strokeLinecap="round"
      >
        <path className="circuit-line" d="M40 120 H150 V210 H240" />
        <path className="circuit-line" d="M440 90 H330 V180 H260" style={{ animationDelay: "-4s" }} />
        <path className="circuit-line" d="M60 380 H170 V300 H250" style={{ animationDelay: "-8s" }} />
        <path className="circuit-line" d="M430 400 H340 V320 H250" style={{ animationDelay: "-12s" }} />
        <path className="circuit-line" d="M240 240 V150 M240 240 V340" style={{ animationDelay: "-6s" }} />
      </g>

      {/* Chip packages */}
      <g className="fill-brand-500/10 stroke-brand-500/40 dark:fill-brand-400/10" strokeWidth="1.5">
        <rect x="150" y="86" width="52" height="34" rx="5" />
        <rect x="278" y="150" width="52" height="34" rx="5" />
        <rect x="150" y="266" width="52" height="34" rx="5" />
        <rect x="278" y="326" width="52" height="34" rx="5" />
      </g>

      {/* Pins on chips */}
      <g className="stroke-brand-500/40 dark:stroke-brand-400/50" strokeWidth="2" strokeLinecap="round">
        <path d="M160 86 V78 M176 86 V78 M192 86 V78 M160 120 V128 M176 120 V128 M192 120 V128" />
        <path d="M288 150 V142 M304 150 V142 M320 150 V142 M288 184 V192 M304 184 V192 M320 184 V192" />
      </g>

      {/* Nodes */}
      <g className="fill-brand-500 dark:fill-brand-400">
        <circle className="circuit-node" cx="40" cy="120" r="4" />
        <circle className="circuit-node" cx="440" cy="90" r="4" style={{ animationDelay: "-1.2s" }} />
        <circle className="circuit-node" cx="60" cy="380" r="4" style={{ animationDelay: "-2.1s" }} />
        <circle className="circuit-node" cx="430" cy="400" r="4" style={{ animationDelay: "-0.6s" }} />
        <circle className="circuit-node" cx="240" cy="240" r="6" style={{ animationDelay: "-1.8s" }} />
      </g>

      {/* Concentric signal rings around the centre node */}
      <g
        className="stroke-brand-500/30 dark:stroke-brand-400/30"
        strokeWidth="1.2"
      >
        <circle cx="240" cy="240" r="26" />
        <circle cx="240" cy="240" r="42" strokeDasharray="4 6" />
        <circle cx="240" cy="240" r="60" strokeDasharray="2 8" />
      </g>
    </svg>
  );
}
