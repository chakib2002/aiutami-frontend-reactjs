import React from "react";
import { DropDown } from "./DropDown";
import { Input } from "./Input";
import { Levels } from "./Levels";
import {
  Prev,
  SignupClass,
  SignupEducation,
  SignupLevel,
  SignupSubject,
} from "../state/Slices/authenticationSlices";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../state/configureStore";
import { Casename, level, LevelComponentUseCase } from "../state/types/enums";
import { AnimatePresence, motion } from "framer-motion";

export const SignupFormTutor = () => {
  const dispatch = useAppDispatch();
  const data = useSelector(signupState);
  const { education } = data;
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
          Sign up
        </h1>
        <p className="lg:text-left w-[70%] mx-auto lg:mx-10 mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
          Get started for free and become a full-time or a part-time freelancer.
        </p>
        <motion.div
          key="signuptutor"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
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
          <Levels
            name="Level"
            type={LevelComponentUseCase.signup}
            info={[
              {
                case: level.primary_school,
                action: SignupLevel,
              },
              {
                case: level.middle_school,
                action: SignupLevel,
              },
              {
                case: level.high_school,
                action: SignupLevel,
              },
            ]}
            width="lg:mx-10"
          />
          <div className="grid justify-items-center lg:grid-cols-2 lg:justify-items-start xl:flex lg:mx-10 xl:justify-between mt-6">
            <DropDown
              title={Casename.subject}
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
              title={Casename.school_year}
              name={Casename.school_year}
              options={["First", "Second", "Third", "Fourth", "Fifth"]}
              width="w-80
          lg:w-52"
              theAction={SignupClass}
            />
          </div>
          <div className=" flex justify-center space-x-28 mt-7 lg:grid lg:grid-cols-2 md:grid-cols-3 lg:space-x-0 lg:mx-10">
            <button
              onClick={() => dispatch(Prev())}
              className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg active:scale-95 transition transition-duration-400 ease-out"
            >
              Previous
            </button>
            <div className="xl:text-right">
              <button className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
                Sign up
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
