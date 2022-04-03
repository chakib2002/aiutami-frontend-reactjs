import React from "react";
import { DropDown } from "./DropDown";
import { Input } from "./Input";
import { Radio } from "./Radio";
import {
  Prev,
  SignupClass,
  SignupEducation,
  SignupSubject,
} from "../state/Slices/authenticationSlices";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";
import { Casename } from "../state/types/enums";

export const SignupFormTutor = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(signupState);
  const { education } = data;
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
        Sign up
      </h1>
      <p className="lg:text-left w-[70%] mx-auto lg:mx-10 mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
        Get started for free and become a full-time or a part-time freelancer.
      </p>
      <div className="block lg:flex justify-center lg:justify-start lg:mx-10 mb-5">
        <Input
          htmlFor="Education"
          type="text"
          name={Casename.education}
          width="w-80 lg:w-96"
          handleChanges={SignupEducation}
          state={education}
        />
      </div>
      <Radio />
      <div className="grid justify-items-center lg:justify-items-start lg:mx-10 lg:grid-cols-2 mt-6">
        <DropDown
          name={Casename.subject}
          options={[
            "Math",
            "Physics",
            "Science",
            "English",
            "French",
            "Computer science",
          ]}
          theAction={SignupSubject}
          width="w-80
          lg:w-52"
        />
        <DropDown
          name={Casename.school_year}
          options={["First", "Second", "Third", "Fourth", "Fifth"]}
          width="w-80
          lg:w-52"
          theAction={SignupClass}
        />
      </div>
      <div className="mt-10 only:lg:mt-20 mb-10 flex justify-center lg:justify-start mx-10 ">
        <button
          onClick={() => dispatch(Prev())}
          className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg active:scale-95 transition transition-duration-400 ease-out"
        >
          Previous
        </button>
        <div className="w-full text-right">
          <button className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};
