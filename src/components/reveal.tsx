"use client"

import { useEffect, useRef, type ReactNode } from "react"
import { animate } from "animejs"
import { cn } from "cn"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 22,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches

    if (prefersReduced) {
      element.classList.add("is-visible")
      return
    }

    let animation: ReturnType<typeof animate> | null = null

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          observer.disconnect()
          animation = animate(element, {
            opacity: [0, 1],
            translateY: [distance, 0],
            duration: 900,
            delay,
            ease: "outExpo",
            onComplete: () => {
              element.classList.add("is-visible")
              element.style.removeProperty("opacity")
              element.style.removeProperty("transform")
            },
          })
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      animation?.revert()
    }
  }, [delay, distance])

  return (
    <div ref={ref} className={cn("reveal", className)}>
      {children}
    </div>
  )
}
