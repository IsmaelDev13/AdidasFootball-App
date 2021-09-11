import React from "react";

function FinalTeam({ id, name, country }) {
  return (
    <div>
      <h1 className="text-2xl font-bold">Defenders</h1>
      <h2>{country}</h2>
      <p>{name}</p>
    </div>
  );
}

export default FinalTeam;
