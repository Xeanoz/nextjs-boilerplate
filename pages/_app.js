import "@/styles/globals.css";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head jsx global>
        {
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        }
      </Head>
      <div id="caution" className="flex flex-col justify-center">
        <div className="flex justify-center items-center w-screen h-screen text-center">
          Please Reduce your width less than 475 px
          <br />
          or Open this on your mobile device
        </div>
      </div>
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  );
}
