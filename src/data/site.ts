export type Project = {
  slug: string
  index: string
  name: string
  subtitle: string
  description: string
  year: string
  role: string
  group: "Web" | "Interfaces" | "Systems"
  tags: string[]
  stack: string[]
  facts: { label: string; value: string }[]
  highlights: string[]
  links: { label: string; href: string }[]
}

const githubUrl = "https://github.com/prashant-180206"

export const site = {
  name: "Prashant Suthar",
  firstName: "Prashant",
  lastName: "Suthar",
  initials: "PS",
  role: "Software engineer",
  location: "India",
  timezone: "IST",
  availability: "Open to select work",
  email: "prashantsuthar.1802@gmail.com",
  description:
    "I build full-stack products, cross-platform apps, and animation tools that make complex ideas easier to read.",
  intro:
    "Most of what I know came from building small systems end to end, then making them survive a second run. Lately I've been building a browser-first animation studio, an algorithm interpreter, and full-stack products — and learning to make the web move with the same care.",
  currently:
    "Building manim-web and AlgoVis, shipping full-stack products, and looking for a team where product and engineering meet.",
  github: {
    username: "prashant-180206",
    url: githubUrl,
    publicRepos: 15,
    primaryLanguage: "TypeScript",
    primaryLanguageShort: "TS",
    lastPush: "Nov 2026",
    lastPushShort: "NOV 26",
    since: "2024",
  },
}

export const nav = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Stack", href: "#stack" },
  { label: "Contact", href: "#contact" },
]

export const stats = [
  { value: "15", label: "public repositories" },
  { value: "2024", label: "on GitHub since" },
  { value: "2026", label: "latest ship" },
]

