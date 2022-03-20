import React from 'react'
import { Availability } from './Availability'
import { PriceRange } from './PriceRange'
import { TextArea } from './TextArea'
import {ReactComponent as Next1} from '../Images/Next1.svg'
import {ReactComponent as Prev} from '../Images/Prev.svg'

export const SignupForm2 = ({careType}: {careType:string}) => {
  return (
    <div className='mt-10'>
      <h1 className='text-3xl font-extrabold cursor-default'>Sign up</h1>
      <p className='w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default'>Get started for free and become a full-time or a part-time freelancer.</p>
        <div className='block lg:flex justify-center lg:justify-start'>
        <PriceRange price={30}/>
        </div> 
      <TextArea />
      <Availability />
     
        {
          careType==='Housekeeper'? 
          <div className='mt-10 mb-10 flex justify-center lg:justify-start mx-10 '>
            <Prev />
            <div className='w-full text-right'>
              <button className='px-5 text-right py-2 rounded-full border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out'>
                Sign up
              </button>
            </div>
          </div>
          :
          <div className='mt-10 mb-10 flex justify-center lg:justify-start mx-10 '>
            <div className='w-full text-left'>
              <Prev />
            </div>
            <div className='w-full text-right'>
              <Next1 />
            </div>
          </div>
        }
     
    </div>
  )
}
