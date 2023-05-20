import Head from "next/head";
import Backdown from "@/components/Backdown";

function Deatiljs() {
  return (
    <div className="wrapper">
      <Head>
        <title>Song Detail</title>
      </Head>
      <Backdown />
      <div className="flex button2 justify-center">
        <img src="/img/InsertPicture.svg/" />
      </div>
      <div className="flex flex-col items-center mt-6">
        <div className="detail-bar flex row gap-2">
          <div className="detail-song-name">I dreamt about you</div>
          <img src="/img/pen.svg/" />
        </div>
        <div className="font400 text-grey pt-1">Date Added : 11/12/2021</div>
        <div className="font400 text-grey pt-1">Last Modified : 23/05/2023</div>
      </div>
      <div className="detail-icon-bar font700 text-green flex flex-row justify-center items-end gap-8 mt-10">
        <a
          className="view-lyrics button3 flex flex-col gap-2 items-center w-screen"
          href="/lyricdisplay"
        >
          <div className="max-h-8">
            <img src="/img/alignicon.svg/" />
          </div>
          View Lyrics
        </a>
        <a
          className="view-songs button3 flex flex-col gap-2 items-center w-screen"
          href="/songdisplay1"
        >
          <div className="max-h-8">
            <img src="/img/eightnote.svg/" />
          </div>
          View Song
        </a>
        <a
          className="edit-lyircs button3 flex flex-col gap-2 items-center w-screen"
          href="/lyricedit"
        >
          <div className="max-h-8">
            <img src="/img/specialpen.svg/" />
          </div>
          Edit Lyrics
        </a>
      </div>
      <div>
        <div className="note-box button2">
          <div className="top-lyric-box flex justify-between">
            <div className="lyric-head">Note</div>
            <div className="button4" href="/lyricedit">
              <img src="/img/lyrics-edit-butt.svg" />
            </div>
          </div>
          <div className="lyric-box-box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat laborum.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deatiljs;
