import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import FinalAttacker from "./FinalAttacker";
import FinalDeffenders from "./FinalDeffenders";
import FinalGoalkeepers from "./FinalGoalkeepers";
import FinalMidfielder from "./FinalMidfielder";
import { XIcon } from "@heroicons/react/outline";
import { db } from "../firebase";
import { useSession } from "next-auth/client";

function TeamCreated({ team, id }) {
  const [session] = useSession();
  const router = useRouter();
  console.log(team);
  const deleteTeam = () => {
    db.collection("teams")
      .doc(session?.user.email)
      .collection("players")
      .doc(id)
      .delete();
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-evenly relative shadow-md ">
        <XIcon
          onClick={deleteTeam}
          className="h-10 absolute top-2 right-2 cursor-pointer"
        />
        <div className="flex flex-col items-center  p-5">
          <h1 className="text-2xl border-b-2 shadow-lg p-2 rounded-2xl font-serif cursor-pointer">
            Coach
          </h1>
          <img
            className="rounded-full shadow-md cursor-pointer transform transition duration-150 ease-in-out active:scale-125"
            src={session.user?.image}
            alt=""
          />
          <p className="text-xl hover:underline cursor-pointer">
            {session.user?.name}
          </p>
        </div>

        <div className="p-5">
          {team
            .filter((e) => e.position == "Defender")
            .map((player) => (
              <FinalDeffenders
                name={player.name}
                id={player.id}
                country={player.country}
                position={player.position}
              />
            ))}
        </div>
        <div className=" p-5  ">
          {team
            .filter((e) => e.position == "Goalkeeper")
            .map((player) => (
              <FinalGoalkeepers
                name={player.name}
                id={player.id}
                country={player.country}
                position={player.position}
              />
            ))}
        </div>
        <div className="  p-5  ">
          {team
            .filter((e) => e.position == "Midfielder")
            .map((player) => (
              <FinalMidfielder
                name={player.name}
                id={player.id}
                country={player.country}
                position={player.position}
              />
            ))}
        </div>
        <div className=" p-5 ">
          {team
            .filter((e) => e.position == "Attacker")
            .map(({ id, name, country, position }) => (
              <FinalAttacker
                name={name}
                id={id}
                country={country}
                position={position}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default TeamCreated;
