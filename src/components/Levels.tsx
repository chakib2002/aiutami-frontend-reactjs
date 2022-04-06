import React from "react";
import { useSelector } from "react-redux";
import {
  searchTutorState,
  signupState,
  useAppDispatch,
} from "../state/configureStore";
import { level, LevelComponentUseCase } from "../state/types/enums";

export const Levels = ({
  name,
  type,
  info,
  width,
}: {
  name: string;
  type: LevelComponentUseCase;
  info: any[];
  width: string;
}) => {
  const dispatch = useAppDispatch();

  const dataSignup = useSelector(signupState);
  const dataSearch = useSelector(searchTutorState);

  const check = (argument: level, Data: level | null) => {
    console.log(argument);
    console.log(Data);
    switch (argument) {
      case level.primary_school:
        return Data === level.primary_school ? true : false;
      case level.middle_school:
        return Data === level.middle_school ? true : false;
      case level.high_school:
        return Data === level.high_school ? true : false;
      default:
        break;
    }
  };

  return (
    <div className="">
      <p
        className={`m-auto text-left block text-sm opacity-85 font-medium w-60 mb-1 ${width}`}
      >
        {name}
      </p>
      <div
        className={`${
          type === LevelComponentUseCase.signup
            ? "grid justify-items-center lg:justify-items-start lg:grid-cols-2 xl:flex xl:justify-between " +
              width
            : "grid justify-items-center lg:flex lg:justify-between  " + width
        }`}
      >
        {info.map((element, index) => {
          return (
            <div
              key={index}
              className={`${
                type === LevelComponentUseCase.signup
                  ? "form-check px-5 py-1 border border-gray-300 shadow-md rounded-md w-80 lg:w-52 text-left mb-2"
                  : "form-check px-5 py-1 border border-gray-300 shadow-md rounded-md w-60 lg:w-64 text-left mb-2"
              }`}
            >
              <input
                onClick={() => dispatch(element.action({ text: element.case }))}
                className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                type="radio"
                name="flexRadioDefault"
                id={element.case}
                checked={
                  type === LevelComponentUseCase.signup
                    ? check(element.case, dataSignup.level)
                    : check(element.case, dataSearch.level)
                }
              />
              <label
                className="form-check-label inline-block text-gray-800"
                htmlFor={element.case}
              >
                {element.case}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
