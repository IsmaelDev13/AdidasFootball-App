import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import TeamSelected from "../components/TeamSelected";
import { addPlayer } from "../slices/playerSlice";

import { selectTeams } from "../slices/teamSlice";

function Team({ uniqueTeam }) {
  const teams = useSelector(selectTeams);
  const dispatch = useDispatch();
  const [showTeam, setShowTeam] = useState(false);

  // useEffect(() => {
  //   dispatch(addPlayer(players));
  // }, [players]);

  return (
    <div>
      <Header setShowTeam={setShowTeam} showTeam={showTeam} />
      <div>
        <h1 className="text-center uppercase font-sans text-3xl font-extrabold p-5 shadow-md">
          {" "}
          {teams.length === 0
            ? "You have selected no teams..."
            : "Teams Selection"}
        </h1>
        {teams.map((team, i) => (
          <TeamSelected
            key={team.id}
            id={team.id}
            name={team.name}
            imageUrl={team.imageUrl}
            year={team.year}
            setShowTeam={setShowTeam}
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
