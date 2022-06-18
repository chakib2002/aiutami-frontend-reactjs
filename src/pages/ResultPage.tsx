import React from "react";
import { useSelector } from "react-redux";
import { Footer } from "../components/Home_components/Footer";
import { HalfNavbar } from "../components/Home_components/HalfNavbar";
import { ResultsBody } from "../components/Results_components/ResultsBody";
import { ResultsHeader } from "../components/Results_components/ResultsHeader";
import { isAuthenticatedState } from "../state/configureStore";

export const ResultPage = (
  {newNotificationNumber, 
  setNewNotificationNumber} : {
    newNotificationNumber : number ,
    setNewNotificationNumber :Function}) => {
  const {isAuth} = useSelector(isAuthenticatedState)
  return (
    <div>
        <HalfNavbar isAuth={isAuth === true ? true : false} newNotificationNumber={newNotificationNumber} setNewNotificationNumber={setNewNotificationNumber}  />
        <ResultsHeader />
        <ResultsBody/>
        <Footer/>
    </div>
  );
};
