import React from 'react'
import { DeleteAcceptedNotification } from '../../state/Slices/AcceptedNotificationsSlice'
import { ReactComponent as UserIcon } from '../../Images/User.svg'
import { ReactComponent as LocationIcon } from "../../Images/Location.svg";
import { ReactComponent as PhoneIcon } from "../../Images/Phone.svg";
import { useAppDispatch } from '../../state/configureStore';
import { SetNotificationId } from '../../state/Slices/NotificationDetailsSlice';


export const AcceptedNotification = (
    {
        id, full_name, location, phone_number, job_description, time
    } : {
        id:number |null,
        full_name :string|null,
        location : string|null,
        phone_number : string|null,
        job_description :string |null,
        time : string|null
    }
) => {
    const dispatch = useAppDispatch()
  return (
    <div
    onClick={()=>{
        dispatch(SetNotificationId({text : id}))
    }}
    className='border py-3 px-5 mr-6 mx-5 my-1 rounded-md lg:hover:scale-105 lg:hover:bg-slate-50 lg:active:scale-100 cursor-pointer transition transition-duration-600 ease-in '>
            <div className='flex justify-between'>
            <div className='flex gap-2'>
                <div>
                    <UserIcon />
                </div>
                <p className='text-xs  font-semibold'>
                    {full_name}
                </p>
            </div>
            <div className='flex gap-2'>
                <div >
                    <PhoneIcon />
                </div>
                <p className='text-xs  font-semibold'>
                    {phone_number}
                </p>
            </div>
            <div className='flex gap-3 '>
                <div className='relative bottom-1'>
                    <LocationIcon />
                </div>
                <p className='text-xs font-semibold relative right-1'>
                    {location}
                </p>
            </div>
            </div>
            <div className='my-2 '>
                <h1 className='text-xs font-semibold'>Job description</h1>
                <p className='text-truncate text-gray-500 text-xs'>{job_description}</p>
            </div>
            <p className='text-xs text-gray-700 font-medium'>sent {time}</p>
            
        </div>

  )
}
