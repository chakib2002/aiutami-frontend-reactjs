import React from "react";
import { Day } from "./Day";

export const Availability = () => {
  return (
    <div>
      <p className="mx-10 text-left block text-md opacity-100 font-medium mt-2 cursor-default">
        Availability
      </p>
      <div className="grid-col-3 space-x-2 mx-5 lg:mx-5 md:mx-10 ">
        <Day day="Monday" />
        <Day day="Tuesday" />
        <Day day="Wednesday" />
        <Day day="Thursday" />
        <Day day="Friday" />
        <Day day="Saturday" />
        <Day day="Sunday" />
      </div>
    </div>
  );
};
