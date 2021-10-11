// player object is setting in window object
window.player = {
    cover: document.querySelector(".card-image"),
    title: document.querySelector(".card-content h5"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector(".card-content audio"),
    audioData: audios, // audios is a global objects array
    currentAudio: {},
    currentPlaying: 0, // It is the audio which is playing now
    start() {
      this.update()
      this.audio.onended = () => this.next() // when the audio finishes
    },
    next() {
      this.currentPlaying++
      if(this.currentPlaying === this.audioData.length) this.restart()
      this.update()
      this.audio.play()
    },
    update() {
      // capturing the current audio and defining the attributes
      this.currentAudio = this.audioData[this.currentPlaying] 
      this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`
      this.title.innerText = this.currentAudio.title
      this.artist.innerText = this.currentAudio.artist
      this.audio.src = path(this.currentAudio.file)
    },
    restart() {
      this.currentPlaying = 0
      this.update()
    }
  }
