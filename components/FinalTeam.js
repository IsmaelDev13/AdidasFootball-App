import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPlayers } from "../slices/playerSlice";

function FinalTeam({ id, name, country, position }) {
  // const [goalKepper, setGoalkeeper] = useState([]);
  // const players = useSelector(selectPlayers);

  // console.log(players);
  // useEffect(() => {
  //   const goalKeppers = players
  //     // .map((player) => player.position)
  //     .filter((player) => player.position == "Goalkeeper");
  //   setGoalkeeper(goalKeppers);
  // }, []);

  return (
    <div>
      <div className="flex items-center space-x-2">
        <p>
          {name}
          <br />{" "}
        </p>
        <span className="text-xs">Position: </span>
        <p>{position}</p>
      </div>
      <div></div>
    </div>
  );
}

export default FinalTeam;
