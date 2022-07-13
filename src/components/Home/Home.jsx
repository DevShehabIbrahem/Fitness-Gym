import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import Plans from "../Plans/Plans";
import Programs from "../Programs/Programs";
import Reasons from "../Reasons/Reasons";
import TestImonials from "../../components/testImonials/TestImonials";
import Footer from "../Footer/Footer";
import CoverSection from "../CoverSectiion/CoverSection";
import "../../css/Home/Home.css";

const Home = () => {
  return (
    <div className="home">
      <HeroSection />
      <Programs />
      <Reasons />
      <Plans />
      <TestImonials />
      <CoverSection />
      <Footer />
    </div>
  );
};

export default Home;
