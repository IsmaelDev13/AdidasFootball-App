import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import SideTeam from "../components/SideTeam";
import TeamSelected from "../components/TeamSelected";
import { selectPlayers } from "../slices/playerSlice";
import Head from "next/head";

import { selectTeams } from "../slices/teamSlice";

function Team() {
  const teams = useSelector(selectTeams);
  const [showTeam, setShowTeam] = useState(false);
  const players = useSelector(selectPlayers);
  const dispatch = useDispatch();

  return (
    <div>
      <Head>
        <title>Adidas | Team Selection</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header showTeam={showTeam} setShowTeam={setShowTeam} />
      <div>
        <h1 className="text-center uppercase font-sans text-3xl font-extrabold p-5 shadow-md">
          {" "}
          {teams.length === 0
            ? "You have selected no teams..."
            : "Teams Selection"}
        </h1>
        {teams?.map((team, i) => (
          <TeamSelected
            key={team.id}
            id={team.id}
            name={team.name}
            imageUrl={team.imageUrl}
            year={team.year}
          />
        ))}
      </div>
      <div>
        {players?.map((player) => (
          <SideTeam
            key={player.id}
            id={player.id}
            name={player.name}
            country={player.country}
            position={player.position}
            setShowTeam={setShowTeam}
            showTeam={showTeam}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
