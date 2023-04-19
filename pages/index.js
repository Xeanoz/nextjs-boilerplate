import Nav from "../components/nav";
import Head from "next/head";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Nav />
      <h1 className="text-9xl">Tenz</h1>
    </div>
  );
}

export default Home;
