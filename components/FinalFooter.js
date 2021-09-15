import React from "react";
import { GitHub } from "@material-ui/icons";

function FinalFooter() {
  return (
    <div className="w-full flex flex-col p-5 bg-[#363738] border-b space-y-4">
      <div className="max-w-screen-lg mx-auto flex items-center justify-between text-gray-400 text-sm">
        <h1 className="pr-36 cursor-pointer">English</h1>
        <div className="flex items-center space-x-6">
          <p className="cursor-pointer">Data settings </p>
          <span className="space-x-10">|</span>
          <p className="cursor-pointer">Do not sell my personal information </p>
          <span className="space-x-10">|</span>

          <p className="cursor-pointer">Privacy policy </p>
          <span className="space-x-10">|</span>

          <p className="cursor-pointer">Terms and Conditions</p>
        </div>
      </div>
      <div className="max-w-screen-lg mx-auto flex item-center justify-around text-gray-400">
        <a href="https://ismaeldev13.com" target="_blank">
          <button>
            © 2021 | Developed by{" "}
            <span className="underline hover:text-white">Ismael Diaz</span>{" "}
          </button>
        </a>
        <a href="https://github.com/IsmaelDev13/football-app" target="_blank">
          <GitHub className="ml-20 hover:text-white transform transition duration-150 ease-in-out hover:scale-110" />
        </a>
      </div>
    </div>
  );
}

export default FinalFooter;
