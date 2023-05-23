function Draftblock({
  songname = "Song Name",
  date = "DD/MM/YYYY",
  time = "X hours ",
}) {
  return ( //Block Draft ในปุ่ม Draft
    <div>
      <div className="draft-block-frame bgeffect">
        <div className="left">
          <div className="only-text-frame">
            <div className="font700">
              {songname} - {date}
            </div>
            <div className="font400 text-grey">Edited {time} ago</div>
          </div>
        </div>
      </div>
      <div className="top-lyric-stroke h05"></div>
    </div>
  );
}

export default Draftblock;
