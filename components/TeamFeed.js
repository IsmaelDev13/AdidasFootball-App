import React from "react";
import { useDispatch } from "react-redux";
import { addTeam } from "../slices/teamSlice";

function TeamFeed({ id, name, imageUrl, year }) {
  const dispatch = useDispatch();
  const selectTeam = () => {
    const uniqueTeam = {
      id,
      name,
      imageUrl,
      year,
    };
    dispatch(addTeam(uniqueTeam));
  };
  return (
    <>
      {!!imageUrl && (
        <div className="border-2 flex-col items-center mx-auto p-5 rounded-md shadow-md transform transition duration-200 hover:scale-105 ease-in-out my-4 bg-gray-100">
          <img className="h-48 w-48" src={imageUrl} alt="" loading="lazy" />
          <div className="flex items-center py-2 justify-between">
            <h1 className="font-bold">{name}</h1>
            <p className="text-gray-400">{year}</p>
          </div>
          <button
            onClick={selectTeam}
            className="bg-green-300 p-3 transform transition duration-200 active:scale-95 hover:bg-green-400 rounded-md font-serif"
          >
            {" "}
            Select Players
          </button>
        </div>
      )}
    </>
  );
}

export default TeamFeed;
