import React from "react";
import { SignupDesign } from "./SignupDesign";
import { SignupFormSeniorcare } from "./SignupFormSeniorcare";

export const SignupSeniorcare = () => {
  return (
    <div className="text-center lg:grid lg:grid-flow-col lg:col-span-3">
      <SignupDesign />
      <SignupFormSeniorcare />
    </div>
  );
};
