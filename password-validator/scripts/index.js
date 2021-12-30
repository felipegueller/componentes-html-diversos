const input = document.querySelector('#password')
const icon = document.querySelector('#icon')

input.oninput = event => {
  const password = event.target.value

  const schema = new passwordValidator()

  schema
    .is()
    .min(10)
    .is()
    .max(100)
    .has()
    .uppercase(1)
    .has()
    .lowercase()
    .has()
    .digits(2)
    .has()
    .not()
    .spaces()
    .is()
    .not()
    .oneOf(['Passw0rd', 'Password123'])

  console.log(schema.validate(password, { details: true }))
}

icon.onclick = () => showPassword()

function showPassword() {
  input.type === 'password' ? (input.type = 'text') : (input.type = 'password')
  toggleIcon()
}

function toggleIcon() {
  icon.classList.toggle('fa-eye')
  icon.classList.toggle('fa-eye-slash')
}
