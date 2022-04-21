import React from "react";
import { Login } from "../components/Login";
import { motion } from "framer-motion";

export const LoginPage = () => {
  return (
    <motion.div 
    key = "searchPageLogin"
    exit={{ opacity: 0 }}>
      <Login />
    </motion.div>
  );
};
