import React from 'react'

export const ResultsBodyAvailability = ({availability}: {availability:string})=> {
  
  const AVAILABILITY = availability.split(',')
  
  return (
    <div className='px-1'>
      <p className='font-bold md:text-xs lg:text-sm md:mt-2'>Availability</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 ' >
          {AVAILABILITY.map((element : any, index : any )=>{
           
            return (
            
                <p key={index} className='px-2 my-1 border-l border-gray-300 opacity-75 md:text-xs lg:text-sm'>{element}</p>
            
            )
          })}
        </div>
    </div>
  )
}
