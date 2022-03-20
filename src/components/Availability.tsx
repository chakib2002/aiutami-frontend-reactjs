import React from 'react'
import { Day } from './Day'

export const Availability = () => {
  return (
    <div>
        <p className='mx-10 text-left block text-md opacity-100 font-medium mt-2 cursor-default'>Availability</p>
       <div className="sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 space-x-2 mx-5">
            <Day day='Monday' selected/>
            <Day day='Tuesday' selected/>
            <Day day='Wednesday' selected/>
            <Day day='Thursday' selected/>
            <Day day='Friday' selected/>
            <Day day='Saturday' selected/>
            <Day day='Sunday' selected/>
       </div>
    </div>
  )
}

