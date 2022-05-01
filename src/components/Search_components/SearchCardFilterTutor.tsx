import React from "react";
import { SearchFilterTutor } from "./SearchFilterTutor";
import { SearchHeader } from "./SearchHeader";

export const SearchCardFilterTutor = () => {
  return (
    <div className="border-2 rounded border-lightgray shadow-lg w-4/5 m-auto mt-3 mb-10 lg:mb-0">
      <SearchHeader
        title="Specify the Categories"
        text="We use the answers you choose to match you with the tutors you need ."
      />
      <div className="mt-5">
        <SearchFilterTutor />
      </div>
    </div>
  );
};
