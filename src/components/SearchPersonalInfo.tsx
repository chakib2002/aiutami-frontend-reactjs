import React from "react";
import {
  SearchHousekeeper,
  SearchSeniorCaregiver,
  SearchTutor,
} from "../state/types/types";
import { Input } from "./Input";
import { Next } from "./Next";
import { Previous } from "./Previous";
import { Text } from "./Text";

export const SearchPersonalInfo = ({
  data,
  previous,
  next,
  FullNameAction,
  JobDescriptionAction,
  PhoneNumberAction,
}: {
  data: SearchHousekeeper | SearchTutor | SearchSeniorCaregiver;
  FullNameAction: Function;
  JobDescriptionAction: Function;
  PhoneNumberAction: Function;
  previous: Function;
  next: Function;
}) => {
  return (
    <div className="mx-5">
      <div className="md:flex md:justify-between mt-10">
        <Input
          name="Full Name"
          type="text"
          htmlFor="fullnamehousekeepersearch"
          width="w-full md:w-64 lg:w-80"
          handleChanges={FullNameAction}
          state={data.fullname}
        />
        <Input
          name="Phone number"
          type="text"
          htmlFor="PhoneNumberhousekeepersearch"
          width="w-full md:w-64 lg:w-80"
          handleChanges={PhoneNumberAction}
          state={data.phoneNumber}
        />
      </div>
      <Text
        action={JobDescriptionAction}
        width="w-full"
        state={data.job_description}
        name="Job description"
        message="Make sure to describe well the job for the person you are willing to hire here please specify all the details ."
      />
      <div className="flex justify-between my-5">
        <Previous action={previous} />
        <Next action={next} />
      </div>
    </div>
  );
};
