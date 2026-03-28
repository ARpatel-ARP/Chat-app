import React from 'react';
import {BiSearchAlt2} from "react-icons/bi"
import OtherUsers from './OtherUsers';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const navigate = useNavigate()
  const logoutHandler = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`)
      navigate("/login")
      toast.success(res.data.message)
    } catch (error) {
      console.log(error);
      
    }
  }
  return (
    <div className='border-r border-slate-500 p-9 w-[25vw] flex flex-col'>
      <form action="">
        <div className='flex'>
        <input type="text" placeholder='Search...' className='input input-bordered rounded-md ' />
        <button type='submit' className='cursor-pointer bg-zinc-500 hover:bg-zinc-800 w-10 mx-auto px-2 rounded-md ml-px'>
            <BiSearchAlt2 size={"20px"}/></button>
        </div>
      </form>
      <div className='divider px-3'></div>
      <OtherUsers/>
      <div>
        <button onClick={logoutHandler} className='ml-27 mt-4'><a href="#_" className="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-2xl group">
    <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-3"></span>
    <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
    <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">Log out</span>
    <span className="absolute inset-0 border-2 border-white rounded-full"></span>
</a></button>
      </div>
    </div>
  );
}

export default Sidebar;
