import type { Metadata } from "next"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Work } from "@/components/work"

export const metadata: Metadata = {
  title: "Work",
  description:
    "Eight selected projects from Prashant Suthar's public repositories — full-stack products, animation engines, interpreters, and hardware experiments.",
}

export default function WorkPage() {
  return (
    <>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="pt-16 outline-none">
        <div id="top">
          <Work />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
