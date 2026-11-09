import { ArrowUpRightIcon } from "lucide-react"

import { AsteriskMark } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { practice, site } from "@/data/site"

export function Practice() {
  return (
    <section id="practice" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Practice"
          title="A short trail of making."
          description="Not a résumé — a record of the questions that kept me at the keyboard. Each entry is a system I finished, or a skill I earned the hard way."
        />

        <div role="list" className="mt-12 border-t border-border">
          {practice.map((entry, index) => (
            <div
              key={`${entry.year}-${entry.title}`}
              role="listitem"
              className="group border-b border-border transition-colors duration-300 hover:bg-muted/40"
            >
              <Reveal delay={index * 60}>
                <div className="grid gap-4 py-7 md:grid-cols-[9rem_1fr_auto] md:items-baseline md:gap-10 md:px-3 md:py-9">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs tabular-nums text-signal">
                      {entry.year}
                    </span>
                    <span className="label">{entry.meta}</span>
                  </div>

                  <div>
                    <h3 className="display text-3xl tracking-tight md:text-4xl">
                      {entry.title}
                    </h3>
                    <p className="mt-2 max-w-xl text-pretty text-sm leading-relaxed text-muted-foreground">
                      {entry.text}
                    </p>
                  </div>

                  <AsteriskMark className="hidden size-5 text-border transition-all duration-500 group-hover:rotate-90 group-hover:text-signal md:block" />
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-muted-foreground">
              The next entry is the one I&apos;m working on now. If you want the
              commit-level version, the repositories are public.
            </p>
            <a
              href={site.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium"
            >
              <span className="link-underline">
                Follow the trail on GitHub
              </span>
              <span className="grid size-8 place-items-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground">
                <ArrowUpRightIcon className="size-3.5" />
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
