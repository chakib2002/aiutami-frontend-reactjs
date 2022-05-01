import React, { useState } from "react";
import { Input } from "./Input";
import { Link } from "react-router-dom";
import {
  SignupAge,
  SignupCareType,
  SignupConfirmedPassword,
  SignupEmail,
  SignupFirstName,
  SignupLastName,
  SignupOccupation,
  SignupPassword,
  SignupPhoneNumber,
  SignupProvince,
} from "../../state/Slices/authenticationSlices";
import { care_type, Casename, province } from "../../state/types/enums";
import { DropDown } from "./DropDown";
import { useSelector } from "react-redux";
import { signupState, useAppDispatch } from "../../state/configureStore";
import { Next } from "../../state/Slices/authenticationSlices";
import { InvalidInput } from "./InvalidInput";
import { AnimatePresence, motion } from "framer-motion";
import { NavBarLogin } from "../Signin_components/NavBarLogin";
import axios from "axios";

export const SignupForm1 = () => {
  const dispatch = useAppDispatch();
  const [emailExist, setEmailExist]= useState("")
  const Selectdata = useSelector(signupState);
  const {
    firstName,
    lastName,
    phoneNumber,
    email,
    occupation,
    age,
    careType,
    password,
    confirmPassword,
  } = Selectdata;

  const isValidSignupFormOne = () => {
    if (
      firstName.length &&
      lastName.length &&
      phoneNumber.length &&
      email.length &&
      phoneNumber.length &&
      email.length &&
      occupation.length &&
      age !== null &&
      careType !== null &&
      password.length &&
      confirmPassword.length &&
      Selectdata.province !== null &&
      password === confirmPassword
    ) {
      return true;
    } else {
      return false;
    }
  };

  const ageInterval = () => {
    const result: number[] = [];
    for (let i = 21; i < 70; i++) {
      result.push(i);
    }
    return result;
  };

  const data = ageInterval();
  const isValid = isValidSignupFormOne();

  return (
    <AnimatePresence exitBeforeEnter>
      <div className="lg:hidden">
        <NavBarLogin />
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold cursor-default">Sign up</h1>
        <p className="w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
          Get started for free and become a full-time or a part-time freelancer.
        </p>
        <motion.div
          key="signupForm1_component"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="block lg:flex justify-center lg:space-x-5 ">
            <Input
              type="text"
              name="First name"
              htmlFor="FirstName"
              width=" w-80 lg:w-auto"
              handleChanges={SignupFirstName}
              state={firstName}
            />
            <Input
              type="text"
              name="Last name"
              htmlFor="LastName"
              width=" w-80 lg:w-auto"
              handleChanges={SignupLastName}
              state={lastName}
            />
          </div>
          <div className="block lg:flex lg:justify-center lg:space-x-5">
            <div>
              <Input
                type="email"
                name="Email"
                htmlFor="Email"
                width="w-80 lg:w-auto"
                handleChanges={SignupEmail}
                state={email}
                invalid = {emailExist}
                setEmailExist = {setEmailExist}
              />
              {}
            </div>
            <Input
              type="text"
              name="Phone number"
              htmlFor="PhoneNumber"
              width="w-80 lg:w-auto"
              handleChanges={SignupPhoneNumber}
              state={phoneNumber}
            />
          </div>
          <div className="block lg:flex lg:justify-center lg:space-x-5 ">
            <div>
              <DropDown
                title={Casename.age}
                name={Casename.age}
                options={data}
                width="w-80  lg:ml-1 lg:w-[240px] "
                theAction={SignupAge}
              />
              <DropDown
                title={Casename.Province}
                name={Casename.Province}
                options={[
                  province.alger,
                  province.bejaia,
                  province.blida,
                  province.boumerdes,
                  province.oran,
                  province.setif,
                  province.tipaza,
                  province.tiziouzou,
                ]}
                width="w-80 lg:ml-1 lg:w-[240px] "
                theAction={SignupProvince}
              />
            </div>
            <div>
              <DropDown
                title={Casename.careType}
                name={Casename.careType}
                width="w-80 lg:w-[245px]"
                options={[
                  care_type.housekeeper,
                  care_type.seniorcaregiver,
                  care_type.tutor,
                ]}
                theAction={SignupCareType}
              />
              <Input
                type="text"
                name="Occupation"
                htmlFor="Occupation"
                width="w-80 lg:w-auto mb-[1px]"
                handleChanges={SignupOccupation}
                state={occupation}
              />
            </div>
          </div>
          <div className="lg:flex lg:justify-center lg:space-x-5">
            <Input
              type="password"
              name="Password"
              htmlFor="Password"
              width="w-80 lg:w-[509px] mt-[2px]"
              handleChanges={SignupPassword}
              state={password}
            />
          </div>
          <InvalidInput
            type="password"
            name="Confirmed password"
            htmlFor="ConfirmedPassword"
            width="w-80 lg:w-[509px] "
            handleChanges={SignupConfirmedPassword}
            state={confirmPassword}
          />

          <div className="inline lg:grid lg:grid-flow-col lg:w-[512px] lg:m-auto lg:space-x-44 ">
            <p className="text-sm opacity-75 font-semibold mb-10 lg:mb-7 lg:pt-3">
              Already have an account?
              <Link to="/signin">
                <span className="text-primary font-extrabold hover:text-bluedark cursor-pointer">
                  Login
                </span>
              </Link>
            </p>
            {isValid ? (
              <button
                onClick={() => {
                  axios.get("http://localhost:3001/userExistance/"+email)
                  .then((res)=>{
                    if(res.status === 200 ) {
                      console.log(res.data.message)
                      console.log(res.status)
                      dispatch(Next())
                    }
                  })
                  .catch((err)=>{
                    setEmailExist("This email is already registered .")
                  })
                }}
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
