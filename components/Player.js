import { useState } from "react";
function Player({ songname = "Song Name", date = "DD/MM/YYYY" }) {
  const [showImageOne, setShowImageOne] = useState(true);

  const toggleImage = () => {
    setShowImageOne(!showImageOne);
  };

  return (
    <div className="player-frame">
      <div className="song-frame flex justify-between ">
        <div className="left-player flex flex-col gap-1">
          <div className="song-name-player">{songname}</div>
          <div className="song-date-player">Last modified : {date}</div>
        </div>
        <div className="right-player">
          <img src="img/Switch Edit Mode.svg" />
        </div>
      </div>
      <div className="sound-wave flex justify-center mt-3">
        <img src="img/Sound Wave.svg" className="w-screen" />
      </div>
      <div className="button-frame flex flex-row justify-between px-1">
        <img src="img/Remove.svg" className="button5" />
        <img src="img/flag flip.svg" className="button5" />
        <div onClick={toggleImage}>
          {showImageOne ? (
            <img src="img/ButtonPlay.svg" className="button5" alt="play" />
          ) : (
            <img src="img/ButtonPause.svg" className="button5" alt="pause" />
          )}
        </div>
        <img src="img/flag.svg" className="button5" />
        <img src="img/Add.svg" className="button5" />
      </div>
    </div>
  );
}

export default Player;
