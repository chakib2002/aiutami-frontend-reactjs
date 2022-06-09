import React from 'react'
import { useSelector } from 'react-redux'
import { isAuthenticatedState, UserMoreInfoProfileState } from '../../state/configureStore'
import { NavBar } from '../Home_components/Navbar'
import { ReactComponent as LocationIcon } from "../../Images/Location.svg";


export const ProfileHeader = () => {
  const {isAuth} = useSelector(isAuthenticatedState)
  const { firstname, lastname, Province, age, price, link, email, careType, occupation} = useSelector(UserMoreInfoProfileState)
  return (
    <>
      <div className='hidden md:block'>
      <NavBar isAuthData={isAuth === true ? true : false} />
      <div className='grid grid-flow-col grid-cols-4 md:mx-10 lg:w-[900px] xl:w-[950px] lg:mx-auto mt-7 
                      border border-gray-50 py-7 shadow-md md:px-5 lg:px-10 rounded-xl cursor-default'>
        <div className='col-span-1'>
          <img src={
            link !==null ? `http://localhost:3001/${link}-square.jpeg` : "https://imgs.search.brave.com/vLBQF6u3LXw69YDbtMDqv8K0uUxyGpga5L_8nN-ip7Y/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly90aGVw/b3dlcm9mdGhlZHJl/YW0ub3JnL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDE1LzA5L2dl/bmVyaWMtcHJvZmls/ZS1waWN0dXJlLTEy/MDB4MTIwMC5qcGc"
          } alt=''
            className='h-36 w-36 rounded-full shadow-xl m-auto'></img>
        </div>
        <div className='col-span-3 my-auto'>
          <div className='flex justify-between mb-2'>
            <p className='font-bold tracking-wide text-lg'>{firstname} {lastname}</p>
            <div className='flex'>
              <LocationIcon/>
              <p className='font-bold'>{Province}</p>
            </div>
            <p className='font-semibold'>{age} years old</p>
          </div>
          <p className='text-sm font-semibold'>{occupation}</p>
          <p className='text-gray-500 text-xs'>{email}</p>
          <div className='flex justify-between mt-1 items-stretch'>
            <p className='text-sm font-bold self-end'>{careType}</p>
            <div className='px-5 border-2 border-primary rounded-md text-primary py-2'>
              <p>{price}$ <span className='text-sm font-medium'>per hour</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    <div className='md:hidden mb-16'>
      <NavBar isAuthData={isAuth === true ? true : false} />
          <div className='flex mx-2 space-x-2 my-5 justify-evenly flex-wrap '>
              <img src='http://localhost:3001/28c9c222-f1ea-477c-9062-6463017e6d72-square.jpeg'
              alt='' 
              className='w-48 h-48 rounded-full' />
              <div className='block relative top-10'>
                  <h1 className='font-bold'>{firstname} {lastname}</h1>
                  <h3 className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>{age} years old</h3>
                  <p className='opacity-75 text-sm overflow-x-scroll scrollbar-hide'>{email}</p>
                  <h1 className='mt-5 mb-2 text-sm font-semibold overflow-x-scroll scrollbar-hide'>Chief Director at Yalidine</h1>
                  <div className='w-2/3 h-0.5 bg-gray-300'/>
              </div>
          </div>
      </div>   
    </>
  )
}
