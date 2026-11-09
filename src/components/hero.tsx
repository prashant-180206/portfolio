"use client"

import { useEffect, useRef } from "react"
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  MousePointer2Icon,
} from "lucide-react"
import { createTimeline, stagger } from "animejs"

import { AsteriskMark, GithubMark } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { site, stats } from "@/data/site"

const heroStats = [
  ...stats,
  {
    value: site.github.primaryLanguageShort,
    label: "primary language",
  },
]

export function Hero() {
  const root = useRef<HTMLElement>(null)

  useEffect(() => {
    const element = root.current
    if (!element) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReduced) {
      element
        .querySelectorAll<HTMLElement>(
          "[data-hero-line], [data-hero-fade], [data-hero-stat]",
        )
        .forEach((node) => {
          node.style.opacity = "1"
          node.style.transform = "none"
        })
      return
    }

    const timeline = createTimeline({ defaults: { ease: "outExpo" } })

    timeline
      .add(
        element.querySelectorAll("[data-hero-line]"),
        {
          translateY: ["112%", "0%"],
          opacity: [0, 1],
          duration: 1200,
          delay: stagger(110),
        },
        80,
      )
      .add(
        element.querySelectorAll("[data-hero-fade]"),
        {
          opacity: [0, 1],
          translateY: [18, 0],
          duration: 900,
          delay: stagger(80),
        },
        480,
      )
      .add(
        element.querySelectorAll("[data-hero-stat]"),
        {
          opacity: [0, 1],
          translateY: [14, 0],
          duration: 800,
          delay: stagger(60),
        },
        720,
      )

    return () => {
      timeline.revert()
    }
  }, [])

  function handlePointerMove(event: React.PointerEvent<HTMLElement>) {
    if (event.pointerType !== "mouse") return
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty("--mx", `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty("--my", `${event.clientY - rect.top}px`)
  }

  return (
    <section
      id="top"
      ref={root}
      onPointerMove={handlePointerMove}
      className="hero grain relative flex min-h-[100svh] flex-col overflow-hidden pt-16"
    >
      <div className="grid-field pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="hero-spotlight pointer-events-none absolute inset-0 opacity-80 transition-opacity duration-500"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[34%] items-end justify-end gap-1.5 px-12 pb-28 opacity-25 lg:flex"
        aria-hidden="true"
      >
        {Array.from({ length: 22 }).map((_, index) => (
          <span
            key={index}
            className="signal-bar w-px flex-1 bg-signal"
            style={{
              height: `${18 + ((index * 37) % 72)}%`,
              animationDelay: `${index * 0.11}s`,
              animationDuration: `${2.2 + (index % 5) * 0.35}s`,
            }}
          />
        ))}
      </div>

      <div className="shell relative flex flex-1 flex-col justify-center py-16 md:py-20">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 shadow-[0_1px_0_0_var(--card)] backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-signal" />
            </span>
            <span className="font-mono text-[0.64rem] uppercase tracking-[0.18em]">
              {site.availability}
            </span>
          </span>
          <span className="label">
            {site.location} · {site.timezone}
          </span>
          <span className="label hidden items-center gap-2 sm:flex">
            <AsteriskMark className="size-3 animate-spin-slow text-signal" />
            {site.role}
          </span>
        </div>

        <h1 className="mt-8 md:mt-10">
          <span className="sr-only">
            {site.name} — {site.role}
          </span>
          <span aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
            <span
              data-hero-line
              className="display block text-[clamp(4.1rem,14.5vw,12.2rem)]"
            >
              {site.firstName}
            </span>
          </span>
          <span aria-hidden="true" className="block overflow-hidden pb-[0.06em]">
            <span
              data-hero-line
              className="display block text-[clamp(4.1rem,14.5vw,12.2rem)] italic text-signal"
            >
              {site.lastName}
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-8 md:mt-12 md:grid-cols-12 md:items-end">
          <div data-hero-fade className="md:col-span-6 lg:col-span-5">
            <p className="max-w-md text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                size="lg"
                className="group rounded-full pr-1.5"
                render={<a href="#work" />}
                nativeButton={false}
              >
                See the work
                <span className="ml-2 grid size-7 place-items-center rounded-full bg-background/15 transition-transform duration-300 group-hover:translate-y-0.5">
                  <ArrowDownIcon className="size-3.5" />
                </span>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="group rounded-full"
                render={
                  <a
                    href={site.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                nativeButton={false}
              >
                <GithubMark className="size-4" />
                GitHub
                <ArrowUpRightIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Button>
            </div>
          </div>

          <div data-hero-fade className="md:col-span-4 md:col-start-8">
            <p className="label flex items-center gap-2">
              <MousePointer2Icon className="size-3 text-signal" />
              Currently
            </p>
            <p className="mt-2 max-w-xs text-pretty text-sm leading-relaxed text-muted-foreground">
              {site.currently}
            </p>
          </div>

          <div className="md:col-span-2 md:justify-self-end">
            <a
              href="#work"
              className="group inline-flex items-center gap-3 rounded-full text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="grid size-9 place-items-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:text-signal">
                <ArrowDownIcon className="size-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </span>
              <span className="label hidden sm:inline">Scroll</span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4">
          {heroStats.map((stat) => (
            <div
              key={stat.label}
              data-hero-stat
              className="group bg-background/80 p-4 backdrop-blur-sm transition-colors hover:bg-card sm:p-5"
            >
              <div className="font-display text-3xl leading-none tracking-tight sm:text-4xl">
                {stat.value}
              </div>
              <div className="label mt-2 text-[0.6rem]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
