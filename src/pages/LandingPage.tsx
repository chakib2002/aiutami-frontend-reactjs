import React from "react";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { LargeCards } from "../components/LargeCards";
import { NavBar } from "../components/Navbar";
import { Section } from "../components/Section";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { isAuthenticatedState } from "../state/configureStore";


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
            <Banner />
            <Cards />
            <LargeCards />
            <Section />
            <Footer />
          </>
        )
      }
    </motion.div>
    </AnimatePresence>
  );
};
