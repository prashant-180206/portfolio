import { cn } from "cn"

type MarqueeProps = {
  items: string[]
  reverse?: boolean
  className?: string
}

export function Marquee({ items, reverse = false, className }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div
      className={cn(
        "marquee relative flex overflow-hidden border-y border-border bg-background py-3.5",
        className,
      )}
      aria-hidden="true"
    >
      <div className={reverse ? "marquee-track-reverse" : "marquee-track"}>
        {loop.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-5 px-5 font-mono text-[0.66rem] uppercase tracking-[0.2em] text-muted-foreground"
          >
            {item}
            <span className="size-1 rounded-full bg-signal" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
