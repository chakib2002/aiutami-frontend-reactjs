import React from 'react'
import {ReactComponent as Search} from "../Images/Search.svg"
import {ReactComponent as Grandma} from "../Images/Grandma.svg"
import {ReactComponent as Confirmed} from "../Images/Confirmed.svg"
import { LargeCard } from './LargeCard'
export const LargeCards = () => {
  return (
    <div className='text-center'>
      <LargeCard title='We help you find the perfect tutor for your child .'
        text='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s .'
        rev={false}
        svg={<Search />} />
      <LargeCard title='Certified Senior caregivers' 
        text='There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable.
        If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.' 
        rev={true} 
        svg={<Grandma />} />
      <LargeCard title='Personalize your plan . ' 
        text='It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.' 
        rev={false} 
        svg={<Confirmed/>} />
    </div>
  )
}
