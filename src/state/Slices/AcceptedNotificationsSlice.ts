import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notifications } from "../initialStates";
import { dbNotificationInterface, notificationId } from "../types/interfaces";


export const AcceptedNotifications = createSlice({
    name :"Accepted notifications",
    initialState :Notifications,
    reducers : {
        setAcceptedNotifications : (state,
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
        clearAcceptedNotifications :(state)=>{
            return state = []
            },
        
        DeleteAcceptedNotification :(state,{payload} : PayloadAction<notificationId>)=>{
            state.forEach(element=>{
                if(element.id === payload.text){
                    const index = state.indexOf(element)
                    state.splice(index,1)
                }
            })
        },
    }
})

export const {setAcceptedNotifications , clearAcceptedNotifications, DeleteAcceptedNotification} = AcceptedNotifications.actions