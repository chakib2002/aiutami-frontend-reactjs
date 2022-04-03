import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchSeniorCaregiverInitialState } from "../initialStates";
import {
  Need,
  signupProvince,
  textBool,
  textString,
} from "../types/interfaces";

export const SearchSeniorCaregiver = createSlice({
  name: "searchSeniorCaregiver",
  initialState: searchSeniorCaregiverInitialState,
  reducers: {
    searchSeniorcaregiverProvince: (
      state,
      { payload }: PayloadAction<signupProvince>
    ) => {
      state.province = payload.text;
    },
    searchSeniorCaregiverFullName: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.fullname = payload.text;
    },
    searchSeniorCaregiverPhoneNumber: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.phoneNumber = payload.text;
    },
    searchSeniorCaregiverJobDescription: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.job_description = payload.text;
    },
    searchSeniorCaregiverTransportation: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.transportation = payload.text;
    },
    searchSeniorCaregiverHouseHoldTasks: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.house_hold_tasks = payload.text;
    },
    searchSeniorCaregiverPersonalCare: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.personal_care = payload.text;
    },
    searchSeniorCaregiverMobilityAssistance: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.mobility_assistance = payload.text;
    },
    searchSeniorCaregiverSpecializedCare: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.specialized_care = payload.text;
    },
    searchSeniorCaregiverCompanionship: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.companionship = payload.text;
    },
    searchSeniorCaregiverNeed: (state, { payload }: PayloadAction<Need>) => {
      state.need = payload.text;
    },
  },
});

export const SearchSeniorCaregiverPageNumber = createSlice({
  name: "SeniorCaregiverPageNumber",
  initialState: 1,
  reducers: {
    incrementPageNumberSeniorCaregiver: (state) => state + 1,
    decrementPageNumberSeniorCaregiver: (state) => state - 1,
  },
});

export const {
  searchSeniorcaregiverProvince,
  searchSeniorCaregiverFullName,
  searchSeniorCaregiverPhoneNumber,
  searchSeniorCaregiverJobDescription,
  searchSeniorCaregiverTransportation,
  searchSeniorCaregiverHouseHoldTasks,
  searchSeniorCaregiverPersonalCare,
  searchSeniorCaregiverMobilityAssistance,
  searchSeniorCaregiverSpecializedCare,
  searchSeniorCaregiverCompanionship,
  searchSeniorCaregiverNeed,
} = SearchSeniorCaregiver.actions;

export const {
  incrementPageNumberSeniorCaregiver,
  decrementPageNumberSeniorCaregiver,
} = SearchSeniorCaregiverPageNumber.actions;
