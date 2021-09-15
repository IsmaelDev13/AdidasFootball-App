import React from "react";

function FinalMidfielder({ id, name, country, position }) {
  return (
    <div className="flex items-center border-b-2">
      <div>
        <h1 className="text-2xl font-bold text-green-600">{name}</h1>

        <p className="text-xl">{position}</p>
        <span className="text-gray-400">{country}</span>
      </div>
    </div>
  );
}

export default FinalMidfielder;
