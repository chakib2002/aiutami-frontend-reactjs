import React from 'react'
import { HalfNavbar } from '../Home_components/HalfNavbar'


export const ProfileHeader = () => {
  return (
    <>
      <div className='md:hidden'>
          <HalfNavbar isAuth={false}/>
          <div className='flex mx-2 space-x-2 my-5 justify-evenly flex-wrap '>
              <img src='http://localhost:3001/28c9c222-f1ea-477c-9062-6463017e6d72-square.jpeg'
              alt='' 
              className='w-48 h-48 rounded-full' />
              <div className='block relative top-10'>
                  <h1 className='font-bold'>John Gotti</h1>
                  <h3 className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>26 years old</h3>
                  <p className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>abdelmalek.feddal@worldlearningalgeria.org</p>
                  <h1 className='mt-5 mb-2 text-sm font-semibold overflow-x-scroll scrollbar-hide'>Chief Director at Yalidine</h1>
                  <div className='w-2/3 h-0.5 bg-gray-300'/>
              </div>
          </div>
      </div>   




      <div className='hidden md:block'>
      <HalfNavbar isAuth={false}/>
      <div className='mx-10 my-5 flex space-x-5 shadow-lg rounded-2xl cursor-default'>
        <img src='http://localhost:3001/28c9c222-f1ea-477c-9062-6463017e6d72-square.jpeg'
          alt='' 
          className='w-48 h-auto rounded-2xl shadow-2xl cursor-default  ' />
        <div className='relative top-9'>
          <h1 className='font-bold'>John Gotti</h1>
          <h3 className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>26 years old</h3>
          <p className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>abdelmalek.feddal@worldlearningalgeria.org</p>
          <h1 className='mt-5 mb-2 text-sm font-semibold overflow-x-scroll scrollbar-hide'>Chief Director at Yalidine</h1>
          <div className='w-2/3 h-0.5 bg-gray-300'/>
        </div>
        <div className=''>
      
        </div>
      </div>
        
      </div>  
    </>
  
  )
}
