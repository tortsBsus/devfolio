"use client"
import About from "../components/About/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  
  const main = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray('.sections');
      console.log(boxes);
      boxes.forEach((box) => {
        gsap.to(box, {
          // x: 500,
          scrollTrigger: {
            trigger: box,
            start: 'bottom bottom',
            end: 'top 20%',
            scrub: 0.5,
            // markers: true,
          },
        });
      });
    },
    { scope: main }
  );

  return (
    
    <div id="site" ref={main} className="mx-6 md:mx-16 lg:mx-20 flex flex-col items-center">
      <div className="sections w-full" id="hero" >
      <Hero/>
      </div>
      <div className="sections w-full" id="about">
      <About/>
      </div>
      <div className="sections w-full" id="projects">
      <Projects/>
      </div>
      <div className="sections w-full" id="experience">
      <Experience/>
      </div>
      <div className="sections w-full" id="achievements">
      <Achievements/>
      </div>
      <div className="sections w-full" id="socials">
      <Socials/>
      </div>
    </div>
  );
}
