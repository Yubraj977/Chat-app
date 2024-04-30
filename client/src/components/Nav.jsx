import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
function Nav() {
    return (
        <div className= '  bg-first text-white flex justify-between  py-4   items-center flex-col lg:flex-row  w-full'>


            <div className='flex gap-2 items-center  '>
                <div className="left h-12 lg:h-24  font-inter ">
                    <img src={logo} alt="logo" className='h-full w-full object-cover' />
                </div>
                <h1 className='font-bold font-allerta text-3xl '>Chat Craft</h1>
            </div>

            <div className="right flex gap-3  justify-center items-center   lg:w-auto w-full lg:mt-0 mt-10 ">

                <NavLink className=' lg:w-auto w-full  text-center font-bold text-2xl bg-white text-black rounded-md px-6 py-1'  to='/login' >Login</NavLink>

            </div>
        </div>
    )
}

export default Nav