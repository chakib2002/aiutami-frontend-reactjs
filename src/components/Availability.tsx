import React from 'react'
import { Day } from './Day'

export const Availability = () => {
  return (
    <div>
        <p className='mx-10 text-left block text-md opacity-100 font-medium mt-2 cursor-default'>Availability</p>
       <div className="grid-col-3 space-x-2 mx-5 lg:mx-5 md:mx-10 ">
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

