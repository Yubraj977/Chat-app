import React from 'react'
import home from '/home.png'
import Nav from '../../components/Nav'
function Home() {
    return (
        <div className='px-side bg-first text-white font-inter z-0 '>
            <Nav/>
            <h1 className='font-semibold mt-20'>Create Account. Chat Nicely. Have Fun.</h1>
            <div className=' w-4/5  '>
                <h2 className=' font-semibold text-5xl mt-8 opacity-80'>Join our chat app, where conversations flourish and connections thrive!"  </h2>
                <h2 className=' font-semibold text-5xl '>Sign up for find more  </h2>
            </div>

            <div className="textarea mt-10 flex gap-32  relative">

                <div className="left  w-1/5">
                    <p className='font-allerta '>Hello feel the pain</p>
                </div>
                <div className="center  w-1/5">
                    <h1 className='text-xl font-allerta'>This is second</h1>
                    <p className='opacity-25'>Lorem ipsum doloripsam nemovoluptates incidunt similique? Dolore aperiam pariatur obcaecati magnam officia eligendi nemo blanditiis!
                    </p>

                </div>
                <div className="right  w-1/5">
                    <h1 className='font-allerta text-xl'>This is second</h1>
                    <p className='opacity-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem voluptatem fugit ipsam nemo, assumenda ratione sequi, laboriosam, voluptates incidunt similique? Dolore aperiam pariatur obcaecati magnam officia eligendi nemo blanditiis!
                    </p>
                </div>


            </div>
            <div className='  '>
            <img src={home} alt="home image" className='    w-full'  />
            </div>

            <div className=''></div>
        </div>
    )
}

export default Home