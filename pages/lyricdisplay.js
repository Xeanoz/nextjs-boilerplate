import Head from "next/head";
import Player from "@/components/Player";
import Backdown from "@/components/Backdown";
import Lyricboxfull from "@/components/Lyricboxfull";

function Lyricdisplayjs() {
  return ( //หน้าจอโชว์เนื้อเพลงแบบเต็มๆที่มี Player ด้วย <-- กดจาก Block Lyrics เปล่าๆสีเขียวๆ
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
