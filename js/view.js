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

export function showSuccessMessage() {
  const msg = document.getElementById("successMessage")
  msg.style.display = "block"
  setTimeout(() => { msg.style.display = "none" }, 3000)
}

export function resetForm(form, inputs) {
  form.reset()
  inputs.forEach(input => {
    input.style.border = ""
  })
}

export function renderUsers(users) {
  const userList = document.getElementById("userList")
  const tbody = document.getElementById("userTableBody")

  if(users.length === 0) {
    userList.style.display = "none"
    return
  }

  tbody.innerHTML = users.map((user, i) => `
    <tr>
      <td>${i + 1}</td>
      <td>${user.name}</td>
      <td>${user.email}</td>
    </tr>
  `).join("")

  userList.style.display = "block"
}