import Head from "next/head";

function Lyriceditjs() {
  return (
    <div>
      <Head>
        <title>Lyrics Edtior</title>
      </Head>
      <div className="top-lyric-edit mx-6 h-16 flex justify-between items-center row">
        <a className="button1" href="/lyricdisplay">
          Close
        </a>
        <div className="top-lyric-edit-right flex gap-6 row">
          <a className="button1" href="/draft">
            Drafts
          </a>
          <div className="text-green">Save</div>
        </div>
      </div>
      <div className="top-lyric-stroke"></div>
      <div className="lyric-edit-box m-5 db">
        <div className="lyric-edit-box-songname">Song Name - DD/MM/YYYY</div>
        <div className="lyric-edit-box-input mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat laborum
        </div>
      </div>
    </div>
  );
}

export default Lyriceditjs;
