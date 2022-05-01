import React from "react";
import { Banner } from "../components/Home_components/Banner";
import { Cards } from "../components/Home_components/Cards";
import { Footer } from "../components/Home_components/Footer";
import { LargeCards } from "../components/Home_components/LargeCards";
import { NavBar } from "../components/Home_components/Navbar";
import { Section } from "../components/Home_components/Section";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { isAuthenticatedState } from "../state/configureStore";
import { Dashboard } from "../components/Dashboard_components/Dashboard";


export const LandingPage = () => {

  const {isAuth} = useSelector(isAuthenticatedState)
  


  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div
    key="landingPage"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
      {isAuth === false && (
      <>
        <NavBar isAuthData ={false}/>
        <Banner />
        <Cards />
        <LargeCards />
        <Section />
        <Footer />
      </>
      )}
      {
        isAuth === true && (
          <>
            <NavBar isAuthData ={true}/>
            <Dashboard />
          </>
        )
      }
    </motion.div>
    </AnimatePresence>
  );
};
