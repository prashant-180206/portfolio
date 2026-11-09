import { cn } from "cn"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  description?: string
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 md:flex-row md:items-end md:justify-between",
        className,
      )}
    >
      <div className="max-w-2xl">
        <p className="label flex items-center gap-2">
          <span className="text-signal">[{index}]</span>
          {eyebrow}
        </p>
        <h2 className="display mt-4 text-balance text-[clamp(2.6rem,6vw,5.2rem)]">
          {title}
        </h2>
      </div>
      {description ? (
        <p className="max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground md:text-right">
          {description}
        </p>
      ) : null}
    </div>
  )
}
