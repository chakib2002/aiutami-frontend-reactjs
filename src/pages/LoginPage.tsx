import React from "react";
import { Login } from "../components/Signin_components/Login";
import { AnimatePresence, motion } from "framer-motion";

export const LoginPage = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div 
      key = "searchPageLogin"
      exit={{ opacity: 0 }}>
        <Login />
      </motion.div>
    </AnimatePresence>
  );
};
