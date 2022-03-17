import React from 'react'

export const Card = ( {title, text} : {title:string, text : string} ) => {
  return (
    <div className='w-80 rounded-2xl mb-5 mx-auto'>
        <div className='text-primary font-bold text-xl ml-5 mt-5 mb-2'>
            {title}
        </div>
        <div className='ml-5 mb-5 opacity-80 mr-2'>
            {text}
        </div>
        <button className=' px-5 py-2 bg-primary rounded-lg hover:bg-bluedark text-white ml-5 mb-5
        transition transition-duration-400 ease-out active:scale-95'>Hire now</button>
    </div>
  )
}
