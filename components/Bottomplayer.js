function Bottomplayer({
  songname = "Song Name",
  date = "DD/MM/YYYY",
  ImageUrl = "/img/greenreg.svg/",
}) {
  return (
    <div className="bottom-songblock-frame py-2 flex w-screen px-4">
      <a className="left" href="/songdisplay1">
        <div className="bottom-pic-max-size">
          <img src={ImageUrl} />
        </div>
        <div className="only-text-frame">
          <div className="font700">{songname}</div>
          <div className="font400 text-grey">Last Modified : {date}</div>
        </div>
      </a>
      <div className="right">
        <div className="threedots">
          <img src="/img/playsmall.svg" />
        </div>
      </div>
    </div>
  );
}

export default Bottomplayer;
