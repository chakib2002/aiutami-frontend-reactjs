import React from "react";
import { decrementPageNumberSeniorCaregiver } from "../state/Slices/searchSeniorCaregiverSlice";
import { Submit_type } from "../state/types/enums";
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
      <div className="mx-5 flex justify-between my-5 ">
        <Previous action={decrementPageNumberSeniorCaregiver} />
        <Submit title="Search" type={Submit_type.seniorcaregiver} />
      </div>
    </div>
  );
};
