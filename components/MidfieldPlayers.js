import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "../slices/playerSlice";

function MidfielderPlayers({ id, name, country, position }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const selectMidfielder = () => {
    const uniqueGoalkeeper = {
      id,
      name,
      country,
      position,
    };
    dispatch(addPlayer(uniqueGoalkeeper));

    setAdded(true);
  };
  const unselectPlayer = () => {
    dispatch(removePlayer({ id }));
    setAdded(false);
  };

  return (
    <div className="flex items-center justify-between space-y-2">
      <h1 className="font-semibold">{name}</h1>

      {!added && (
        <button onClick={selectMidfielder} className="add">
          + Add
        </button>
      )}
      {added && (
        <button onClick={unselectPlayer} className="remove">
          Remove
        </button>
      )}
    </div>
  );
}

export default MidfielderPlayers;
