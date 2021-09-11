import React, { useEffect, useState } from "react";
import axios from "axios";
import DefenderPlayers from "./DefenderPlayers";
import { useSelector } from "react-redux";
import { selectPlayers } from "../slices/playerSlice";
import FinalTeam from "./FinalTeam";

function TeamSelected({ id, name, imageUrl, year }) {
  const players = useSelector(selectPlayers);
  console.log(players);
  const [uniqueTeams, setUniqueTeams] = useState([]);
  console.log(uniqueTeams);
  useEffect(() => {
    axios
      .get(`https://api.football-data.org/v2/teams/${id}`, {
        method: "GET",
        headers: {
          "X-Auth-Token": "9ce7d2cc680e4834a6f05f2d9ddb02c2",
        },
      })
      .then((res) => {
        // console.log(res.data);
        setUniqueTeams(res.data.squad);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="grid grid-cols-5">
      <img src={imageUrl} alt="" className="h-48 w-48 object-contain " />
      <div className="col-span-3">
        <p>{name}</p>
        <p>{year}</p>
      </div>
      <div>
        {uniqueTeams
          .filter((e) => e.position == "Defender")
          .map(({ id, name, nationality }) => (
            <DefenderPlayers
              key={id}
              id={id}
              name={name}
              country={nationality}
            />
          ))}
      </div>
      <div>
        {players.map((player) => (
          <FinalTeam
            key={player.id}
            id={player.id}
            name={player.name}
            country={player.country}
          />
        ))}
      </div>
    </div>
  );
}

export default TeamSelected;
