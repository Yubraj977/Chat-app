import React, { useEffect, useState } from 'react'
import {io} from 'socket.io-client'
const socket=io('http://localhost:4000/')
function Test() {
  const [input,setinput]=useState()
  const [message,setmessage]=useState([])
  console.log('Me'+message)
 

  useEffect(() => {
   
    socket.on('connect',()=>{
      socket.send('HEllo')
      
    })
 
    
  }, [])
  function handleSend(){
    socket.emit('message',input)
    socket.on('msg',(msg)=>{
      setmessage((prev)=>[...prev,msg])
    })
  }
  return (
    <div className='min-h-screen text-white'>
        <ul>
          <li></li>
        </ul>
          <input type="text" name="" className='text-black' id="" value={input} onChange={(e)=>setinput(e.target.value)} />
          <button onClick={handleSend}>Send</button>
        </div>
  )
}

export default Test