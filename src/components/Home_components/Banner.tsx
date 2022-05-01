import React from 'react'
import {ReactComponent as Worktime} from "../../Images/Worktime.svg"
import { Button } from './Button'

export const Banner = () => {
  return (
    <div className='flex'>
      <div className='mt-10 text-center lg:text-left md:mx-auto lg:ml-16 lg:mr-16 lg:mt-20'>
        <p className='text-2xl font-bold text-primary mx-2 sm:mx-0 mb-3 xl:mb-5 '>Are you a university student and you need a part time job ?</p>
        <p className='text-2xl '>Join us and start earning money.</p>
        <p className='opacity-80'>Flexible work schedule.</p>
        <p className='opacity-80 mb-5'>Choose your own client.</p>
        <Button text='Join Now' />
      </div>
      <div className='hidden lg:inline mt-10 mr-10'>
        <Worktime />
      </div>
    </div>
  )
}