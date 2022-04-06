import React from "react";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { LargeCards } from "../components/LargeCards";
import { NavBar } from "../components/Navbar";
import { Section } from "../components/Section";
import { motion } from "framer-motion";

export const LandingPage = () => {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <NavBar firstname="" lastname="" link="" auth={false} />
      <Banner />
      <Cards />
      <LargeCards />
      <Section />
      <Footer />
    </motion.div>
  );
};
