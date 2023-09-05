import React, { useState} from 'react'
import { Link } from 'react-router-dom';
import {SiSololearn} from 'react-icons/si';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import 'animate.css';

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className='bg-SlateGrey p-4'>
        <div className='max-w-[1240px] py-[15px] flex justify-between md:flex md:px-10'>

            <div className='flex items-center'> 
            <SiSololearn className='text-white mr-2'/>            
            <h1 className='animate__animated animate__pulse text-white text-xl pr-[20px]'><Link to="/"><strong>Learn</strong>Tech</Link>
            </h1>
            </div>

            <div className='flex justify-end absolute top-0 right-0 mt-[2rem] mr-4 md:hidden'>
            {
              toggle ? 
              <AiOutlineClose onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block md:flex'/>
              :
              <AiOutlineMenu onClick={()=>setToggle(!toggle)} className='text-white text-2xl md:hidden block md:flex'/>
            }
            </div>

        <ul className='navbar text-white hidden md:flex gap-12'>
            <li className='text-white hover:text-grey hover:cursor-pointer'>Home</li>
            <li className='text-white hover:text-grey hover:cursor-pointer'>Company</li>
            <li className='text-white hover:text-grey hover:cursor-pointer'>Resources</li>
            <li className='text-white hover:text-grey hover:cursor-pointer'>About</li>
            <li className='text-white hover:text-grey hover:cursor-pointer'>Contact</li>
        </ul>
       {/*<div className='text-white'>
        <button className='text-white hover:text-grey hover:cursor-pointer mr-[40px] pl-[30px]'><Link to="/login">Login</Link>
        </button>
          </div>*/}
        
        </div>

        {/*Responsive Menu*/}
        <ul className={`md:hidden w-full h-screen text-white bg-black top-[90px] fixed inset-y-0 right-0 
      ${toggle ? 'left-[70%]' : 'left-[100%]'}`}>
            <li className='p-5'>Home</li>
            <li className='p-5'>Company</li>
            <li className='p-5'>Resources</li>
            <li className='p-5'>About</li>
            <li className='p-5'>Contact</li>
        </ul>
        
     </div>
  )
}

export default Header;
