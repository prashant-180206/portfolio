"use client"

import { useEffect, useState } from "react"
import { cn } from "cn"

type LocalClockProps = {
  timeZone?: string
  label?: string
  className?: string
}

export function LocalClock({
  timeZone = "Asia/Kolkata",
  label = "IST",
  className,
}: LocalClockProps) {
  const [time, setTime] = useState("")

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })

    const tick = () => setTime(formatter.format(new Date()))

    tick()
    const interval = window.setInterval(tick, 1000)

    return () => window.clearInterval(interval)
  }, [timeZone])

  return (
    <span
      className={cn(
        "font-mono text-xs tabular-nums text-muted-foreground",
        className,
      )}
    >
      {time || "--:--:--"} {label}
    </span>
  )
}
