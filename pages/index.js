import Head from "next/head";
import Accountsblock from "@/components/Accountsblock";
import Songblock from "@/components/Songblock";
import Addsongblock from "@/components/Addsongblock";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
      </Head>
      <div className="mt-16 mx-4">
        <Accountsblock />
      </div>
      <div className="your-name mx-4 db ">Your Name</div>
      <div className="recents flex row mx-4 db">
        <img src="/img/small down.svg/" />
        <div className="pl-2">Recents</div>
      </div>
      <Songblock songname="Trauma Night" date="12/03/2023" />
      <Songblock songname="All my fault" date="13/01/2023" />
      <Songblock
        songname="Maybe she is gone before you know"
        date="14/12/2022"
      />
      <Songblock songname="Last night i dreamt of you" date="11/02/2021" />
      <Songblock songname="Hyperventilation" date="28/01/2021" />
      <Songblock />
      <Addsongblock />
    </div>
  );
}

export default Home;
