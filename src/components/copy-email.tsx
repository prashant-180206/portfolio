"use client"

import { useEffect, useRef, useState } from "react"
import { CheckIcon, CopyIcon } from "lucide-react"
import { cn } from "cn"

import { Button } from "@/components/ui/button"
import { site } from "@/data/site"

type CopyEmailProps = {
  className?: string
  label?: string
  copiedLabel?: string
}

export function CopyEmail({
  className,
  label = "Copy email address",
  copiedLabel = "Copied to clipboard",
}: CopyEmailProps) {
  const [copied, setCopied] = useState(false)
  const timeout = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (timeout.current) window.clearTimeout(timeout.current)
    }
  }, [])

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)

      if (timeout.current) window.clearTimeout(timeout.current)
      timeout.current = window.setTimeout(() => setCopied(false), 2400)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="lg"
        onClick={handleCopy}
        className={cn(
          "h-11 gap-2.5 rounded-full px-5",
          className,
          copied && "border-signal text-signal",
        )}
      >
        {copied ? (
          <CheckIcon className="size-4" />
        ) : (
          <CopyIcon className="size-4" />
        )}
        {copied ? copiedLabel : label}
      </Button>
      <span aria-live="polite" className="sr-only">
        {copied ? "Email address copied to clipboard." : ""}
      </span>
    </>
  )
}
