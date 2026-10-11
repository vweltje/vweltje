import fs from "node:fs"
import path from "node:path"
import matter from "gray-matter"

const contentDir = path.join(process.cwd(), "content")

export type Meta = {
  title?: string
  description?: string
}

export type CaseList = {
  url?: string
  employer?: string
  projectType?: string
}

export type Case = {
  slug: string
  title: string
  date: string
  featuredImage: string
  list?: CaseList
  excerpt: string
  devicePreview: string
  content: string
  meta?: Meta
  draft?: boolean
}

export type Section = {
  content?: string
  image?: string
}

export type LandingPage = {
  hero: { text: string; buttonText: string }
  workHeading: { left: string; right: string }
  meta?: Meta
}

export type AboutPage = {
  title: string
  firstSection: Section
  secondSection: Section
  footerImage: string
  meta?: Meta
}

export type CasesPage = {
  title: string
  excerpt: string
  meta?: Meta
}

export type PageLink = {
  text: string
  link: string
}

export type NotFoundPage = {
  label: string
  title: string
  excerpt: string
  button: PageLink
  link: PageLink
  meta?: Meta
}

export type ErrorPage = {
  label: string
  title: string
  excerpt: string
  button: { text: string }
  link: PageLink
}

function readFrontmatter<T>(file: string): T {
  return matter(fs.readFileSync(path.join(contentDir, file), "utf8")).data as T
}

// Dates in the case frontmatter are written as MM/DD/YYYY, or "current" for
// ongoing projects, which always sort first
function toTime(date: string) {
  if (date.trim().toLowerCase() === "current") return Number.MAX_SAFE_INTEGER
  const [month, day, year] = date.split("/").map(Number)
  return new Date(year, month - 1, day).getTime()
}

export function getPage<T>(
  name: "landing" | "about" | "cases" | "not-found" | "error",
): T {
  return readFrontmatter<T>(`pages/${name}.md`)
}

export function getCases(): Case[] {
  return fs
    .readdirSync(path.join(contentDir, "cases"))
    .filter((file) => file.endsWith(".md"))
    .map((file) => ({
      ...readFrontmatter<Omit<Case, "slug">>(`cases/${file}`),
      slug: path.basename(file, ".md"),
    }))
    .filter((item) => !item.draft)
    .sort((a, b) => toTime(b.date) - toTime(a.date))
}

export function getCase(slug: string) {
  const cases = getCases()
  const index = cases.findIndex((item) => item.slug === slug)
  if (index === -1) return null

  return {
    item: cases[index],
    previous: cases[index - 1] ?? null,
    next: cases[index + 1] ?? null,
  }
}
