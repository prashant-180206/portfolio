"use client"

import { useState } from "react"
import {
  ArrowUpIcon,
  BriefcaseIcon,
  CopyIcon,
  LayersIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
  UserIcon,
} from "lucide-react"

import { GithubMark } from "@/components/icons"
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
import { site } from "@/data/site"
import { useTheme } from "@/lib/use-theme"

type CommandMenuProps = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navigation = [
  { label: "Work", href: "#work", icon: BriefcaseIcon, shortcut: "W" },
  { label: "About", href: "#about", icon: UserIcon, shortcut: "A" },
  { label: "Stack", href: "#stack", icon: LayersIcon, shortcut: "S" },
  { label: "GitHub", href: "#github", icon: GithubMark, shortcut: "G" },
  { label: "Contact", href: "#contact", icon: MailIcon, shortcut: "C" },
]

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const [status, setStatus] = useState("")
  const { theme, mounted, toggleTheme } = useTheme()
  const isDark = mounted && theme === "dark"

  function handleOpenChange(next: boolean) {
    if (next) setStatus("")
    onOpenChange(next)
  }

  function goTo(href: string) {
    onOpenChange(false)

    window.requestAnimationFrame(() => {
      if (href === "#top") {
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      const target = document.querySelector(href)
      target?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  function openExternal(url: string) {
    onOpenChange(false)
    window.open(url, "_blank", "noopener,noreferrer")
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.email)
      setStatus("Email copied to clipboard.")
    } catch {
      setStatus("Clipboard unavailable — use the contact section.")
    }
  }

  function handleTheme() {
    toggleTheme()
    setStatus(isDark ? "Light mode on." : "Dark mode on.")
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={handleOpenChange}
      title="Command menu"
      description="Jump to a section or run a quick action."
    >
      <Command>
        <CommandInput placeholder="Jump to a section or run an action…" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Navigate">
            {navigation.map((item) => {
              const Icon = item.icon
              return (
                <CommandItem
                  key={item.href}
                  value={`${item.label} ${item.href}`}
                  onSelect={() => goTo(item.href)}
                >
                  <Icon className="size-4" />
                  {item.label}
                  <CommandShortcut>{item.shortcut}</CommandShortcut>
                </CommandItem>
              )
            })}
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Actions">
            <CommandItem
              value="toggle theme dark light appearance"
              onSelect={handleTheme}
            >
              {isDark ? (
                <SunIcon className="size-4" />
              ) : (
                <MoonIcon className="size-4" />
              )}
              {isDark ? "Switch to light mode" : "Switch to dark mode"}
            </CommandItem>
            <CommandItem
              value="copy email address contact"
              onSelect={copyEmail}
            >
              <CopyIcon className="size-4" />
              Copy email address
            </CommandItem>
            <CommandItem
              value="open github profile external"
              onSelect={() => openExternal(site.github.url)}
            >
              <GithubMark className="size-4" />
              Open GitHub profile
            </CommandItem>
            <CommandItem
              value="back to top scroll"
              onSelect={() => goTo("#top")}
            >
              <ArrowUpIcon className="size-4" />
              Back to top
            </CommandItem>
          </CommandGroup>
        </CommandList>
        <div className="flex min-h-9 items-center justify-between gap-4 border-t border-border px-3 py-2">
          <span className="label">
            {status || "Type to filter · ↑↓ to move"}
          </span>
          <span className="label">esc to close</span>
        </div>
      </Command>
    </CommandDialog>
  )
}
