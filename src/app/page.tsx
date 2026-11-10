import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { GithubSection } from "@/components/github-section"
import { Hero } from "@/components/hero"
import { Journey } from "@/components/journey"
import { Marquee } from "@/components/marquee"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"
import { Stack } from "@/components/stack"
import { Work } from "@/components/work"
import { marqueeItems, site } from "@/data/site"

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: site.role,
  email: `mailto:${site.email}`,
  url: site.github.url,
  sameAs: [site.github.url, site.leetcode.url],
  knowsAbout: [
    "Full-stack engineering",
    "TypeScript",
    "Next.js",
    "Flutter",
    "Animation engines",
    "Algorithm visualization",
    "Agentic AI",
    "AI-assisted development",
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <SiteHeader />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <Marquee items={marqueeItems} />
        <Work />
        <About />
        <Stack />
        <GithubSection />
        <Journey />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
