import React from "react";
import { signupState, useAppDispatch } from "../state/configureStore";
import { Check } from "./Check";
import {
  Prev,
  SignupCompanionship,
  SignupHouseHoldTasks,
  SignupMobilityAssisstance,
  SignupPersonalCare,
  SignupSpecializedCare,
  SignupTransportation,
} from "../state/Slices/authenticationSlices";
import { useSelector } from "react-redux";
import { AnimatePresence, motion } from "framer-motion";

export const SignupFormSeniorcare = () => {
  const data = useSelector(signupState);
  const dispatch = useAppDispatch();
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
          Sign up
        </h1>
        <p className=" lg:text-left lg:mx-10 w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
          Get started for free and become a full-time or a part-time freelancer.
        </p>
        <motion.div
          key="Signup seniorcaregiver"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Check
            checkCard={[
              {
                title: "Transportation",
                description: " Provide transportation to your Client",
                action: SignupTransportation,
                state: data.transportation,
              },
              {
                title: "House hold tasks",
                description: "Perpare meal, take care of the house",
                action: SignupHouseHoldTasks,
                state: data.house_hold_tasks,
              },
              {
                title: "Personal care",
                description:
                  "Provide personal help to your client like shower, clothings ext.",
                action: SignupPersonalCare,
                state: data.personal_care,
              },
              {
                title: "Specialized care",
                description: "Experience with different types of diseases",
                action: SignupSpecializedCare,
                state: data.specialized_care,
              },
              {
                title: "Mobility assisstance",
                description: "provide physical help to your client",
                action: SignupMobilityAssisstance,
                state: data.mobility_assistance,
              },
              {
                title: "Companionship",
                description:
                  "Provide company and be able to talk and enjoy time with your client",
                action: SignupCompanionship,
                state: data.companionship,
              },
            ]}
          />
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
