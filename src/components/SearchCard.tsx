import React from "react";
import { SearchProvince } from "./SearchProvince";

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
      <h1 className="text-2xl font-bold mx-2 p-3 text-center mt-10 lg:text-left">
        {title}
      </h1>
      <p className="mx-5 text-sm tracking-wide text-center lg:text-left ">
        {text}
      </p>
      <div className="my-5 mx-5">
        <SearchProvince />
      </div>
    </div>
  );
};
