function Songblock({
  songname = "Song Name",
  date = "DD/MM/YYYY",
  ImageUrl = "/img/greenreg.svg/",
}) {
  return ( //Block ของเพลงในหน้า Home
    <div className="Songblock-frame bgeffect px-4">
      <a className="left" href="/songdisplay1">
        <div className="block-pic-max-size">
          <img src={ImageUrl} />
        </div>
        <div className="only-text-frame">
          <div className="font700">{songname}</div>
          <div className="font400 text-grey">Last Modified : {date}</div>
        </div>
      </a>
      <div className="right">
        <a href="/detail" className="threedots button3">
          <img src="/img/3Dots.svg" />
        </a>
      </div>
    </div>
  );
}

export default Songblock;
