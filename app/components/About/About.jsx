"use client"
import React, { useState } from "react";
import IntroCard from "./IntroCard.jsx";
import Logo from "./Logo.jsx";
import Vectors from "./Vectors.jsx";
import Skill from "./Skill.jsx"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(Flip, ScrollTrigger);

function About() {
  const aboutMe = useRef();
  
  
  const [conditionalClass, setConditionalClass] = useState('lg:col-span-12 lg:row-span-6');
  // const [conditionalClass2, setConditionalClass2] = useState('hidden');

  const toggleConditionalClass = () => {
    console.log("togg")
    if (conditionalClass.includes('lg:col-span-8 lg:row-span-2')) {
      // Remove the conditional class
      setConditionalClass('lg:col-span-12 lg:row-span-6');
      setConditionalClass2('hidden');
    } else {
      // Add the conditional class
      
      setConditionalClass('lg:col-span-8 lg:row-span-2');
      setConditionalClass2('');
    }
  }

  useGSAP(() => {
     let introInvisSection = document.querySelector("#introInvis");
     let introVisSection = document.querySelector("#introVis");
     let introCard = document.querySelector("#introCard");

    ScrollTrigger.create({
      id:"introVis",
      trigger:introVisSection,
      start: 'center 33%',
      end:"bottom top",
      toggleActions: "play reverse restart reverse",
      scrub:0.5,
      markers:true,
      onEnter: () => move(),
      // onLeaveBack: () => toggleVideo("bye"),
    });

    function move() {
      console.log("moving")
     
    //  Flip.fit("#introVis","#introInvis");
      let state = Flip.getState(introInvisSection);
      console.log(introInvisSection);
      console.log(introVisSection);
      console.log(introCard);
      introInvisSection.insertAdjacentElement('afterBegin', introCard);
      console.log(introInvisSection);
      Flip.from(state, {
      
        ease: "power3.out",
        duration: 2
      });
    }


        }
  , {scope: aboutMe}); 


  return (
<>
<div id="introVis" className="px-4 lg:px-16 py-8 my-32 w-full h-fit rounded-lg"><IntroCard /></div>
<div ref={aboutMe}  className={` px-4 lg:px-16 py-8 my-32 w-full  h-fit grid grid-cols-12 lg:grid-rows-6 gap-1 bg-secondary`}>
    
      <div id="introInvis" className={`box col-span-12 order-1 h-full lg:order-1 lg:col-span-8 lg:row-span-2`} > </div>
      <div className={` col-span-12 order-9 h-full lg:col-start-9 lg:col-span-4 lg:row-span-2 lg:order-2`}> <Logo /></div>
    
      <div className={`col-span-3 order-3 lg:col-span-4 lg:row-start-3 lg:row-span-1 lg:order-3`}> <Vectors imgAddr="/assets/vector1.png"/> </div>
      <div className={`col-span-9 order-4 lg:col-span-4 lg:row-span-3 lg:order-6`}> <Skill title="Frontend Development"/></div>
      
      <div className={`col-span-3 order-7 lg:col-span-4 lg:row-start-3 lg:row-span-1 lg:order-5`}> <Vectors imgAddr="/assets/vector2.png"/> </div>
      <div className={`col-span-9 order-4 lg:col-span-4 lg:row-start-3 lg:row-span-3 lg:order-4`}> <Skill title="Backend Development"/></div>
    
      <div className={`col-span-9 order-8 lg:col-span-4 lg:row-span-3 lg:order-7`}> <Skill title="Blockchain, Design & others"/></div>
      <div className={`col-span-3 order-5 lg:col-span-4 lg:row-span-1 lg:col-start-5 lg:order-8`} > <Vectors imgAddr="/assets/vector3.png"/> 
    </div>
    </div>
</>    
  );
}

export default About;
