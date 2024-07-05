import React from "react";
import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero2";
import About from "../components/About.jsx";
import FeaturedProject from "../components/Projects/FeaturedProject.jsx";
import Projects from "../components/Projects/Projects";
import Achievements from "../components/Achievements";
import Socials from "../components/Socials";

function Portfolio() {
  const site = useRef();

  useGSAP(
    () => {
      const me = document.querySelector("#portfolio");
      const navbar = document.querySelector("#navbar");
      const hero = document.querySelector("#hero");

      var tl = gsap.timeline();

      // tl.to(me,  {display:"flex", visibility:"hidden", delay:0.01,   ease: "power2.in"});
      tl.fromTo(
        me,
        { opacity: "0%" },
        { opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      // Navbar related anims
      tl.fromTo(
        navbar,
        { opacity: "0%" },
        { opacity: "100%", duration: 0.5, ease: "power4.out" }
      );

      gsap.timeline().to(navbar, { position: "absolute" });
      // Hero section related anims
      tl.fromTo(
        hero,
        { opacity: "0%" },
        { opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      tl.fromTo(
        document.getElementsByClassName("sec2"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      tl.fromTo(
        document.getElementById("sec3"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      tl.fromTo(
        document.getElementById("sec1"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      tl.fromTo(
        document.getElementById("heroCTA"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      tl.fromTo(
        document.getElementById("heroArrow"),
        { y: "-100%", opacity: "0%" },
        { y: "0%", opacity: "100%", duration: 2, ease: "power4.out", repeat: 3 }
      );
    },
    { scope: site }
  );

  return (
    <main ref={site}>
      <div
        id="portfolio"
        className="text-[black] bg-neutral w-full h-fit rounded-lg shadow-2xl pb-2  "
      >
        <div className="container relative">
          <Navbar />
          <Hero />
          <div id="heroArrow" className="text-center w-full font-extrabold self-end">↓</div>
        </div>
      </div>

      <div className="text-[black] bg-primary w-full h-fit rounded-lg mt-20">
        <div className="container ">
          <h1
            id="Work"
            className="  font-vergilia text-center text-heads4 md:text-heads2 text-neutral tracking-tight leading-none "
          >
            My Work
          </h1>
        </div>
      </div>

      <div
        id="Work"
        className="text-[black] bg-neutral w-full h-fit rounded-lg shadow-2xl mt-20"
      >
        <div className="container pt-3">
          <FeaturedProject />
          <Projects />
        </div>
      </div>
      {/* <div className="text-[black] bg-primary w-full h-fit rounded-lg ">
        <div className="container ">
          <About />
        </div>
      </div> */}
      <div className="text-[black] bg-neutral w-full h-fit rounded-lg shadow-2xl">
        <div className="container ">
          {/* <Achievements /> */}
          <Socials />
        </div>
        <a href="#hero">
          <button className=" p-2 flex self-center items-center justify-center bottom-5 fixed right-5 w-[3rem] h-[3rem] font-extrabold rounded-full bg-secondary ">
            ↑
          </button>
        </a>
      </div>
    </main>
  );
}

export default Portfolio;
