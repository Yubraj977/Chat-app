import React from 'react'
import Left from './Left-part/Left'
import ExtraRight from './right-part/ExtraRight'
import Chat from './Middle-part/Chat'

function Dashboard() {
    return (
        <div className='w-full flex'>
            <div className="left w-1/4">
                <Left />
            </div>
            <div className="chat w-2/4">
                <Chat />
            </div>
            <div className="right w-1/4">
                <ExtraRight />
            </div>

        </div>
    )
}

export default Dashboard