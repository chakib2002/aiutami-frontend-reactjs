import React from "react";
import { useSelector } from "react-redux";
import { Signup } from "../components/Signup_components/Signup";
import { pageNumberState, signupState } from "../state/configureStore";
import { AnimatePresence, motion } from "framer-motion";

export default function SignupPage() {
  const pageNumber = useSelector(pageNumberState);
  const data = useSelector(signupState);
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
      key="searchPageSignup"
      exit={{ opacity: 0 }}>
        <Signup careType={data.careType} SignUpPage={pageNumber} />
      </motion.div>
    </AnimatePresence>
  );
}
