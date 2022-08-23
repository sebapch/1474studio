// PlayerDetails.js

import React from "react";

function PlayerDetails(props) {
  console.log(props.song.img_src)
  return (
    <div className="music-player--details">
      
      
      <div className="artist-info">
        <h3 className="details-title">{props.song.title}</h3>
        <h4 className="details-artist">{props.song.artist}</h4>
        <div class="line"></div>
        <div class="range"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;