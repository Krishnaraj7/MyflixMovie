import Image from "next/image";
import React from "react";
import bgimage from "./loginImg/bgimage1.jpg";
import logo from "./loginImg/logo.png";
import { FcGoogle } from "react-icons/fc";


const login = () => {
  
 
  return (
    <>
      <div className="fixed top-0 left-0 right-0 bottom-0 h-screen ">
        <Image src={bgimage} alt="image" layout="fill" objectFit="cover" />
        <div className="absolute top-0 left-0 bottom-0 right-0 bg-black bg-opacity-70"></div>
        <Image src={logo} alt="logo" className=" absolute h-auto  w-[140px]" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute bg-[rgba(0,0,0,0.60)] bg-black p-8 px-12 rounded-lg shadow-md ">
          <h2 className="text-3xl font-bold text-white pb-4">Sign in</h2>
          <button
            className="bg-white text-black flex items-center justify-center gap-2 px-4 py-3 text-lg rounded-lg"
          
          >
            <FcGoogle className="text-2xl" />
            Sign in with Google
          </button>
          <p className="text-center text-gray-200 text-sm mt-4">
            Sign in with your Google account
          </p>
          <p className="text-center text-blue-400 text-xs mt-2">
            It &apos;s just a demo account
          </p>
        </div>
      </div>
    </>
  );
};

export default login;
