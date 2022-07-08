import axios from 'axios'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../state/configureStore';
import { clearAcceptedNotifications } from '../../state/Slices/AcceptedNotificationsSlice';
import { setIsAuth } from '../../state/Slices/isAuthenticatedSlice';
import { clearNotifications } from '../../state/Slices/notificationSlice';
import { ReactComponent as UploadIcon } from "../../Images/Upload.svg";

export const Menu = () => {

  const dispatch = useAppDispatch();
  const Navigate = useNavigate();

 
  const HandleFileChanges = (event : any)=>{
    const formData = new FormData()
    formData.append('image' , event.target.files[0]);
    const config = {
        headers: {
            'content-type': 'multipart/form-data'
        }
    };
    axios.post('http://localhost:3001/upload', formData, config)
    .then(res=>{console.log(res)})
    .catch(err=>{console.log(err)})  
  }
 

  return (
        <div className="absolute right-5 top-[70px] w-56  bg-white z-50 shadow-lg rounded-lg py-1 ">
            <h1 className=" py-2 my-3 ml-5 w-44 cursor-default text-gray-500 border-b-2">Menu</h1>  
            <form  action="" encType="multipart/form-data" >
            <label htmlFor="file" > 
               <p className='py-3 px-2 mx-4 mb-2 lg:hover:bg-slate-100
                 text-sm font-normal cursor-pointer active:bg-slate-200 
                 active:scale-95 rounded-md w-[185px] transition 
                 transition-duration-1000 ease-in'>Profile Picture <UploadIcon /></p>
             </label>           
             <input 
               name='image'
               id="file"
               type="file" 
               className='hidden my-10' 
               onChange={(e)=>{HandleFileChanges(e)}} />
            </form>
            <p 
            onClick={()=>{
              axios.get('http://localhost:3001/logout')
              .then((response)=>{
                if (response.status === 200) {
                  dispatch(setIsAuth({text : false}))
                  dispatch(clearNotifications())
                  dispatch(clearAcceptedNotifications())
                }
              }).then(()=>{
                Navigate("/", {replace : true})
              })
            }}
            className="py-3 px-2 mx-4 mb-2 lg:hover:bg-slate-100
                      text-sm font-normal cursor-pointer active:bg-slate-200 active:scale-95 rounded-md w-[185px] transition transition-duration-1000 ease-in">Disconnect</p>
        </div>
  )
}
