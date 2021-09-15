import React from "react";

function FinalFooter() {
  return (
    <div className="w-full flex p-5 bg-[#363738] border-b">
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
    </div>
  );
}

export default FinalFooter;
