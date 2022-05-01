import React from 'react'

export const ResultsBodyAvailability = ({availability}: {availability:string})=> {

  const Availability = JSON.parse(availability)
  const AVAILABILITY = Availability.split(',')
  
  return (
    <div className='px-1'>
      <p className='font-bold md:text-xs lg:text-base'>Availability</p>
        <div className='flex' >
          {AVAILABILITY.map((element : any, index : any )=>{
           
            return (
              <>
                <p key={index} className='px-2 border-l border-gray-300 opacity-75 md:text-xs lg:text-sm'>{element}</p>
              </>
            )
          })}
        </div>
    </div>
  )
}
