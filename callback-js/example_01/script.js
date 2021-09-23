const $button = document.querySelector('button')

const handleClick = () => {
    console.log('The button was clicked!')
}

$button.addEventListener('click', handleClick)


// Forma padrão
// $button.addEventListener('click', function () {
//     console.log('The button was clicked!')
// })