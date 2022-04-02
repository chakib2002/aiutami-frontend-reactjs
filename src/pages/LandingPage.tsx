import React from "react";
import { Banner } from "../components/Banner";
import { Cards } from "../components/Cards";
import { Footer } from "../components/Footer";
import { LargeCards } from "../components/LargeCards";
import { NavBar } from "../components/Navbar";
import { Section } from "../components/Section";

export const LandingPage = () => {
  return (
    <div>
      <NavBar firstname="" lastname="" link="" auth={false} />
      <Banner />
      <Cards />
      <LargeCards />
      <Section />
      <Footer />
    </div>
  );
};
