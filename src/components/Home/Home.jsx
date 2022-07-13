import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Plans from "../Plans/Plans";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import TestImonials from "../../components/testImonials/TestImonials";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Programs />
      <Reasons />
      <Plans />
      <TestImonials />
      <Footer />
    </>
  );
};

export default Home;
