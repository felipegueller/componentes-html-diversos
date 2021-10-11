const slideValue = document.querySelector('.slider-value span')
const inputSlider = document.querySelector('.field input')


inputSlider.oninput = () => {
    const value = inputSlider.value
    slideValue.textContent = value
    slideValue.style.left = (value/2) + "%"
    slideValue.classList.add('show')
}

inputSlider.onchange = () => {
    slideValue.classList.remove('show')
}