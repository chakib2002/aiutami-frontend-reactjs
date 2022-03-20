import React from 'react'

export const Input = (
    {
        htmlFor, name, type, width, placeholder
    }:
    {
        htmlFor:string, name:string, type:string, width:string, placeholder: string
    }
) => {
  return (
    <div className='mb-3'>
        <label htmlFor={htmlFor} placeholder={placeholder} className={'m-auto text-left block text-sm opacity-85 font-medium '+width}>{name}</label>
        <input type={type} placeholder={placeholder} className={'focus:outline-none px-5 py-2 border-2 border-lightgray shadow-md '+width} id={htmlFor} />
    </div>
  )
}

