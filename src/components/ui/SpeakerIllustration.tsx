import { Bluetooth, BatteryCharging, Microchip, Speaker } from "lucide-react";

/**
 * Conceptual illustration for the Bluetooth Speaker Conversion project.
 * Shows component roles and signal flow — deliberately not an exact schematic.
 */
export function SpeakerIllustration({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 428"
      role="img"
      aria-labelledby="illus-title illus-desc"
      className={className}
    >
      <title id="illus-title">Bluetooth speaker conversion diagram</title>
      <desc id="illus-desc">
        A conceptual block diagram showing an audio source sending a wireless
        Bluetooth signal to a Bluetooth audio amplifier module, which is powered
        by a power supply and drives an existing speaker.
      </desc>

      <defs>
        <marker
          id="illus-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M0 0 L10 5 L0 10 z" className="fill-brand-600 dark:fill-brand-400" />
        </marker>
      </defs>

      {/* Panel */}
      <rect
        x="8"
        y="8"
        width="584"
        height="412"
        rx="24"
        className="fill-slate-50 stroke-slate-200 dark:fill-navy-900/70 dark:stroke-slate-700"
        strokeWidth="1.5"
      />
      <rect
        x="20"
        y="20"
        width="560"
        height="388"
        rx="18"
        className="fill-brand-500/[0.04] dark:fill-brand-400/[0.05]"
      />

      {/* Wireless signal arcs (source -> amplifier) */}
      <g
        className="stroke-brand-500 dark:stroke-brand-400"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M178 205 A14 14 0 0 1 206 205" opacity="0.9" />
        <path d="M171 205 A21 21 0 0 1 213 205" opacity="0.6" />
        <path d="M164 205 A28 28 0 0 1 220 205" opacity="0.35" />
      </g>
      <circle cx="192" cy="205" r="3.5" className="fill-brand-600 dark:fill-brand-400" />

      {/* Connection: source -> amplifier (wireless) */}
      <line
        x1="162"
        y1="205"
        x2="222"
        y2="205"
        strokeWidth="2"
        strokeDasharray="6 5"
        className="stroke-brand-600/80 dark:stroke-brand-400/80"
        markerEnd="url(#illus-arrow)"
      />

      {/* Connection: amplifier -> speaker (amplified audio) */}
      <line
        x1="402"
        y1="205"
        x2="452"
        y2="205"
        strokeWidth="2.5"
        className="stroke-brand-600 dark:stroke-brand-400"
        markerEnd="url(#illus-arrow)"
      />

      {/* Connection: power -> amplifier */}
      <line
        x1="312"
        y1="343"
        x2="312"
        y2="324"
        strokeWidth="2"
        strokeDasharray="5 4"
        className="stroke-ink-500/70 dark:stroke-slate-400/70"
        markerEnd="url(#illus-arrow)"
      />

      {/* Node dots */}
      <g className="fill-brand-600 dark:fill-brand-400">
        <circle cx="162" cy="205" r="3.5" />
        <circle cx="402" cy="205" r="3.5" />
        <circle cx="312" cy="343" r="3.5" />
        <circle cx="312" cy="322" r="3.5" />
      </g>

      {/* Source block */}
      <g>
        <rect
          x="40"
          y="140"
          width="120"
          height="130"
          rx="14"
          className="fill-white stroke-slate-200 dark:fill-navy-800 dark:stroke-slate-600"
          strokeWidth="1.5"
        />
        <Bluetooth
          x={80}
          y={166}
          width={40}
          height={40}
          strokeWidth={1.6}
          className="stroke-brand-600 dark:stroke-brand-400"
        />
        <text
          x="100"
          y="230"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          className="fill-ink-900 dark:fill-white"
        >
          Audio Source
        </text>
        <text
          x="100"
          y="248"
          textAnchor="middle"
          fontSize="10.5"
          className="fill-ink-600 dark:fill-slate-400"
        >
          Phone / Laptop
        </text>
      </g>

      {/* Amplifier module block */}
      <g>
        <rect
          x="225"
          y="90"
          width="175"
          height="230"
          rx="16"
          className="fill-white stroke-brand-500/60 dark:fill-navy-800 dark:stroke-brand-400/50"
          strokeWidth="2"
        />
        {/* Pins */}
        <g className="fill-brand-500/70 dark:fill-brand-400/70">
          {[110, 148, 186, 224, 262].map((y) => (
            <rect key={`l${y}`} x="218" y={y} width="7" height="16" rx="2" />
          ))}
          {[110, 148, 186, 224, 262].map((y) => (
            <rect key={`r${y}`} x="400" y={y} width="7" height="16" rx="2" />
          ))}
        </g>
        <Microchip
          x={286}
          y={128}
          width={52}
          height={52}
          strokeWidth={1.5}
          className="stroke-brand-600 dark:stroke-brand-400"
        />
        <text
          x="312"
          y="208"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          className="fill-ink-900 dark:fill-white"
        >
          Bluetooth Audio
        </text>
        <text
          x="312"
          y="224"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          className="fill-ink-900 dark:fill-white"
        >
          Amplifier Module
        </text>
        <text
          x="312"
          y="244"
          textAnchor="middle"
          fontSize="10.5"
          className="fill-ink-600 dark:fill-slate-400"
        >
          Receives wireless audio and
        </text>
        <text
          x="312"
          y="259"
          textAnchor="middle"
          fontSize="10.5"
          className="fill-ink-600 dark:fill-slate-400"
        >
          amplifies it for the speaker
        </text>
        <rect
          x="288"
          y="276"
          width="48"
          height="22"
          rx="7"
          className="fill-brand-50 stroke-brand-500/50 dark:fill-brand-500/15 dark:stroke-brand-400/40"
          strokeWidth="1.2"
        />
        <text
          x="312"
          y="291"
          textAnchor="middle"
          fontSize="10.5"
          fontWeight="700"
          className="fill-brand-700 dark:fill-brand-300"
        >
          AMP
        </text>
      </g>

      {/* Speaker block */}
      <g>
        <rect
          x="455"
          y="140"
          width="105"
          height="130"
          rx="14"
          className="fill-white stroke-slate-200 dark:fill-navy-800 dark:stroke-slate-600"
          strokeWidth="1.5"
        />
        <Speaker
          x={484}
          y={164}
          width={42}
          height={42}
          strokeWidth={1.6}
          className="stroke-brand-600 dark:stroke-brand-400"
        />
        <g
          className="stroke-brand-500 dark:stroke-brand-400"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
        >
          <path d="M536 180 A9 9 0 0 1 536 194" opacity="0.9" />
          <path d="M543 174 A16 16 0 0 1 543 200" opacity="0.55" />
        </g>
        <text
          x="507"
          y="230"
          textAnchor="middle"
          fontSize="12"
          fontWeight="700"
          className="fill-ink-900 dark:fill-white"
        >
          Speaker
        </text>
        <text
          x="507"
          y="248"
          textAnchor="middle"
          fontSize="10.5"
          className="fill-ink-600 dark:fill-slate-400"
        >
          Existing driver
        </text>
      </g>

      {/* Power block */}
      <g>
        <rect
          x="225"
          y="345"
          width="175"
          height="50"
          rx="12"
          className="fill-white stroke-slate-200 dark:fill-navy-800 dark:stroke-slate-600"
          strokeWidth="1.5"
        />
        <BatteryCharging
          x={241}
          y={357}
          width={26}
          height={26}
          strokeWidth={1.6}
          className="stroke-ink-700 dark:stroke-slate-300"
        />
        <text
          x="278"
          y="376"
          fontSize="12"
          fontWeight="700"
          className="fill-ink-900 dark:fill-white"
        >
          Power Supply
        </text>
      </g>

      {/* Flow labels */}
      <text
        x="192"
        y="148"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="600"
        className="fill-brand-700 dark:fill-brand-300"
      >
        Wireless audio signal
      </text>
      <text
        x="427"
        y="148"
        textAnchor="middle"
        fontSize="10.5"
        fontWeight="600"
        className="fill-brand-700 dark:fill-brand-300"
      >
        Amplified audio
      </text>
      <text
        x="324"
        y="338"
        fontSize="10.5"
        fontWeight="600"
        className="fill-ink-600 dark:fill-slate-400"
      >
        Power
      </text>

      {/* Caption */}
      <text
        x="300"
        y="412"
        textAnchor="middle"
        fontSize="10"
        className="fill-ink-500 dark:fill-slate-500"
      >
        Conceptual diagram — component roles, not an exact schematic
      </text>
    </svg>
  );
}
