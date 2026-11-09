import { ArrowUpRightIcon, MailIcon } from "lucide-react"

import { CopyEmail } from "@/components/copy-email"
import { GithubMark } from "@/components/icons"
import { LocalClock } from "@/components/local-clock"
import { Reveal } from "@/components/reveal"
import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

export function Contact() {
  return (
    <section
      id="contact"
      className="inverted-signal section-pad relative overflow-hidden border-t border-border bg-foreground text-background"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-[28rem] -right-[18rem] size-[52rem] rounded-full bg-signal/20 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[24rem] -left-[16rem] size-[44rem] rounded-full bg-signal/10 blur-[120px]"
      />

      <div className="shell relative">
        <Reveal>
          <div className="flex flex-col gap-4 border-b border-background/15 pb-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="label flex items-center gap-2 text-background/55">
              <span className="text-signal">[06]</span>
              Contact
            </p>
            <div className="flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-background/20 px-3 py-1">
                <span className="size-1.5 rounded-full bg-signal animate-pulse-soft" />
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-background/70">
                  {site.availability}
                </span>
              </span>
              <LocalClock
                label={site.timezone}
                className="text-background/45"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h2 className="display mt-10 max-w-5xl text-balance text-[clamp(3.3rem,9.5vw,8.5rem)]">
            Let&apos;s make it{" "}
            <span className="italic text-signal">legible.</span>
          </h2>
        </Reveal>

        <Reveal delay={120}>
          <p className="mt-7 max-w-xl text-pretty text-sm leading-relaxed text-background/60 md:text-base">
            I&apos;m looking for a team where product and engineering meet — a
            place to build full-stack apps, cross-platform tools, and the
            interfaces that explain them. If that&apos;s the kind of work you
            have, I&apos;d like to hear about it.
          </p>
        </Reveal>

        <Reveal delay={170}>
          <div className="mt-12 grid gap-10 border-t border-background/15 pt-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <p className="label text-background/45">Write to me</p>
              <a
                href={`mailto:${site.email}`}
                className="group mt-3 inline-flex max-w-full items-start gap-3 md:gap-4"
              >
                <span className="display break-all text-[clamp(1.5rem,4.2vw,3.1rem)] leading-[1.05] tracking-[-0.03em] transition-colors group-hover:text-signal">
                  {site.email}
                </span>
                <ArrowUpRightIcon className="mt-1 size-5 shrink-0 text-background/40 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-signal md:mt-2 md:size-6" />
              </a>
              <p className="mt-4 flex items-center gap-2 text-xs text-background/45">
                <MailIcon className="size-3.5" />
                Usually replies within a day.
              </p>
            </div>

            <div className="flex flex-col items-start gap-3 lg:col-span-5 lg:items-end">
              <CopyEmail
                label="Copy email"
                copiedLabel="Copied"
                className="border-background/25 bg-transparent text-background hover:border-background/50 hover:bg-background/10 hover:text-background"
              />
              <Button
                variant="outline"
                size="lg"
                className="h-11 rounded-full border-background/25 bg-transparent px-5 text-background hover:border-background/50 hover:bg-background/10 hover:text-background"
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
                Open GitHub
                <ArrowUpRightIcon className="size-3.5" />
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={220}>
          <dl className="mt-12 grid gap-6 border-t border-background/15 pt-6 text-sm sm:grid-cols-3">
            <div>
              <dt className="label text-background/45">Based</dt>
              <dd className="mt-1.5">
                {site.location} · {site.timezone}
              </dd>
            </div>
            <div>
              <dt className="label text-background/45">Elsewhere</dt>
              <dd className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1">
                <a
                  href={site.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline transition-colors hover:text-signal"
                >
                  GitHub
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="link-underline transition-colors hover:text-signal"
                >
                  Email
                </a>
              </dd>
            </div>
            <div>
              <dt className="label text-background/45">Status</dt>
              <dd className="mt-1.5 flex items-center gap-2">
                <span className="size-1.5 rounded-full bg-signal animate-pulse-soft" />
                {site.availability}
              </dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  )
}
