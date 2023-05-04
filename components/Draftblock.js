function Draftblock({ ddate = "DD/MM/YYYY", time = "X hours " }) {
  return (
    <div>
      <div className="draft-block-frame bgeffect">
        <div className="left">
          <div className="only-text-frame">
            <div className="font700">Song Name {ddate}</div>
            <div className="font400 text-grey">Edited {time} ago</div>
          </div>
        </div>
      </div>
      <div className="top-lyric-stroke h05"></div>
    </div>
  );
}

export default Draftblock;
