import Image from 'next/image'
import React from 'react'
import bgimage from '../public/images/bgimage1.jpg'
import logo from "../public/images/logo.png";
import {FcGoogle} from 'react-icons/fc'
import { signIn } from 'next-auth/react';



const Login = () => {
   
  return (
   <>
   <div className='fixed top-0 left-0 right-0 bottom-0 h-screen '>
     <Image src={bgimage} layout="fill" objectFit="cover" />
     <div className="absolute inset-0 flex justify-center items-center">
    <div className="w-full h-full bg-gradient-to-t from-black via-transparent to-transparent absolute top-0"></div>
    <div className="w-full h-full bg-gradient-to-r from-black via-transparent to-transparent absolute right-0"></div>
    <div className="w-full h-full bg-gradient-to-b from-black via-transparent to-transparent absolute bottom-0"></div>
    <div className="w-full h-full bg-gradient-to-l from-black via-transparent to-transparent absolute left-0"></div>
  </div>
     <Image src={logo} className=" absolute h-auto  w-[140px]" />
    
   </div>
   <div className="flex justify-center items-center h-screen">
  <div className="absolute bg-[rgba(0,0,0,0.74)] bg-black p-8 px-12 rounded-lg shadow-md ">
    <h2 className="text-3xl font-bold text-white pb-4">Sign in</h2>
    <button className="bg-white text-black flex items-center justify-center gap-2 px-4 py-3 text-lg rounded-lg"
  
    >
      <FcGoogle className="text-2xl" />
      Sign in with Google
    </button>
    <p className="text-center text-gray-200 text-sm mt-4">Sign in with your Google account</p>
    <p className="text-center text-blue-400 text-xs mt-2">It's just a demo account</p>
  </div>
</div>
  
   </>
  )
}

export default Login