import React from 'react'
import {AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillGithub } from 'react-icons/ai';

function Footer() {
  return (
    <div className='bg-SlateGrey mx-auto py-16 px-4 flex justify-between grid md:grid-cols-4 gap-8 text-white'>
      <div className='ml-[60px]'>
        <h1 className='text-white text-[25px] '>
            <strong>Learn</strong>Tech
        </h1>
        <br />
        <p className='text-[14px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium? Cum, suscipit reiciendis pariatur, quaerat est dolorem magni!</p>
        <div className='flex gap-4 text-2xl py-[30px]'>
        <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillTwitterSquare/>
        <AiFillGithub/>
        </div>
      </div>
      <ul>
                <span className='text-[18px] font-semibold text-white'>
                    Solutions
                </span>

                <li className='text-white py-2'>Analytics</li>
                <li className='text-white py-2'>Marketing</li>
                <li className='text-white py-2'>Commerce</li>
                <li className='text-white py-2'>Insights</li>
             </ul>

      <ul>
                <span className='text-[18px] font-semibold text-white'>
                    Support
                </span>

                <li className='text-white py-2'>Pricing</li>
                <li className='text-white py-2'>Documentation</li>
                <li className='text-white py-2'>Guides</li>
                <li className='text-white py-2'>Status</li>
             </ul>
       <ul>
                <span className='text-[18px] font-semibold text-white'>
                    Company
                </span>

                <li className='text-white py-2'>About</li>
                <li className='text-white py-2'>Blog</li>
                <li className='text-white py-2'>Jobs</li>
                <li className='text-white py-2'>Press</li>
                <li className='text-white py-2'>Careers</li>
             </ul>
    </div>
  )
}

export default Footer;