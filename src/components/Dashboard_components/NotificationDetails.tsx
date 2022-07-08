import React from 'react'
import { useSelector } from 'react-redux'
import { AcceptedNotificationsState, NotificationIDState, useAppDispatch } from '../../state/configureStore'
import { ReactComponent as LocationIcon } from "../../Images/Location.svg";
import axios from 'axios';
import { DeleteAcceptedNotification } from '../../state/Slices/AcceptedNotificationsSlice';
import { DeleteNotification } from '../../state/Slices/notificationSlice';

export const NotificationDetails = () => {
  const Notifications = useSelector(AcceptedNotificationsState)
  const NotificationId = useSelector(NotificationIDState)
  const dispatch = useAppDispatch()
  return (
    <div className='hidden lg:inline '>
      <p className='font-bold text-lg tracking-wider text-gray-500'>Notification's details</p>
      <div className=' border px-2 py-3 my-2 rounded-md lg:h-[450px]  '>
        {Notifications.map((element)=>(
          element.id ===NotificationId &&(
            <div className='mx-5 my-5' key={element.id}>
              <div className=' flex justify-between'>
                <p className='text-gray-700'>
                  <span className='text-dark font-semibold'>Full name : </span>
                  {element.fullName}
                </p>
                <div className='flex gap-1'>
                  <LocationIcon/>
                  {element.location}
                </div>
                <div>
                  <button
                   onClick={()=>{
                    axios.delete('http://localhost:3001/deleteNotification/'+element.id)
                    .then(res=>{
                      if(res.status === 200){
                        dispatch(DeleteAcceptedNotification({text: element.id}))
                      }
                    }).then(()=>{
                      dispatch(DeleteNotification({text: element.id}))
                    })
                    .catch((err)=>console.log(err))
                  }}
                   className=' text-xs  rounded-md shadow-md px-4  py-1 bg-red-500 hover:bg-red-700 active:scale-95 text-white'>DELETE</button>
                </div>
              </div>
              <div className='my-5'>
                <h1 className='text-dark font-semibold my-2'>
                  Job description
                </h1>
                <p className='text-gray-500 font-light text-sm h-[240px] overflow-y-scroll pr-3'>{element.jobDescription}</p>
              </div>
              <div className='flex justify-between font-semibold mt-14'>
                <p className='text-sm font-semibold'>
                  sent : <span className='font-normal text-gray-700'>{element.time}</span>
                </p>
                <p className='text-sm'>{element.phoneNumber}</p>
              </div>
            </div>
          ) 
        ))}
        {!NotificationId && (
          <p className='text-center text-sm font-semibold mt-[200px]'>No Notification is Selected !</p>
        )}
      </div>
    </div>
  )
}
