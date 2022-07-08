import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { AcceptedNotificationsState, useAppDispatch } from '../../state/configureStore'
import { clearAcceptedNotifications, DeleteAcceptedNotification, setAcceptedNotifications } from '../../state/Slices/AcceptedNotificationsSlice';
import { dbNotificationInterface } from '../../state/types/interfaces';
import { AcceptedNotification } from './AcceptedNotification';


export const AcceptedNotifications = () => {

  const dispatch = useAppDispatch();
  const AcceptedNotifications = useSelector(AcceptedNotificationsState)

  useEffect(()=>{
    dispatch(clearAcceptedNotifications())
    axios.get("http://localhost:3001/fetchAcceptedJobRequestNotifications")
    .then(res=>{
      if(res.status === 200){
        res.data.map((element :dbNotificationInterface)=>{
          let bool = true;
          AcceptedNotifications.map(e =>(e.id === element.id && (bool =false)))
              if (bool === true) {
            return (
              dispatch(setAcceptedNotifications({
                id : element.id,
                full_name : element.full_name,
                phone_number : element.phone_number,
                location : element.location,
                time : element.time,
                job_description : element.job_description,
                seen : element.seen,
                accepted : element.accepted,
                new : element.new
            }))
      )}}) }
      
    })
    .catch(err=>{console.log(err)})
  },[])



  return (
    
    <div className='col-span-1  '>
      <p className='font-bold text-lg tracking-wider text-gray-500 mb-2 border-l-4 pl-2 mx-5  '>Accepted Notifications</p>
      <div className='lg:h-[450px] lg:overflow-y-scroll'>
        {AcceptedNotifications.map(element=>(
          <div key={element.id}>
            <AcceptedNotification 
            id={element.id}
            full_name={element.fullName}
            location={element.location}
            job_description={element.jobDescription}
            phone_number ={element.phoneNumber} 
            time = {element.time}
          />
          </div>
        ))}
        </div>
    </div>
  )
}
