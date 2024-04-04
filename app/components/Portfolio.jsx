import React from "react";
import About from "../components/About/About";
import Hero from "../components/HeroTemp";
import Projects from "../components/Projects/Projects";
import Socials from "../components/Socials";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Navbar from "../components/Navbar.jsx";

import IntroCard from "./About/IntroCard";

import Image from "next/image";
import info from "./Projects/info";

function Portfolio() {
  return (
    <div className="text-[black] bg-neutral container  ">
      <Navbar />
      <Hero/>

      {/* <IntroCard/> */}
      {/* <About/> */}
      {/* <Projects/> */}
      {/* <Experience/> */}
      {/* <Achievements/> */}
      {/* <Socials/> */}
    </div>
  );
}

export default Portfolio;
