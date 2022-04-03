import { configureStore } from "@reduxjs/toolkit";
import {
  PageNumber,
  signinReducer,
  signupReducer,
} from "./Slices/authenticationSlices";
import { useDispatch } from "react-redux";
import { SearchTutor, SearchTutorPageNumber } from "./Slices/searchTutorSlice";
import {
  SearchHousekeeper,
  SearchHousekeeperPageNumber,
} from "./Slices/searchHousekeeperSlice";
import {
  SearchSeniorCaregiver,
  SearchSeniorCaregiverPageNumber,
} from "./Slices/searchSeniorCaregiverSlice";

export const store = configureStore({
  reducer: {
    signin: signinReducer.reducer,
    signup: signupReducer.reducer,
    page_number: PageNumber.reducer,
    search_tutor: SearchTutor.reducer,
    search_tutor_page_number: SearchTutorPageNumber.reducer,
    search_housekeeper: SearchHousekeeper.reducer,
    search_housekeeper_page_number: SearchHousekeeperPageNumber.reducer,
    search_senior_caregiver: SearchSeniorCaregiver.reducer,
    search_senior_caregiver_page_number:
      SearchSeniorCaregiverPageNumber.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const signupState = (state: RootState) => state.signup;
export const signinState = (state: RootState) => state.signin;
export const pageNumberState = (state: RootState) => state.page_number;
export const searchTutorState = (state: RootState) => state.search_tutor;
export const seachTutorPageNumberState = (state: RootState) =>
  state.search_tutor_page_number;
export const searchHousekeeperState = (state: RootState) =>
  state.search_housekeeper;
export const searchHousekeeperPageNumberState = (state: RootState) =>
  state.search_housekeeper_page_number;

export const searchSeniorCaregiverState = (state: RootState) =>
  state.search_senior_caregiver;
export const searchSeniorCaregiverPageNumberState = (state: RootState) =>
  state.search_senior_caregiver_page_number;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
