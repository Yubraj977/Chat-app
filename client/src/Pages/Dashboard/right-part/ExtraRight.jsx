import React from 'react'
import { GiTireIronCross } from "react-icons/gi";
function ExtraRight() {
  return (
    <div className='w-full min-h-screen  '>
        
        {/* Top Section */}
      <div className='bg-slate-700 px-4 py-2 border-l-[0.2px] border-white border-opacity-10  flex  items-center h-14 gap-8' >
       <div><GiTireIronCross /></div>
       <div className='font-inter'>Title</div>


      </div>
      {/* Extra section */}
      <div className='  h-full flex justify-center'>
        <div className="ok">
          <div className='w-20 h-20 rounded-full border mt-10'>
          <img src={'https://images.unsplash.com/photo-1687532341138-e09be23f1e7a?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt=""  className='h-full w-full object-cover rounded-full'/>
          </div>
          <h1>I am the file</h1>
          <h1>Edit Things</h1>
        </div>
      </div>
    </div>
  )
}

export default ExtraRight