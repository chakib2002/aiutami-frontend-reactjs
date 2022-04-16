import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SearchResult } from "../initialStates";
import { searchResultBody, searchResultType } from "../types/interfaces";

export const Result = createSlice({
  name: "results",
  initialState: SearchResult,
  reducers: {
    SetResultsType : (state, {payload} : PayloadAction<searchResultType>)=>{
      state.searchResultsType = payload.text
    },
    SetSearchResults :(state, {payload}: PayloadAction<searchResultBody>)=>{
      state.results?.push({
        id: payload.id,
        firstname : payload.firstname,
        lastname : payload.lastname,
        age : payload.age,
        email : payload.email,
        about_me : payload.about_me,
        province : payload.province,
        pricing : payload.pricing,
        occupation : payload.occupation,
        care_type : payload.care_type,
        availability : payload.availability,
        level : payload?.level,
        subject : payload?.subject,
        school_year : payload?.school_year,
        education : payload?.education,
        transportation : payload?.transportation,
        house_hold_tasks : payload?.house_hold_tasks,
        personal_care : payload?.personal_care,
        mobility_assistance : payload?.mobility_assistance,
        specialized_care : payload?.specialized_care,
        companionship : payload?.companionship,

      })
    },
    clearResult :(state)=>{
      state.results = []
    }
  },
});

export const {SetResultsType, SetSearchResults, clearResult} = Result.actions
