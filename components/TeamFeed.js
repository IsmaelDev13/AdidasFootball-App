import React, { useEffect, useState } from "react";
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
    <div className="border-2 flex-col items-center mx-auto p-5 rounded-md my-4">
      {!!imageUrl && (
        <img className="h-48 w-48" src={imageUrl} alt="" loading="lazy" />
      )}
      <div className="flex items-center py-2 justify-between">
        <h1 className="font-bold">{name}</h1>
        <p className="text-gray-400">{year}</p>
      </div>
      <button
        onClick={selectTeam}
        className="bg-green-300 p-3 hover:bg-green-400 rounded-md"
      >
        {" "}
        Select Players
      </button>
    </div>
  );
}

export default TeamFeed;
// export async function getServerSideProps(context) {
//   const teams = await fetch("https://api.football-data.org/v2/teams/{id}", {
//     method: "GET",
//     headers: { "X-Auth-Token": "9ce7d2cc680e4834a6f05f2d9ddb02c2" },
//   }).then((res) => res.json());

//   return {
//     props: {
//       teams,
//     },
//   };
// }