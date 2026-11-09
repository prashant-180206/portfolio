"use client"

import { useCallback, useSyncExternalStore } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "theme"
const EVENT = "portfolio:theme"

export function getTheme(): Theme {
  if (typeof document === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

export function applyTheme(theme: Theme) {
  const root = document.documentElement
  root.classList.toggle("dark", theme === "dark")
  try {
    localStorage.setItem(STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable in private windows; the class still applies.
  }
  window.dispatchEvent(new CustomEvent<Theme>(EVENT, { detail: theme }))
}

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange)
  return () => window.removeEventListener(EVENT, onChange)
}

function subscribeMounted() {
  return () => {}
}

function getServerTheme(): Theme {
  return "light"
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, getServerTheme)
  const mounted = useSyncExternalStore(
    subscribeMounted,
    () => true,
    () => false,
  )

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next)
  }, [])

  const toggleTheme = useCallback(() => {
    applyTheme(getTheme() === "dark" ? "light" : "dark")
  }, [])

  return { theme, mounted, setTheme, toggleTheme }
}
