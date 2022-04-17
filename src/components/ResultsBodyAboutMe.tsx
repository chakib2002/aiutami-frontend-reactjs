import React from 'react'

export const ResultsBodyAboutMe = ({about_me}:{about_me : string}) => {
  return (
    <div className='px-1 '>
      <p className="font-bold md:text-xs lg:text-base">
        About me
      </p>
      <p className='text-truncate font-thin text-base md:text-xs text-gray-600 lg:text-sm'>
        {about_me}
      </p>
    </div>
  )
}
