import axios from 'axios'
import React from 'react'
import { NotificationState, useAppDispatch } from '../../state/configureStore'
import { Notification } from './Notification'
import { useSelector } from 'react-redux'

export const Notifications = () => {
  
  const NotifictionDATA = useSelector(NotificationState)

  return (
    <div className='absolute right-5 top-[70px] w-[90%] md:w-3/4 lg:w-3/5  z-50 shadow-lg rounded-lg bg-white h-[400px] overflow-y-scroll'>
        <h1 className='py-2 ml-2 mt-3 mb-1 lg:mx-5 w-36 cursor-default text-gray-500 border-b-2 '>Notifications</h1>
         {
          NotifictionDATA.map((element)=>{
            return (
              <div key={element.id}>
                <Notification
                  fullname={element.fullName} 
                  phoneNumber={element.phoneNumber}
                  location ={element.location}
                  jobDescription={element.jobDescription}
                  id={element.id}
                  time={element.time}
                  seen ={element.seen} />
              </div>
            )
          })
         }
    </div>
  )
}
