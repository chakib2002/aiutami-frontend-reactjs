import React from "react";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";
import { SignupLevel } from "../state/Slices/authenticationSlices";
import { level } from "../state/types/enums";

export const Radio = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(signupState);
  return (
    <div className="">
      <p className="m-auto text-left block text-sm opacity-85 font-medium w-80 lg:mx-10 mb-1">
        Level
      </p>
      <div className="grid justify-items-center lg:justify-items-start lg:grid-cols-2 xl:grid-cols-3  lg:mx-10">
        <div className="form-check px-5 py-1 border border-gray-300 shadow-md rounded-md w-80 lg:w-48 text-left mb-2">
          <input
            onClick={() =>
              dispatch(SignupLevel({ text: level.primary_school }))
            }
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            checked={data.level === level.primary_school ? true : false}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault1"
          >
            Primary school
          </label>
        </div>
        <div className="form-check px-5 py-1 border border-gray-300 shadow-md rounded-md w-80 lg:w-48 text-left mb-2">
          <input
            onClick={() => dispatch(SignupLevel({ text: level.middle_school }))}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked={data.level === level.middle_school ? true : false}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadioDefault2"
          >
            Middle school
          </label>
        </div>
        <div className="form-check px-5 py-1 border border-gray-300 shadow-md rounded-md w-80 lg:w-48 text-left mb-2">
          <input
            onClick={() => dispatch(SignupLevel({ text: level.high_school }))}
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault3"
            checked={data.level === level.high_school ? true : false}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            htmlFor="flexRadio3"
          >
            Hight school
          </label>
        </div>
      </div>
    </div>
  );
};
