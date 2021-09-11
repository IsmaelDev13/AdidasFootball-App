import React, { useEffect, useState } from "react";
import axios from "axios";

function TeamSelected({ id, name, imageUrl, year }) {
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
        <select onSl name="team" id="">
          {uniqueTeams
            .filter((e) => e.position == "Defender")
            .map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
        <select onSl name="team" id="">
          {uniqueTeams
            .filter((e) => e.position == "Midfielder")
            .map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
        <select onSl name="team" id="">
          {uniqueTeams
            .filter((e) => e.position == "Goalkeeper")
            .map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
        <select onSl name="team" id="">
          {uniqueTeams
            .filter((e) => e.position == "Attacker")
            .map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

export default TeamSelected;
