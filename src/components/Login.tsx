import React from "react";
import { ReactComponent as Office } from "../Images/Office.svg";
import { ReactComponent as EmailIcon } from "../Images/EmailIcon.svg";
import { ReactComponent as LockIcon } from "../Images/Lock.svg";
import { Link } from "react-router-dom";
import { NavBarLogin } from "./NavBarLogin";
import { useDispatch } from "react-redux";
import {
  SigninEmail,
  SigninPassword,
} from "../state/Slices/authenticationSlices";
import { AnimatePresence, motion } from "framer-motion";

export const Login = () => {
  const dispatch = useDispatch();

  return (
    <AnimatePresence exitBeforeEnter>
      <NavBarLogin />
      <div className="grid grid-flow-col">
        <Office />
        <motion.div
          key="login"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="mt-10 lg:m-auto lg:ml-44 mx-5 md:mx-10"
        >
          <div className="mb-5 text-center lg:text-left ">
            <h1 className="text-2xl font-light tracking-wide lg:ml-2">
              Welcome Back :)
            </h1>
            <div className="w-80 m-auto">
              <p className="text-sm font-thin opacity-70">
                If you already have an account please login with us using your
                email and password .
              </p>
            </div>
          </div>
          <div className="text-center lg:text-left">
            <div className="py-2 px-1 mb-2 bg-lightgray lg:w-80 lg:rounded-sm w-64 m-auto ">
              <EmailIcon />
              <input
                type="email"
                placeholder="Enter your email"
                className="focus:outline-none ml-2 w-48 bg-lightgray"
                onChange={(e) =>
                  dispatch(SigninEmail({ text: e.target.value }))
                }
              />
            </div>

            <div className="py-2 px-1 mb-2 w-64 m-auto lg:w-80">
              <LockIcon />
              <input
                type="password"
                placeholder="Enter your password"
                className="focus:outline-none w-48 ml-2"
                onChange={(e) =>
                  dispatch(SigninPassword({ text: e.target.value }))
                }
              />
            </div>

            <p className="text-sm font-thin opacity-50 mb-5 cursor-pointer hover:opacity-100 text-center lg:text-left">
              Forget Password
            </p>

            <div className="flex justify-center lg:justify-start space-x-5">
              <button className="px-5 py-2 rounded-full bg-primary hover:bg-bluedark text-white active:scale-95 transition transition-duration-400 ease-out">
                Login now
              </button>
              <Link to="/signup">
                <button className="px-5 py-2 rounded-full border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
