import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TeamSelected from "../components/TeamSelected";

import { selectTeams } from "../slices/teamSlice";

function Team({ uniqueTeam }) {
  const teams = useSelector(selectTeams);

  return (
    <div>
      <Header />
      <div>
        <h1>Your Teams</h1>
        {teams.map((team, i) => (
          <TeamSelected
            key={team.id}
            id={team.id}
            name={team.name}
            imageUrl={team.imageUrl}
            year={team.year}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;

// export async function getServerSideProps(context) {
//   const uniqueTeam = await fetch(
//     `https://api.football-data.org/v2/teams/${id}`,
//     {
//       method: "GET",
//       headers: { "X-Auth-Token": "9ce7d2cc680e4834a6f05f2d9ddb02c2" },
//     }
//   ).then((res) => res.json());

//   return {
//     props: {
//       uniqueTeam,
//     },
//   };
// }
