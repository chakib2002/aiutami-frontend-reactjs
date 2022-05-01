import React from 'react'

export const Notification = () => {
  return (
    <>
    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in'>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>





    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in '>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>


    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in '>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>





    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in '>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>








    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in '>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>











    <div className='px-2 lg:px-5 md:px-3 cursor-pointer lg:hover:bg-slate-100 py-2 transition transition-duration-1000 ease-in '>
        <div className='grid grid-flow-col grid-cols-12'>
          <div className='col-span-11 space-y-2'>
            <div className=' flex space-x-4 sm:space-x-12 md:space-x-16 
            lg:grid lg:grid-flow-col lg:grid-cols-4'>
              <h1 className='text-xs font-semibold opacity-95 lg:col-span-2 '>John Gotti</h1>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>0549432164</p>
              <p className='text-xs font-semibold opacity-95 lg:col-span-1'>Algiers</p>
            </div>
            <div className=''>
              <h1 className='text-xs font-semibold opacity-95'>Job description</h1>
              <p className='text-xs opacity-75 text-truncate'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
              </p>
            </div>
            <div className=''>
              <p className='text-xs tracking-wide opacity-75 font-extralight'>Sent Sunday at 3pm</p>
            </div>
          </div>

          <div className='grid grid-flow-row space-y-3 my-2 md:flex md:space-y-0 md:space-x-3 ml-2 md:ml-3'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
              className="cursor-pointer h-5 w-5  active:opacity-100
              lg:hover:fill-darkgreen opacity-80 relative md:top-[24px] fill-green
              transition transition-duration-1000 ease-out active:scale-90">
              <path d="M438.6 105.4C451.1 117.9 451.1 138.1 438.6 150.6L182.6 406.6C170.1 419.1 149.9 419.1 137.4 406.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4C21.87 220.9 42.13 220.9 54.63 233.4L159.1 338.7L393.4 105.4C405.9 92.88 426.1 92.88 438.6 105.4H438.6z"/>
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
            className="cursor-pointer h-5 w-5 text-dark active:opacity-100
              lg:hover:opacity-100 opacity-60 relative md:top-[24px]
              transition transition-duration-1000 ease-out active:scale-90"> 
              <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/>
            </svg>
          </div>
        </div>
    </div>
    <div className='h-[1px] mx-2 md:mx-3 w-[90%] sm:w-80 md:w-[500px] bg-gray-400 opacity-60 lg:hidden'/>


   
    </>
  )
}
