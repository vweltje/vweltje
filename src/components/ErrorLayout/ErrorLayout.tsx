import type { ReactNode } from "react"
import SimpleHeader from "../SimpleHeader/SimpleHeader"

type Props = {
  label: string
  title: string
  excerpt: string
  code: string
  children: ReactNode
}

// Shared layout for the 404 and error pages, styled after the landing hero
export default function ErrorLayout({
  label,
  title,
  excerpt,
  code,
  children,
}: Props) {
  return (
    <>
      <SimpleHeader />
      <section className="ErrorLayout">
        <div className="ErrorLayout--Start">
          <div className="ErrorLayout--Content">
            <span className="ErrorLayout--Label">{label}</span>
            <h1 className="ErrorLayout--Heading">{title}</h1>
            <p>{excerpt}</p>
            <div className="ErrorLayout--Actions">{children}</div>
          </div>
        </div>
        <div className="ErrorLayout--End" aria-hidden="true">
          <span className="ErrorLayout--Code">{code}</span>
        </div>
      </section>
    </>
  )
}
