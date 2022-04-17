import React from "react";
import { care_type, Redirects, Submit_type } from "../state/types/enums";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { searchHousekeeperState, searchSeniorCaregiverState, searchTutorState } from "../state/configureStore";
import { useNavigate } from "react-router-dom";
import {  SetResultsType, SetSearchResults, clearResult } from "../state/Slices/ResultSlice";
import { ResultResponse } from "../state/types/interfaces";



export const Submit = ({ title, type }: { title: string, type:Submit_type }) => {
  const {careType, province} = useSelector(searchHousekeeperState)
  const TutorData = useSelector(searchTutorState)
  const {level, subject, school_year}= TutorData
  const SeniorCaregiverData = useSelector(searchSeniorCaregiverState)
  const {transportation, 
        house_hold_tasks, 
        personal_care,
        specialized_care, 
        mobility_assistance, 
        companionship
      }= SeniorCaregiverData
    const Navigate= useNavigate()
    const dispatch = useDispatch()
  return (
    <button
    onClick={()=>{
    switch (type) {
      case Submit_type.housekeeper:
        axios.get("http://localhost:3001/result/"+careType+"/"+province)
        .then(res=>{
          dispatch(clearResult())
          return res
        })
        .then((res)=>{
          res.data.forEach((element : ResultResponse, index : number)=>{
              dispatch(SetSearchResults({
                id:element.id,
                firstname : element.first_name,
                lastname : element.last_name,
                email : element.email,
                age : element.age,
                about_me : element.about_me,
                province : element.province,
                link : element.link,
                pricing : element.price,
                availability : element.availability,
                occupation : element.occupation,
                care_type : element.care_type,
              }))
          })
          
        }).then(()=>{
          dispatch(SetResultsType({text : care_type.housekeeper}))
        })
        .then(()=>{
          Navigate(Redirects.Results)
        })
        .catch((err)=>console.log(err))
        break;
      case Submit_type.tutor :
        axios.get("http://localhost:3001/result/"+TutorData.careType+"/"+TutorData.province+"/"+level+"/"+school_year+"/"+subject)
        .then(res=>{
          dispatch(clearResult())
          return res
        })
        .then((res)=>{
          res.data.forEach((element : ResultResponse, index : number)=>{
              dispatch(SetSearchResults({
                id:element.id,
                firstname : element.first_name,
                lastname : element.last_name,
                email : element.email,
                age : element.age,
                about_me : element.about_me,
                province : element.province,
                link : element.link,
                pricing : element.price,
                availability : element.availability,
                occupation : element.occupation,
                care_type : element.care_type,
                level : element.Tutor.level,
                subject : element.Tutor.subject,
                school_year : element.Tutor.schoolyear,
                education : element.Tutor.education,
              }))
          })
          
        }).then(()=>{
          dispatch(SetResultsType({text : care_type.tutor}))
        })
        .then(()=>{
          Navigate(Redirects.Results)
        })
        .catch((err)=>console.log(err))
        break;
      case Submit_type.seniorcaregiver :
        axios.get("http://localhost:3001/result/"+SeniorCaregiverData.careType+"/"+SeniorCaregiverData.province+"/"+transportation+"/"+house_hold_tasks+"/"+personal_care+"/"+mobility_assistance+"/"+companionship+"/"+specialized_care)
        .then(res=>{
          dispatch(clearResult())
          return res
        })
        .then((res)=>{
          console.log(res)
          res.data.forEach((element : ResultResponse, index : number)=>{
            dispatch(SetSearchResults({
              id:element.id,
              firstname : element.first_name,
              lastname : element.last_name,
              email : element.email,
              age : element.age,
              about_me : element.about_me,
              province : element.province,
              link: element.link,
              pricing : element.price,
              availability : element.availability,
              occupation : element.occupation,
              care_type : element.care_type,
              transportation : element.Seniorcare.transportation,
              house_hold_tasks : element.Seniorcare.house_hold_tasks,
              personal_care : element.Seniorcare.personal_care,
              mobility_assistance : element.Seniorcare.mobility_assistance,
              specialized_care : element.Seniorcare.specialized_care,
              companionship : element.Seniorcare.companionship
            
        })
    )}
  )
})
        .then((res)=>{
          console.log(res)
          dispatch(SetResultsType({text : care_type.seniorcaregiver}))
        })
        .then(()=>{
          Navigate(Redirects.Results)
        })
        .catch((err)=>console.log(err))
        break;
      default:
        break;
    }
    }} 
    className=" text-center h-10 w-28 rounded-lg border-2 border-green bg-white hover:bg-green hover:text-white text-green active:scale-95 transition transition-duration-400 ease-out">
      {title}
    </button>
  );
};
