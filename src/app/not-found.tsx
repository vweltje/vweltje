import Link from "next/link"
import ErrorLayout from "@/components/ErrorLayout/ErrorLayout"
import Button from "@/components/Button/Button"
import { getPage, type NotFoundPage } from "@/lib/content"
import { pageMetadata } from "@/lib/site"

const page = getPage<NotFoundPage>("not-found")

export const metadata = pageMetadata(page.meta)

export default function NotFound() {
  return (
    <ErrorLayout
      label={page.label}
      title={page.title}
      excerpt={page.excerpt}
      code="404"
    >
      <Button link={page.button.link}>{page.button.text}</Button>
      <Link className="Link" href={page.link.link}>
        {page.link.text}
      </Link>
    </ErrorLayout>
  )
}
