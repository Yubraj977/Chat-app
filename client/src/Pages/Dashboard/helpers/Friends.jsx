import React from 'react'
import { FaCheck } from "react-icons/fa6";
import { FaCheckDouble } from "react-icons/fa6";
import { PiNumberFiveThin } from "react-icons/pi";
function Friends() {
    return (
        <div className='flex justify-between px-4'>
            <div className="left flex gap-2">
                <div className='h-12 w-12 rounded-full border '>
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'} alt="hello" className='h-full w-full object-cover rounded-full' />
                </div>
                <div className="name">
                    <h1 className='font-bold font-inter'>Name</h1>
                    <p className='text-sm flex'> <div className='flex items-center'> <FaCheckDouble /> </div>hello Give me that</p>
                </div>

            </div>

            <div className="right">
                <div>8:02</div>
                <div className=' bg-blue-700 rounded-full h-6 w-6 text-sm flex justify-center items-center'> 5 </div>
            </div>
        </div>
    )
}

export default Friends