import React from 'react'
import {Container, Col, Row } from 'react-bootstrap'

const Playlist = () => {
  return (
    <div style={{backgroundColor: 'purple', color: 'white'}}>
    <Container style={{height: '50vh'}}>
        <Row>
            <Col>
                <label>NOMBRE</label> 
            </Col>
            <Col>
                <label>ESTILO</label> 
            </Col>
            <Col>
                <label>LABEL</label> 
            </Col>
            <Col>
                <label>PLAY</label> 
            </Col>
        </Row>
    </Container>
    </div>
  )
}

export default Playlist