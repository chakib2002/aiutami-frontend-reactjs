import React from 'react'
import { setUserProfile } from '../../state/Slices/userProfileSlice'
import { ResultState, useAppDispatch } from '../../state/configureStore'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


export const MoreDetailsButton = ({id} : {id:number}) => {

const dispatch = useAppDispatch();
const navigate = useNavigate();
const {results} = useSelector(ResultState)

  return (
    <button 
      onClick={()=>{
        results?.forEach((e, i) =>{
          if(id === e.id){
            dispatch(setUserProfile({
              id : e.id,
              firstname : e.firstname,
              lastname : e.lastname,
              email : e.email,
              Province : e.province,
              age : e.age,
              price :e.pricing,
              careType :e.care_type,
              aboutMe :e.about_me,
              availability :e.availability,
              link : e.link,
              occupation : e.occupation
            }))
            navigate('/Results/'+id, {replace : false})
          }
        })
      }}
      className='w-full md:w-24 lg:w-28 border-2 border-primary md:hover:bg-white
     md:hover:text-primary  bg-primary active:bg-white  active:text-primary md:text-xs lg:text-sm  
     md:my-auto py-1 rounded-lg md:hover:border-primary text-white active:scale-95 
     transition transition-duration-600 ease-out
    '>More details</button>
  )
}
