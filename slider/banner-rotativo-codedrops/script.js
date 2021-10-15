const time = 3000,
      images = document.querySelectorAll('#slider img'),
      totalImages = images.length,
      btnOnOff = document.querySelector('input[type="checkbox"]')
let currentImageIndex = 0,
    interval,
    sliderStatus = false

const nextImage = () => {
    images[currentImageIndex]
        .classList.remove("selected")
    
    currentImageIndex++


    if(currentImageIndex >= totalImages)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")

    interval = setTimeout(nextImage, time);
}

const handleSlider = () => {
    sliderStatus = !sliderStatus
    return sliderStatus ? nextImage() : clearTimeout(interval)
}

const start = () => {
    console.log(btnOnOff)
    btnOnOff.onchange = () => handleSlider()
}

window.addEventListener('load', start)