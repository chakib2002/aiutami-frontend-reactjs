import React, { useState } from "react";
import { ReactComponent as Office } from "../Images/Office.svg";
import { ReactComponent as EmailIcon } from "../Images/EmailIcon.svg";
import { ReactComponent as LockIcon } from "../Images/Lock.svg";
import { Link, useNavigate} from "react-router-dom";
import { NavBarLogin } from "./NavBarLogin";
import { useSelector } from "react-redux";
import {
  SigninEmail,
  SigninPassword,
} from "../state/Slices/authenticationSlices";
import { AnimatePresence, motion } from "framer-motion";
import { signinState, useAppDispatch } from "../state/configureStore";
import axios from "axios";
import { setFirstName, setId, setIsAuth, setLastName, setLink } from "../state/Slices/isAuthenticatedSlice";

export const Login = () => {
  const data = useSelector(signinState)
  const dispatch = useAppDispatch();
  const Navigate = useNavigate()
  const {email, password} = data;

  const [Error , setError] = useState("")


  const PostSignin = ()=>{
    axios.post("http://localhost:3001/signin",{
      email:email,
      password : password
    }).then((res)=>{
      if(res.status === 401){
        dispatch(setIsAuth({text : false}))
      }else if (res.status === 200){
        dispatch(setIsAuth({text : true}))
        dispatch(setFirstName({text : res.data.first_name}))
        dispatch(setLastName({text : res.data.last_name}))
        dispatch(setId({text : res.data.id}))
        dispatch(setLink({text : res.data.link}))
        Navigate("/", {replace : true})
      }
    })
      .catch((err)=>{
        if(err.response.status === 401){
          setError("Wrong email/password combination please try again")
        }
        
      })

  }

  return (
    <AnimatePresence exitBeforeEnter>
      <NavBarLogin />
      <div className="grid grid-flow-col">
        <Office />
        <motion.div
          key="login_component"
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
            <div className="py-2 px-1 lg:px-3 mb-2 bg-lightgray lg:w-80 lg:rounded-sm w-64 m-auto ">
              <EmailIcon />
              <input
                type="email"
                placeholder="Enter your email"
                className="focus:outline-none ml-2 w-48 bg-lightgray"
                onChange={(e) =>{
                  setError("")
                  dispatch(SigninEmail({ text: e.target.value }))
                }
                }
              />
            </div>

            <div className="py-2 px-1 lg:px-3 mb-2 w-64 m-auto lg:w-80">
              <LockIcon />
              <input
                type="password"
                placeholder="Enter your password"
                className="focus:outline-none w-48 ml-2"
                onChange={(e) =>{
                  setError("")
                  dispatch(SigninPassword({ text: e.target.value }))
                }
              }
              />
            </div>
              <p className="text-sm font-thin opacity-50 mb-5 cursor-pointer hover:opacity-100 text-center lg:text-left">
                Forget Password
              </p>
              
            <div className="flex justify-center lg:justify-start space-x-5">
              <button 
                onClick={PostSignin}
                className="px-5 py-2 rounded-full bg-primary hover:bg-bluedark text-white active:scale-95 transition transition-duration-400 ease-out">
                Login now
              </button>
              <Link to="/signup">
                <button className="px-5 py-2 rounded-full border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
                  Create an account
                </button>
              </Link>
            </div>
          </div>
          {
            Error.length !== 0 && (
              <motion.div
              key="login_Error_Message"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
               className="lg:absolute mt-6 px-2 lg:mt-2 text-center
              lg:text-left text-red-600 text-base lg:text-xs
              lg:w-80
              w-64 m-auto ">
                {Error}
              </motion.div>
            )
          }
        </motion.div>
      </div>    
    </AnimatePresence>
  );
};
