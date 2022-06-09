import React from 'react'
import { useSelector } from 'react-redux'
import { UserMoreInfoProfileState } from '../../state/configureStore'
import { ProfileAvailability } from './ProfileAvailability'

export const ProfileResultBody = () => {
  const {availability, aboutMe} = useSelector(UserMoreInfoProfileState)
  return (
   <div className='mx-5 px-5  md:mx-10 lg:w-[900px] xl:w-[950px] lg:mx-auto mt-2 
                  border border-gray-50 py-7 shadow-md md:px-5 lg:px-10 rounded-xl cursor-default mb-16'>
      <div>
        <h1 className='font-bold tracking-wide w-40 border-b border-gray-300'>About me </h1>
        <p className='text-gray-600 text-sm my-5'>{aboutMe}</p>
      </div>

    <div>
    <h1 className='font-bold tracking-wide w-40 border-b border-gray-300'>Availability</h1>
    <div className='md:flex md:justify-between md:items-stretch my-5'>
      <ProfileAvailability availability={availability}/>
      <button className=' mt-10 w-full md:w-auto md:my-0 shadow-md active:scale-95 transition transition-duration-900 ease-out px-10 rounded-md  h-10 self-end text-sm bg-green active:bg-darkgreen lg:hover:bg-darkgreen text-white'>Hire Now</button>
    </div>
    </div>
    
   </div>
  )
}
