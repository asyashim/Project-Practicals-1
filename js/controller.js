import { validateName, validateEmail, validatePassword, validateConfirm, saveToStorage, getFromStorage } from "./model.js"
import { showError, showSuccess, showSuccessMessage, resetForm, renderUsers } from "./view.js"

const form = document.getElementById("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")
const submitBtn = form.querySelector("button[type='submit']")

function isFormValid() {
  return (
    validateName(name.value) &&
    validateEmail(email.value) &&
    validatePassword(password.value) &&
    validateConfirm(password.value, confirmPassword.value)
  )
}

function updateSubmitState() {
  submitBtn.disabled = !isFormValid()
}

// disable on load
updateSubmitState()

// render any existing users from localStorage on page load
renderUsers(getFromStorage())

// re-check on every keystroke
;[name, email, password, confirmPassword].forEach(input => {
  input.addEventListener("input", updateSubmitState)
})

form.addEventListener("submit", function(e){
  e.preventDefault()

  let isValid = true

  if(!validateName(name.value)){
    showError(name, "Name is required")
    isValid = false
  } else {
    showSuccess(name)
  }

  if(!validateEmail(email.value)){
    showError(email, "Invalid email")
    isValid = false
  } else {
    showSuccess(email)
  }

  if(!validatePassword(password.value)){
    showError(password, "Minimum 6 characters")
    isValid = false
  } else {
    showSuccess(password)
  }

  if(!validateConfirm(password.value, confirmPassword.value)){
    showError(confirmPassword, "Passwords do not match")
    isValid = false
  } else {
    showSuccess(confirmPassword)
  }

  if(isValid){
    saveToStorage({ name: name.value, email: email.value })
    renderUsers(getFromStorage())
    showSuccessMessage()
    resetForm(form, [name, email, password, confirmPassword])
    updateSubmitState()
  }
})