export const projects: Project[] = [
  {
    slug: "manim-web",
    index: "01",
    name: "manim-web",
    subtitle: "A browser-first, Manim-inspired animation studio.",
    description:
      "A 2D and 3D scene studio that runs in the browser and ships as a desktop app with Tauri. A custom Canvas 2D engine and a three.js engine handle the scene, while React owns the editor shells — selection, transforms, timeline, inspection, and save/open.",
    year: "2026",
    role: "Engine + editor",
    group: "Web",
    tags: ["TypeScript", "Canvas", "three.js"],
    stack: ["TypeScript", "React", "Vite", "three.js", "Canvas 2D", "Tauri"],
    facts: [
      { label: "Scope", value: "2D + 3D studios" },
      { label: "Form", value: "Web + desktop" },
      { label: "Engine", value: "Custom" },
    ],
    highlights: [
      "Built a framework-agnostic Canvas 2D engine and a three.js 3D engine, with React editor shells on top.",
      "Wired click and modifier-click selection, transforms, inspection, save/open, and undo/redo into the 2D studio.",
      "Added a 3D studio for primitives, arrows, lines, dots, and parametric surfaces.",
      "Shipped the same product as a Vite web app and a Tauri 2 desktop app.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/manim-web` },
    ],
  },
  {
    slug: "trustlance",
    index: "02",
    name: "TrustLance",
    subtitle: "Milestone escrow for freelance work, without the middleman.",
    description:
      "A decentralized freelancing platform with smart-contract escrow, Supabase, Next.js, and IPFS. Clients split work into milestones, lock funds in escrow, and release payment when the work is approved; disputes route through a DAO-style mechanism.",
    year: "2026",
    role: "Full-stack + contracts",
    group: "Web",
    tags: ["Next.js", "Solidity", "Web3"],
    stack: [
      "Next.js",
      "TypeScript",
      "Solidity",
      "Hardhat",
      "Supabase",
      "IPFS",
    ],
    facts: [
      { label: "Escrow", value: "Milestone-based" },
      { label: "Surfaces", value: "Web · contracts · backend" },
      { label: "Trust", value: "Smart contracts" },
    ],
    highlights: [
      "Designed the milestone lifecycle from project creation through escrow release.",
      "Built the Next.js product surface alongside Solidity contracts and a Supabase backend.",
      "Added IPFS-backed work evidence and a dispute mechanism.",
      "Split the repository into web, blockchain, and backend applications so each could evolve independently.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/trustlance` },
    ],
  },
  {
    slug: "algovis",
    index: "03",
    name: "AlgoVis",
    subtitle: "An algorithm laboratory with its own interpreter.",
    description:
      "A React + Vite workspace where you write a small JavaScript-like language and watch it execute. A custom TypeScript interpreter handles lexing, parsing, and evaluation, then projects runtime snapshots, call frames, and data structures onto a PixiJS canvas.",
    year: "2026",
    role: "Interpreter + UI",
    group: "Interfaces",
    tags: ["TypeScript", "Interpreter", "PixiJS"],
    stack: ["TypeScript", "React", "Vite", "PixiJS", "Tauri"],
    facts: [
      { label: "Pipeline", value: "Source → AST → runtime" },
      { label: "Views", value: "6 connected panels" },
      { label: "Desktop", value: "Tauri shell" },
    ],
    highlights: [
      "Wrote the lexer, parser, AST, and interpreter instead of leaning on the browser's JS engine.",
      "Added step-through runtime snapshots, call frames, and execution events.",
      "Built a visualization projector that renders data structures with PixiJS.",
      "Packaged the workspace as a web app with an optional Tauri desktop shell.",
    ],
    links: [{ label: "View on GitHub", href: `${githubUrl}/AlgoVis` }],
  },
  {
    slug: "quiless",
    index: "04",
    name: "QuiLess",
    subtitle: "Queues and appointments in one realtime flow.",
    description:
      "A queue-management product for businesses and their customers: scan a QR code, join a line or book a slot, then track the token from waiting to served. Built on Next.js 16 and Convex with live subscriptions, QR check-in, and map-based discovery.",
    year: "2026",
    role: "Full-stack",
    group: "Web",
    tags: ["Next.js", "Convex", "Realtime"],
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Convex",
      "Tailwind CSS",
      "Leaflet",
    ],
    facts: [
      { label: "Flows", value: "Queue + appointments" },
      { label: "Check-in", value: "QR code" },
      { label: "State", value: "Realtime tokens" },
    ],
    highlights: [
      "Modeled the full token lifecycle: waiting, called, checked in, serving, complete, skipped, expired, and no-show.",
      "Built business onboarding with operating hours, services, and queue/appointment configuration.",
      "Added QR-based check-in and map-based business discovery.",
      "Used Convex live queries so customer and staff views stay in sync.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/fastq` },
      { label: "Open QuiLess", href: "https://quiless.vercel.app" },
    ],
  },
  {
    slug: "reflectra",
    index: "05",
    name: "Reflectra",
    subtitle: "A private journal that talks back, gently.",
    description:
      "A Flutter journaling app that turns a daily check-in conversation into a structured diary entry. An Ollama-backed service handles the conversation, a persona builder learns the user's preferences, and entries stay local in Isar.",
    year: "2026",
    role: "Product + Flutter",
    group: "Interfaces",
    tags: ["Flutter", "AI", "Local-first"],
    stack: ["Flutter", "Dart", "Ollama", "Isar", "Riverpod"],
    facts: [
      { label: "Input", value: "Daily check-in" },
      { label: "Output", value: "Structured diary" },
      { label: "Storage", value: "Local Isar" },
    ],
    highlights: [
      "Designed a conversational check-in that produces a structured Markdown diary entry.",
      "Built a persona onboarding flow and custom instructions that shape AI responses.",
      "Kept diary entries and persona data local-first with Isar.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/reflectra` },
    ],
  },
  {
    slug: "shelfwise",
    index: "06",
    name: "Shelfwise",
    subtitle: "A shared library catalog with a personal shelf.",
    description:
      "A full-stack library app for readers and administrators. React Native Web on the front, FastAPI and SQLite/Postgres on the back, JWT auth, role-based access, catalog search, personal reading status, and lightweight analytics.",
    year: "2026",
    role: "Full-stack",
    group: "Web",
    tags: ["React Native", "FastAPI", "JWT"],
    stack: [
      "React Native Web",
      "Expo",
      "TypeScript",
      "FastAPI",
      "Python",
      "SQLite",
      "PostgreSQL",
    ],
    facts: [
      { label: "Roles", value: "Reader + admin" },
      { label: "Search", value: "Title · author · ISBN" },
      { label: "API", value: "JWT-protected" },
    ],
    highlights: [
      "Built reader and admin roles with backend-enforced authorization.",
      "Added catalog search, genre filters, sorting, book details, and discovery shelves.",
      "Implemented personal shelves with reading status and catalog analytics.",
      "Kept one codebase working across native and web with React Native Web.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/book_management` },
    ],
  },
  {
    slug: "animat",
    index: "07",
    name: "Animat",
    subtitle: "A Manim-inspired animation framework for Qt.",
    description:
      "A Qt 6 / QML animation framework for mathematical and geometric scenes. It includes a mobject hierarchy, timeline management, value trackers, interactive controls, and a scene editor aimed at making programmatic animation feel tangible.",
    year: "2025",
    role: "Framework + editor",
    group: "Systems",
    tags: ["C++", "Qt / QML", "Animation"],
    stack: ["C++", "Qt 6", "QML", "CMake"],
    facts: [
      { label: "Domain", value: "Mathematical animation" },
      { label: "Architecture", value: "Mobject hierarchy" },
      { label: "UI", value: "Qt / QML" },
    ],
    highlights: [
      "Built a mobject hierarchy from a base QQuickItem through clickable, interactive shapes.",
      "Added timeline management, animation types, and value trackers for data-driven scenes.",
      "Designed an interactive QML editor for creating, sequencing, and playing back animations.",
      "Documented the architecture as a reusable reference for animation systems.",
    ],
    links: [{ label: "View on GitHub", href: `${githubUrl}/Animat` }],
  },
  {
    slug: "ldam-voice",
    index: "08",
    name: "LDAM Voice Encryption",
    subtitle: "Voice-controlled access with speaker verification.",
    description:
      "A modular Python authentication system that listens for a wake word, verifies the speaker with SpeechBrain's ECAPA-TDNN model, transcribes commands with Vosk, and drives an Arduino over serial. Commands only execute after the voice matches.",
    year: "2025",
    role: "Systems + ML",
    group: "Systems",
    tags: ["Python", "Speech", "Arduino"],
    stack: ["Python", "SpeechBrain", "Vosk", "PyTorch", "Arduino"],
    facts: [
      { label: "Security", value: "Speaker verification" },
      { label: "Speech", value: "Offline STT" },
      { label: "Hardware", value: "Arduino serial" },
    ],
    highlights: [
      "Combined wake-word detection, offline transcription, and biometric speaker verification.",
      "Split audio capture, verification, recognition, and device control into eight modules.",
      "Added pre-roll buffers, normalization, cooldowns, and thread-safe resource cleanup.",
      "Wired authenticated commands to an Arduino over serial.",
    ],
    links: [
      { label: "View on GitHub", href: `${githubUrl}/LDAM-Voice_Encryption` },
    ],
  },
]

