import React from 'react'

export const Day = ({day, selected}: {day:string, selected:boolean}) => {
  return (
    
        <button className={"w-32 mx-1 text-sm outline-none font-medium my-2 hover:text-secondary hover:bg-primary hover:border-primary active:scale-95 border border-opacity-50 opacity-75 hover:opacity-100 hover:border-opacity-100  border-dark px-5 py-2 rounded-full text-dark  transition transition-duration-600 ease-out"}>
          {day}
        </button>
    
  )
}
