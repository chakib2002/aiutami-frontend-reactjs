import React from "react";
import { HalfNavbar } from "../components/HalfNavbar";
import { ResultsBody } from "../components/ResultsBody";
import { ResultsHeader } from "../components/ResultsHeader";

export const ResultPage = () => {
  return (
    <div>
      <HalfNavbar />
      <ResultsHeader />
      <ResultsBody/>
    </div>
  );
};
