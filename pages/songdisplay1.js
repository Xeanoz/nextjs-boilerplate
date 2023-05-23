import Head from "next/head";
import Player from "@/components/Player";
import Backdown from "@/components/Backdown";

function Songdisplayjs() {
  return ( //หน้า Display เพลง <-- กดจาก Player ข้างล่างหรือ Block เพลงในหน้าโฮม
    <div className="wrapper">
      <Head>
        <title>Song</title>
      </Head>
      <div className="mg48">
        <Backdown />
      </div>
      <div className="flex justify-center">
        <img src="/img/song-pic-big-2.svg/" />
      </div>
      <Player songname="I dreamt about you" date="23/05/2023" />
      <a href="/lyricdisplay">
        <div class="lyric-box button2">
          <div class="lyric-head">Lyrics</div>
        </div>
      </a>
    </div>
  );
}

export default Songdisplayjs;
