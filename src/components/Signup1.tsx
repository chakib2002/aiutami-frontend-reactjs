import React from 'react'
import { SignupForm1 } from './SignupForm1';
import { SignupDesign } from './SignupDesign';

export const Signup1 = () => {
  return (
    <div className='text-center lg:grid lg:grid-flow-col lg:col-span-3'>
        <SignupDesign />
        <SignupForm1 />   
    </div>
  )
}
