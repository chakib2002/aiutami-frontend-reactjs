import React from 'react'
import {ReactComponent as Copywrite} from "../Images/Copywrite.svg"
import {ReactComponent as Facebook} from '../Images/Facebook.svg'
import {ReactComponent as Instagram} from '../Images/Instagram.svg'
import {ReactComponent as Gmail} from '../Images/Gmail.svg'

export const Footer = () => {
  return (
    <div className=''>
      <div className='bg-bluedark text-white lg:grid lg:grid-flow-col lg:col-span-4 py-20 px-5'>
        <div className='col-span-1 md:ml-10 lg:ml-16'>
          <h1 className='mb-2'>
            <span className='text-3xl font-bold'>Aiutami</span>
            .com
          </h1>
          <p className='opacity-75 lg:border-r-2 border-white border-opacity-50 pr-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quaerat nisi fuga adipisci? Aperiam iure odit mollitia quod, commodi autem. Illo consequuntur
            omnis fuga amet excepturi aliquam quia,Ipsa natus soluta inventore voluptatum eligendi ab minima sit, aut beatae, esse qui neque officiis est sequi harum delectus saepe expedita enim!</p>        
        </div>
        <div className='col-span-3 flex justify-evenly md:mx-10 lg:mx-20 mt-7'>
          <div className='lg:mx-10' >
            <h1 className='text-lg mb-3'>Learn more</h1>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>About us</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Terms</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Our policy</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Career info</p>
          </div>
          <div className='lg:mx-10'>
            <h1 className='text-lg mb-3'>How can we help</h1>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Hire a tutor</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Hire a Housekeeper</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Hire a senior caregiver</p>
            <p className='font-light opacity-60 hover:text-white hover:opacity-100 cursor-pointer '>Start working with us</p>

          </div>
        </div>
      </div>
      <div className=' absolute ml-1 md:ml-12 lg:ml-20 my-2'>
        <Copywrite />
        <p className='inline opacity-80 align-middle text-sm'>Copywrite 2022</p>
      </div>
      <div className='flex justify-end space-x-3  mr-1 md:mr-12 lg:mr-20 my-2'>
        <Facebook />
        <Gmail />
        <Instagram />
      </div>
    </div>
  )
}
