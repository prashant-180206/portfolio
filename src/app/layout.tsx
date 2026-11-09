import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google"
import "./globals.css"

import { TooltipProvider } from "@/components/ui/tooltip"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: {
    default: "Prashant Suthar — Software Engineer",
    template: "%s — Prashant Suthar",
  },
  description:
    "Prashant Suthar builds full-stack products, cross-platform apps, and animation tools that make complex ideas easier to read. Explore selected work, the stack, and the public trail on GitHub.",
  applicationName: "Prashant Suthar — Portfolio",
  authors: [
    { name: "Prashant Suthar", url: "https://github.com/prashant-180206" },
  ],
  creator: "Prashant Suthar",
  keywords: [
    "Prashant Suthar",
    "software engineer",
    "full-stack engineer",
    "TypeScript",
    "Next.js",
    "React",
    "Flutter",
    "Supabase",
    "Convex",
    "animation",
    "portfolio",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Prashant Suthar",
    title: "Prashant Suthar — Software Engineer",
    description:
      "Full-stack products, cross-platform apps, and animation tools that make complex ideas easier to read.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prashant Suthar — Software Engineer",
    description:
      "Full-stack products, cross-platform apps, and animation tools that make complex ideas easier to read.",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f1ea" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0e" },
  ],
  colorScheme: "light dark",
}

const themeScript = `(function(){try{var t=localStorage.getItem('theme');var d=t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.toggle('dark',d);document.documentElement.classList.add('js')}catch(e){document.documentElement.classList.add('js')}})();`

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full bg-background text-foreground">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-full focus:bg-foreground focus:px-4 focus:py-2 focus:text-sm focus:text-background"
        >
          Skip to content
        </a>
        <TooltipProvider delay={250}>{children}</TooltipProvider>
      </body>
    </html>
  )
}
