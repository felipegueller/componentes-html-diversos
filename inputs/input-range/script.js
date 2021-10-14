const slideValue = document.querySelector('.slider-value span')
const inputSlider = document.querySelector('.field input')


inputSlider.oninput = () => {
    const value = inputSlider.value
    slideValue.textContent = value
    slideValue.style.left = (value/2) + "%"
    slideValue.classList.add('show')
    changeProgressBarColor(inputSlider)
}

inputSlider.onchange = () => {
    slideValue.classList.remove('show')
    changeProgressBarColor(inputSlider)
}

function changeProgressBarColor(input) {
    const percentage = ((input.value - input.min) / (input.max - input.min) * 100 )
    const color = `linear-gradient(90deg, #664AFF ${percentage}%, #DDD ${percentage}%)`
    input.style.background = color
}