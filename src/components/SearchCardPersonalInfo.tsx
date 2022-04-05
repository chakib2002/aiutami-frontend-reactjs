import React from "react";
import {
  SearchHousekeeper,
  SearchSeniorCaregiver,
  SearchTutor,
} from "../state/types/types";
import { SearchHeader } from "./SearchHeader";
import { SearchPersonalInfo } from "./SearchPersonalInfo";

export const SearchCardPersonalInfo = ({
  data,
  next,
  prev,
  fullnameAction,
  phoneNumberAction,
  Job_descriptionAction,
}: {
  data: SearchHousekeeper | SearchTutor | SearchSeniorCaregiver;
  next: Function;
  prev: Function;
  fullnameAction: Function;
  phoneNumberAction: Function;
  Job_descriptionAction: Function;
}) => {
  return (
    <div className="border-2 rounded border-lightgray shadow-lg w-4/5 m-auto mt-3 mb-10 lg:mb-0">
      <SearchHeader
        title="Personal Contact and Job description"
        text="We use your personal informations to get you in touch with the person you hired in the platform ."
      />
      <SearchPersonalInfo
        data={data}
        FullNameAction={fullnameAction}
        PhoneNumberAction={phoneNumberAction}
        JobDescriptionAction={Job_descriptionAction}
        previous={prev}
        next={next}
      />
    </div>
  );
};
