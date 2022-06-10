import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { UserMoreInfoProfileState } from '../../state/configureStore';
import { HiringModal } from '../Profile_components/HiringModal'

export const HireNowButton = () => {

  const [open , setOpen ] = useState(false)
  const { firstname, lastname,careType} = useSelector(UserMoreInfoProfileState);

  return (
    <>
      <button className="w-full md:w-24 lg:w-28 border-2 border-hireNow 
      md:hover:bg-white md:hover:text-hireNow  bg-hireNow active:bg-white active:text-hireNow  
      md:text-xs lg:text-sm md:my-auto py-1 rounded-lg text-white active:scale-95 
      transition transition-duration-600 ease-out" onClick={()=>{setOpen(true)}}>Hire Now</button>
      <HiringModal open={open} setOpen={setOpen} firstname={firstname} lastname={lastname} careType={careType}/>
    </>
  )
}
