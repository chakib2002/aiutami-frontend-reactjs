import React from "react";
import { useAppDispatch } from "../state/configureStore";
import { Check } from "./Check";
import { Prev } from "../state/Slices/authenticationSlices";

export const SignupFormSeniorcare = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
        Sign up
      </h1>
      <p className=" lg:text-left lg:mx-10 w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
        Get started for free and become a full-time or a part-time freelancer.
      </p>
      <Check />
      <div className="mt-10 only:lg:mt-20 mb-10 flex justify-center lg:justify-start mx-10 ">
        <button
          onClick={() => dispatch(Prev())}
          className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg  active:scale-95 transition transition-duration-400 ease-out"
        >
          Previous
        </button>
        <div className="w-full text-right">
          <button className="text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
