import React from 'react'
import { Button } from './Button'

export const Card = ( {title, text} : {title:string, text : string} ) => {
  return (
    <div className='w-80 rounded-2xl mb-5 mx-auto text-center md:text-left'>
        <div className='text-primary font-bold text-xl md:ml-5 mt-5 mb-2'>
            {title}
        </div>
        <div className='md:ml-5 mb-5 opacity-80 md:mr-2'>
            {text}
        </div>
        <div className='text-center md:text-left md:ml-5'>
        <Button  text='Hire now'/>
        </div>
    </div>
  )
}
