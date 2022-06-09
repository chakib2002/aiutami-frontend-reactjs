import { User_Profile } from './../types/interfaces';
import { MoreInfoProfile } from './../initialStates';

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const UserProfile = createSlice({
    name:'user profile',
    initialState : MoreInfoProfile ,
    reducers : {
        setUserProfile : (state, {payload} : PayloadAction<User_Profile>)=>{
            state.id = payload.id;
            state.firstname = payload.firstname;
            state.lastname = payload.lastname;
            state.email = payload.email;
            state.age = payload.age;
            state.Province = payload.Province;
            state.aboutMe = payload.aboutMe;
            state.careType = payload.careType;
            state.link = payload.link;
            state.price = payload.price;
            state.availability = payload.availability;
            state.occupation = payload.occupation
           
        }
    }
})

export const {setUserProfile} = UserProfile.actions