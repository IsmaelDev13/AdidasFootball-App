import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer, removePlayer } from "../slices/playerSlice";

function DefenderPlayers({ id, name, country, position }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const selectPlayer = () => {
    const uniquePlayer = {
      id,
      name,
      country,
      position,
    };
    dispatch(addPlayer(uniquePlayer));

    setAdded(true);
  };
  const unselectPlayer = () => {
    dispatch(removePlayer({ id }));
    setAdded(false);
  };
  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <p
          className={`${
            added && `bg-blue-500 text-white p-2 rounded-md`
          } font-semibold`}
        >
          {name}
        </p>

        {!added && (
          <button onClick={selectPlayer} className="add ">
            + Add
          </button>
        )}
        {added && (
          <button onClick={unselectPlayer} className="remove">
            Remove
          </button>
        )}
      </div>
    </>
  );
}

export default DefenderPlayers;
