import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signinInitialState, signupInitialState } from "../initialStates";
import {
  signupCareType,
  signupClass,
  signupLevel,
  signupProvince,
  signupSubjects,
  textBool,
  TextNumber,
  textString,
} from "../types/interfaces";

export const signinReducer = createSlice({
  name: "signin",
  initialState: signinInitialState,
  reducers: {
    SigninEmail: (state, { payload }: PayloadAction<textString>) => {
      state.email = payload.text;
    },
    SigninPassword: (state, { payload }: PayloadAction<textString>) => {
      state.password = payload.text;
    },
  },
});
export const signupReducer = createSlice({
  name: "signup",
  initialState: signupInitialState,
  reducers: {
    SignupFirstName: (state, { payload }: PayloadAction<textString>) => {
      state.firstName = payload.text;
    },
    SignupLastName: (state, { payload }: PayloadAction<textString>) => {
      state.lastName = payload.text;
    },
    SignupEmail: (state, { payload }: PayloadAction<textString>) => {
      state.email = payload.text;
    },
    SignupPhoneNumber: (state, { payload }: PayloadAction<textString>) => {
      state.phoneNumber = payload.text;
    },
    SignupAge: (state, { payload }: PayloadAction<TextNumber>) => {
      state.age = payload.text;
    },
    SignupOccupation: (state, { payload }: PayloadAction<textString>) => {
      state.occupation = payload.text;
    },
    SignupProvince: (state, { payload }: PayloadAction<signupProvince>) => {
      state.province = payload.text;
    },
    SignupCareType: (state, { payload }: PayloadAction<signupCareType>) => {
      state.careType = payload.text;
    },
    SignupPassword: (state, { payload }: PayloadAction<textString>) => {
      state.password = payload.text;
    },
    SignupConfirmedPassword: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.confirmPassword = payload.text;
    },
    SignupPrice: (state, { payload }: PayloadAction<TextNumber>) => {
      state.price = payload.text;
    },
    SignupAboutMe: (state, { payload }: PayloadAction<textString>) => {
      state.aboutMe = payload.text;
    },
    SignupAvailabilityAdd: (state, { payload }: PayloadAction<textString>) => {
      state.availability.push(payload.text);
    },
    SignupAvailabilityRemove: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      const index = state.availability.indexOf(payload.text);
      if (index > -1) {
        state.availability.splice(index, 1);
      }
    },
    SignupTransportation: (state, { payload }: PayloadAction<textBool>) => {
      state.transportation = payload.text;
    },
    SignupHouseHoldTasks: (state, { payload }: PayloadAction<textBool>) => {
      state.house_hold_tasks = payload.text;
    },
    SignupPersonalCare: (state, { payload }: PayloadAction<textBool>) => {
      state.personal_care = payload.text;
    },
    SignupSpecializedCare: (state, { payload }: PayloadAction<textBool>) => {
      state.specialized_care = payload.text;
    },
    SignupMobilityAssisstance: (
      state,
      { payload }: PayloadAction<textBool>
    ) => {
      state.mobility_assistance = payload.text;
    },
    SignupCompanionship: (state, { payload }: PayloadAction<textBool>) => {
      state.companionship = payload.text;
    },
    SignupEducation: (state, { payload }: PayloadAction<textString>) => {
      state.education = payload.text;
    },
    SignupLevel: (state, { payload }: PayloadAction<signupLevel>) => {
      state.level = payload.text;
    },
    SignupSubject: (state, { payload }: PayloadAction<signupSubjects>) => {
      state.subject = payload.text;
    },
    SignupClass: (state, { payload }: PayloadAction<signupClass>) => {
      state.school_year = payload.text;
    },
  },
});

export const PageNumber = createSlice({
  name: "pagenumber",
  initialState: 1,
  reducers: {
    Next: (state) => {
      return state + 1;
    },
    Prev: (state) => {
      return state - 1;
    },
  },
});

export const { SigninEmail, SigninPassword } = signinReducer.actions;
export const {
  SignupFirstName,
  SignupLastName,
  SignupEmail,
  SignupPhoneNumber,
  SignupOccupation,
  SignupAge,
  SignupCareType,
  SignupConfirmedPassword,
  SignupPassword,
  SignupProvince,
  SignupPrice,
  SignupAboutMe,
  SignupAvailabilityAdd,
  SignupAvailabilityRemove,
  SignupCompanionship,
  SignupHouseHoldTasks,
  SignupMobilityAssisstance,
  SignupPersonalCare,
  SignupSpecializedCare,
  SignupTransportation,
  SignupEducation,
  SignupClass,
  SignupLevel,
  SignupSubject,
} = signupReducer.actions;

export const { Next, Prev } = PageNumber.actions;
