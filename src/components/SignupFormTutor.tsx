import React from 'react'
import { DropDown } from './DropDown'
import { Input } from './Input'
import {Radio} from './Radio'
import {ReactComponent as Prev2} from '../Images/Prev.svg'



export const SignupFormTutor = () => {
  return (
    <div className='mt-10'>
        <h1 className='text-3xl font-extrabold cursor-default lg:text-left lg:mx-10'>Sign up</h1>
        <p className='lg:text-left w-[70%] mx-auto lg:mx-10 mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default'>
          Get started for free and become a full-time or a part-time freelancer.
        </p>
        <div className='block lg:flex justify-center lg:justify-start lg:mx-10'>
            <Input htmlFor='Education' type='text' name='Education' width='w-80 lg:w-96'/>
        </div>
            <Radio />
            <p className='mt-5 m-auto w-80 lg:mx-10 text-left block text-sm opacity-85 font-medium'>Specification</p>
        <div className='grid justify-items-center lg:justify-items-start lg:mx-10 lg:grid-cols-2'>
            <DropDown name='Subjects' options={["Math", "Physics", "Science", "English", "French", "Computer science"]} />
            <DropDown name='Class' options={["First", "Second", "Third", "Fourth", "Fifth"]} />
        </div>
        <div className='mt-10 mb-10 flex justify-center lg:justify-start mx-10 '>
            <Prev2 />
            <div className='w-full text-right'>
              <button className='px-5 text-right py-2 rounded-full border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out'>
                Sign up
              </button>
            </div>
          </div>
    </div>
  )
}
