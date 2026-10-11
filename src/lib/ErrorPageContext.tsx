"use client"

import { createContext, useContext, type ReactNode } from "react"
import type { ErrorPage } from "./content"

// error.tsx is a client component and can't read the content folder itself,
// so the root layout reads it on the server and passes it down
const ErrorPageContext = createContext<ErrorPage | null>(null)

export function ErrorPageProvider({
  page,
  children,
}: {
  page: ErrorPage
  children: ReactNode
}) {
  return <ErrorPageContext value={page}>{children}</ErrorPageContext>
}

export function useErrorPage() {
  const context = useContext(ErrorPageContext)
  if (!context)
    throw new Error("useErrorPage must be used within an ErrorPageProvider")
  return context
}
