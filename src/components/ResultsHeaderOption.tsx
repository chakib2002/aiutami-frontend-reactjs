import React from "react";
import { useSelector } from "react-redux";
import { ResultState } from "../state/configureStore";
import { care_type } from "../state/types/enums";
import { ReactComponent as Check } from "../Images/Check.svg";

export const ResultsHeaderOption = ({ options }: { options: Function }) => {
  const { searchResultsType } = useSelector(ResultState);
  const results = options();
  return (
    <div>
      {searchResultsType === care_type.tutor && (
        <div className="grid sm:flex sm:space-x-2 md:space-x-5 lg:space-x-10 my-3 mb-5">
          {results.map((element: string, index: number) => (
            <div
              key={index}
              className="flex justify-start space-x-2 sm:px-2 sm:border-l-2"
            >
              <Check />
              <p className="text-sm md:text-base opacity-70">{element}</p>
            </div>
          ))}
        </div>
      )}
      {searchResultsType === care_type.seniorcaregiver && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 my-3 mb-5">
          {results.transportation === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">transportation</p>
            </div>
          )}
          {results.house_hold_tasks === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">
                house hold and tasks
              </p>
            </div>
          )}

          {results.personal_care === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">Personal care</p>
            </div>
          )}
          {results.specialized_care === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">
                Specialized care
              </p>
            </div>
          )}
          {results.mobility_assistance === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">
                Mobility assistance
              </p>
            </div>
          )}
          {results.companionship === true && (
            <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
              <Check />
              <p className="text-sm md:text-base opacity-70">Companionship</p>
            </div>
          )}
          {!results.transportation &&
            !results.house_hold_tasks &&
            !results.personal_care &&
            !results.specialized_care &&
            !results.mobility_assistance &&
            !results.companionship && (
              <div className="flex justify-start space-x-2 sm:px-2 sm:border-l-2">
                <Check />
                <p className="text-sm md:text-base opacity-70">
                  Senior caregiver
                </p>
              </div>
            )}
        </div>
      )}
    </div>
  );
};
