import React from 'react'
import { Card } from './Card'

export const Cards = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10'>
        <Card title='Tutor'
            text='Hire a private tutor to help you with your work at home, 
            filter the search at your prefrences and send a request to your favorite person .'
        />
        <Card title='Housekeeper'
            text='You need someone to take care of your house .Hire a specific housekeeper that can clean,
             cook and arrange it fulltime or parttime .'
        />
        <Card title='Senior caregiver'
            text='Senior caregivers are professional and  certified individuals who can take care of seniors special needs .
            Find your favorite caregiver'
        />
    </div>
  )
}
