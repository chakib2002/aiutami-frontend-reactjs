import React from "react";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";
import { SignupPrice } from "../state/Slices/authenticationSlices";

export const PriceRange = () => {
  const data = useSelector(signupState);
  const dispatch = useAppDispatch();

  return (
    <div className="relative pt-1 text-left w-auto mx-10 lg:w-1/2">
      <label
        htmlFor="customRange1"
        className="form-label m-auto text-left block text-md opacity-100 font-medium "
      >
        Price{" "}
        <span className="text-sm opacity-60 mx-1">
          {data.price + "$ per hour"}
        </span>
      </label>
      <input
        type="range"
        className="
            form-range
            w-full
            h-6
            p-0
            bg-transparent
            outline-none focus:ring-0 focus:shadow-none"
        id="customRange1"
        value={data.price}
        step={1}
        onChange={(e) => {
          dispatch(SignupPrice({ text: parseInt(e.target.value) }));
        }}
        min={18}
        max={120}
      />
    </div>
  );
};
