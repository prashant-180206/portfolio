import { ArrowUpRightIcon } from "lucide-react"

import { GithubMark } from "@/components/icons"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { githubRepos, site } from "@/data/site"

export function GithubSection() {
  return (
    <section id="github" className="section-pad border-t border-border">
      <div className="shell">
        <SectionHeading
          index="04"
          eyebrow="On GitHub"
          title="A public trail."
          description="Fifteen public repositories, plus a few numbers from the profile. Small projects, kept in the open."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="size-2 rounded-full bg-signal/70" />
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
                <span className="ml-2 truncate font-mono text-[0.65rem] text-muted-foreground">
                  github.com/{site.github.username}
                </span>
              </div>

              <div className="p-5 font-mono text-[0.72rem] leading-relaxed">
                <p className="text-muted-foreground">
                  <span className="text-signal">$</span> gh api /users/
                  {site.github.username}
                </p>
                <pre className="mt-3 overflow-x-auto text-[0.7rem] leading-relaxed text-foreground/90">
{`{
  "public_repos": ${site.github.publicRepos},
  "primary_language": "${site.github.primaryLanguage}",
  "last_push": "${site.github.lastPush}",
  "on_github_since": "${site.github.since}"
}`}
                </pre>
              </div>

              <div className="grid grid-cols-3 gap-px border-t border-border bg-border">
                {[
                  { value: String(site.github.publicRepos).padStart(2, "0"), label: "repos" },
                  {
                    value: site.github.primaryLanguageShort,
                    label: "primary",
                  },
                  { value: site.github.lastPushShort, label: "last push" },
                ].map((item) => (
                  <div key={item.label} className="bg-card px-4 py-3">
                    <div className="font-display text-2xl leading-none tracking-tight">
                      {item.value}
                    </div>
                    <div className="label mt-1.5 text-[0.58rem]">{item.label}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border p-5">
                <Button
                  variant="outline"
                  className="group w-full justify-between rounded-full"
                  render={
                    <a
                      href={site.github.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                  nativeButton={false}
                >
                  <span className="flex items-center gap-2">
                    <GithubMark className="size-4" />
                    Open GitHub profile
                  </span>
                  <ArrowUpRightIcon className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Button>
              </div>
            </div>
          </Reveal>

          <div className="lg:col-span-7">
            <Reveal delay={80}>
              <div className="divide-y divide-border border-y border-border">
                {githubRepos.map((repo) => (
                  <a
                    key={repo.name}
                    href={repo.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group grid grid-cols-[1fr_auto] items-center gap-4 py-5 transition-colors hover:bg-muted/50 md:px-3"
                  >
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-sm font-medium">
                          {repo.name}
                        </span>
                        <span className="label">{repo.year}</span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {repo.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
                        <span className="size-1.5 rounded-full bg-signal" />
                        {repo.language}
                      </span>
                      <span className="grid size-8 place-items-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-signal group-hover:text-signal">
                        <ArrowUpRightIcon className="size-3.5" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
                The profile is a snapshot, not a scoreboard. If you want the
                longer version of any project, the commit history is the best
                place to start.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
