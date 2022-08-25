import React from 'react'
import {Container, Col, Row } from 'react-bootstrap'
import './Playlist.css'
import PILLSPIC from '../../songs_covers/PILLSPic.jpg'

const lista = [
    {
    img: {PILLSPIC},
    titulo: 'PILLS',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark'
},
{
    img: {PILLSPIC},
    titulo: 'PILLS',
    tiempo: '2:40',
    BPM: '120',
    TAGS: '#dark'
},

]


const Playlist = () => {
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
                <label>Play</label> 
            </Col>
        </Row>
        {lista.map((track, index)=>(

        <Row className='playlistRow' >
            <Col>
               <img src={PILLSPIC} alt='cover' width='50px' />
            </Col>
            <Col>
                <label>{track.titulo}</label> 
            </Col>
            <Col>
                <label>{index}</label> 
            </Col>
            <Col>
                <label>BPM</label> 
            </Col>
            <Col>
                <label>Tags</label> 
            </Col>
            <Col>
                <label>Play</label> 
            </Col>
        </Row>
        ))}
    </Container>
    </div>
  )
}

export default Playlist