import React from 'react'

export const Section = () => {
  return (
    <div className='m-10  '>
        <p className='text-center text-2xl font-black text-primary tracking-widest'>Aiutami helps youth and adults</p>
        <div className='grid grid-flow-row lg:grid-flow-col m-5'>
            <button className='rounded-sm border-2 border-primary py-5 mb-3 lg:ml-5 lg:mr-5 text-primary font-bold 
                hover:border-bluedark hover:font-medium hover:bg-bluedark hover:text-secondary active:scale-95  transition transition-duration-400 ease-out'>
                    Hire an individual
            </button>
            <button className='rounded-sm border-2 border-primary py-5 mb-3 lg:ml-5 lg:mr-5 text-primary font-bold 
                hover:border-bluedark hover:font-medium hover:bg-bluedark hover:text-secondary active:scale-95  transition transition-duration-400 ease-out'>
                    Find a job
            </button>
        </div>
    </div>
  )
}
