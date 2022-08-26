import React, {useState, useContext} from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import './Playlist.css'
import { UserContext } from "../../context/userContext"; 
import PILLS from '../../songs/PILLS.mp3'
import PILLSPIC from '../../songs_covers/PILLSPic.jpg'
import MALBEC from '../../songs/MALBEC.mp3'
import MALBECPIC from '../../songs_covers/MALBEC.jpg'
import LIGHTITUP from '../../songs/LIGHTITUP.mp3'
import LIGHTPIC from '../../songs_covers/LIGHT.jpg'
import BAGUETTES from '../../songs/BAGUETTES.mp3'
import BAGUETTESPIC from '../../songs_covers/Baguettes.jpg'
import { BsPlay } from 'react-icons/bs';
import { BsPause } from 'react-icons/bs';



const lista = [
    {
    
    img: PILLSPIC,
    titulo: 'PILLS',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark',
    song: PILLS
},
{
    
    img: MALBECPIC,
    titulo: 'MALBEC',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark',
    song: MALBEC
},
{
    
    img: LIGHTPIC,
    titulo: 'LIGHT IT UP',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark',
    song: LIGHTITUP
},
{
    
    img: BAGUETTESPIC,
    titulo: 'BAGUETTES',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark',
    song: BAGUETTES
}

]


const Playlist = () => {
    
    const {selectedTrack, setSelectedTrack, mp3, setMp3, isPlaying, setIsPlaying, audio, setAudio } = useContext(UserContext);


    const playTrack = (i) =>{
        audio.pause()
        setIsPlaying(!isPlaying);
        setSelectedTrack(lista[i])
        setMp3(lista[i].song)
        setAudio(lista[i].song)
        audio.play()
    }

    console.log(audio);

  return (
    <div className='playlist-container'>
    <Container style={{paddingTop: '2rem'}}>
        <Row className='playlistRow' >
            <Col>
                <label>img</label> 
            </Col>
            <Col>
                <label>Titulo</label> 
            </Col>
            <Col>
                <label>Tiempo</label> 
            </Col>
            <Col>
                <label>BPM</label> 
            </Col>
            <Col>
                <label>Tags</label> 
            </Col>
            <Col>
                <label ></label> 
            </Col>
        </Row>
        {lista.map((track, index)=>(
            
        <Row className='playlistRow' key={index}>
            <Col>
               <img src={track.img} alt='cover' width='50px' />
            </Col>
            <Col>
                <label>{track.titulo}</label> 
            </Col>
            <Col>
                <label>{track.tiempo}</label> 
            </Col>
            <Col>
                <label>{track.BPM}</label> 
            </Col>
            <Col>
                <label>{track.TAGS}</label> 
            </Col>
            <Col>
                <button onClick={()=>playTrack(index)}>{isPlaying ? <BsPlay/> : <BsPause/>}</button>
            </Col>
        </Row>
        ))}
    </Container>
    </div>
  )
}

export default Playlist