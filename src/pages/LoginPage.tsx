import React from "react";
import { Login } from "../components/Login";
import { motion } from "framer-motion";

export const LoginPage = () => {
  return (
    <motion.div exit={{ opacity: 0.3 }}>
      <Login />
    </motion.div>
  );
};
