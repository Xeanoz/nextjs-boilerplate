import Draftblock from "@/components/Draftblock";
import Head from "next/head";

function Draftjs() {
  return ( //หน้าเลือก Draft
    <div>
      <Head>
        <title>Select your draft</title>
      </Head>
      <div className="top-lyric-edit mx-6 h-16 flex justify-between items-center row">
        <a className="button1 w-12" href="/lyricedit">
          Close
        </a>
        <div className="draft-text flex row">
          <div>Drafts</div>
        </div>
        <div className="w-12"></div>
      </div>
      <div className="top-lyric-stroke"></div>
      <Draftblock
        songname="I dreamt about you"
        date="23/05/2023"
        time="2 hours"
      />
      <Draftblock
        songname="I dreamt about you"
        date="23/05/2023"
        time="5 hours"
      />
      <Draftblock
        songname="I dreamt about you"
        date="23/05/2023"
        time="10 hours"
      />
    </div>
  );
}

export default Draftjs;
