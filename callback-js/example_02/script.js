// função que cria botões personalizados, tendo o texto como um parâmetro obrigatório
function newButton(text, callback) {
    const $body = document.querySelector('body')
    const $button = document.createElement('button')
    
    callback($button)

    $button.textContent = text // inserindo o texto no botão
    // inserindo o botão no final do body
    $body.insertAdjacentElement('beforeend', $button) 
    return $button
}

// todas as informações referentes a este botão podem ser criadas via javascript
const login = newButton('Enviar', (button) => {
    button.style.cssText = `
        color: darkgreen;
        font-size: 16px;
        display: inline-block;
        margin-right: 10px;
        transition: 200ms easy-in-out;
    `

    button.addEventListener('click', () => {
        console.log('The click event was setted by callback function!')
    })
})
const singup = newButton('Singup', (button) => {
    button.style.cssText = `
        color: tomato;
        font-size: 16px;
    `
})


// Adicionando um css via Javascript
// login.style.cssText = `
//     background-color: #000;
//     border: none;
//     font-size: 18px;
//     color: #fff;
//     font-weight: bold;
//     font-family: "Open Sans", sans-serif;
//     display: inline-block;
//     padding: 5px;
//     margin-right: 10px;
//     border-radius: 12px;
//     cursor: pointer;
// `


