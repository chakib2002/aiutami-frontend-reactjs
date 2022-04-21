import React from "react";
import { Availability } from "./Availability";
import { PriceRange } from "./PriceRange";
import { TextArea } from "./TextArea";
import { signupState, useAppDispatch } from "../state/configureStore";
import { useSelector } from "react-redux";
import { Next, Prev } from "../state/Slices/authenticationSlices";
import { care_type } from "../state/types/enums";
import { AnimatePresence, motion } from "framer-motion";
import { NavBarLogin } from "./NavBarLogin";
import axios from "axios";
import { setFirstName, setId, setIsAuth, setLastName, setLink } from "../state/Slices/isAuthenticatedSlice";
import { useNavigate } from "react-router-dom";

export const SignupForm2 = () => {
  const dispatch = useAppDispatch();
  const Navigate = useNavigate()
  const data = useSelector(signupState);
  const { 
    availability,
    aboutMe,
    careType,
    firstName,
    lastName,
    email,
    phoneNumber,
    age,
    occupation, 
    password,
    province,
    price,
  } = data;
  const AVAILABILITY = availability.join(",")
  console.log(AVAILABILITY)
  const PostSignup = ()=>{
    axios.post("http://localhost:3001/signup",{
          first_name : firstName,
          last_name : lastName,
          email : email,
          password : password,
          link : null,
          phone_number : phoneNumber,
          care_type : careType,
          occupation : occupation,
          province : province,
          about_me : aboutMe,
          age : age,
          price : price,
          availability : AVAILABILITY,
    }).then((res)=>{
      if(res.status === 200 ){
        axios.post("http://localhost:3001/signin",{
        email:email,
        password : password
      }).then((response)=>{
        if(response.status === 401){
          dispatch(setIsAuth({text : false}))
        }else if (response.status === 200){
          dispatch(setIsAuth({text : true}))
          dispatch(setFirstName({text : response.data.first_name}))
          dispatch(setLastName({text : response.data.last_name}))
          dispatch(setId({text : response.data.id}))
          dispatch(setLink({text : response.data.link}))
          Navigate("/", {replace : true})
        }
      })
      }
    })
      .catch(err=>console.log(err))
  }



  const isValid = () => {
    if (availability.length && aboutMe.length) {
      return true;
    } else {
      return false;
    }
  };
  return (
    <AnimatePresence exitBeforeEnter>
      <div className="lg:hidden">
        <NavBarLogin />
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-extrabold cursor-default lg:text-left lg:mx-10">
          Sign up
        </h1>
        <p className=" lg:text-left lg:mx-10 w-[70%] mx-auto mt-2 mb-10 opacity-50 tracking-widest border-b-2 border-lightgray pb-3 cursor-default">
          Get started for free and become a full-time or a part-time freelancer.
        </p>
        <motion.div
          key="signup_form_2_component"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="block lg:flex justify-center lg:justify-start">
            <PriceRange />
          </div>
          <TextArea state={data.aboutMe} />
          <Availability />

          {careType === care_type.housekeeper ? (
            <div className="mt-10 mb-10 flex justify-center lg:justify-start mx-5 ">
              <button
                onClick={() => dispatch(Prev())}
                className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary text-sm font-medium h-10 w-24 rounded-lg hover:bg-primary hover:text-white active:scale-95 transition transition-duration-400 ease-out"
              >
                Previous
              </button>
              <div className="w-full text-right">
                <button
                onClick={PostSignup}
                className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
                  Sign up
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-10 mb-10 flex justify-center lg:justify-start mx-5 ">
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
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
