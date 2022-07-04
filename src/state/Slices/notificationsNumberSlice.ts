import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TextNumber } from "../types/interfaces";

export const notificationsNumber = createSlice({
    name : 'number of notifications',
    initialState : 0,
    reducers : {
        setNotificationsNumber : (state, {payload} : PayloadAction<TextNumber>)=> state = payload.text 
    }
})

export const { setNotificationsNumber } = notificationsNumber.actions