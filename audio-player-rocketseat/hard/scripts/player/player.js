import audios from '../data.js'
import { path, secondsToMinutes } from '../../utils/utils.js'
import elements from './playerElements.js'

export default {
    audioData: audios, // audios is a global objects array
    currentAudio: {},
    currentPlaying: 0, // It is the audio which is playing now
    isPlaying: false,
    start() {
      // Send and reciving the this access to the function in other module
      elements.get.call(this)
      this.update()
    },
    play() {
      this.isPlaying = true
      this.audio.play()
      this.playPause.innerText = "pause"
    },
    pause() {
      this.isPlaying = false
      this.audio.pause()
      this.playPause.innerText = "play_arrow"
    },
    setVolume(value) {
      const volIcon = value > 50 ? 'volume_up' 
        : value > 0 ? 'volume_down' : 'volume_off'
      this.volumeBtn.innerText = volIcon

      // audio.volume has a range from 0 to 1
      this.audio.volume = value / 100;
    },
    setSeek(value) {
      this.audio.currentTime = value
    },
    toggleMute() { 
      this.audio.muted = !this.audio.muted
      this.volumeBtn.innerText = this.audio.muted ? 'volume_off' : 'volume_up'
    },
    togglePlayPause() {
      return this.isPlaying ? this.pause() : this.play()
    },
    timeUpdate() {
      this.currentDuration.innerText = secondsToMinutes(this.audio.currentTime)
      this.seekbar.value = this.audio.currentTime
    },
    next() {
      this.currentPlaying++
      if(this.currentPlaying === this.audioData.length) this.restart()
      this.update()
      this.play()
    },
    update() {
      // capturing the current audio and defining the attributes
      this.currentAudio = this.audioData[this.currentPlaying] 
      this.cover.style.background = `url('${path(this.currentAudio.cover)}') no-repeat center center / cover`
      this.title.innerText = this.currentAudio.title
      this.artist.innerText = this.currentAudio.artist

      // the call() method returns the this access with audio element added
      elements.createAudioElement.call(this, path(this.currentAudio.file))
      this.audio.onloadeddata = () => {
        // when the metadatas of the audio is loaded
        elements.actions.call(this) 
      }
    },
    restart() {
      this.currentPlaying = 0
      this.update()
    }
  }
