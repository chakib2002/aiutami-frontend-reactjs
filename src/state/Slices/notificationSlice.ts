import { RedisNotificationInterface, dbNotificationInterface, notificationId } from './../types/interfaces';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
            state.unshift({
                id : payload.id,
                fullName : payload.full_name,
                phoneNumber : payload.phone_number,
                location : payload.location,
                jobDescription : payload.job_description,
                time : payload.time,
                seen : false,
                accepted : false,
                new : true
            })
        },
        updateSeen :(state,{payload} : PayloadAction<notificationId>)=>{
            state.forEach(element =>{
                if(element.id === payload.text){
                    element.seen = true
                }
            })
        },
        
        DeleteNotification :(state,{payload} : PayloadAction<notificationId>)=>{
            state.forEach(element=>{
                if(element.id === payload.text){
                    const index = state.indexOf(element)
                    state.splice(index,1)
                }
            })
        },
        
        clearNotifications :(state)=>{
           return state = []
        }
    }
})


export const {setDBNotifications, setRedisNotifications, clearNotifications, updateSeen, DeleteNotification} = notifications.actions