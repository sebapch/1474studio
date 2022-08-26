import React, { useEffect, useContext } from "react";
import PILLS from "../../songs/PILLS.mp3";
import Playlist from "../playlist/Playlist";
import { UserContext } from "../../context/userContext";
import { BsPlay } from "react-icons/bs";
import { BsPause } from "react-icons/bs";
import "./MusicPlayer.css";

const MusicPlayer = () => {
  const { selectedTrack, start, stop } = useContext(UserContext);

  return (
    <div>
      <h1>MusicPlayer</h1>
      <p>{selectedTrack.titulo}</p>
      <BsPlay onClick={start} fontSize="5rem" />
      <BsPause onClick={stop} fontSize="5rem" />
    </div>
  );
};

export default MusicPlayer;
