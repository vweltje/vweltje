export type FieldType = "text" | "email" | "textarea"

export const fields: {
  name: string
  label: string
  type: FieldType
  required: boolean
}[] = [
  {
    name: "firstname",
    label: "First name",
    type: "text",
    required: true,
  },
  {
    name: "lastname",
    label: "Last name",
    type: "text",
    required: true,
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true,
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
  },
]

export const successMessage =
  "Thank you for reaching out, I'll get back to you soon!"

export const errorMessage =
  "Oh snap, your message couldn't be send, try again later!"

const isFilled = (value: string) => value.length !== 0

export const validate: Record<FieldType, (value: string) => boolean> = {
  email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  text: isFilled,
  textarea: isFilled,
}
