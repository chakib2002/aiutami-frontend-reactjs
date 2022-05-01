import React from 'react'

export const Button = ({text}:{text:string}) => {
  return (
    <button className='px-5 py-2 rounded-md bg-primary hover:bg-bluedark text-white active:scale-95 transition transition-duration-400 ease-out'>{text}</button>
  )
}
