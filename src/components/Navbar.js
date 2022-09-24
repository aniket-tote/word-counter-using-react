import React from 'react';

export default function Navbar() {
  let darkmode = false;
  const toggle = () =>{
    if(darkmode){
      darkmode = false;
    }else{
      darkmode = true;
    }
  }

  return (
      <ul className="list flex-row items-center justify-between bg-slate-200 text-slate-900 p-4 flex">
        <li className="item1 cursor-pointer hover:underline text-2xl">Word Counter</li>
        <div onClick={toggle} className="toggle flex cursor-pointer items-center bg-slate-300 w-[50px] h-[25px] rounded-full relative">
          <div id='sliderround' className="sliderround h-4/5 w-2/5 rounded-full bg-slate-500 absolute left-1 transition-all ease-in-out duration-500"></div>
        </div>
      </ul>
  );
}


