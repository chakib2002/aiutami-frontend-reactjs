import React from "react";
import { signupState, useAppDispatch } from "../../state/configureStore";
import { Check } from "./Check";
import {
  Prev,
  SignupCompanionship,
  SignupHouseHoldTasks,
  SignupMobilityAssisstance,
  SignupPersonalCare,
  SignupSpecializedCare,
  SignupTransportation,
} from "../../state/Slices/authenticationSlices";
import { useSelector } from "react-redux";
import {  motion } from "framer-motion";
import { NavBarLogin } from "../Signin_components/NavBarLogin";
import axios from "axios";
import { setFirstName, setId, setIsAuth, setLastName, setLink } from "../../state/Slices/isAuthenticatedSlice";
import { useNavigate } from "react-router-dom";

export const SignupFormSeniorcare = () => {
  const data = useSelector(signupState);
  const dispatch = useAppDispatch();
  const Navigate = useNavigate()
  const { firstName,
          lastName,
          email,
          age,
          phoneNumber,
          careType,
          province,
          occupation,
          password,
          price,
          aboutMe,
          availability,
          transportation,
          house_hold_tasks, 
          personal_care, 
          specialized_care,
          companionship,
          mobility_assistance,
          } = data

      const AVAILABILITY = availability.join(",")

  const postSignup = () => {
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
          transportation : transportation,
          house_hold_tasks : house_hold_tasks,
          personal_care : personal_care,
          mobility_assistance : mobility_assistance,
          companionship : companionship,
          specialized_care : specialized_care
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
          .catch((err)=>console.log(err))
  }



  return (
    <>
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
          <div className="mt-10 only:lg:mt-20 mb-10 flex justify-center lg:justify-start mx-5 ">
            <button
              onClick={() => dispatch(Prev())}
              className=" mb-10 lg:mb-0 bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white text-sm font-medium h-10 w-24 rounded-lg  active:scale-95 transition transition-duration-400 ease-out"
            >
              Previous
            </button>
            <div className="w-full text-right">
              <button
                onClick={postSignup} 
                className="text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
                Sign up
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
