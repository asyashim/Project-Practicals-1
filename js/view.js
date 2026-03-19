export function showError(input, message) {
  const parent = input.parentElement
  const small = parent.querySelector(".error")

  small.innerText = message
  input.style.border = "2px solid red"
}

export function showSuccess(input) {
  const parent = input.parentElement
  const small = parent.querySelector(".error")

  small.innerText = ""
  input.style.border = "2px solid green"
}