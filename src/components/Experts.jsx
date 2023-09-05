import React from 'react'
import img from '../images/img.jpg'
function Experts() {
  return (
  <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[400px] mx-auto my-4 ' src={img} alt='' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold px-[10px]'>LEARN FROM EXPERTS</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className='bg-black text-white w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 hover:bg-grey'>Get Started</button>
        </div>
  </div>
  )
}


export default Experts;