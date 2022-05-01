import React from 'react'
import { HireNowButton } from './HireNowButton'
import { MoreDetailsButton } from './MoreDetailsButton'
import { ResultsBodyAboutMe } from './ResultsBodyAboutMe'
import { ResultsBodyAge } from './ResultsBodyAge'
import { ResultsBodyAvailability } from './ResultsBodyAvailability'
import { ResultsBodyFullname } from './ResultsBodyFullname'
import { ResultsBodyOccupation } from './ResultsBodyOccupation'
import { ResultsBodyPicture } from './ResultsBodyPicture'
import { ResultsBodyPricing } from './ResultsBodyPricing'
import { ResultsBodyProvince } from './ResultsBodyProvince'

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
          <ResultsBodyFullname full_name={full_name} />
          <ResultsBodyAge age={age}/>
        </div>
        <ResultsBodyOccupation occupation={occupation}/>
        <ResultsBodyAboutMe about_me={about_me}/>
        <div className='flex justify-between px-1 py-2 '>
          <ResultsBodyProvince province={province} />
          <ResultsBodyPricing price={price} />
        </div>
        <div className=''>
          <ResultsBodyAvailability availability={availability} />
        </div>
        <div className='flex space-x-5 px-1 py-2 mb-2 '>
          <HireNowButton/>
          <MoreDetailsButton id={id}/>
        </div>
      </div>
      <div className='hidden md:block md:mx-8 lg:mx-10'>
          <div className='grid grid-flow-col grid-cols-3 cursor-pointer transition
           transition-duration-600 ease-out py-6 px-3 rounded-lg shadow-sm hover:shadow-lg border
            border-slate-50 hover:bg-slate-50'>
            <div className='col-span-1'>
              <ResultsBodyPicture profile_picture_link={profile_picture_link} />
            </div>
            <div className='col-span-2'>
              <div className='flex justify-between mx-8'>
                <ResultsBodyFullname full_name={full_name}/>
                <ResultsBodyAge age={age}/>
                <ResultsBodyProvince province={province}/>
                <ResultsBodyPricing price={price}/>
              </div>
              <div className='mx-7 my-3'>
                <ResultsBodyAboutMe about_me={about_me}/>
                <ResultsBodyOccupation occupation={occupation}/>
                <div className='flex justify-between'>
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
