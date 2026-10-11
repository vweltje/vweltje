"use client"

import { useState } from "react"
import Form from "./Form/Form"
import SuccessMessage from "./SuccessMessage/SuccessMessage"

export type SubmitStatus = "idle" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle")

  if (status === "success") return <SuccessMessage />

  return <Form status={status} onSubmitted={setStatus} />
}
