import React from "react";
import { useSelector } from "react-redux";
import { Footer } from "../components/Home_components/Footer";
import { HalfNavbar } from "../components/Home_components/HalfNavbar";
import { ResultsBody } from "../components/Results_components/ResultsBody";
import { ResultsHeader } from "../components/Results_components/ResultsHeader";
import { isAuthenticatedState } from "../state/configureStore";

export const ResultPage = () => {
  const auth_data = useSelector(isAuthenticatedState)
  return (
    <div>
      {auth_data.isAuth === true && (
      <>
        <HalfNavbar isAuth={true} />
        <ResultsHeader />
        <ResultsBody/>
        <Footer/>
      </>
      )}
      {auth_data.isAuth === false && (
      <>
        <HalfNavbar isAuth={false} />
        <ResultsHeader />
        <ResultsBody/>
        <Footer/> 
      </>
      )}
    </div>
  );
};
