import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { notificationId } from "../initialStates";
import { TextNumber } from "../types/interfaces";

export const NotificationDetails = createSlice({
    name :"notification detail",
    initialState : notificationId  ,
    reducers : {
        SetNotificationId: (
            state,
            { payload }: PayloadAction<{text : number | null}>
          ) => {
           return state = payload.text;
          },
    }
})

export const {SetNotificationId} = NotificationDetails.actions