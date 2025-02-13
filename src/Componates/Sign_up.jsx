import React from 'react'
import { Link } from 'react-router-dom'

export default function Sign_up() {
  return (
    <>
      <div className='lg:h-screen lg:w-full lg:flex lg:justify-center lg:items-center h-screen w-full flex justify-center items-center'>
        <h1 className="lg:font-bold lg:text-4xl lg:absolute lg:top-1 lg:text-center lg:text-black font-bold text-2xl absolute top-1 text-center">Sign up page</h1>
        <div className='lg:h-screen lg:w-full lg:flex lg:flex-col lg:justify-center lg:items-center'>
            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-4 flex flex-row space-x-14'>
                <h1 className='lg:font-bold lg:text-3xl font-bold text-2xl '>Name:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 h-6 w-19 p-1 text-black border   rounded  border-black-500" type='text' placeholder='enter your name'/>
            </div>
            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-11 flex flex-row space-x-3'>
                <h1 className='lg:font-bold lg:text-3xl font-bold text-2xl '>Last Name:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 border border-blue-600 text-black  " type='text' placeholder='enter your age'/>
            </div>
            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-4 flex flex-row space-x-5'>
                <h1 className='lg:font-bold lg:text-3xl font-bold text-2xl'>date of birth:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 border border-cyan-950 " type='date' placeholder='enter your date of birth'/>
            </div>

            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-4 flex flex-row'>
                <h1 className='lg:font-bold lg:text-3xl font-bold text-2xl'>Phone number:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 border border-black-700" type='text' placeholder='enter your phone number'/>
            </div>

            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-4 flex flex-row space-x-3'>
                <h1 className='lg:font-bold lg:text-3xl text-2xl font-bold'>E-mail:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 border border-black" type='text' placeholder='enter your email'/>
            </div>
            <div className='lg:flex lg:flex-row lg:p-4 lg:space-x-4 flex flex-row'>
                <h1 className='lg:font-bold lg:text-3xl font text-2xl'>Password:</h1>
                <input className="lg:p-2 lg:h-9 lg:w-19 lg:text-black lg:rounded lg:border lg:border-gray-700 border border-black" type='password' placeholder='enter your password'/>
            </div>
            <Link to="/">
            <button className="lg:bg-blue-800 lg:text-white lg:font-bold lg:py-2 lg:px-4 lg:rounded font-bold "> Submit</button>
            </Link>
        </div>
      </div>
    </>
  )
}
