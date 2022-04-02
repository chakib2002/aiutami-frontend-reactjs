import React from "react";
import { SearchProvince } from "./SearchProvince";
import { SearchProvinceHeader } from "./SearchProvinceHeader";

export const SearchCard = ({
  title,
  text,
  TheAction,
  Next,
}: {
  title: string;
  text: string;
  TheAction: Function;
  Next: Function;
}) => {
  return (
    <div className="border-2 rounded border-lightgray shadow-lg w-4/5 m-auto mt-10">
      <SearchProvinceHeader title={title} text={text} />
      <div className="mx-5 my-5">
        <SearchProvince />
      </div>
    </div>
  );
};
