import React from 'react'
import { AcceptedNotifications } from './AcceptedNotifications'
import { NotificationDetails } from './NotificationDetails'

export const Dashboard = () => {
  return (
    <div className='lg:grid lg:grid-flow-col my-7 mx-10 lg:grid-cols-2 gap-10 '>
      <AcceptedNotifications />
      <NotificationDetails />
    </div>
  )
}
