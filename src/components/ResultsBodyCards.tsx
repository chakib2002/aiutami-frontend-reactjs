import React from 'react'
import { useSelector } from 'react-redux'
import { ResultState } from '../state/configureStore'
import { ResultsBodyCard } from './ResultsBodyCard'

export const ResultsBodyCards = () => {
  const {results} = useSelector(ResultState)
  return (
    <div className='mb-10'>
        {results?.map((element, index)=>{
          return (
          <div key={index}>
            <ResultsBodyCard full_name={element.firstname+' ' + element.lastname}
                             age={element.age}
                             profile_picture_link={element.link}
                             occupation={element.occupation}
                             about_me={element.about_me}
                             price = {element.pricing}
                             province={element.province}
                             availability={element.availability}
                             id={element.id}
                             />
          </div>)
        })}
    </div>
  )
}
