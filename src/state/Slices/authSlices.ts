import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { signinInitialState, signupInitialState } from '../initialStates'
import { SignIn } from '../types'

export const signinReducer = createSlice({
    name:"signin",
    initialState: signinInitialState,
    reducers : {
        signin : (state,{payload} : PayloadAction<SignIn>)=> {
            
            if (payload.box === "email") {
                state.email = payload.email;
            
            }else if (payload.box==="password") {
                state.password = payload.password
            }
        }
    }
})

