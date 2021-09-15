import React, { useEffect, useState } from "react";
import axios from "axios";
import DefenderPlayers from "./DefenderPlayers";
import { useSelector } from "react-redux";
import { selectPlayers } from "../slices/playerSlice";
import GoalkeeperPlayers from "./GoalkeeperPlayers";
import MidfielderPlayers from "./MidfieldPlayers";
import AttackerPlayers from "./AttackerPlayers";
import { XCircleIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { removeTeam } from "../slices/teamSlice";
import SideTeam from "./SideTeam";

function TeamSelected({ id, name, imageUrl, year, players }) {
  // const players = useSelector(selectPlayers);
  // console.log(players);

  const [uniqueTeams, setUniqueTeams] = useState([]);
  const dispatch = useDispatch();
  const deleteTeam = () => {
    dispatch(removeTeam({ id }));
  };
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

  // useEffect(() => {
  //   setUniqueTeams(players);
  // }, []);
  return (
    <div className="flex flex-col lg:flex-row  items-center p-5 border-b-2 hover:shadow-xl overflow-x-hidden  space-x-10 relative  ">
      <img
        src={imageUrl}
        alt=""
        className="h-48 w-48 object-contain  border-2 shadow-md rounded-3xl bg-gray-50 transform transition-all duration-150 ease-in-out hover:animate-bounce "
      />
      <div className="p-2">
        <p className="font-semibold">{name}</p>
        <p className="text-gray-500">{year}</p>
      </div>
      <div onClick={deleteTeam}>
        <XCircleIcon className="h-10 absolute right-14 top-6 hover:text-green-600 cursor-pointer" />
      </div>
      <div className="etiquette">
        <h1 className="text-2xl cursor-pointer hover:underline mb-5 ">
          Defenders
        </h1>
        {uniqueTeams
          .filter((e) => e.position == "Defender")
          .map(({ id, name, nationality, position }) => (
            <DefenderPlayers
              key={id}
              id={id}
              name={name}
              country={nationality}
              position={position}
            />
          ))}
      </div>
      <div className="etiquette">
        <h1 className="text-2xl cursor-pointer hover:underline mb-5 ">
          Midfielders
        </h1>
        {uniqueTeams
          .filter((e) => e.position == "Midfielder")
          .map(({ id, name, nationality, position }) => (
            <MidfielderPlayers
              key={id}
              id={id}
              name={name}
              country={nationality}
              position={position}
            />
          ))}
      </div>
      <div className="etiquette">
        <h1 className="text-2xl cursor-pointer hover:underline mb-5">
          Goalkeepers
        </h1>
        {uniqueTeams
          .filter((e) => e.position == "Goalkeeper")
          .map(({ id, name, nationality, position }) => (
            <GoalkeeperPlayers
              key={id}
              id={id}
              name={name}
              country={nationality}
              position={position}
            />
          ))}
      </div>
      <div className="etiquette">
        <h1 className="text-2xl cursor-pointer hover:underline mb-5">
          Attackers
        </h1>
        {uniqueTeams
          .filter((e) => e.position == "Attacker")
          .map(({ id, name, nationality, position }) => (
            <AttackerPlayers
              key={id}
              id={id}
              name={name}
              country={nationality}
              position={position}
            />
          ))}
        <SideTeam />
      </div>
    </div>
  );
}

export default TeamSelected;

// export async function getServerSideProps(context) {
//   const players = await fetch(`https://api.football-data.org/v2/teams/${id}`, {
//     method: "GET",
//     headers: {
//       "X-Auth-Token": "9ce7d2cc680e4834a6f05f2d9ddb02c2",
//     },
//   }).then((res) => res.json());

//   return {
//     props: {
//       players,
//     },
//   };
// }
