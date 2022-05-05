import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { care_type, Submit_type } from "../../state/types/enums";
import {
  SearchHousekeeper,
  SearchSeniorCaregiver,
  SearchTutor,
} from "../../state/types/types";
import { Input } from "../Signup_components/Input";
import { Next } from "./Next";
import { Previous } from "./Previous";
import { Submit } from "./Submit";
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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key="personal_info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="mx-5"
      >
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
          {data.careType === care_type.housekeeper ? (
            <Submit title="Search" type={Submit_type.housekeeper} />
          ) : (
            <Next action={next} />
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
