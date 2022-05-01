import React from "react";
import { SearchProvince } from "./SearchProvince";
import { SearchHeader } from "./SearchHeader";

export const SearchCardProvince = ({
  type,
  TheAction,
  next,
}: {
  type: string;
  TheAction: Function;
  next: Function;
}) => {
  return (
    <div className="border-2 rounded border-lightgray shadow-lg w-4/5 m-auto mt-3 mb-10 lg:mb-0">
      <SearchHeader
        title="Enter your province"
        text=" We use the province you provide us to filter the tutors near by"
      />
      <div className="mx-5 my-5">
        <SearchProvince next={next} action={TheAction} type={type} />
      </div>
    </div>
  );
};
