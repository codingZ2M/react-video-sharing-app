import React from 'react'
import { Link } from 'react-router-dom';
import {BsFillPlayCircleFill} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";

const NavBar = () => {
  return (
    <div className='w-full'>
    <header className='mt-4 flex items-center justify-between  w-full px-2 sm:px-8'>
            <Link href="/">
                <div className='flex gap-2 justify-center items-center'>
                    <BsFillPlayCircleFill className="w-8 h-8 text-red-500"/>
                    <span className='text-white text-xs sm:text-lg font-bold'>CZ2M VIDEO SHARING</span>
                </div>
            </Link>
       
       <div className='relative'>
            <input className='py-1 sm:py-1 px-3 w-[220px] sm:w-[600px] rounded-3xl border-2 border-gray-300 text-black'
                            placeholder="Search" type="text"/>
            <AiOutlineSearch className='absolute text-black right-2 top-2 xl:right-4 xl:top-2 w-6 h-6'/>
       </div>
       <div className='flex'>
               <button className='text-white text-xs sm:text-sm font-medium border-2 border-gray-200 px-3 sm:px-4 py-1 
                              rounded-full hover:bg-white hover:text-black hover:border-white'>
                   Sign in
               </button>
       </div>

    </header>
    </div>
  )
}

export default NavBar