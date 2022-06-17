import axios from 'axios'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Dashboard } from '../components/Dashboard_components/Dashboard'
import { NavBar } from '../components/Home_components/Navbar'
import { NotificationState, useAppDispatch } from '../state/configureStore'
import { clearNotifications, setDBNotifications } from '../state/Slices/notificationSlice'
import { dbNotificationInterface } from '../state/types/interfaces'

export const DashboardPage = () => {

  const dispatch = useAppDispatch();
  const notificationData = useSelector(NotificationState)


  useEffect(()=>{
    dispatch(clearNotifications());
    fetchNotificationsFromdbAndSetSessionStorage();  
  },[])

  const fetchNotificationsFromdbAndSetSessionStorage = ()=>{
    axios.get('http://localhost:3001/fetchNotifications')
    .then(res=>{
      res.data.map((element :dbNotificationInterface)=>{
        return (
          dispatch(setDBNotifications({
            id : element.id,
            full_name : element.full_name,
            phone_number : element.phone_number,
            location : element.location,
            job_description : element.job_description,
            time : element.time,
            seen : element.seen,
            accepted : element.accepted, 
            new : element.new
          }))
        )
      })
    })   
    .catch(err=>console.log(err))
  }


  return (
    <>
    <NavBar isAuthData ={true}/>
    <Dashboard />
  </>
  )
}