export const filters = ["All", "Web", "Interfaces", "Systems"] as const

export const stackGroups = [
  {
    id: "web",
    index: "01",
    title: "Web",
    blurb: "Products that run in the browser.",
    items: [
      "TypeScript",
      "React",
      "Next.js",
      "Vite",
      "Tailwind CSS",
      "Base UI",
    ],
  },
  {
    id: "product",
    index: "02",
    title: "Product",
    blurb: "Cross-platform apps with a real backend.",
    items: [
      "Flutter",
      "Dart",
      "Supabase",
      "Convex",
      "Riverpod",
      "Isar",
    ],
  },
  {
    id: "systems",
    index: "03",
    title: "Systems",
    blurb: "Engines, contracts, and the hardware layer.",
    items: ["C++", "Qt / QML", "Python", "Solidity", "Hardhat", "Linux"],
  },
]

export const practice = [
  {
    year: "2026",
    title: "Product engineering",
    meta: "Now",
    text: "Shipping full-stack products — TrustLance, QuiLess, Shelfwise — and learning how far a small team can take an idea.",
  },
  {
    year: "2026",
    title: "Engines & interpreters",
    meta: "Public",
    text: "Built manim-web's 2D/3D animation engines and AlgoVis's TypeScript interpreter, then gave both an interface.",
  },
  {
    year: "2025",
    title: "Systems & simulation",
    meta: "Public",
    text: "Started with a pygame traffic simulation, then moved into C++/Qt animation, Python voice authentication, and an academic ERP.",
  },
  {
    year: "2024",
    title: "Joined GitHub",
    meta: "Start",
    text: "Created the account in December 2024. Fifteen public repositories later, the trail is still growing.",
  },
]

export const githubRepos = [
  {
    name: "manim-web",
    description: "Browser-first animation engine and editor",
    language: "TypeScript",
    year: "2026",
    url: `${githubUrl}/manim-web`,
  },
  {
    name: "trustlance",
    description: "Smart-contract escrow for freelance work",
    language: "TypeScript",
    year: "2026",
    url: `${githubUrl}/trustlance`,
  },
  {
    name: "AlgoVis",
    description: "Algorithm interpreter and visualizer",
    language: "TypeScript",
    year: "2026",
    url: `${githubUrl}/AlgoVis`,
  },
  {
    name: "fastq",
    description: "Queues and appointments, live",
    language: "TypeScript",
    year: "2026",
    url: `${githubUrl}/fastq`,
  },
  {
    name: "InternLearn",
    description: "Flutter learning app on Supabase",
    language: "Dart",
    year: "2026",
    url: `${githubUrl}/InternLearn`,
  },
  {
    name: "Acadify-ERP",
    description: "Academic management platform",
    language: "TypeScript",
    year: "2025",
    url: `${githubUrl}/Acadify-ERP`,
  },
  {
    name: "LDAM-Voice_Encryption",
    description: "Voice authentication and Arduino control",
    language: "Python",
    year: "2025",
    url: `${githubUrl}/LDAM-Voice_Encryption`,
  },
  {
    name: "leetcode",
    description: "C++ solutions and DSA practice",
    language: "C++",
    year: "2026",
    url: `${githubUrl}/leetcode`,
  },
]

export const marqueeItems = [
  "Full-stack web",
  "Cross-platform apps",
  "Animation engines",
  "Algorithm visualization",
  "TypeScript",
  "Next.js",
  "Flutter",
  "Convex",
  "Supabase",
  "C++ / Qt",
  "Python",
  "Motion",
]

export const commands = [
  { label: "Go to work", href: "#work", group: "Navigate", shortcut: "W" },
  { label: "Go to about", href: "#about", group: "Navigate", shortcut: "A" },
  { label: "Go to stack", href: "#stack", group: "Navigate", shortcut: "S" },
  { label: "Go to GitHub", href: "#github", group: "Navigate", shortcut: "G" },
  { label: "Go to contact", href: "#contact", group: "Navigate", shortcut: "C" },
]
