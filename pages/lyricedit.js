import Head from "next/head";

function Lyriceditjs() {
  return (
    <div>
      <Head>
        <title>Lyrics Edtior</title>
      </Head>
      <div className="top-lyric-edit2 h-16 flex justify-between items-center row">
        <a className="button1 mx-6" href="/lyricdisplay">
          Close
        </a>
        <div className="top-lyric-edit-right flex mx-6 gap-6 row">
          <a className="button1" href="/draft">
            Drafts
          </a>
          <div className="text-green button3">Save</div>
        </div>
      </div>
      <div className="lyric-edit-box m-5">
        <div className="lyric-edit-box-songname">
          I dreamt about you - 23/05/2023
        </div>
        <div className="lyric-edit-box-input mt-4">
          Our story has been around for a long time <br />
          She’s gone away She’s gone away <br />
          I’ve known all of this time I should move on <br />
          Don't dwell on the past. <br />
          <br />
          Try to forget picture of you who love me <br />
          How can I forget you <br />
          Or is the heart still stubborn to keep you <br />
          What do i have to do <br />
          <br />
          I don’t know why I still can’t to forget you <br />
          Because last night I dreamt of you <br />
          I dreamt of you <br />
          I dreamt of you <br />
          It’s you <br />
          still you <br />
          <br />
          Or I keep it with pictures of the past that once loved each other I
          just want to delete to forget it all <br />
          I don't want to go back and miss her. repeat the pain in the heart
          <br />
          <br />
          I just want to forget you <br />
          What do i have to do <br />
          <br />
          I don’t know why I still can’t to forget you <br />
          Because last night I dreamt of you <br />
          I dreamt of you <br />
          I dreamt of you <br />
          It’s you <br />
          still you <br />
        </div>
      </div>
    </div>
  );
}

export default Lyriceditjs;
