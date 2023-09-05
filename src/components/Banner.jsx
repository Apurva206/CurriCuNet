import React from 'react'
import Typed from 'react-typed';
import 'animate.css';
import { Link } from 'react-router-dom';

function Banner() {
  return (
    <div className='bg-SlateGrey w-full py-[100px]'>
        <div className='text-center my-[100px] mx-auto'>
            <div className='animate__animated animate__backInDown animation-duration-10s font-bold text-xl md:text-2xl mt-[4px]'>
                 Learn With Us
            </div>
            <h2 className='animate__animated animate__fadeInDown animation-duration-70s text-white font-bold text-[35px] md:text-[60px] my-[10px] mt-[4px]'>
                Grow With Us
            </h2>
            <div className='animate__animated animate__fadeInUp font-bold text-2xl md:text-3xl text-white mt-[4px]'>
                Learn
                <Typed
                    className='pl-4'
                    strings={['Web Development','Graphic Designing','Machine Learning','more....']}
                    typeSpeed={70}
                    loop={true}
                    backSpeed={50}
                />
            </div>
            <div className='text-2xl bg-contain animate__animated animate__bounceInUp'>
            <Link to="/login">
                <button className='bg-black hover:text-[22px] hover:bg-grey py-2 px-4 rounded-md  text-xl text-white mt-[30px] md:text-xl'>Get started</button>
            </Link>
            </div>
        </div>
    </div>
  )
}


export default Banner;