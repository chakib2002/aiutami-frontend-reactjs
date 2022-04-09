import React from "react";
import { useSelector } from "react-redux";
import {
  ResultState,
  searchSeniorCaregiverState,
  searchTutorState,
} from "../state/configureStore";
import { care_type } from "../state/types/enums";
import { ResultsHeaderOption } from "./ResultsHeaderOption";

export const ResultsHeaderOptions = () => {
  const { searchResultsType } = useSelector(ResultState);
  const { level, school_year, subject } = useSelector(searchTutorState);
  const {
    transportation,
    house_hold_tasks,
    personal_care,
    specialized_care,
    mobility_assistance,
    companionship,
  } = useSelector(searchSeniorCaregiverState);

  const getOptionsIncluded = () => {
    switch (searchResultsType) {
      case care_type.tutor:
        return [level, school_year, subject];
      case care_type.seniorcaregiver:
        return {
          transportation,
          house_hold_tasks,
          personal_care,
          specialized_care,
          mobility_assistance,
          companionship,
        };
      default:
        break;
    }
  };
  return (
    <div>
      <p className="text-sm md:text-lg font-semibold">
        Search details included
      </p>
      <ResultsHeaderOption options={getOptionsIncluded} />
    </div>
  );
};
