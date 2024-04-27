import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '/logo.png'
function Nav() {
    return (
        <div className= '  bg-first text-white flex justify-between  py-4   items-center'>


            <div className='flex gap-2 items-center '>
                <div className="left h-24  font-inter ">
                    <img src={logo} alt="logo" className='h-full w-full object-cover' />
                </div>
                <h1 className='font-bold font-allerta text-3xl'>Chat Craft</h1>
            </div>

            <div className="right flex gap-3  justify-center items-center">

                <NavLink className='font-bold text-2xl bg-teal-500 text-black  px-6 py-1 rounded-full' to='/login' >Login</NavLink>

            </div>
        </div>
    )
}

export default Nav