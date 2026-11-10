import { ArrowUpRightIcon } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { SystemDiagram } from "@/components/system-diagram"
import { site } from "@/data/site"

const facts = [
  { label: "Based", value: `${site.location} · ${site.timezone}` },
  { label: "Focus", value: "Web · Mobile · AI" },
  { label: "On GitHub", value: `Since ${site.github.since}` },
  { label: "Status", value: "Open to internships" },
]

export function About() {
  return (
    <section id="about" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          index="02"
          eyebrow="About"
          title="Between the idea and the interface."
          description="A short version of how I work, what I'm learning, and where I want to go next."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="text-balance font-display text-3xl leading-[1.08] tracking-tight md:text-5xl">
                I like the moment a system stops being a pile of parts and starts
                being{" "}
                <span className="italic text-signal">obvious.</span>
              </p>
            </Reveal>

            <Reveal delay={80}>
              <div className="mt-8 flex max-w-xl flex-col gap-5 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  I&apos;m {site.firstName}, a computer science student based in{" "}
                  {site.location}. I learn by building: full-stack apps,
                  cross-platform clients, animation engines, and tools that
                  make a decision legible.
                </p>
                <p>{site.intro}</p>
                <p>
                  Away from the keyboard: long walks, side projects, and an
                  unreasonable number of browser tabs.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-border pt-6">
                {facts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="label">{fact.label}</dt>
                    <dd className="mt-1 text-sm font-medium">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>

            <Reveal delay={210}>
              <a
                href="#contact"
                className="group mt-8 inline-flex items-center gap-3 text-sm font-medium"
              >
                <span className="link-underline">Start a conversation</span>
                <span className="grid size-8 place-items-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground">
                  <ArrowUpRightIcon className="size-3.5" />
                </span>
              </a>
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <Reveal delay={100} distance={28}>
              <SystemDiagram />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
