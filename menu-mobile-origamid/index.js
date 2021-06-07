const btnMobile = document.getElementById('btn-mobile')

function toggleMenu() {
    const nav = document.getElementById('nav')

    // Adicionando uma classe CSS, demoninada 'active'
    // toggle -> adicione caso tenha, remova caso não tenha.
    nav.classList.toggle('active')
}

// Quando o evento do click for identificado, a função toggleMenu é chamada
btnMobile.addEventListener('click', toggleMenu)