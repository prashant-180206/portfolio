"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRightIcon } from "lucide-react"
import { animate, stagger } from "animejs"
import { cn } from "cn"

import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { filters, projects, type Project } from "@/data/site"

type Filter = (typeof filters)[number]

export function Work() {
  const [filter, setFilter] = useState<Filter>("All")
  const [selected, setSelected] = useState<Project | null>(null)
  const rowsRef = useRef<HTMLDivElement>(null)

  const visible =
    filter === "All"
      ? projects
      : projects.filter((project) => project.group === filter)

  useEffect(() => {
    const element = rowsRef.current
    if (!element) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const rows = element.querySelectorAll("[data-project-row]")
    const animation = animate(rows, {
      opacity: [0, 1],
      translateY: [14, 0],
      duration: 650,
      delay: stagger(55),
      ease: "outExpo",
    })

    return () => {
      animation.revert()
    }
  }, [filter])

  return (
    <section id="work" className="section-pad scroll-mt-20">
      <div className="shell">
        <SectionHeading
          index="01"
          eyebrow="Selected work"
          title="Things I've built, end to end."
          description="Eight selected projects from a public trail of fifteen — engines, interpreters, apps, and the occasional hardware experiment."
        />

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-b border-border pb-5 md:mt-14">
          <div
            className="flex flex-wrap items-center gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  filter === item
                    ? "border-foreground bg-foreground text-background"
                    : "border-border text-muted-foreground hover:border-foreground/30 hover:text-foreground",
                )}
              >
                {item}
              </button>
            ))}
          </div>
          <p className="label">
            {String(visible.length).padStart(2, "0")} /{" "}
            {String(projects.length).padStart(2, "0")} projects
          </p>
        </div>

        <div ref={rowsRef} className="border-b border-border">
          {visible.map((project) => (
            <button
              key={project.slug}
              type="button"
              data-project-row
              onClick={() => setSelected(project)}
              className="group relative grid w-full grid-cols-[2rem_1fr_auto] items-center gap-4 border-b border-border py-6 text-left transition-colors duration-300 last:border-b-0 hover:bg-primary/40 hover:text-background md:grid-cols-[3rem_1.25fr_1fr_auto] md:gap-6 md:py-8"
            >
              <span className="label text-signal">{project.index}</span>

              <span className="min-w-0">
                <span className="block truncate font-display text-3xl leading-none tracking-tight md:text-5xl">
                  {project.name}
                </span>
                <span className="mt-2 block max-w-lg text-pretty text-sm text-muted-foreground transition-colors group-hover:text-background/60">
                  {project.subtitle}
                </span>
              </span>

              <span className="hidden flex-wrap gap-1.5 md:flex">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted-foreground transition-colors group-hover:border-background/20 group-hover:text-background/70"
                  >
                    {tag}
                  </span>
                ))}
              </span>

              <span className="flex items-center gap-3 md:gap-6">
                <span className="font-mono text-[0.68rem] text-muted-foreground transition-colors group-hover:text-background/60">
                  {project.year}
                </span>
                <span className="grid size-9 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground md:size-11">
                  <ArrowUpRightIcon className="size-4" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Dialog
        open={Boolean(selected)}
        onOpenChange={(open) => {
          if (!open) setSelected(null)
        }}
      >
        <DialogContent className="max-h-[88svh] gap-0 overflow-y-auto p-0 sm:max-w-3xl">
          {selected ? (
            <>
              <div className="border-b border-border bg-muted/40 p-6 md:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="label">
                    Project {selected.index} / {selected.year}
                  </p>
                  <Badge variant="outline">{selected.group}</Badge>
                </div>
                <DialogHeader className="mt-6 gap-3">
                  <DialogTitle className="display text-4xl md:text-6xl">
                    {selected.name}
                  </DialogTitle>
                  <DialogDescription className="max-w-2xl text-sm leading-relaxed">
                    {selected.subtitle}
                  </DialogDescription>
                </DialogHeader>
              </div>

              <div className="grid gap-8 p-6 md:grid-cols-[1.4fr_0.6fr] md:p-8">
                <div>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {selected.description}
                  </p>

                  <h3 className="label mt-8">What I built</h3>
                  <ul className="mt-4 flex flex-col gap-3">
                    {selected.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-6">
                  <div>
                    <h3 className="label">Stack</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {selected.stack.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="label">At a glance</h3>
                    <dl className="mt-3 divide-y divide-border border-y border-border text-sm">
                      {selected.facts.map((fact) => (
                        <div
                          key={fact.label}
                          className="flex justify-between gap-4 py-2.5"
                        >
                          <dt className="text-muted-foreground">{fact.label}</dt>
                          <dd className="text-right font-medium">{fact.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex flex-col gap-2">
                    {selected.links.map((link) => (
                      <Button
                        key={link.href}
                        variant="outline"
                        className="justify-between rounded-full"
                        render={
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        nativeButton={false}
                      >
                        {link.label}
                        <ArrowUpRightIcon />
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  )
}
