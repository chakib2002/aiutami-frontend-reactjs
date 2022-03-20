import React from 'react'
import { SignupDesign } from './SignupDesign'
import { SignupFormTutor } from './SignupFormTutor'

export const SignupTutor = () => {
  return (
    <div className='text-center lg:grid lg:grid-flow-col lg:col-span-3'>
      <SignupDesign />
      <SignupFormTutor />
    </div>
  )
}
