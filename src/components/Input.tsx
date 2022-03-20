import React from 'react'

export const Input = (
    {
        htmlFor, name, type, width
    }:
    {
        htmlFor:string, name:string, type:string, width:string
    }
) => {
  return (
    <div className='mb-3'>
        <label htmlFor={htmlFor} className={'m-auto text-left block text-sm opacity-85 font-medium '+width}>{name}</label>
        <input type={type} className={'focus:outline-none px-5 py-2 border-2 border-lightgray shadow-md '+width} id={htmlFor} />
    </div>
  )
}

