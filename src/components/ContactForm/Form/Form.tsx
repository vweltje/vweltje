"use client"

import { useState, type FormEvent } from "react"
import Fieldset from "../Fieldset/Fieldset"
import { fields } from "../constants"
import type { SubmitStatus } from "../ContactForm"

type Props = {
  status: SubmitStatus
  onSubmitted: (status: SubmitStatus) => void
}

// Netlify picks up the form definition from public/__forms.html
export default function Form({ status, onSubmitted }: Props) {
  const [activeField, setActiveField] = useState(1)
  const [validFields, setValidFields] = useState<number[]>([])

  function setFieldValid(field: number, valid: boolean) {
    setValidFields((current) =>
      valid
        ? [...new Set([...current, field])]
        : current.filter((item) => item !== field),
    )
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form) as unknown as Record<string, string>

    try {
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(data).toString(),
      })
      if (!response.ok) throw new Error(`Form submit failed: ${response.status}`)
      form.reset()
      onSubmitted("success")
    } catch (error) {
      console.error(error)
      onSubmitted("error")
    }
  }

  return (
    <form
      className="ContactForm--Form"
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
    >
      {fields.map((field, index) => (
        <Fieldset
          {...field}
          index={index}
          activeField={activeField}
          isValid={validFields.includes(activeField)}
          showError={status === "error"}
          onValidate={(valid) => setFieldValid(index + 1, valid)}
          onPrevious={() => setActiveField(activeField - 1)}
          onNext={() => setActiveField(activeField + 1)}
          key={field.name}
        />
      ))}
      <input type="hidden" name="form-name" value="contact" />
    </form>
  )
}
