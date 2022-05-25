import React, { useState } from "react";
import Features from "../components/Features";
import { homeObjOneF,homeObjTwoF } from "../components/Features/Data";
import Features2 from "../components/Features2";
import Footer from "../components/Footer";
import HeroSection from "../components/Herosection";
import InfoSection from "../components/InfoSection";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/InfoSection/Data";
import NavBar from "../components/NavBar";
import TopBar from "../components/TopBar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <TopBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <HeroSection />
      <Features2 />
      <InfoSection {...homeObjOne} id="cases" />
      <Features {...homeObjOneF} id="Features"/>
      <Features {...homeObjTwoF} id="Features"/>
       <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
