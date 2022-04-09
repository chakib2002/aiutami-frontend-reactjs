import React from "react";
import { useSelector } from "react-redux";
import {
  ResultState,
  searchHousekeeperState,
  searchSeniorCaregiverState,
  searchTutorState,
} from "../state/configureStore";
import { care_type } from "../state/types/enums";

export const ResultsHeaderText = () => {
  const { searchResultsType } = useSelector(ResultState);
  const housekeeperSearchData = useSelector(searchHousekeeperState);
  const tutorSearchData = useSelector(searchTutorState);
  const seniorCaregiverSearchData = useSelector(searchSeniorCaregiverState);
  return (
    <p className=" my-auto border-b-2 h-6 cursor-default opacity-70 text-md pr-20 font-semibold hidden lg:inline-flex">
      Results for {searchResultsType}s near{" "}
      {searchResultsType === care_type.housekeeper &&
        housekeeperSearchData.province}
      {searchResultsType === care_type.tutor && tutorSearchData.province}
      {searchResultsType === care_type.seniorcaregiver &&
        seniorCaregiverSearchData.province}{" "}
      .
    </p>
  );
};
