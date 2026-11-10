const sources = [
  { label: "editor", meta: "js-like source" },
  { label: "core", meta: "lexer · parser · ast" },
  { label: "runtime", meta: "frames · scopes · timeline" },
]

export function SystemDiagram() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="label">Fig. 01 — AlgoVis pipeline</span>
        <span className="label flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-signal animate-pulse-soft" />
          working model
        </span>
      </div>

      <div className="relative px-3 pt-3 sm:px-5">
        <div
          className="scan-line pointer-events-none absolute inset-x-5 top-0 h-px bg-linear-to-r from-transparent via-signal to-transparent"
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 520 340"
          className="w-full"
          role="img"
          aria-label="Source code, parser, and runtime state flow into the AlgoVis TypeScript interpreter, which renders a scene with PixiJS."
        >
          <defs>
            <pattern
              id="diagram-dots"
              width="18"
              height="18"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" className="fill-border" />
            </pattern>
            <marker
              id="diagram-arrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="5"
              markerHeight="5"
              orient="auto-start-reverse"
            >
              <path d="M 0 0 L 10 5 L 0 10 z" className="fill-signal" />
            </marker>
          </defs>

          <rect width="520" height="340" fill="url(#diagram-dots)" />

          <text
            x="18"
            y="28"
            className="fill-muted-foreground font-mono text-[9px] tracking-[0.18em]"
          >
            INPUTS
          </text>
          <text
            x="238"
            y="112"
            className="fill-muted-foreground font-mono text-[9px] tracking-[0.18em]"
          >
            EXECUTE
          </text>
          <text
            x="430"
            y="124"
            className="fill-muted-foreground font-mono text-[9px] tracking-[0.18em]"
          >
            RENDER
          </text>

          {sources.map((source, index) => {
            const top = 56 + index * 92
            return (
              <g key={source.label}>
                <rect
                  x="18"
                  y={top}
                  width="132"
                  height="56"
                  rx="9"
                  className="fill-background stroke-border"
                  strokeWidth="1"
                />
                <text
                  x="32"
                  y={top + 24}
                  className="fill-foreground font-mono text-[11px]"
                >
                  {source.label}
                </text>
                <text
                  x="32"
                  y={top + 40}
                  className="fill-muted-foreground font-mono text-[8px]"
                >
                  {source.meta}
                </text>
                <path
                  d={`M150 ${top + 28} C 194 ${top + 28}, 198 170, 234 170`}
                  className="fill-none stroke-border"
                  strokeWidth="1.25"
                  strokeDasharray="4 5"
                />
              </g>
            )
          })}

          <circle
            cx="298"
            cy="170"
            r="62"
            className="fill-none stroke-signal/40"
            strokeWidth="1"
            strokeDasharray="2 7"
          />

          <rect
            x="240"
            y="132"
            width="116"
            height="76"
            rx="11"
            className="fill-foreground"
          />
          <text
            x="258"
            y="162"
            className="fill-background font-mono text-[12px] tracking-[0.06em]"
          >
            ALGOVIS
          </text>
          <text
            x="258"
            y="180"
            className="fill-background/60 font-mono text-[8px]"
          >
            ts interpreter
          </text>
          <circle cx="340" cy="146" r="3" className="fill-signal" />

          <path
            d="M356 170 H 420"
            className="fill-none stroke-signal"
            strokeWidth="1.5"
            strokeDasharray="6 6"
            markerEnd="url(#diagram-arrow)"
            style={{ animation: "dash-flow 4.5s linear infinite" }}
          />

          <rect
            x="426"
            y="138"
            width="76"
            height="64"
            rx="9"
            className="fill-signal"
          />
          <text
            x="441"
            y="164"
            className="fill-signal-foreground font-mono text-[10px]"
          >
            PIXIJS
          </text>
          <text
            x="441"
            y="180"
            className="fill-signal-foreground/70 font-mono text-[8px]"
          >
            canvas scene
          </text>

          <text
            x="18"
            y="326"
            className="fill-muted-foreground font-mono text-[8px] tracking-[0.12em]"
          >
            BROWSER · DESKTOP
          </text>
          <text
            x="502"
            y="326"
            textAnchor="end"
            className="fill-muted-foreground font-mono text-[8px] tracking-[0.12em]"
          >
            2026
          </text>
        </svg>
      </div>

      <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
        {[
          { value: "03", label: "pipeline inputs" },
          { value: "01", label: "interpreter" },
          { value: "01", label: "renderer" },
        ].map((item) => (
          <div key={item.label} className="bg-card px-4 py-3">
            <div className="font-display text-2xl leading-none tracking-tight">
              {item.value}
            </div>
            <div className="label mt-1.5 text-[0.58rem]">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="border-t border-border bg-background px-5 py-3 font-mono text-[0.65rem] leading-relaxed text-muted-foreground">
        <span className="text-signal">$</span> pnpm dev
        <br />
        <span className="text-signal">✓</span> lexed · parsed · executed
        <span className="ml-1 text-signal">→</span> snapshots projected
        <span className="ml-0.5 inline-block h-3 w-1.5 translate-y-0.5 bg-signal animate-blink" />
      </div>
    </div>
  )
}
