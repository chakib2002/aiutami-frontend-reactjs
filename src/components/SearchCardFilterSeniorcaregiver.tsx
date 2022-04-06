import React from "react";
import { decrementPageNumberSeniorCaregiver } from "../state/Slices/searchSeniorCaregiverSlice";
import { Previous } from "./Previous";
import { SearchFilterSeniorcaregiver } from "./SearchFilterSeniorcaregiver";
import { SearchHeader } from "./SearchHeader";
import { Submit } from "./Submit";

export const SearchCardFilterSeniorcaregiver = () => {
  return (
    <div className="border-2 rounded border-lightgray shadow-lg w-4/5 m-auto mt-3 mb-10">
      <SearchHeader
        title="Specify all the types of care you need"
        text="We use the answers you choose to match you with the best senior caregivers you need ."
      />

      <SearchFilterSeniorcaregiver />
      <div className="m-auto mx-10  flex justify-between my-5 ">
        <Previous action={decrementPageNumberSeniorCaregiver} />
        <Submit title="Search" />
      </div>
    </div>
  );
};
