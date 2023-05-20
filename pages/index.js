import Head from "next/head";
import Accountsblock from "@/components/Accountsblock";
import Songblock from "@/components/Songblock";
import Addsongblock from "@/components/Addsongblock";
import Bottomplayer from "@/components/Bottomplayer";

function Home() {
  return (
    <div>
      <Head>
        <title>Tech Dsgn Exp</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="mt-16 mx-4">
        <Accountsblock />
      </div>
      <div className="your-name mx-4">Your Song</div>
      <div className="recents flex row mx-4">
        <img src="/img/small down.svg/" />
        <div className="pl-2">Recents</div>
      </div>
      <Songblock
        songname="I dreamt about you"
        date="23/05/2023"
        ImageUrl="/img/picv5.svg/"
      />
      <Songblock
        songname="Maybe she is gone before you know"
        date="14/02/2023"
        ImageUrl="/img/picv1.svg/"
      />
      <Songblock
        songname="Tell me before"
        date="11/02/2022"
        ImageUrl="/img/picv2.svg/"
      />
      <Songblock
        songname="Hyperventilation"
        date="30/01/2022"
        ImageUrl="/img/picv4.svg/"
      />
      <Songblock
        songname="Withered"
        date="21/01/2022"
        ImageUrl="/img/picv3.svg/"
      />
      <Songblock />
      <Songblock />
      <Songblock />
      <Addsongblock />
      <div className="py-24"></div>
      <div className="background-fill"></div>
      <Bottomplayer
        songname="I dreamt about you"
        date="23/05/2023"
        ImageUrl="/img/picv5.svg/"
      />
    </div>
  );
}

export default Home;
