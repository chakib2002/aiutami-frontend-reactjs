import React from "react";
import { useSelector } from "react-redux";
import { ResultState } from "../state/configureStore";
import { care_type, Redirects } from "../state/types/enums";
import { ResultsHeaderCategory } from "./ResultsHeaderCategory";
import { ResultsHeaderOptions } from "./ResultsHeaderOptions";
import { ResultsHeaderText } from "./ResultsHeaderText";

export const ResultsHeader = () => {
  const { searchResultsType } = useSelector(ResultState);
  return (
    <div className="shadow-md pb-1 ">
      <div className="mx-3 my-5 sm:mx-5 lg:ml-5 lg:mr-10 lg:flex lg:justify-between">
        <div className="flex justify-between lg:justify-start lg:space-x-6">
          <ResultsHeaderCategory
            title={care_type.tutor}
            redirect={Redirects.searchTutorRoute}
          />
          <ResultsHeaderCategory
            title={care_type.housekeeper}
            redirect={Redirects.searchHousekeeperRoute}
          />
          <ResultsHeaderCategory
            title={care_type.seniorcaregiver}
            redirect={Redirects.searchSeniorCaregiverRoute}
          />
        </div>
        <ResultsHeaderText />
      </div>
      {searchResultsType !== care_type.housekeeper && (
        <div
          className={`${
            searchResultsType === care_type.tutor ? "mx-5 sm:mx-7" : "mx-10"
          }`}
        >
          <ResultsHeaderOptions />
        </div>
      )}
    </div>
  );
};
