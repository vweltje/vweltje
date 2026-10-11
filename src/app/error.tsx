"use client"

import { useEffect } from "react"
import Link from "next/link"
import ErrorLayout from "@/components/ErrorLayout/ErrorLayout"
import Button from "@/components/Button/Button"
import { useErrorPage } from "@/lib/ErrorPageContext"

type Props = {
  error: Error & { digest?: string }
  retry: () => void
}

export default function Error({ error, retry }: Props) {
  const page = useErrorPage()

  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <ErrorLayout
      label={page.label}
      title={page.title}
      excerpt={page.excerpt}
      code="Oops"
    >
      <Button onClick={retry}>{page.button.text}</Button>
      <Link className="Link" href={page.link.link}>
        {page.link.text}
      </Link>
    </ErrorLayout>
  )
}
