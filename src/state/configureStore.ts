import { configureStore } from "@reduxjs/toolkit";
import { PageNumber, signinReducer, signupReducer } from "./Slices/authSlices";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    signin: signinReducer.reducer,
    signup: signupReducer.reducer,
    page_number: PageNumber.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const signupState = (state: RootState) => state.signup;
export const signinState = (state: RootState) => state.signin;
export const pageNumberState = (state: RootState) => state.page_number;

export const useAppDispatch = () => useDispatch<AppDispatch>(); // Export a hook that can be reused to resolve types

export default store;
