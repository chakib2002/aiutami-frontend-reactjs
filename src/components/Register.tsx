import React from 'react'
import { Input } from './Input'
import {ReactComponent as Next} from '../Images/Next.svg';
import {ReactComponent as Subscription} from '../Images/Subscription.svg';

export const Register = () => {
  return (
    <div className='text-center lg:grid lg:grid-flow-col lg:col-span-3'>
        <div className='bg-primary h-screen sticky top-0 z-50 hidden lg:inline lg:col-span-1 shadow-2xl'>
            <p className='text-left w-48 ml-10 mt-20 text-5xl font-extrabold text-secondary 
            hover:text-bluedark cursor-pointer transition transition-duration-600 ease-out active:scale-95'>
                Aiutami
            </p>
            <p className='sticky top-36 text-left ml-10 text-secondary mt-2 tracking-wide w-80 opacity-70'>
                Few clicks away from working and earning money.
            </p>
            <div className='sticky z-50 mt-16'>
                <Subscription />
            </div>
        </div>
        <div className='mt-10'>
            <h1 className='text-3xl font-extrabold'>Sign up</h1>
            <p className='w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3'>Get started for free and become a full-time or a part-time freelancer.</p>
            <div className='block lg:flex justify-center lg:space-x-5'>
                <Input type='text' name='First name' htmlFor='FirstName' width=' w-80 lg:w-auto' />
                <Input type='text' name='Last name' htmlFor='LastName' width=' w-80 lg:w-auto' />
            </div>
            <div className='block lg:flex justify-center lg:space-x-5'>
                <Input type='email' name='Email' htmlFor='Email' width='w-80 lg:w-auto'/>
                <Input type='text' name='Phone number' htmlFor='PhoneNumber' width='w-80 lg:w-auto'/>
            </div>
            <div className='block lg:flex lg:justify-center lg:space-x-5' >
                <div className='flex justify-center space-x-20 lg:space-x-3'>
                    <Input type='text' name='Age' htmlFor='Age' width='w-20'/>
                    <Input type='text' name='Province' htmlFor='Province' width='w-[160px] lg:w-[155px]'/>
                </div>
                <Input type='text' name='Occupation' htmlFor='Occupation' width='w-80 lg:w-auto'/>
            </div>
            <div className='lg:flex lg:justify-center lg:space-x-5'>
                <Input type='password' name='Password' htmlFor='Password' width='w-80  lg:w-auto'/>
                <Input type='text' name='Care type' htmlFor='CareType' width='w-80 lg:w-auto'/>
            </div>
            <Input type='password' name='Confirmed password' htmlFor='ConfirmedPassword' width='w-80 lg:w-[512px] '/>
            
            <div className='inline lg:grid lg:grid-flow-col lg:w-[512px] lg:m-auto lg:space-x-44 '>
                <p className='text-sm opacity-75 font-semibold mb-10 lg:mb-7 lg:pt-3'>Already have an account? <span className='text-primary font-extrabold hover:text-bluedark cursor-pointer'>Login</span></p>
                <Next />
            </div>
        </div>
    </div>
  )
}
