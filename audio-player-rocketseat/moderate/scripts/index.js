// the path function adds the correct path at the file
const path = file => {
  return `files/${file}`
}

// When the page is loaded
window.addEventListener('load', player.start())