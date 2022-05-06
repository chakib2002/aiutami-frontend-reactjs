import React from 'react'

export const ProfileResultBody = () => {
  return (
   <>
     <div className='mt-16 mx-5 sm:mx-10 md:hidden'>
        <div className='my-3'>
            <h1 className='font-bold mb-3'>Availability</h1>
            <div className='flex overflow-x-scroll scrollbar-hide '>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Monday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Tuesday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Wednesday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Thursday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Friday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Saturday</button>
                <button className='w-48 px-5 py-1 mr-2 rounded-md bg-primary text-white '>Sunday</button>
            </div>
        </div>
        <div className='my-3'>
            <h1 className='font-bold '>About me</h1>
            <p className='opacity-75 text-sm cursor-pointer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                 standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <div className="my-5">
            <p className='text-bold text-primary my-1'>Price 60$/Hour</p>
            <div className='w-full text-center py-2 bg-white border-2 border-primary rounded-md
             text-primary active:scale-95 active:bg-primary active:text-white transition
              transition-duration-900 ease-in'>Hire now</div>
        </div>
    </div>



    <div className='hidden md:block mx-10 my-10 '>
        <div>
          <h1 className='font-bold w-36 border-b-2 border-gray-300 mb-2'>About me</h1>
            <p className='opacity-75 text-sm cursor-pointer'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
              and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>

        <div className='grid grid-flow-col grid-cols-4 mt-6 justify-items-start'>
         <div className='col-span-3'>
          <h1 className='font-bold mb-3'>Availability</h1>
              <div className='grid grid-flow-cols grid-cols-3 justify-items-start'>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Monday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Tuesday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Wednesday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Thursday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Friday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Saturday</button>
                <button className="w-36 text-center border border-gray-300 rounded-md py-2 text-gray-500 my-1 mx-1">Sunday</button>
              </div>
         </div>
          <div className="mb-2 justify-self-end place-self-end">
            <p className='font-medium tracking-wide text-primary my-1'>Price 60$/Hour</p>
            <div className='w-48 text-center py-2 bg-primary border-2 border-primary rounded-md
            text-white lg:hover:bg-white lg:hover:font-medium lg:hover:text-primary cursor-pointer active:scale-95 active:bg-white active:text-primary transition
              transition-duration-900 ease-in'>Hire now</div>
        </div>
        </div>
    
    </div>
   </>
  )
}
