import Head from "next/head";
import Link from "next/link";

function Uploadjs() {
  return (
    <div className="no-padding ">
      <Head>
        <title>Upload Your Song</title>
      </Head>
      <div className="top-upload flex justify-between items-center">
        <Link className="button1 ml-4 w-12 cancel " href="/">
          Cancel
        </Link>
        <div className="filename">final_draft_imy.mp4</div>
        <div className="button1 flex justify-end save w-12 mr-4">Save</div>
      </div>
      <div className="flex justify-center button1 mt-20">
        <img src="/img/InsertPicture.svg" />
      </div>
      <div className="bottom-upload mx-4">
        <div className="title-box mt-8">
          <div className="title">Title</div>
          <div className="title-input mt-1">I missed you</div>
        </div>
        <div className="mt-5">
          <div className="title">Note</div>
          <div className="note-input mt-1 leading-6 mb-8">
            Descrpition about this song or note something here!
          </div>
        </div>
      </div>
    </div>
  );
}

export default Uploadjs;
