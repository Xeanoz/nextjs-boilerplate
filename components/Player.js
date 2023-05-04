import { useState } from "react";
function Player({ songname = "Song Name", date = "DD/MM/YYYY" }) {
  const [showImageOne, setShowImageOne] = useState(true);

  const toggleImage = () => {
    setShowImageOne(!showImageOne);
  };
  return (
    <div className="player-frame db">
      <div className="song-frame flex justify-between ">
        <div className="left-player">
          <div className="song-name-player">{songname}</div>
          <div className="song-date-player">Last modified : {date}</div>
        </div>
        <div className="right-player">
          <img src="img/Switch Edit Mode.svg" />
        </div>
      </div>
      <div className="sound-wave flex justify-center db mt-3">
        <img src="img/Sound Wave.svg" className="w-[80%]" />
      </div>
      <div className="button-frame flex row justify-between">
        <img src="img/Remove.svg" />
        <img src="img/flag flip.svg" />
        <div onClick={toggleImage}>
          {showImageOne ? (
            <img src="img/ButtonPlay.svg" alt="play" />
          ) : (
            <img src="img/ButtonPause.svg" alt="pause" />
          )}
        </div>
        <img src="img/flag.svg" />
        <img src="img/Add.svg" />
      </div>
    </div>
  );
}

export default Player;
