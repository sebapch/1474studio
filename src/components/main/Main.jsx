import React, {useState, useEffect} from 'react'
import './Main.css';
import Player from '../player/Player'
import Baguettes from '../../songs_images/baguettes.jpg'

const Main = () => {

  const [songs,setSongs] = useState([

    {
        "title": "BAGUETTES",
        "artist": "1474STUDIO",
        "album": " FREE",
        "track": "BAGUETTES",
        "year": "1",
        "img_src": {Baguettes},
        "src": "./songs/$orries.mp3"
    },
    {
        "title": "[oops]",
        "artist": "potsu",
        "album": "[oops]",
        "track": "1",
        "year": "",
        "img_src": "./songs_images/[oops]_Cover (front)_e.jpg",
        "src": "./songs/[oops].mp3"
    },
]);

const [currentSongIndex,setCurrentSongIndex] = useState(0);
const [nextSongIndex,setNextSongIndex] = useState(currentSongIndex + 1);


useEffect(()=>{
  setNextSongIndex(()=>{
  if (currentSongIndex + 1 >songs.length - 1 ){
    return 0;
  } else{
    return currentSongIndex + 1;
  }
});
},[currentSongIndex])

  return (
    <div className="App">
      <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs} />
    </div>
  )
}

export default Main