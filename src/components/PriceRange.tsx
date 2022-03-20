import React from 'react'

export const PriceRange = ({price} : {price:number}) => {
  return (
 
    <div className="relative pt-1 text-left w-auto mx-10 lg:w-1/2">
        <label htmlFor="customRange1" className="form-label m-auto text-left block text-md opacity-100 font-medium ">Price  <span className='text-xs opacity-60'>{price+'$ per hour'}</span></label>
        <input
            type="range"
            className="
            form-range
            w-full
            h-6
            p-0
            bg-transparent
            outline-none focus:ring-0 focus:shadow-none"
            id="customRange1"
            min={18}
            max={500}/>
    </div>

  )
}
