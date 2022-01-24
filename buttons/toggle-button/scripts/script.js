const checkbox = document.querySelector('input[type="checkbox"]')

checkbox.onchange = () => {
  console.log(checkbox.checked)
}
