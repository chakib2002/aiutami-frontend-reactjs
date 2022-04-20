import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IsAuthenticated } from "../initialStates";
import { textBool, textString } from "../types/interfaces";




export const isAuthReducer = createSlice({
    name:"isAuth",
    initialState : IsAuthenticated  ,
    reducers : {
        setIsAuth : (state, {payload} : PayloadAction<textBool>)=>{
            state.isAuth = payload.text          
        },
        setId : (state, {payload}: PayloadAction<{text : number | null}>)=>{
            state.id = payload.text
        },
        setFirstName : (state, {payload}: PayloadAction<textString>)=>{
            state.first_name= payload.text
        },
        setLastName : (state, {payload}: PayloadAction<textString>)=>{
            state.last_name= payload.text
        },
        setLink : (state, {payload}: PayloadAction<{text : string | null}>)=>{
            state.link= payload.text
        },
        
        
    
    }}
)
        

export const {setIsAuth,
setFirstName,
setLastName,
setId,
setLink
} = isAuthReducer.actions