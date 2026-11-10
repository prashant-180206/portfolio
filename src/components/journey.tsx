import Link from "next/link"
import { ArrowUpRightIcon } from "lucide-react"

import { AsteriskMark } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { journey, site } from "@/data/site"

export function Journey() {
  return (
    <section id="journey" className="section-pad scroll-mt-20 border-t border-border">
      <div className="shell">
        <SectionHeading
          index="05"
          eyebrow="Journey"
          title="A year-by-year trail."
          description="The projects I built, in order, and what each one taught me. Less a résumé, more the sequence behind the skills."
        />

        <div role="list" className="mt-12 border-t border-border">
          {journey.map((entry, index) => (
            <div
              key={entry.year}
              role="listitem"
              className="group border-b border-border transition-colors duration-300 hover:bg-muted/40"
            >
              <Reveal delay={index * 70}>
                <div className="grid gap-8 py-9 md:grid-cols-12 md:gap-10 md:px-3 md:py-12">
                  <div className="md:col-span-4 lg:col-span-3">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-sm tabular-nums text-signal">
                        {entry.year}
                      </span>
                      <span className="label">{entry.meta}</span>
                    </div>
                    <h3 className="display mt-4 text-3xl tracking-tight md:text-4xl">
                      {entry.title}
                    </h3>
                    <p className="mt-3 max-w-sm text-pretty text-sm leading-relaxed text-muted-foreground">
                      {entry.summary}
                    </p>
                  </div>

                  <div className="md:col-span-4 lg:col-span-4">
                    <p className="label flex items-center gap-2">
                      <AsteriskMark className="size-3 text-signal" />
                      Projects
                    </p>
                    {entry.projects.length > 0 ? (
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {entry.projects.map((project) => {
                          const className =
                            "group/chip inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                          const icon = (
                            <ArrowUpRightIcon className="size-3 transition-transform duration-300 group-hover/chip:-translate-y-0.5 group-hover/chip:translate-x-0.5" />
                          )

                          return (
                            <li key={project.href}>
                              {project.href.startsWith("/") ? (
                                <Link href={project.href} className={className}>
                                  {project.label}
                                  {icon}
                                </Link>
                              ) : (
                                <a
                                  href={project.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={className}
                                >
                                  {project.label}
                                  {icon}
                                </a>
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    ) : (
                      <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
                        The account starts here — coursework and small
                        experiments, kept in the open.
                      </p>
                    )}
                  </div>

                  <div className="md:col-span-4 lg:col-span-5">
                    <p className="label flex items-center gap-2">
                      <AsteriskMark className="size-3 text-signal" />
                      What I learned
                    </p>
                    <ul className="mt-4 flex flex-col gap-2.5">
                      {entry.learnings.map((learning) => (
                        <li
                          key={learning}
                          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                          <span>{learning}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm text-muted-foreground">
              The next year is the one I&apos;m working on now. If you want the
              commit-level version, the repositories are public.
            </p>
            <a
              href={site.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex shrink-0 items-center gap-3 text-sm font-medium"
            >
              <span className="link-underline">Follow the trail on GitHub</span>
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
