import axios from 'axios'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Dashboard } from '../components/Dashboard_components/Dashboard'
import { HalfNavbar } from '../components/Home_components/HalfNavbar'

import { NotificationState, useAppDispatch } from '../state/configureStore'
import { clearNotifications, setDBNotifications, setRedisNotifications } from '../state/Slices/notificationSlice'
import { setNotificationsNumber } from '../state/Slices/notificationsNumberSlice'
import { dbNotificationInterface } from '../state/types/interfaces'

export const array :number [] = []

export const DashboardPage = () => {
  const Notifications = useSelector(NotificationState)
  const dispatch = useAppDispatch()

  const fetchNotificationsFromdb = ()=>{
    axios.get('http://localhost:3001/fetchNotifications')
    .then(res=>{
      if(res.status === 200){
        res.data.map((element :dbNotificationInterface)=>{
          let bool = true;
          Notifications.map(e =>(e.id === element.id && (bool =false)))
              if (bool === true) {
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
                
              }
        })
      }
    })   
    .catch(err=>console.log(err))
  }
  
  useEffect(()=>{
   
    dispatch(clearNotifications());
    fetchNotificationsFromdb(); 
  },[])


  useEffect(()=>{
    const fetchNotificationsFromRedis = ()=>{
      axios.post('http://localhost:3001/checkForNewNotifications',{
        ids: array
      })
      .then((res)=>{
        if(res.status === 200){
          res.data.map((element : any )=>{
            array.push(element.message.id)
            dispatch(setNotificationsNumber({text : array.length}))
            return (
              dispatch(setRedisNotifications({
                id : element.message.id,
                full_name : element.message.full_name,
                phone_number : element.message.phone_number,
                job_description : element.message.job_description,
                time : element.message.time,
                location : element.message.location       
              }))
            )
          })
        }
      })
      .catch((err)=>{console.log(err)})
    }
    const timer = setInterval(
      () => fetchNotificationsFromRedis(),
      3000
    );
    return () => clearTimeout(timer); 
  },[])

  return (
    <div className='lg:h-screen lg:overflow-hidden'>
      <HalfNavbar isAuth={true}/>
      <Dashboard />
    </div>
  )
}
