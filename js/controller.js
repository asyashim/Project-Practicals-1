import { validateName, validateEmail, validatePassword, validateConfirm } from "./model.js"
import { showError, showSuccess } from "./view.js"

const form = document.getElementById("form")
const name = document.getElementById("name")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

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
    alert("Form submitted successfully!")
  }
})