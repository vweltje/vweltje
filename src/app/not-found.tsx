import Link from "next/link"
import { site } from "@/lib/site"

export const metadata = { title: site.title }

export default function NotFound() {
  return (
    <section className="section thick">
      <div className="container skinny taCenter">
        <h1>404 - Page Not Found</h1>
        <p>
          We can&apos;t find the page you are looking for!
          <br />
          Head back to <Link href="/">{site.title}</Link>
        </p>
      </div>
    </section>
  )
}
