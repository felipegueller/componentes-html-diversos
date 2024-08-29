// 1 - Seleciona os elementos em tela
const input = document.querySelector('#password')
const iconBox = document.querySelector('.icon-box')
const icon = document.querySelector('#icon')

// 2 - Cria a função que mostra a senha
function showPassword() {
  input.type === 'password' ? (input.type = 'text') : (input.type = 'password')
  toggleIcon()
}

function toggleIcon() {
  icon.classList.toggle('fa-eye')
  icon.classList.toggle('fa-eye-slash')
}

// 3 - Adiciona o evento de clique no ícone
iconBox.addEventListener('click', showPassword)