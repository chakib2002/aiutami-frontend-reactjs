import React from "react";
import { useAppDispatch } from "../state/configureStore";

export const Input = ({
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
      </label>
      <input
        type={type}
        className={
          "focus:outline-none px-5 py-2 border-2 border-lightgray shadow-md rounded " +
          width
        }
        value={state}
        id={htmlFor}
        onChange={(e) => dispatch(handleChanges({ text: e.target.value }))}
      />
    </div>
  );
};
