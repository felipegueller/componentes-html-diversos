const time = 3000,
      images = document.querySelectorAll('#slider img'),
      totalImages = images.length
let currentImageIndex = 0

const nextImage = () => {
    images[currentImageIndex]
        .classList.remove("selected")
    
    currentImageIndex++


    if(currentImageIndex >= totalImages)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

const start = () => {
    setInterval(() => {
        nextImage()
    }, time)
}

window.addEventListener('load', start)