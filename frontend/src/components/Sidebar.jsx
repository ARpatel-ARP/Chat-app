import React from 'react';
import {BiSearchAlt2} from "react-icons/bi"
import OtherUsers from './OtherUsers';

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-5 flex flex-col'>
      <form action="">
        <div className='flex'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-md ' />
        <button type='submit' className='cursor-pointer bg-zinc-500 hover:bg-zinc-800 w-10 mx-auto px-2 rounded-md ml-px'>
            <BiSearchAlt2 size={"20px"}/></button>
        </div>
      </form>
      <OtherUsers />
    </div>
  );
}

export default Sidebar;
