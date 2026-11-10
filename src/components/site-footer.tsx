import { ArrowUpIcon, Code2Icon } from "lucide-react"

import { GithubMark } from "@/components/icons"
import { LocalClock } from "@/components/local-clock"
import { nav, site } from "@/data/site"

async function copyrightYear() {
  "use cache"
  return new Date().getFullYear()
}

export async function SiteFooter() {
  const year = await copyrightYear()

  return (
    <footer className="border-t border-border bg-card/40">
      <div className="shell py-12 md:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <a
              href="#top"
              className="group inline-flex items-center gap-3"
              aria-label={`${site.name} — back to top`}
            >
              <span className="relative grid size-9 place-items-center rounded-full border border-border bg-background font-mono text-[0.66rem] font-medium tracking-tight transition-colors group-hover:border-signal group-hover:text-signal">
                {site.initials}
                <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2 border-background bg-signal" />
              </span>
              <span className="text-sm font-medium tracking-tight">
                {site.name}
              </span>
            </a>
            <p className="mt-4 text-pretty text-sm leading-relaxed text-muted-foreground">
              {site.role} building full-stack products, cross-platform apps,
              and animation tools between classes.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href === "#work" ? "/work" : `/${item.href}`}
                className="link-underline w-fit py-1 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
            <a
              href={site.github.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubMark className="size-3.5" />
              GitHub
            </a>
            <a
              href={site.leetcode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              <Code2Icon className="size-3.5" />
              LeetCode
            </a>
            <a
              href={`mailto:${site.email}`}
              className="link-underline w-fit py-1 text-muted-foreground transition-colors hover:text-foreground"
            >
              Email
            </a>
          </nav>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <LocalClock label={site.timezone} />
            <a
              href="#top"
              className="group inline-flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <span className="grid size-8 place-items-center rounded-full border border-border transition-colors group-hover:border-signal group-hover:text-signal">
                <ArrowUpIcon className="size-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
              </span>
              Back to top
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em]">
            Instrument Serif · Geist · Next.js 16
          </p>
        </div>
      </div>
    </footer>
  )
}
