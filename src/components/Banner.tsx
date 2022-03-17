import React from 'react'
import {ReactComponent as Worktime} from "../Images/Worktime.svg"

export const Banner = () => {
  return (
    <div className='flex'>
      <div className='mt-10 text-center lg:text-left md:mx-auto lg:ml-16 lg:mr-16 lg:mt-20'>
        <p className='text-2xl font-bold text-primary mb-3 xl:mb-5 '>Are you a university student and you need a part time job ?</p>
        <p className='text-2xl '>Join us and start earning money . </p>
        <p className='opacity-80'>Flexible work schedule .</p>
        <p className='opacity-80'>Choose your own client .</p>
        <button className='mt-3 xl:mt-5 bg-primary text-white font-medium px-5 py-2 rounded-md hover:bg-bluedark active:scale-95 transition transition-duration-400 ease-out '>Join Now</button>
      </div>
      <div className='hidden lg:inline mt-10 mr-10'>
        <Worktime />
      </div>
    </div>
  )
}