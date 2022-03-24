import { configureStore } from '@reduxjs/toolkit'
import { signinReducer, signupReducer } from './Slices/authSlices'
export const store = configureStore({
  reducer: {
      signin : signinReducer.reducer,
      signup : signupReducer.reducer    
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const signupState = (state : RootState) => state.signup ;
export const signinState = (state : RootState) => state.signin ;

export default store ;