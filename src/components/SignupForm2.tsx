import React from "react";
import { Availability } from "./Availability";
import { PriceRange } from "./PriceRange";
import { TextArea } from "./TextArea";
import { signupState, useAppDispatch } from "../state/configureStore";
import { useSelector } from "react-redux";
import { Next, Prev } from "../state/Slices/authenticationSlices";
import { care_type } from "../state/types/enums";

export const SignupForm2 = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(signupState);
  const { availability, aboutMe, careType } = data;
  const isValid = () => {
    if (availability.length && aboutMe.length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
        Sign up
      </h1>
      <p className=" lg:text-left lg:mx-10 w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
        Get started for free and become a full-time or a part-time freelancer.
      </p>
      <div className="block lg:flex justify-center lg:justify-start">
        <PriceRange />
      </div>
      <TextArea state={data.aboutMe} />
      <Availability />

      {careType === care_type.housekeeper ? (
        <div className="mt-10 mb-10 flex justify-center lg:justify-start mx-10 ">
          <button
            onClick={() => dispatch(Prev())}
            className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary text-sm font-medium h-10 w-24 rounded-lg hover:bg-primary hover:text-white active:scale-95 transition transition-duration-400 ease-out"
          >
            Previous
          </button>
          <div className="w-full text-right">
            <button className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
              Sign up
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-10 mb-10 flex justify-center lg:justify-start mx-10 ">
          <div className="w-full text-left">
            <button
              onClick={() => dispatch(Prev())}
              className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg  active:scale-95 transition transition-duration-400 ease-out"
            >
              Previous
            </button>
          </div>
          <div className="w-full text-right">
            {isValid() ? (
              <button
                onClick={() => dispatch(Next())}
                className=" mb-10 lg:mb-0 bg-primary text-white text-sm font-medium h-10 w-24 rounded-lg hover:border hover:border-primary hover:text-primary hover:bg-white active:scale-95 transition transition-duration-400 ease-out"
              >
                Next
              </button>
            ) : (
              <button
                className=" mb-10 lg:mb-0 inline-block  bg-primary  text-white  text-sm font-medium h-10 w-24 rounded-lg  pointer-events-none opacity-50"
                disabled
              >
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
