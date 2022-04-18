import React from 'react'

export const ResultsBodyOccupation = ({occupation}:{occupation:string}) => {
  return (
    <div className='px-1 mr-1 my-1 mb-1.5 md:border-r-0 md:border-l-2 md:ml-1 md:pl-2 font-normal text-base border-r-2 text-gray-600 md:text-xs lg:text-base'>{occupation}</div>
  )
}
