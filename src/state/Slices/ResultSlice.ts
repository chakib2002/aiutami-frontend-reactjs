import { createSlice } from "@reduxjs/toolkit";
import { SearchResult } from "../initialStates";

export const Result = createSlice({
  name: "results",
  initialState: SearchResult,
  reducers: {},
});
