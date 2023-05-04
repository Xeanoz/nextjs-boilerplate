import Head from "next/head";
import Accountsblock from "@/components/Accountsblock";
import Player from "@/components/Player";
import Backdown from "@/components/Backdown";

function Songdisplayjs() {
  return (
    <div className="wrapper">
      <Head>
        <title>Song</title>
      </Head>
      <div className="mg48">
        <Backdown />
      </div>
      <div className="flex justify-center">
        <img src="https://placehold.co/345x345" />
      </div>
      <Player />
      <a href="/lyricdisplay">
        <div class="lyric-box button2">
          <div class="lyric-head">Lyrics</div>
        </div>
      </a>
    </div>
  );
}

export default Songdisplayjs;
