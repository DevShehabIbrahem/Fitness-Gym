import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Plans from "../Plans/Plans";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Programs />
      <Reasons />
      <Plans />
    </>
  );
};

export default Home;
