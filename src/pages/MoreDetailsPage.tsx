import React from 'react'
import { Footer } from '../components/Home_components/Footer'
import { ProfileHeader } from '../components/Profile_components/ProfileHeader'
import { ProfileResultBody } from '../components/Profile_components/ProfileResultBody'

export const MoreDetailsPage = () => {
  return (
    <div>
      <ProfileHeader />
      <ProfileResultBody/>
      <Footer />
    </div>
  )
}
