import axios from 'axios'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ProfileHeader } from '../components/Profile_components/ProfileHeader'
import { ProfileResultBody } from '../components/Profile_components/ProfileResultBody'
import { useAppDispatch } from '../state/configureStore'
import { setUserProfile } from '../state/Slices/userProfileSlice'

export const MoreDetailsPage = () => {

  const dispatch = useAppDispatch()
  const {user_id} = useParams()
  
  useEffect(()=>{

    axios.get('http://localhost:3001/result/'+ user_id)
    .then((res)=>{
      dispatch(setUserProfile({
        id : res.data.id,
        firstname : res.data.first_name,
        lastname : res.data.last_name,
        email : res.data.email,
        Province : res.data.province,
        age : res.data.age,
        price :res.data.price,
        careType :res.data.care_type,
        aboutMe :res.data.about_me,
        availability :res.data.availability,
        link : res.data.link,
        occupation : res.data.occupation
      }))
    })
    .catch((err)=>{
      console.log(err)
    })

  }, [dispatch, user_id])


  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
      key="landingPage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
        <ProfileHeader/>
        <ProfileResultBody/>
      </motion.div>
    </AnimatePresence>

    
  )
}
