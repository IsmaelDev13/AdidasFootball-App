import React from "react";
import { ArrowNarrowRightIcon, ArrowRightIcon } from "@heroicons/react/solid";
import { signIn, useSession } from "next-auth/client";

function SignIn() {
  const [session] = useSession();
  return (
    <div className=" w-full mx-auto bg-[#FFFF00] p-10 mb-6 ">
      <div className="flex items-center justify-evenly text-center space-x-10">
        <h1 className="font-extrabold font-serif text-3xl uppercase">
          Get started & Create your team
        </h1>
        <div className="flex items-center space-x-2 bg-black text-white p-3 transform transition duration-200 ease-in-out hover:text-gray-500 shadow-xl">
          <button
            disabled={session}
            onClick={signIn}
            className="tracking-widest uppercase text-sm font-sans relative z-20 "
          >
            Sign Up with Google
          </button>
          <div>
            <button className="absolute border -bottom-1 -right-1 z-10 tracking-widest uppercase  border-black text-transparent text-sm font-sans p-3">
              Sign Up with Google For
            </button>
          </div>
          <ArrowNarrowRightIcon className="h-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}

export default SignIn;
