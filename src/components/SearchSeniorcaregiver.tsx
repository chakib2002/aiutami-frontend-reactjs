import React from "react";
import { HalfNavbar } from "./HalfNavbar";
import { SearchCard } from "./SearchCard";

export const SearchSeniorcaregiver = () => {
  return (
    <div>
      <HalfNavbar />
      <div className="w-4/5 m-auto mt-10 cursor-default">
        <p className=" tracking-wide text-xl font-medium opacity-75">
          Find your Best <span className="font-bold">Senior caregiver</span>{" "}
          <span className="text-primary font-semibold text-3xl opacity-100 animate-bounce ">
            With Aiutami
          </span>
        </p>
      </div>
      <SearchCard
        title="Enter your province"
        text="  We use the province you provide us to filter the senior-caregivers near by"
        TheAction={() => {}}
        Next={() => {}}
      />
    </div>
  );
};
