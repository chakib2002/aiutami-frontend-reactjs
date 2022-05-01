import React from 'react'

export const ResultsBodyPricing = ({price}:{price:number}) => {
  return (
    <div className='text-base text-primary font-bold md:text-xs lg:text-base'>{price}$/Hour</div>
  )
}
