import React from "react";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";

export const InvalidInput = ({
  htmlFor,
  name,
  type,
  width,
  handleChanges,
  state,
}: {
  htmlFor: string;
  name: string;
  type: string;
  width: string;
  handleChanges: Function;
  state: string;
}) => {
  const data = useSelector(signupState);
  const { password, confirmPassword } = data;

  const isValid = () => {
    if (password === confirmPassword) {
      return true;
    } else {
      return false;
    }
  };
  const dispatch = useAppDispatch();
  return (
    <div className="mb-3">
      <label
        htmlFor={htmlFor}
        className={
          "m-auto text-left block text-sm opacity-85 font-medium " + width
        }
      >
        {name}
        {!isValid() && (
          <span className="m-auto text-left block text-xs opacity-85 font-thin text-red-600">
            Your password confirmation doesn't match your password
          </span>
        )}
      </label>
      <input
        value={state}
        type={type}
        className={`focus:outline-none px-5 py-2 border-2 ${
          isValid() ? "border-lightgray" : "border-red-600"
        } shadow-md lg:shadow-sm rounded 
          ${width} `}
        id={htmlFor}
        onChange={(e) => dispatch(handleChanges({ text: e.target.value }))}
      />
    </div>
  );
};
