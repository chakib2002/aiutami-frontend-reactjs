import React from 'react'
import { Signup1 } from './Signup1'
import { Signup2 } from './Signup2'
export const Signup = ({SignUpPage , careType}:{SignUpPage : number, careType:string | null} ) => {
  return (
    <>
        {SignUpPage === 1 && <Signup1 />}
        {SignUpPage===2 && <Signup2 />}
    </>
  )
}
