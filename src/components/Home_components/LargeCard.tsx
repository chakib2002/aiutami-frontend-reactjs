import React from 'react'
import { Button } from './Button'

export const LargeCard = ({title , text, svg, rev}: {title: string, text:string, svg:JSX.Element, rev:boolean}) => {
  return (
    <div>
        <div className='lg:grid lg:grid-flow-col lg:mx-12'>
            <div className={`${rev && 'lg:order-last'} `}>
                {svg}
            </div>
            <div className='text-center lg:text-left lg:my-auto'>
                <p className='text-2xl font-bold text-primary my-5 mx-2 lg:mx-16'>{title}</p>
                <p className='opacity-70 mx-16'>{text}</p>
                <div className='my-5 lg:mx-16'>
                    <Button text='Learn more'/>
                </div>
            </div>
        </div>
    </div>
  )
}
