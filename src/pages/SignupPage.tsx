import React from "react";
import { useSelector } from "react-redux";
import { Signup } from "../components/Signup";
import { pageNumberState, signupState } from "../state/configureStore";

export default function SignupPage() {
  const pageNumber = useSelector(pageNumberState);
  const data = useSelector(signupState);
  return (
    <div>
      <Signup careType={data.careType} SignUpPage={pageNumber} />
    </div>
  );
}
