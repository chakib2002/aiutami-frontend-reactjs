import React from "react";
import { useAppDispatch } from "../../state/configureStore";
import { SignupAboutMe } from "../../state/Slices/authenticationSlices";

export const TextArea = ({ state }: { state: string }) => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center lg:justify-start lg:mx-5">
      <div className="mb-3 w-full mx-5  lg:mx-0 text-left">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label m-auto text-left block text-md opacity-100 font-medium mt-2"
        >
          About me
        </label>
        <textarea
          className="
          h-36
          block
          w-full
          px-3
          py-1.5
          text-base
          font-thin
          text-dark
          opacity-75
          bg-white bg-clip-padding
          border border-solid border-lightgray
          rounded
          transition
          ease-in-out
          m-0
        focus:text-dark focus:opacity-100 focus:bg-white focus:border-gray-400 focus:outline-none
        "
          id="exampleFormControlTextarea1"
          rows={3}
          placeholder="Describe yourself for your clients... ."
          onChange={(e) => dispatch(SignupAboutMe({ text: e.target.value }))}
          value={state}
        ></textarea>
      </div>
    </div>
  );
};
