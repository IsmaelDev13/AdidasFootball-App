import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import FinalFooter from "../components/FinalFooter";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LastFooter from "../components/LastFooter";
import SignIn from "../components/SignIn";
import TeamFeed from "../components/TeamFeed";

export default function Home({ teams }) {
  // console.log(teams.teams);
  return (
    <div>
      <Head>
        <title>Adidas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto grid  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {teams.teams?.map(({ id, name, crestUrl, founded }) => (
          <TeamFeed
            key={id}
            id={id}
            name={name}
            imageUrl={crestUrl}
            year={founded}
          />
        ))}
      </main>
      <Banner />
      <LastFooter />
      <SignIn />
      <Footer />
      <FinalFooter />
    </div>
  );
}
export async function getServerSideProps(context) {
  const session = await getSession(context);
  const teams = await fetch(
    "https://api.football-data.org/v2/competitions/2000/teams",
    {
      method: "GET",
      headers: { "X-Auth-Token": "9ce7d2cc680e4834a6f05f2d9ddb02c2" },
    }
  ).then((res) => res.json());

  return {
    props: {
      teams,
      session,
    },
  };
}

//Get >> https://api.football-data.org/v2/teams
