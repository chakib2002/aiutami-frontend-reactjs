import React from 'react'

export const ResultsBodyAvailability = ({availability}: {availability:JSON})=> {
    const dispalyAvailability = ()=>{
      const JSONobject =JSON.stringify(availability)
      const object = JSON.parse(JSONobject)
      let reponse = []
      for (let property in object) {
        reponse.push(object[property])
      }
      return reponse
    }
    const availableDays = dispalyAvailability();
  return (
    <div className='px-1'>
      <p className='font-bold md:text-xs lg:text-base'>Availability</p>
        <div className='flex' >
          {availableDays.map((element, index)=>{
            return (
              <p key={index} className='px-2 border-l border-gray-300 opacity-75 md:text-xs lg:text-sm'>{element}</p>
            )
          })}
        </div>
    </div>
  )
}
