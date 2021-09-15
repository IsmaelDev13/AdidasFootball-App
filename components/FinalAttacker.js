import React, { useEffect, useState } from "react";
import axios from "axios";

function FinalAttacker({ id, name, position, country }) {
  return (
    <div className="flex items-center border-b-2">
      <div>
        <p className="text-2xl font-bold text-red-400">{name}</p>

        <p className="text-xl">{position}</p>
        <span className="text-gray-400">{country}</span>
      </div>
    </div>
  );
}

export default FinalAttacker;
