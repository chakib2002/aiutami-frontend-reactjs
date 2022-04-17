import React from 'react'


export const ResultsBodyPicture = ({ profile_picture_link }: { profile_picture_link : string}) => {
  return (
    <div className='my-1 lg:my-2 overflow-hidden  '>
      <img className='rounded-lg md:w-56 h-auto md:mx-auto md:h-32 lg:w-72
       m-auto border border-gray-300 md:m-0 lg:h-40'
       src={profile_picture_link}
        alt="profile pic"
        />
    </div>
  )
}
