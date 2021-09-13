import React from "react";
import { SearchIcon, GlobeIcon, UserIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectTeams } from "../slices/teamSlice";
import { useRouter } from "next/router";
import { signIn, signOut, useSession } from "next-auth/client";
import SideTeam from "./SideTeam";

function Header({ setShowTeam, showTeam }) {
  const teams = useSelector(selectTeams);
  const [session] = useSession();
  const router = useRouter();
  return (
    <>
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="bg-black text-white flex items-center justify-evenly text-tiny flex-grow p-2 space-x-8 font-extrabold uppercase ">
          <h1 className="link ">Save on Stan Smith and Superstar Shoes</h1>
          <h2 className="link">Free Standard shipping & returns | Join now</h2>
          <h3 className="link">Now offering 3-day express delivery</h3>
        </div>
        <div className="flex items-center justify-end space-x-6 py-2 text-gray-500 flex-grow font-thin text-supertiny pr-10 ">
          <p className="link2">also visit</p>
          <p className="link2">help</p>
          <p className="link2">exchange & returns</p>
          <p className="link2">order tracker</p>
          <p className="link2">join creators club</p>
          <p className="link2">creator club</p>
          <p className="link2">log in</p>
        </div>
        <div className="flex items-center justify-between  ">
          <div onClick={() => router.push("/")} className="px-5 cursor-pointer">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png"
              className="h-16 w-16 object-contain"
              alt=""
            />
          </div>
          <div onClick={!session ? signIn : signOut} className="right-0">
            {session ? (
              <p className="font-serif font-bold cursor-pointer border-2 shadow-md p-3 rounded-lg  transform transition duration-200 hover:scale-90">
                {session.user.name}
              </p>
            ) : (
              <UserIcon className="h-8 cursor-pointer" />
            )}
          </div>
          <div
            onClick={() => router.push("/teams")}
            className="relative cursor-pointer shadow-md rounded-full "
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-black text-center rounded-full text-white">
              {teams.length}
            </span>
            <GlobeIcon className="h-8 mr-10" />
            <SearchIcon className="h-8 " onClick={() => setShowTeam(true)} />
          </div>
        </div>
      </header>
      {showTeam && <SideTeam setShowTeam={setShowTeam} />}
    </>
  );
}

export default Header;
