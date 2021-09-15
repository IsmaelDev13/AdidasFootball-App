import React, { useEffect, useState } from "react";
import {
  GlobeIcon,
  InformationCircleIcon,
  ExclamationIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { removePlayer, selectPlayers } from "../slices/playerSlice";
import { XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { db } from "../firebase";
import { useSession } from "next-auth/client";
import { useCollectionOnce } from "react-firebase-hooks/firestore";
import ReactTooltip from "react-tooltip";

import firebase from "firebase";

function SideTeam({ setShowTeam, showTeam }) {
  const dispatch = useDispatch();
  const [session] = useSession();
  const [countDefenders, setCountDefenders] = useState(4);
  const [countMidfielders, setCountMidfielders] = useState(4);
  const [countGoalkeepers, setCountGoalkeepers] = useState(4);
  const [countAttackers, setCountAttackers] = useState(4);
  const players = useSelector(selectPlayers);
  const [created, setCreated] = useState(false);
  const removePlayerTeams = (id) => {
    dispatch(removePlayer({ id }));

    setCountDefenders(playerDefenders.length - 1);
    setCountMidfielders(playerMidfielders.length - 1);
    setCountGoalkeepers(playerGoalkeepers.length - 1);
    setCountAttackers(playerAttackers.length - 1);
  };
  const playersTotal = players.length;

  const playerDefenders = players.filter((e) => e.position == "Defender");

  const playerMidfielders = players.filter((e) => e.position == "Midfielder");

  const playerGoalkeepers = players.filter((e) => e.position == "Goalkeeper");
  const playerAttackers = players.filter((e) => e.position == "Attacker");

  useEffect(() => {
    if (playerDefenders.length >= 0) {
      setCountDefenders(playerDefenders.length);
    } else {
      return false;
    }
  }, []);
  useEffect(() => {
    if (playerMidfielders.length >= 0) {
      setCountMidfielders(playerMidfielders.length);
    } else {
      return false;
    }
  }, []);
  useEffect(() => {
    if (playerGoalkeepers.length >= 0) {
      setCountGoalkeepers(playerGoalkeepers.length);
    } else {
      return false;
    }
  }, []);
  useEffect(() => {
    if (playerAttackers.length >= 0) {
      setCountAttackers(playerAttackers.length);
    } else {
      return false;
    }
  }, []);

  const createTeam = (e) => {
    e.preventDefault();
    db.collection("teams").doc(session.user.email).collection("players").add({
      players,
      // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setCreated(true);
  };
  return (
    <>
      {showTeam && (
        <div className="fixed w-full h-screen top-0 right-0 z-50 flex justify-end ">
          <div className="relative z-30 w-80 bg-white h-screen flex flex-col overflow-y-scroll scrollbar-hide">
            <div className="text-white bg-black py-3 px-3 text-center flex items-center justify-center">
              <GlobeIcon className="h-8" />
              <span className="font-medium ml-4">
                Players : {players.length}
              </span>
            </div>
            <div className="flex-grow bg-gray-50">
              {!!players.length ? (
                players.map((player) => (
                  <div
                    key={player.id}
                    className="flex  border-b-2 border-gray-100 items-center bg-white"
                  >
                    <div className="flex-grow">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-400 px-2">
                          {player?.position}
                        </span>
                        <span className="text-gray-900 ml-2 cursor-pointer">
                          {player.name}
                        </span>
                        <span className="text-gray-500 text-xs px-2">
                          {player.country}
                        </span>
                      </div>
                    </div>
                    <XIcon
                      onClick={() => removePlayerTeams(player.id)}
                      className="h-8 ml-2 cursor-pointer text-black"
                    />
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-400 text-center py-4">
                  No Players Selected!{" "}
                </p>
              )}
            </div>
            <div className="flex items-center p-2 justify-evenly">
              <p className="players text-sm bg-green-300">
                {countDefenders} Defenders
              </p>
              <p className="players text-sm bg-green-500">
                {countMidfielders} Midfielders
              </p>
            </div>
            <div className="flex items-center p-2 justify-evenly">
              <p className="players text-sm bg-blue-400">
                {countGoalkeepers} Goalkeepers
              </p>
              <p className="players text-sm bg-red-400">
                {countAttackers} Attackers
              </p>
            </div>
            {playersTotal < 16 &&
            playerDefenders.length >= 4 &&
            playerMidfielders.length >= 4 &&
            playerGoalkeepers.length >= 2 &&
            playerAttackers.length >= 2 ? (
              <button
                data-tip={`${
                  session ? "Create Team" : "Register To Create Team"
                }`}
                data-for="headerTooltip"
                // disabled={playerDefenders.length <= 4}
                // disabled={!session}
                onClick={createTeam}
                className={`${
                  session
                    ? "bg-green-600 p-3 m-4 rounded-md shadow-md transform transition duration-200 active:scale-95 text-white font-serif"
                    : "bg-gray-400 p-3 m-4 rounded-md cursor-not-allowed"
                }`}
              >
                {created ? "Created!" : " Create Team"}
              </button>
            ) : (
              <div className="flex items-center p-3 border-t-2 bg-green-100">
                <InformationCircleIcon className="h-6" />
                <p className="text-center text-sm transform transition duration-150 ease-out hover:scale-110">
                  Select at least 4 Defenders, 4 Midfielders, 2 Goalkeepers and
                  2 Attackers
                </p>
                {playersTotal >= 16 && (
                  <div className="flex items-center transform transition duration-150 ease-out hover:scale-110">
                    <ExclamationIcon className="h-6" />
                    <p className="text-center text-xs ">
                      Team Size limit to 16 players
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
          <div
            onClick={() => setShowTeam(false)}
            className="w-full h-screen bg-gray-900 bg-opacity-60 fixed top-0 right-0 z-10"
          />
          <ReactTooltip
            place="right"
            id="headerTooltip"
            className="rounded-lg shadow-md "
            backgroundColor="#1a1a2cee"
            effect="solid"
          />
        </div>
      )}
    </>
  );
}

export default SideTeam;
