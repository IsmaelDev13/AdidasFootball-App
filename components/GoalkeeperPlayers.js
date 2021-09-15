import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "../slices/playerSlice";

function GoalkeeperPlayers({ id, name, country, position }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);

  const selectGoalkeeper = () => {
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
      <h1 className={`${
            added && `bg-blue-500 text-white p-2 rounded-md`
          } font-semibold`}>{name}</h1>

      {!added && (
        <button onClick={selectGoalkeeper} className="add">
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

export default GoalkeeperPlayers;
