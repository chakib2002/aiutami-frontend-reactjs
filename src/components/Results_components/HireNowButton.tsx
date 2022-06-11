import React, { useState } from 'react'

import { HiringModal } from '../Profile_components/HiringModal'

export const HireNowButton = ({id, fullname, careType}:{id:number | null, fullname: string, careType:string|null}) => {

  const [open , setOpen ] = useState(false)
  
  console.log(careType)

  return (
    <>
      <button className="w-full md:w-24 lg:w-28 border-2 border-hireNow 
      md:hover:bg-white md:hover:text-hireNow  bg-hireNow active:bg-white active:text-hireNow  
      md:text-xs lg:text-sm md:my-auto py-1 rounded-lg text-white active:scale-95 
      transition transition-duration-600 ease-out" onClick={()=>{setOpen(true)}}>Hire Now</button>
      <HiringModal open={open} setOpen={setOpen} firstname={fullname} careType={careType} id={id}/>
    </>
  )
}
