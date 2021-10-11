// the path function adds the correct path at the file
const path = file => {
    return `files/${file}`
}

const secondsToMinutes = time => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${("0" + minutes).slice(-2)}:${("0" + seconds).slice(-2)}` 
}

export {
    path,
    secondsToMinutes
}