import React from "react";
import { Banner } from "../components/Home_components/Banner";
import { Cards } from "../components/Home_components/Cards";
import { Footer } from "../components/Home_components/Footer";
import { LargeCards } from "../components/Home_components/LargeCards";
import { NavBar } from "../components/Home_components/Navbar";
import { Section } from "../components/Home_components/Section";
import { AnimatePresence, motion } from "framer-motion";


export const LandingPage = () => {  
  return (
    <AnimatePresence exitBeforeEnter>
    <motion.div
    key="landingPage"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}>
        <NavBar isAuthData ={false}/>
        <Banner />
        <Cards />
        <LargeCards />
        <Section />
        <Footer />
    </motion.div>
    </AnimatePresence>
  );
};
