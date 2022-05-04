import React from 'react'

import axios from 'axios'

export const MoreDetailsButton = ({id} : {id:number}) => {



  return (
    <button 
      onClick={()=>{
        // fetch the data of a specific user from the backend
        axios.get('')
        .then((data)=>{
        // update the state store 
        })
        .then(()=>{
          // navigate to the specific user
        })
        .catch(err =>{
          // catch error
        })
      }}
      className='w-full md:w-24 lg:w-28 border-2 border-primary md:hover:bg-white
     md:hover:text-primary  bg-primary active:bg-white  active:text-primary md:text-xs lg:text-sm  
     md:my-auto py-1 rounded-lg md:hover:border-primary text-white active:scale-95 
     transition transition-duration-600 ease-out
    '>More details</button>
  )
}
