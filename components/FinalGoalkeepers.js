import React from "react";

function FinalGoalkeepers({ id, name, position, country }) {
  return (
    <div className=" flex items-center border-b-2">
      <div>
        <h1 className="text-2xl font-bold text-blue-400">{name}</h1>

        <p className="text-xl">{position}</p>
        <span className="text-gray-400">{country}</span>
      </div>
    </div>
  );
}

export default FinalGoalkeepers;
