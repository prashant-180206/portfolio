"use client"

import { useEffect, useState } from "react"
import {
  ArrowUpRightIcon,
  MailIcon,
  MenuIcon,
  SearchIcon,
} from "lucide-react"
import { cn } from "cn"

import { CommandMenu } from "@/components/command-menu"
import { GithubMark } from "@/components/icons"
import { ScrollProgress } from "@/components/scroll-progress"
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { nav, site } from "@/data/site"

export function SiteHeader() {
  const [commandOpen, setCommandOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState("#top")
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const ids = ["top", ...nav.map((item) => item.href.slice(1))]

    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const marker = window.scrollY + window.innerHeight * 0.35
      let current = "#top"

      for (const id of ids) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= marker) {
          current = `#${id}`
        }
      }

      setActive(current)
    }

    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault()
        setCommandOpen((value) => !value)
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl transition-shadow duration-300",
          scrolled && "shadow-[0_12px_40px_-24px_rgba(0,0,0,0.45)]",
        )}
      >
        <div className="shell flex h-16 items-center justify-between gap-4">
          <a
            href="#top"
            className="group flex items-center gap-3"
            aria-label={`${site.name} — back to top`}
          >
            <span className="relative grid size-8 place-items-center rounded-full border border-border bg-card font-mono text-[0.66rem] font-medium tracking-tight transition-colors group-hover:border-signal group-hover:text-signal">
              {site.initials}
              <span className="absolute -right-0.5 -bottom-0.5 size-2 rounded-full border-2 border-background bg-signal" />
            </span>
            <span className="hidden text-sm font-medium tracking-tight sm:block">
              {site.name}
            </span>
            <span className="label hidden md:block">/ portfolio</span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const isActive = active === item.href
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                    isActive && "bg-foreground text-background hover:bg-foreground hover:text-background",
                  )}
                >
                  {item.label}
                </a>
              )
            })}
          </nav>

          <div className="flex items-center gap-1">
            <Button
              variant="outline"
              size="sm"
              className="gap-2 rounded-full px-2.5 sm:px-3"
              onClick={() => setCommandOpen(true)}
              aria-label="Open command menu"
            >
              <SearchIcon className="size-3.5" />
              <span className="hidden lg:inline">Search</span>
              <kbd className="hidden rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[0.6rem] text-muted-foreground sm:inline">
                ⌘K
              </kbd>
            </Button>
            <ThemeToggle />
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-sm"
                    className="rounded-full md:hidden"
                    aria-label="Open menu"
                  />
                }
              >
                <MenuIcon />
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[min(88vw,22rem)] gap-0 p-0"
              >
                <SheetHeader className="border-b border-border px-6 py-5">
                  <SheetTitle className="font-display text-3xl font-normal tracking-tight">
                    Index
                  </SheetTitle>
                  <SheetDescription className="label">
                    {site.name} / portfolio
                  </SheetDescription>
                </SheetHeader>

                <nav
                  className="flex flex-col px-3 py-4"
                  aria-label="Mobile"
                >
                  {nav.map((item, index) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-muted"
                    >
                      <span className="label w-6 text-signal">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-display text-3xl tracking-tight">
                        {item.label}
                      </span>
                      <ArrowUpRightIcon className="ml-auto size-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </a>
                  ))}
                </nav>

                <SheetFooter className="border-t border-border px-6 py-5">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <MailIcon className="size-4" />
                    {site.email}
                  </a>
                  <a
                    href={site.github.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <GithubMark className="size-4" />
                    github.com/{site.github.username}
                  </a>
                  <Button
                    variant="outline"
                    className="mt-2 justify-between rounded-full"
                    onClick={() => {
                      setMobileOpen(false)
                      setCommandOpen(true)
                    }}
                  >
                    Open command menu
                    <kbd className="font-mono text-[0.65rem] text-muted-foreground">
                      ⌘K
                    </kbd>
                  </Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <ScrollProgress />
      </header>
      <CommandMenu open={commandOpen} onOpenChange={setCommandOpen} />
    </>
  )
}
