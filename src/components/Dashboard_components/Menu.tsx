import axios from 'axios'
import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../state/configureStore';
import { setIsAuth } from '../../state/Slices/isAuthenticatedSlice';

export const Menu = () => {

  const dispatch = useAppDispatch()
  
  const Navigate = useNavigate();
  return (
        <div className="absolute right-5 top-[70px] w-56  bg-white z-50 shadow-lg rounded-lg py-1 ">
            <h1 className=" py-2 my-3 ml-5 w-44 cursor-default text-gray-500 border-b-2">Menu</h1>             
            <p className="py-3 px-2 mx-4 lg:hover:bg-slate-100 
                            text-sm font-normal cursor-pointer active:bg-slate-200 active:scale-95 rounded-md w-[185px] transition transition-duration-1000 ease-in ">Profile</p>
            <p 
            onClick={()=>{
              axios.get('http://localhost:3001/logout')
              .then((response)=>{
                if (response.status === 200) {
                  dispatch(setIsAuth({text : false}))
                  sessionStorage.removeItem("Aiutami_notifications")
                  Navigate("/", {replace : true})
                }
              })
            }}
            className="py-3 px-2 mx-4 mb-2 lg:hover:bg-slate-100
                      text-sm font-normal cursor-pointer active:bg-slate-200 active:scale-95 rounded-md w-[185px] transition transition-duration-1000 ease-in">Disconnect</p>
        </div>
  )
}
