import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPlayer } from "../slices/playerSlice";

function DefenderPlayers({ id, name, country }) {
  const dispatch = useDispatch();
  const [added, setAdded] = useState(false);
  const selectPlayer = () => {
    const uniquePlayer = {
      id,
      name,
      country,
    };
    dispatch(addPlayer(uniquePlayer));

    setAdded(true);
  };
  return (
    <div className="flex items-center">
      <select name="player" id="">
        <option value={name}>{name}</option>
      </select>
      {!added && (
        <button onClick={selectPlayer} className="cursor-pointer">
          +
        </button>
      )}
    </div>
  );
}

export default DefenderPlayers;
