import { AsteriskMark } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { stackGroups } from "@/data/site"

export function Stack() {
  return (
    <section id="stack" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          index="03"
          eyebrow="Toolkit"
          title="The tools I reach for."
          description="A working set, not a wish list. Each one has earned a place in a project I've shipped."
        />

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
          {stackGroups.map((group, index) => (
            <Reveal
              key={group.id}
              delay={index * 70}
              className="h-full"
            >
              <div className="group flex h-full flex-col bg-background p-6 transition-colors duration-300 hover:bg-card md:p-8">
                <div className="flex items-center justify-between">
                  <span className="label text-signal">{group.index}</span>
                  <AsteriskMark className="size-4 text-border transition-colors group-hover:text-signal" />
                </div>
                <h3 className="display mt-8 text-4xl">{group.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {group.blurb}
                </p>
                <ul className="mt-8 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item}>
                      <Badge
                        variant="outline"
                        className="h-7 rounded-full px-3 text-xs transition-colors hover:border-signal hover:text-signal"
                      >
                        {item}
                      </Badge>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-6 flex flex-col justify-between gap-3 rounded-2xl border border-dashed border-border px-5 py-4 sm:flex-row sm:items-center">
            <p className="label flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-signal animate-pulse-soft" />
              Currently learning
            </p>
            <p className="text-sm text-muted-foreground">
              Rust · 3D scenes · design engineering
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
