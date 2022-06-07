import React from 'react'
import { HireNowButton } from './HireNowButton'
import { MoreDetailsButton } from './MoreDetailsButton'
import { ResultsBodyAvailability } from './ResultsBodyAvailability'
import { ResultsBodyPicture } from './ResultsBodyPicture'

export const ResultsBodyCard = ({
  profile_picture_link, 
  full_name, 
  age,
  occupation,
  about_me,
  price,
  province,
  availability,
  id
}:{
  profile_picture_link:string, 
  full_name:string, 
  age : number,
  occupation:string,
  about_me:string,
  price:number,
  province:string,
  availability:string,
  id:number
}) => {
  
  return (
  <>
    <div className='mx-5 sm:mx-9 mb-3 py-0.5 px-2 md:hidden  '>
          <ResultsBodyPicture profile_picture_link={profile_picture_link}/>
       
        <div className='flex justify-between px-1'>
        <div className='font-bold text-base my-0.5 md:text-xs md:font-semibold lg:text-base '>{full_name}</div>
        <div className='text-base font-bold my-0.5 md:text-xs lg:text-base'>{age} years old</div>
        </div>

        <div className='px-1 mr-1 my-1 mb-1.5 md:border-r-0 md:border-l-2 md:ml-1 md:pl-2 
          font-normal text-base border-r-2 text-gray-600 md:text-xs lg:text-base'>{occupation}</div>
        
        <div className='px-1 '>
          <p className="font-bold md:text-xs lg:text-base">
            About me
          </p>
          <p className='text-truncate font-thin text-base md:text-xs text-gray-600 lg:text-sm'>
            {about_me}
          </p>
        </div>

        <div className='flex justify-between px-1 py-2 '>
        <div className='font-bold md:text-xs lg:text-base'>{province}</div>
          <div className='text-base text-primary font-bold md:text-xs lg:text-base md:mt-2'>{price}$/Hour</div>
        </div>
        <div className=''>
          <ResultsBodyAvailability availability={availability} />
        </div>
        <div className='flex space-x-5 px-1 py-2 mb-2 '>
          <HireNowButton/>
          <MoreDetailsButton id={id}/>
        </div>
      </div>







      <div className='hidden md:block md:mx-8 lg:mx-10 my-1'>
          <div className='grid grid-flow-col grid-cols-4 cursor-pointer transition
           transition-duration-600 ease-out py-6 px-3 rounded-lg shadow-sm hover:shadow-md border
            border-slate-50 '>
            <div className='col-span-1 justify-self-start md:ml-1 lg:ml-3 xl:ml-5'>
              <ResultsBodyPicture profile_picture_link={profile_picture_link} />
            </div>
            <div className='col-span-3'>
              <div className='flex justify-between mx-8'>
                <div className='font-bold text-base my-0.5 md:text-xs md:font-semibold lg:text-sm '>{full_name}</div>
                <div className='text-base font-bold my-0.5 md:text-xs lg:text-sm'>{age} years old</div>
                <div className='font-bold md:text-xs lg:text-sm'>{province}</div>
                <div className='text-base text-primary font-bold md:text-xs lg:text-sm'>{price}$/Hour</div>
              </div>
              <div className='border-b w-56 my-1 bg-gray-200 mx-8'/>
              <div className='mx-7 my-3'>

              <div className='px-1 '>
                <p className="font-bold md:text-xs lg:text-sm">
                  About me
                </p>
                <p className='text-truncate font-thin text-base md:text-xs text-gray-500 lg:text-sm'>
                  {about_me}
                </p>
              </div>
                <div className='px-1 mr-1 my-1 mb-1.5 md:border-r-0 md:border-l-2 md:ml-1 md:pl-2
                 font-normal text-base border-r-2 text-gray-600 md:text-xs lg:text-sm'>{occupation}</div>

                <div className='flex justify-between xl:mt-10'>
                  <ResultsBodyAvailability availability={availability}/>
                  <div className='flex md:space-x-2 '>
                    <HireNowButton />
                    <MoreDetailsButton id={id}/>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
            </div>

          </div>
         
        </div>

    </>
  )
}
