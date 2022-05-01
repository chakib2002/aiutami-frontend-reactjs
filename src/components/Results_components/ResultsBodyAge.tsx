import React from 'react'

export const ResultsBodyAge = ({age}:{age:number}) => {
  return (
    <div className='text-base font-bold my-0.5 md:text-xs lg:text-base'>{age} years old</div>
  )
}
