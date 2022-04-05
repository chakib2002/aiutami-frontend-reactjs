import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchTutorInitialState } from "../initialStates";
import {
  Need,
  signupClass,
  signupLevel,
  signupProvince,
  signupSubjects,
  textString,
} from "../types/interfaces";

export const SearchTutor = createSlice({
  name: "searchTutor",
  initialState: searchTutorInitialState,
  reducers: {
    searchTutorProvince: (
      state,
      { payload }: PayloadAction<signupProvince>
    ) => {
      state.province = payload.text;
    },
    searchTutorFullName: (state, { payload }: PayloadAction<textString>) => {
      state.fullname = payload.text;
    },
    searchTutorPhoneNumber: (state, { payload }: PayloadAction<textString>) => {
      state.phoneNumber = payload.text;
    },
    searchTutorJobDescription: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.job_description = payload.text;
    },
    searchTutorNeed: (state, { payload }: PayloadAction<Need>) => {
      state.need = payload.text;
    },
    searchTutorLevel: (state, { payload }: PayloadAction<signupLevel>) => {
      state.level = payload.text;
    },
    searchTutorSubject: (state, { payload }: PayloadAction<signupSubjects>) => {
      state.subject = payload.text;
    },
    searchTutorSchoolYear: (state, { payload }: PayloadAction<signupClass>) => {
      state.school_year = payload.text;
    },
  },
});

export const SearchTutorPageNumber = createSlice({
  name: "tutorPageNumber",
  initialState: 1,
  reducers: {
    incrementPageNumberTutor: (state) => state + 1,
    decrementPageNumberTutor: (state) => state - 1,
  },
});

export const {
  searchTutorProvince,
  searchTutorFullName,
  searchTutorPhoneNumber,
  searchTutorJobDescription,
  searchTutorNeed,
  searchTutorLevel,
  searchTutorSubject,
  searchTutorSchoolYear,
} = SearchTutor.actions;

export const { incrementPageNumberTutor, decrementPageNumberTutor } =
  SearchTutorPageNumber.actions;
