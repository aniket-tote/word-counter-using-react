import React from 'react'
import { SiTailwindcss } from 'react-icons/si';
import { AiFillHeart,AiOutlineCopyrightCircle } from 'react-icons/ai';


export default function Footer() {
    return(
        <div className="footer bg-slate-300 flex space-y-1 flex-col w-screen h-max justify-center items-center">
            <div className='flex  items-center'>
            Designed By Aniket in <img src="https://reactjs.org/favicon.ico" alt="reactlogo" className='w-4 h-4 mx-1' /> and <SiTailwindcss className='mx-1 text-[#38bdf8]'/> with <AiFillHeart className='text-red-600 mx-1'/>
            </div>
            <div className='flex items-center'>
            <AiOutlineCopyrightCircle className='mx-1'/>2022
            </div>

        </div>
    );
}