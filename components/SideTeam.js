import React, { useState } from "react";
import { GlobeIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { removePlayer, selectPlayers } from "../slices/playerSlice";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";

function SideTeam({ setShowTeam }) {
  const dispatch = useDispatch();
  const players = useSelector(selectPlayers);
  const removePlayerTeams = (id) => {
    dispatch(removePlayer({ id }));

    // setShowTeam(true);
  };
  const showOff = () => {
    setShowTeam(false);
  };
  return (
    <div className="fixed w-full h-screen top-0 right-0 z-50 flex justify-end">
      <div className="relative z-30 w-80 bg-white h-screen flex flex-col">
        <div className="text-white bg-black py-3 px-3 text-center flex items-center justify-center">
          <GlobeIcon className="h-8" />
          <span className="font-medium ml-4">Players : {players.length}</span>
        </div>
        <div className="flex-grow bg-gray-50">
          {!!players.length ? (
            players.map((player) => (
              <div
                key={player.id}
                className="flex p-3 mb-2 border-b-2 border-gray-100 items-center bg-white"
              >
                <div className="flex-grow">
                  <div className="flex">
                    <span className="text-gray-400">{player?.position}</span>
                    <span className="text-gray-900 ml-2 cursor-pointer">
                      {player.name}
                    </span>
                  </div>
                </div>
                <XIcon
                  onClick={() => removePlayerTeams(player.id)}
                  className="h-10 ml-2 cursor-pointer text-black"
                />
              </div>
            ))
          ) : (
            <p className="text-sm text-gray-400 text-center py-4">
              No Players Selected!{" "}
            </p>
          )}
        </div>
        {/* <button onClick={() => setShowTeam(false)}>Add Player</button> */}
      </div>
      <div
        onClick={showOff}
        className="w-full h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 z-10"
      />
    </div>
  );
}

export default SideTeam;
