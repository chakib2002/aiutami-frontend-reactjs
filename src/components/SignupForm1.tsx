import React from 'react'
import { Input } from './Input'
import {ReactComponent as Next} from '../Images/Next.svg';


export const SignupForm1 = () => {
  return (
    <div className='mt-10'>
            <h1 className='text-3xl font-extrabold cursor-default'>Sign up</h1>
            <p className='w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default'>Get started for free and become a full-time or a part-time freelancer.</p>
            <div className='block lg:flex justify-center lg:space-x-5'>
                <Input type='text' name='First name' htmlFor='FirstName' width=' w-80 lg:w-auto' placeholder='Enter your first name' />
                <Input type='text' name='Last name' htmlFor='LastName' width=' w-80 lg:w-auto' placeholder='Enter your last name' />
            </div>
            <div className='block lg:flex justify-center lg:space-x-5'>
                <Input type='email' name='Email' htmlFor='Email' width='w-80 lg:w-auto' placeholder='Enter your email'/>
                <Input type='text' name='Phone number' htmlFor='PhoneNumber' width='w-80 lg:w-auto' placeholder='(+33) 55 75 87 86'/>
            </div>
            <div className='block lg:flex lg:justify-center lg:space-x-5' >
                <div className='flex justify-center space-x-20 lg:space-x-3'>
                    <Input type='text' name='Age' htmlFor='Age' width='w-20' placeholder=''/>
                    <Input type='text' name='Province' htmlFor='Province' width='w-[160px] lg:w-[155px]' placeholder='Wilaya'/>
                </div>
                <Input type='text' name='Occupation' htmlFor='Occupation' width='w-80 lg:w-auto' placeholder='Your type of work'/>
            </div>
            <div className='lg:flex lg:justify-center lg:space-x-5'>
                <Input type='password' name='Password' htmlFor='Password' width='w-80  lg:w-auto' placeholder='Enter your password'/>
                <Input type='text' name='Care type' htmlFor='CareType' width='w-80 lg:w-auto' placeholder='Service you provide?'/>
            </div>
            <Input type='password' name='Confirmed password' htmlFor='ConfirmedPassword' width='w-80 lg:w-[512px] ' placeholder='Confirm your password'/>
            
            <div className='inline lg:grid lg:grid-flow-col lg:w-[512px] lg:m-auto lg:space-x-44 '>
                <p className='text-sm opacity-75 font-semibold mb-10 lg:mb-7 lg:pt-3'>Already have an account? <span className='text-primary font-extrabold hover:text-bluedark cursor-pointer'>Login</span></p>
                <Next />
            </div>
        </div>
  )
}