function Addsongblock() {
  return (
    <a className="Songblock-frame bgeffect px-4" href="/upload">
      <div className="left">
        <div>
          <img src="/img/addedpic.svg" />
        </div>
        <div className="only-text-frame">
          <div className="font400 text-grey">Added your new song</div>
        </div>
      </div>
    </a>
  );
}

export default Addsongblock;
