import React from "react";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";
import {
  SignupAvailabilityAdd,
  SignupAvailabilityRemove,
} from "../state/Slices/authenticationSlices";

export const Day = ({ day }: { day: string }) => {
  const dispatch = useAppDispatch();
  const data = useSelector(signupState);
  return (
    <button
      onClick={() => {
        const response = data.availability.includes(day);
        if (!response) {
          dispatch(SignupAvailabilityAdd({ text: day }));
        } else {
          dispatch(SignupAvailabilityRemove({ text: day }));
        }
      }}
      className={`w-32 mx-1 text-sm outline-none font-medium my-2 
      lg:hover:text-secondary lg:hover:bg-primary lg:hover:border-primary active:scale-95
      border border-opacity-50  lg:hover:opacity-100 lg:hover:border-opacity-100 
      px-5 py-2 rounded-full transition transition-duration-600 ease-out 
      ${
        data.availability.includes(day)
          ? "bg-primary text-white"
          : "text-dark border-dark "
      }
      `}
    >
      {day}
    </button>
  );
};
