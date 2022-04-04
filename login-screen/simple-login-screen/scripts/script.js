const form = document.querySelector('main form[name="login"]')

const getData = event => {
  // it doesn't let that page is load
  event.preventDefault()
  const target = event.target

  console.log(target.username.value)
  console.log(target.password.value)
}

form.addEventListener('submit', getData)
