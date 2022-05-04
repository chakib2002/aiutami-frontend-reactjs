import React from 'react'


export const ResultsBodyPicture = ({ profile_picture_link }: { profile_picture_link : string}) => {
  return (
    <div className='my-1 lg:my-2 overflow-hidden  '>
      <img className='rounded-lg md:mx-auto md:w-auto md:m-0 md:h-32 
       m-auto border border-gray-300  lg:w-auto lg:h-40 lg:rounded-lg'
       src={profile_picture_link === null ? 
        "https://imgs.search.brave.com/vLBQF6u3LXw69YDbtMDqv8K0uUxyGpga5L_8nN-ip7Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVw/b3dlcm9mdGhlZHJl/YW0ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L2dl/bmVyaWMtcHJvZmls/ZS1waWN0dXJlLTEy/MDB4MTIwMC5qcGc" 
        : 
        `http://localhost:3001/${profile_picture_link}-standard.jpeg`}
        alt="profile pic"
        />
    </div>
  )
}
