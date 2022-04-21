import React from "react";
import { useAppDispatch } from "../state/configureStore";

export const Input = ({
  htmlFor,
  name,
  type,
  width,
  handleChanges,
  state,
  invalid,
  setEmailExist
}: {
  htmlFor: string;
  name: string;
  type: string;
  width: string;
  handleChanges: Function;
  state: string;
  invalid? : string;
  setEmailExist? : Function
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
        {name} {invalid?.length !== 0 && <span className="pl-1 text-red-600 text-xs "> {invalid}  </span>}
      </label>
      <input
        type={type}
        className={
        `focus:outline-none px-5 py-2 border-2 border-lightgray shadow-md lg:shadow-sm rounded ${width} 
        ${invalid !== undefined && invalid.length !==0 && 'border-red-600' }`
        }
        value={state}
        id={htmlFor}
        onChange={(e) => {
          if(setEmailExist){
            setEmailExist("")
          }
          dispatch(handleChanges({ text: e.target.value }))
        }}
      />
    </div>
  );
};
