import React from 'react'

export const Menu = () => {
  return (
        <div className="absolute right-5 top-[70px] w-56  bg-white z-50 shadow-lg rounded-lg py-1 ">
            <h1 className=" py-2 my-3 ml-5 w-44 cursor-default text-gray-500 border-b-2">Menu</h1>             
            <p className="py-3 px-3 mx-4 lg:hover:bg-slate-200 
                            text-sm font-normal cursor-pointer active:bg-slate-200 active:scale-95 rounded-md w-48 transition transition-duration-900 ease-out ">Profile</p>
            <p 
            onClick={()=>{}}
            className="py-3 px-3 mx-4 mb-2 lg:hover:bg-slate-200
                            text-sm font-normal cursor-pointer active:bg-slate-200 active:scale-95 rounded-md w-48 transition transition-duration-900 ease-out">Disconnect</p>
        </div>
  )
}
