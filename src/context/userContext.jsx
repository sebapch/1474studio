import React, {createContext, useState, useEffect} from 'react'

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const hola = 'hola';
    const [selectedTrack, setSelectedTrack] = useState('')
    const [mp3, setMp3] = useState('')
    const [audio, setAudio] = useState(new Audio(mp3))
    const [isPlaying, setIsPlaying] = useState(false)


   

    useEffect(() => {
        let audio = new Audio(mp3)
        console.log(audio)
       
        audio.play()
    }, [mp3])
    

    const start = () => {
        audio.play()
      }
  
    const stop = () =>{
        audio.pause()
    }

    return (
        <UserContext.Provider value={{
          hola,
          setSelectedTrack,
          selectedTrack,
          mp3,
          setMp3,
          isPlaying,
          setIsPlaying,
          audio,
          setAudio
          
        }}>
            { children }
        </UserContext.Provider>
      )
}
