import React from 'react'

export const ResultsBodyFullname = ({full_name}: {full_name:string}) => {
  return (
    <div className='font-bold text-base my-0.5 md:text-xs md:font-semibold lg:text-base '>{full_name}</div>
  )
}
