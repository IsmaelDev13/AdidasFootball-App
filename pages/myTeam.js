import { getSession, useSession } from "next-auth/client";
import { useRouter } from "next/router";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import Header from "../components/Header";
import TeamCreated from "../components/TeamCreated";
import { db } from "../firebase";
import Head from "next/head";

function MyTeam() {
  const [session] = useSession();
  const router = useRouter();
  const [snapshot] = useCollection(
    db.collection("teams").doc(session?.user.email).collection("players")
  );

  return (
    <div>
      <Head>
        <title>Adidas | My Team</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <h1 className="text-4xl font-bold text-center p-4 shadow-md">My Team</h1>
      <div className="mx-20">
        {snapshot?.docs.map((doc) => (
          <TeamCreated key={doc.id} id={doc.id} team={doc.data().players} />
        ))}
      </div>

      <div className="flex items-center  ">
        <button
          className={`bg-green-500 ${
            !session &&
            "bg-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
          }  p-4 px-8 shadow-md border-2 transform transition duration-200 hover:scale-105 active:scale-95 text-white  ml-20 m-10 font-bold font-serif`}
          onClick={() => router.push("/park")}
        >
          Play
        </button>
      </div>
    </div>
  );
}

export default MyTeam;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
