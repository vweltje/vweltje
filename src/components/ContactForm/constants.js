export const fields = [
  {
    name: "firstName",
    label: "First name",
    type: "text",
    required: true
  },
  {
    name: "lastName",
    label: "Last name",
    type: "text",
    required: true
  },
  {
    name: "email",
    label: "Email address",
    type: "email",
    required: true
  },
  {
    name: "message",
    label: "Message",
    type: "textarea",
    required: true
  }
]

export const successMessage =
  "Thank you for reaching out, I'll get back to you soon!"

export const errorMessage =
  "Oh snap, your message couldn't be send, try again later!"
