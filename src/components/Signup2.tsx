import React from 'react'
import { SignupDesign } from './SignupDesign'
import { SignupForm2 } from './SignupForm2'

export const Signup2 = () => {
  return (
    <div className='text-center lg:grid lg:grid-flow-col lg:col-span-3'>
        <SignupDesign />
        <SignupForm2 careType='Housekeeer' />
    </div>
  )
}
