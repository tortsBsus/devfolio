import React from "react";
import About from "../components/About.jsx";
import Hero from "../components/Hero2";
import Projects from "../components/Projects/Projects";
import Socials from "../components/Socials";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import Navbar from "../components/Navbar.jsx";

import { useRef } from "react";

import Image from "next/image";
import info from "./Projects/info";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Portfolio() {
  const site = useRef();
  useGSAP(
    () => {
      
      const me = document.querySelector("#portfolio");

      var tl = gsap.timeline();
      
      // tl.to(me,  {display:"flex", visibility:"hidden", delay:0.01,   ease: "power2.in"});
      tl.fromTo(
        me,
        { opacity: "0%" },
        { opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
     

    },
    { scope: site }
  );
  
  return (
    <div ref={site} id="portfolio" className="text-[black] bg-neutral w-full h-fit rounded-lg shadow-2xl  ">
      <div className="container">
      <Navbar />
      <Hero/>
      
      
      </div>
      {/* <div className="container ">
      <Projects/>
      </div>
  <About/> */}
      <div className="container ">
      {/* <Achievements/> */}
      <Socials/>
      </div> 
      
    </div>
  );
}

export default Portfolio;
