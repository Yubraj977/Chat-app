import React from 'react'
import { FaMoon } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { ImSleepy } from "react-icons/im";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";


import Friends from '../helpers/Friends';
function Left() {
    const arr = [
        { name: "rahul" },
        { name: "gita" },
        { name: "sita" },
        { name: "rita" },
        { name: "fita" }
    ]
    return (

        <div className='w-full h-screen border flex flex-col bg-slate-900'>
            {/* The First Section */}
            <div className='flex justify-between bg-slate-700 items-center px-2 py-2 rounded-md'>
                <div className="image h-10 w-10 rounded-full border " >
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFxQu84PuCD_zpL1Yv_Gr4C7lNzm2L9fR7CA&s'} alt="image" className=' h-full w-full object-cover rounded-full' />
                </div>
                <div className='flex text-xl gap-6'>
                    <FaMoon />
                    <IoIosLogOut />
                    <ImSleepy />
                    <BsThreeDotsVertical />
                </div>
            </div>


            {/* The Second Section */}
            <div className='  relative px-2 mt-2'>
                <CiSearch className='absolute top-1/2 -translate-y-1/2 left-4' />
                <input type="text" name="" id="" className='bg-slate-800 w-full border  px-8 py-1  rounded-lg ' />
            </div>

            {/* The third Section */}
            <div className='mt-1'>
                {arr.map((firend) => {
                    return (
                        <div className='py-2 border-t-[0.1px]  border-opacity-15 border-white'>

                            <Friends />
                        </div>

                    )
                })}

            </div>
        </div>
    )
}

export default Left