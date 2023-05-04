import Head from "next/head";

function Uploadjs() {
  return (
    <div className="no-padding ">
      <Head>
        <title>Upload Your Song</title>
      </Head>
      <div className="top-upload flex justify-between items-center">
        <a className="button1 ml-4 w-24 cancel db" a href="/">
          Cancel
        </a>
        <div className="filename db">Filename.mp4</div>
        <div className="button1 flex justify-end save w-24 db mr-4">Save</div>
      </div>
      <div className="flex justify-center button1 mt-20">
        <img src="/img/InsertPicture.svg" />
      </div>
      <div className="bottom-upload mx-4">
        <div className="title-box mt-8">
          <div className="title">Title</div>
          <div className="title-input mt-1">Filename</div>
        </div>
        <div className="mt-5">
          <div className="title">Note</div>
          <div className="note-input mt-1 leading-6">
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

export default Uploadjs;
