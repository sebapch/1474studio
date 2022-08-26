import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/Nav'
import Contact from './components/contact/Contact'
import Playlist from './components/playlist/Playlist';
import MusicPlayer from './components/player/MusicPlayer';


function App() {


  return (
    <>
      <Nav />
   
      <Playlist/>
      <MusicPlayer />
      <Contact />
    </>
  );
}

export default App;
