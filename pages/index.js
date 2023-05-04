import Nav from "../components/nav";
import Head from "next/head";
import Songblock from "@/components/Songblock";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <Songblock />
    </div>
  );
}

export default Home;
