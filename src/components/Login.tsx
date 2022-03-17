import React from 'react';
import {ReactComponent as Office} from "../Images/Office.svg";
import {ReactComponent as EmailIcon} from "../Images/EmailIcon.svg";
import {ReactComponent as LockIcon} from "../Images/Lock.svg";

export const Login = () => {
    
  return (
        <div className='grid grid-flow-col'>

          <Office />
        
          <div className='mt-10 lg:m-auto lg:ml-44 mx-5 md:mx-10  '>
            <div className='mb-5 text-center lg:text-left '>
              <h1 className='text-2xl font-light tracking-wide'>Welcome Back :)</h1>
              <p className='text-sm font-thin opacity-70 lg:w-1/2'>If you already have an account please login with us using your email and password .</p>
            </div>
            <div className='text-center lg:text-left'>

              <div className='py-2 px-3 mb-2 lg:bg-lightgray lg:w-80 lg:rounded-sm'>
                <EmailIcon />
                <input type="email" placeholder='Enter your email' className='focus:outline-none ml-2 lg:bg-lightgray' />
              </div>

              <div className='py-2 px-3 mb-2'>
                <LockIcon />
                <input type="password" placeholder='Enter your password' className='focus:outline-none ml-2' />
             </div>

              <p className='text-sm font-thin opacity-50 mb-5 cursor-pointer hover:opacity-100 text-center lg:text-left'>Forget Password</p>

              <div className='flex justify-center lg:justify-start space-x-5'>
               <button className='px-5 py-2 rounded-full bg-primary hover:bg-bluedark text-white active:scale-95 transition transition-duration-400 ease-out'>Login now</button>
               <button className='px-5 py-2 rounded-full border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out'>Create an account</button>
              </div>
          </div>
        </div>
      </div>
  )
}
