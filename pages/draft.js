import Draftblock from "@/components/Draftblock";
import Head from "next/head";

function Draftjs() {
  return (
    <div>
      <Head>
        <title>Song</title>
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
      <Draftblock ddate="12/12/2023" time="2 hours" />
      <Draftblock />
      <Draftblock />
    </div>
  );
}

export default Draftjs;
