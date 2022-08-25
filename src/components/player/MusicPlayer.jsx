import React from 'react'
import PILLS from '../../songs/PILLS.mp3'

const MusicPlayer = () => {
    let audio = new Audio(PILLS)

    const start = () => {
        audio.play()
      }

    const stop = () =>{
        audio.pause()
    }

  return (
    <div>
        <h1>MusicPlayer</h1>
        <button onClick={start}>Play</button>
        <button onClick={stop}>Stop</button>

    </div>
  )
}

export default MusicPlayer