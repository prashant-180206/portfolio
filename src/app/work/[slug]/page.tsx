import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeftIcon, ArrowUpRightIcon } from "lucide-react"

import { GithubMark } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects, site } from "@/data/site"

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

// Every project route is prerendered from generateStaticParams, so the params
// read is static. Opt out of instant-navigation validation for this segment.
export const instant = false

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    return { title: "Project not found" }
  }

  return {
    title: project.name,
    description: project.subtitle,
    openGraph: {
      type: "article",
      title: `${project.name} — ${site.name}`,
      description: project.subtitle,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} — ${site.name}`,
      description: project.subtitle,
    },
  }
}

export default async function ProjectPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params
  const index = projects.findIndex((project) => project.slug === slug)

  if (index === -1) {
    notFound()
  }

  const project = projects[index]
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <article id="top" className="pt-16">
          <div className="shell">
            <Reveal>
              <div className="flex flex-wrap items-center gap-2 pt-8 text-xs text-muted-foreground">
                <Link
                  href="/"
                  className="transition-colors hover:text-foreground"
                >
                  Home
                </Link>
                <span aria-hidden="true">/</span>
                <Link
                  href="/work"
                  className="transition-colors hover:text-foreground"
                >
                  Work
                </Link>
                <span aria-hidden="true">/</span>
                <span className="text-foreground">{project.name}</span>
              </div>
            </Reveal>

            <Reveal delay={60}>
              <div className="mt-10 flex flex-wrap items-center gap-3 border-b border-border pb-6">
                <span className="label text-signal">
                  Project {project.index}
                </span>
                <span className="label">{project.year}</span>
                <Badge variant="outline">{project.group}</Badge>
                <span className="label">{project.role}</span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="display mt-8 max-w-5xl text-balance text-[clamp(3.4rem,10vw,8rem)]">
                {project.name}
              </h1>
            </Reveal>

            <Reveal delay={150}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
                {project.subtitle}
              </p>
            </Reveal>

            <div className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-7">
                <Reveal>
                  <p className="text-pretty text-base leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </Reveal>

                <Reveal delay={80}>
                  <h2 className="label mt-10">What I built</h2>
                  <ul className="mt-5 flex flex-col gap-4">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-3 text-sm leading-relaxed md:text-base"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-signal" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>

                <Reveal delay={140}>
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="rounded-full"
                      render={<Link href="/work" />}
                      nativeButton={false}
                    >
                      <ArrowLeftIcon className="size-4" />
                      All work
                    </Button>
                    {project.links.map((link) => (
                      <Button
                        key={link.href}
                        className="group justify-between rounded-full"
                        render={
                          <a
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          />
                        }
                        nativeButton={false}
                      >
                        {link.href.includes("github.com") ? (
                          <GithubMark className="size-4" />
                        ) : null}
                        {link.label}
                        <ArrowUpRightIcon className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </Button>
                    ))}
                  </div>
                </Reveal>
              </div>

              <aside className="lg:col-span-5">
                <Reveal delay={100}>
                  <div className="rounded-2xl border border-border bg-card p-6 md:p-8">
                    <h2 className="label">At a glance</h2>
                    <dl className="mt-4 divide-y divide-border border-y border-border text-sm">
                      {project.facts.map((fact) => (
                        <div
                          key={fact.label}
                          className="flex justify-between gap-4 py-3"
                        >
                          <dt className="text-muted-foreground">{fact.label}</dt>
                          <dd className="text-right font-medium">
                            {fact.value}
                          </dd>
                        </div>
                      ))}
                    </dl>

                    <h2 className="label mt-8">Stack</h2>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {project.stack.map((item) => (
                        <Badge key={item} variant="secondary">
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </aside>
            </div>

            <Reveal delay={120}>
              <Link
                href={`/work/${next.slug}`}
                className="group mt-16 mb-20 flex flex-col justify-between gap-6 rounded-2xl border border-border bg-card p-6 transition-colors hover:border-signal md:flex-row md:items-end md:p-8"
              >
                <div>
                  <p className="label">Next project</p>
                  <p className="display mt-3 text-4xl tracking-tight md:text-5xl">
                    {next.name}
                  </p>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    {next.subtitle}
                  </p>
                </div>
                <span className="grid size-11 shrink-0 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:rotate-45 group-hover:border-signal group-hover:bg-signal group-hover:text-signal-foreground">
                  <ArrowUpRightIcon className="size-4" />
                </span>
              </Link>
            </Reveal>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
