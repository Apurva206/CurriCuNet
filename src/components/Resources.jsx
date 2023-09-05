import React from 'react'
import single from '../images/single.png'
import double from '../images/double.png'
import triple from '../images/triple.png'
const Resources=({title,txt,btn}) => {
  return (
    <div className='py-[100px]   mx-auto '>

        <div className='shadow-2xl w-[500px] h-[500px] hover:scale-105 duration-100'>
            <img className='w-20 mx-auto mt-[15px] bg-white' src={single} alt="" />
            <h2 className='text-3xl font-bold text-center mt-[50px]'>{title}</h2>
            <p className='text-xl py-[34px] text-center'>{txt}</p>
            <div className='btn text-center text-2xl py-[30px]'>
                <button className='border-[2px]  py-2 px-4 rounded-[6px] bg-ForestGreen text-black hover:text-white'>{btn}</button>
            </div>
        </div>    

        {/* <div className='shadow-2xl h-[500px] hover:scale-105 duration-100'>
            <img className='w-20 mx-auto mt-[15px] bg-white' src={double} alt="" />
            <h2 className='text-3xl font-bold text-center mt-[50px]'>{title}</h2>
            <p className='text-xl py-[34px] text-center'>{txt}</p>
            <div className='btn text-center text-2xl py-[30px]'>
                <button className='border-[2px]  py-2 px-4 rounded-[6px] bg-ForestGreen text-black hover:text-white'>{btn}</button>
            </div>
        </div>  

        <div className='shadow-2xl h-[500px] hover:scale-105 duration-100'>
            <img className='w-20 mx-auto mt-[15px] bg-white' src={triple} alt="" />
            <h2 className='text-3xl font-bold text-center mt-[50px]'>{title}</h2>
            <p className='text-xl py-[34px] text-center'>{txt}</p>
            <div className='btn text-center text-2xl py-[30px]'>
                <button className='border-[2px]  py-2 px-4 rounded-[6px] bg-ForestGreen text-black hover:text-white'>{btn}</button>
            </div>
        </div>          */}
  </div>
  )
}

export default Resources;