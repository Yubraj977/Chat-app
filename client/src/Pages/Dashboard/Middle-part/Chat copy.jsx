import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaFileSignature } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { io } from 'socket.io-client';

function Chat() {
  const [socket, setSocket] = useState();
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const newSocket = io('http://localhost:4000/');
    setSocket(newSocket);
    
    newSocket.on('messageFromServer', (payload) => {
      const message = { text: payload.inputMessage, source: 'server' };
      setMessages(prevMessages => [...prevMessages, message]);
    });

    return () => {
      newSocket.disconnect();
    };
  }, []);

  function handleMessageSent(e) {
    e.preventDefault();
    console.log('Message sent:', inputMessage);
    socket.emit('messageFromClient', { socketId: socket.id, inputMessage });
    setInputMessage('');
  }

  return (
    <div className='w-full h-screen bg-neutral-600 relative'>
      {/* Top Section */}
      <div className='bg-slate-700 px-4 py-2 border-l-[0.2px] border-white border-opacity-10  flex justify-between' >
        <div className="left flex gap-2 ">
          <div className='h-10 w-10 rounded-full border '>
            <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGmUDlytmSKJqLXsQ9_5CBbeawRcs08QqM_QVOU_gluA&s'} alt="hello" className='h-full w-full object-cover rounded-full' />
          </div>
          <div className="name">
            <h1 className='font-bold font-inter'>Name</h1>
          </div>
        </div>
        <div className='flex text-2xl gap-2 items-center opacity-75'> <CiSearch /> <BsThreeDotsVertical /> </div>
      </div>

      {/* Messages Section */}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.source === 'server' ? 'received' : 'sent'}`}>
            {message.text}
          </div>
        ))}
      </div>

      {/* Bottom Message send section */}
      <form onSubmit={handleMessageSent}>
        <div className='absolute bottom-0  w-full bg-slate-700 py-2 flex items-center gap-4 px-2'>
          <FaFileSignature className='text-3xl' />
          <input
            value={inputMessage}
            type="text"
            className='w-full py-3 bg-slate-900  border-none rounded-lg focus:border-none outline-none px-4 text-sm '
            placeholder='Enter A Message'
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type='submit'>
            <IoMdSend className='text-3xl' />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Chdat;
