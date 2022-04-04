const form = document.querySelector('main form[name="login"]')

const getData = event => {
  // it doesn't let that page is load
  event.preventDefault()

  const { username, password } = event.target

  console.log('username: ', username.value)
  console.log('password: ', password.value)

  alert(`username: ${username.value}\npassword: ${password.value}`)
}

form.addEventListener('submit', getData)
