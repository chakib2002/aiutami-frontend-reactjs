import React from 'react'

export const ProfileAvailability = ({availability}: {availability :string | null}) => {

    const Array = availability?.split(',')
  return (
    <div className='grid grid-cols-3'>
        {Array?.map((e ,i )=>{
            return (
                <p key={i} className="px-2 border-l-2 border-gray-300 text-sm text-gray-500 my-1 mx-1 self-center ">{e}</p>
            )
        })}
    </div>
  )
}
