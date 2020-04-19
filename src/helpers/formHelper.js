export const validateEmail = (email) =>
  /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)

export const validateText = (text) => text.length !== 0

export const validate = {
  email: validateEmail,
  text: validateText
}
