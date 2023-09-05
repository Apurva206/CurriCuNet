import React from 'react'

export default function Newsletter() {
  return (
    <div className='bg-SlateGrey p-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
      <div className='py-[50px] ml-[70px]'>
        <h1 className='text-xl font-bold text-white md:text-3xl'>
        Want to learn latest I.T skills?
        </h1>
        <span className='text-white text-[12px] md:text-[15px]'>Sign up to our newsletter and stay up to date.</span>
      </div>
      <div className='justify-end ml-[400px]'>
        <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
          <input type="email" 
          placeholder='Enter Email'/>
          <button className='bg-[black] text-white rounded-md font-medium mx-auto ml-4 my-6 px-6 py-3'>
              Notify Me
            </button>
      </div>
    </div>
    </div>
    </div>
  )
}
