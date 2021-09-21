const btnMobile = document.getElementById('btn-mobile')

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')

    // Adicionando uma classe CSS, demoninada 'active'
    // toggle -> adicione caso tenha, remova caso não tenha.
    nav.classList.toggle('active')

    // Adicionando a mudança do aria-expanded para parte de acessibilidade (Arias)
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expanded', active)

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu')
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu')
    }
}

// Quando o evento do click for identificado, a função toggleMenu é chamada
btnMobile.addEventListener('click', toggleMenu)
btnMobile.addEventListener('touchstart', toggleMenu)