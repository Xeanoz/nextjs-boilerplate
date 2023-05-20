import Head from "next/head";
import Player from "@/components/Player";
import Backdown from "@/components/Backdown";
import Lyricboxfull from "@/components/Lyricboxfull";

function Lyricdisplayjs() {
  return (
    <div className="wrapper">
      <Head>
        <title>Song Lyric</title>
      </Head>
      <Backdown />
      <Player songname="I dreamt about you" date="23/05/2023" />
      <Lyricboxfull />
    </div>
  );
}

export default Lyricdisplayjs;
