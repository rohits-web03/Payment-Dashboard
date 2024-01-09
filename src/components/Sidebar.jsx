import React, { useState } from 'react';
import { sidebarLinks } from '../constants';
import logo from "../assets/logo.jpg";
import { CiWallet } from "react-icons/ci";
import { MdOutlineExpandMore } from "react-icons/md";

const Sidebar = () => {
    const [open,setOpen]=useState();
  return (
    <div className={`flex justify-between flex-col items-center h-screen bg-[#1e2640] w-60 font-inter text-white fixed top-0 left-0 overflow-y-auto`}>
        <div className='flex flex-col justify-center items-center w-full'>
            <div className='flex justify-between items-center w-full px-4 py-2'>
                <div className='flex justify-center items-center gap-3 p-2'>
                    <img 
                        src={logo}
                        alt='Logo'
                        className='w-10 h-10'
                    />
                    <div className='flex flex-col justify-center items-start'>
                        <p className='font-semibold'>Nishyan</p>
                        <a href='#' className='underline text-sm'>visit store</a>
                    </div>
                </div>
                <MdOutlineExpandMore className='text-3xl cursor-pointer'/>
            </div>
            <div className='flex flex-col justify-center items-start w-full pl-6 pr-2 mt-2'>
                {sidebarLinks.map((item,index)=>(
                    <a key={index} href={item.href} className={`flex justify-start items-center gap-2 p-1 mt-1 px-2 text-lg w-full rounded-lg hover:bg-[#344067] ${item.label==='Payments'?'bg-[#454d67] ':''}`}>
                        <item.icon className='text-xl'/>
                        {item.label}
                    </a> 
                ))}
            </div>
        </div>
        <div className='flex justify-start items-center gap-4 bg-[#353e5c] px-4 py-2 rounded-lg mb-2 w-[90%]'>
            <CiWallet className='text-5xl bg-[#4b5885] rounded-lg'/>
            <div className='flex flex-col justify-center items-start'>
                <p className='text-sm text-[#b9bcc9]'>Available credits</p>
                <p className='font-semibold text-xl'>222.10</p>
            </div>
        </div>
    </div>
  )
}

export default Sidebar