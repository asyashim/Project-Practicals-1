export function validateName(name) {
  return name.trim() !== ""
}

export function validateEmail(email) {
  const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/
  return pattern.test(email)
}

export function validatePassword(password) {
  return password.length >= 6
}

export function validateConfirm(password, confirmPassword) {
  return password === confirmPassword
}

export function saveToStorage(data) {
  const existing = getFromStorage()
  existing.push(data)
  localStorage.setItem("formSubmissions", JSON.stringify(existing))
}

export function getFromStorage() {
  return JSON.parse(localStorage.getItem("formSubmissions") || "[]")
}