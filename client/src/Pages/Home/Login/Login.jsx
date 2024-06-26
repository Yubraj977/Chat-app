import React, { useState } from 'react'
import login from '/login.png'
import google from '/google.svg'
import facebook from '/facebook.svg'
import phone from '/phone.png'
import { NavLink, Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import app from '../../../connections/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth'


function Login() {
  const navigate = useNavigate()
 


  async function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider();
    const auth = getAuth()
    const googleRes=await signInWithPopup(auth, provider)
    const userData = {
      username: googleRes.user.displayName,
      email: googleRes.user.email,
      image: googleRes.user.photoURL
    };
    console.log(userData);
    const fetchRes=await fetch('http://localhost:4000/api/googlesignin',{
      method:"POST",
      'credentials':'include',
      headers:{
        'Content-Type':'application/json'
      },
    

     body:JSON.stringify(userData)
    })
    const data=await fetchRes.json();
    console.log(data);



  }

  async function handleFacebookSignIn(){
    // const fetchRes=await fetch('http://localhost:4000',{
    //   method:"POST",
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //   credentials:'include',
    

    //  body:JSON.stringify({name:"rakhes"})
    // })
    // const data=await fetchRes.json();
    // console.log(data);
    navigate('/dashboard')
  }
  return (
    <div className='min-h-screen flex  text-inter overflow-x-hidden '>


      <div className='lg:w-1/2 bg-first py-10 px-6 relative  w-full'>

        <div className='flex justify-between '>

          <Link to='/' className=' '>

            <div className='flex items-center' >

              <div className='h-10 w-10 '>
                <img src={login} alt='logo' className=' h-full w-full object-contain' />
              </div>

              <p className='text-md lg:text-lg font-bold font-inter'>Chat App</p>

            </div>
          </Link>
          <div className='border text-sm rounded-lg px-6 py-2'>English ~</div>

        </div>

        <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-full lg:px-40 px-4 '>
          <div className=' w-full mt-32'>
            <h1 className='font-bold font-inter text-2xl'>Welcome</h1>
            <p className='font-bold text-sm'>Signin With these options</p>

            <div className=' bg-neutral-900 flex py-2 px-8 mt-4  rounded-md gap-2 items-center justify-center' onClick={handleGoogleSignIn} >
              <p><img src={google} alt="" className='h-4 w-4' /></p>
              <p className='font-semibold  text-md' >Log in with Google</p>
            </div>

            <div className=' bg-neutral-900 flex py-2 mt-4   rounded-md gap-2 items-center justify-center' onClick={handleFacebookSignIn}>
              <p><img src={facebook} alt="" className='h-4 w-4' /></p>
              <p className='font-semibold  text-md'>Log in with Facebook</p>
            </div>

            <p className='mt-2'>~~~~~~~~~~~~~~~or~~~~~~~~~~~~~~~~</p>


            <form className='flex flex-col mt-6'>
              <label className='font-semibold'>Email</label>
              <input type="text" className='bg-neutral-900  rounded-lg py-2 mt-2  px-4 ' placeholder='Enter your email ' />
              <div className='flex justify-between mt-4'>
                <label className='font-semibold'>Email</label>
                <p className='font-semibold'><span className='text-teal-300 underline text-sm'> forget password ?</span> </p>
              </div>

              <input type="text" className='bg-neutral-900  rounded-lg py-2 mt-2  px-4 ' placeholder='Enter your email ' />
              <button className='mt-6 bg-neutral-900 py-2 rounded-md '>submit</button>
              <p className=' text-center font-inter text-sm mt-4'>Dont have Account? <span className='text-teal-300 underline'> signup</span> </p>
            </form>
          </div>

        </div>
      </div>








      <div className=' relative w-1/2 bg-black bg-gradient-to-b from-black via-first to-slate-900 lg:flex flex-col items-center hidden'>

        <h1 className='mt-20 text-4xl font-allerta font-semibold px-32 text-center opacity-80'>The Florida of the thing that make things <span className='opacity-15'> of the best </span></h1>
        <div className=' w-6/12 z-10'>
          <img src={phone} alt="" className='h-full w-full object-cover z-10' />
        </div>
        <h1 className='absolute top-[80%] font-allerta text-white text-[5rem]  z-0'>Give a <span className='ml-20'> try </span> </h1>
      </div>

    </div>
  )
}

export default Login