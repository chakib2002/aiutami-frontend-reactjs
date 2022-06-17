import { RedisNotificationInterface, dbNotificationInterface } from './../types/interfaces';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { Notifications } from "../initialStates";


export const notifications = createSlice({
    name :"notifications",
    initialState : Notifications,
    reducers : {
        setDBNotifications : (state,
             {payload} : PayloadAction<dbNotificationInterface>)=>{
                state.push({
                    id : payload.id,
                    fullName : payload.full_name,
                    phoneNumber : payload.phone_number,
                    location : payload.location,
                    jobDescription : payload.job_description,
                    time : payload.time,
                    seen : payload.seen,
                    accepted : payload.accepted,
                    new : payload.new
                })
        },
        setRedisNotifications : (state, {payload} : PayloadAction<RedisNotificationInterface>)=>{
            state.push({
                id : payload.message.id,
                fullName : payload.message.full_name,
                phoneNumber : payload.message.phone_number,
                location : payload.message.location,
                jobDescription : payload.message.job_description,
                time : payload.message.time,
                seen : false,
                accepted : false,
                new : true
            })
        },
        clearNotifications :(state)=>{
           return state = []
        }
    }
})


export const {setDBNotifications, setRedisNotifications, clearNotifications} = notifications.actions