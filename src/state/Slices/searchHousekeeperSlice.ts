import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchHousekeeperInitialState } from "../initialStates";
import { Need, signupProvince, textString } from "../types/interfaces";

export const SearchHousekeeper = createSlice({
  name: "searchHousekeeper",
  initialState: searchHousekeeperInitialState,
  reducers: {
    searchHousekeeperProvince: (
      state,
      { payload }: PayloadAction<signupProvince>
    ) => {
      state.province = payload.text;
    },
    searchHousekeeperFullname: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.fullname = payload.text;
    },
    searchHousekeeperPhoneNumber: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.phoneNumber = payload.text;
    },
    searchHousekeeperJobDescription: (
      state,
      { payload }: PayloadAction<textString>
    ) => {
      state.job_description = payload.text;
    },
    searchHousekeeperNeed: (state, { payload }: PayloadAction<Need>) => {
      state.need = payload.text;
    },
  },
});

export const SearchHousekeeperPageNumber = createSlice({
  name: "housekeeperPageNumber",
  initialState: 1,
  reducers: {
    incrementPageNumberHousekeeper: (state) => state + 1,
    decrementPageNumberHousekeeper: (state) => state - 1,
  },
});

export const {
  searchHousekeeperProvince,
  searchHousekeeperFullname,
  searchHousekeeperPhoneNumber,
  searchHousekeeperJobDescription,
  searchHousekeeperNeed,
} = SearchHousekeeper.actions;
export const {
  incrementPageNumberHousekeeper,
  decrementPageNumberHousekeeper,
} = SearchHousekeeperPageNumber.actions;
