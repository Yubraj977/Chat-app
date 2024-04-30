import React from 'react'
import home from '/home.png'
import Nav from '../../components/Nav'
function Home() {
    return (
        <div className='lg:px-side px-2 bg-first text-white font-inter z-0 overflow-x-hidden lg:block flex flex-col items-center'>
            <Nav />
            <h1 className='font-semibold mt-20'>Create Account. Chat Nicely. Have Fun.</h1>
            <div className=' lg:w-4/5 w-full flex flex-col justify-center items-center lg:block '>
             
                <h2 className=' font-semibold  text-xl lg:text-5xl mt-4 text-center lg:text-left'>Join our chat app, where conversations flourish and connections thrive!"    </h2>
                <h2 className=' font-semibold  text-3xl lg:text-5xl mt-4'>Sign up for find more   </h2>
                <button className='bg-white text-black font-black px-8 rounded-md mt-10 lg:hidden py-2'>Login</button>
            </div>

            <div className="textarea mt-10 flex lg:gap-32 gap-10  relative lg:flex-row flex-col w-full items-center ">

                <div className="left  lg:w-1/5">
                    <p className='font-allerta '>Hello feel the pain</p>
                </div>
                <div className="center  lg:w-1/5 text-center">
                    <h1 className='text-xl font-allerta'>This is second</h1>
                    <p className='opacity-25'>Lorem ipsum doloripsam nemovoluptates incidunt similique? Dolore aperiam pariatur obcaecati magnam officia eligendi nemo blanditiis!
                    </p>

                </div>
                <div className="right  lg:w-1/5 text-center">
                    <h1 className='font-allerta text-xl'>This is second</h1>
                    <p className='opacity-25'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor exercitationem voluptatem fugit ipsam nemo, assumenda ratione sequi, laboriosam, voluptates incidunt similique? Dolore aperiam pariatur obcaecati magnam officia eligendi nemo blanditiis!
                    </p>
                </div>


            </div>
            <div className='  '>
                <img src={home} alt="home image" className='    w-full' />
            </div>

            <div className=''></div>
        </div>
    )
}

export default Home