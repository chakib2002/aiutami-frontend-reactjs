import React from 'react'

export const MoreDetailsButton = ({id} : {id:number}) => {
  return (
    <button className='w-full md:w-24 lg:w-28 border-2 border-primary md:hover:bg-white
     md:hover:text-primary  bg-primary active:bg-white  active:text-primary md:text-xs lg:text-sm  
     md:my-auto py-1 rounded-lg md:hover:border-primary text-white active:scale-95 
     transition transition-duration-600 ease-out
    '>More details</button>
  )
}
// 