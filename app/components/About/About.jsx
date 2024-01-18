"use client"
import React, { useState } from "react";
import IntroCard from "./IntroCard.jsx";
import Logo from "./Logo.jsx";
import Vectors from "./Vectors.jsx";
import Skill from "./Skill.jsx"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function About() {
  const app = useRef();
  // const circle = useRef();
  // // gsap.registerPlugin(Flip);
  
  const [conditionalClass, setConditionalClass] = useState('lg:col-span-8 lg:row-span-2');
  const [conditionalClass2, setConditionalClass2] = useState('');

  const toggleConditionalClass = () => {
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

  // useGSAP(() => {
  //   // use selectors...
  //   gsap.to(".box", { rotation: "+=360" });
    
  //   // or refs...
  //   gsap.to(circle.current, { rotation: "-=360" });
  
  // }, {scope: app}); 


  return (
    <div ref={app} className={` px-4 lg:px-16 py-8 my-20 w-full grid grid-cols-12 lg:grid-rows-6 gap-1`} onClick={toggleConditionalClass}>
    
      <div className={`box col-span-12 order-1 h-full  lg:order-1 ${conditionalClass}`}> <IntroCard /> </div>
      <div className={`${conditionalClass2} col-span-12 order-9 h-full lg:col-span-4 lg:row-span-2 lg:order-2`}> <Logo /></div>
    
      <div className={`${conditionalClass2} col-span-3 order-3 lg:col-span-4 lg:row-span-1 lg:order-3`}> <Vectors imgAddr="/assets/vector1.png"/> </div>
      <div className={`${conditionalClass2} col-span-9 order-4 lg:col-span-4 lg:row-span-3 lg:order-6`}> <Skill title="Frontend Development"/></div>
      
    
      <div className={`${conditionalClass2} col-span-3 order-7 lg:col-span-4 lg:row-span-1 lg:order-5`}> <Vectors imgAddr="/assets/vector2.png"/> </div>
      <div className={`${conditionalClass2} col-span-9 order-4 lg:col-span-4 lg:row-span-3 lg:order-4`}> <Skill title="Backend Development"/></div>
    
      <div className={`${conditionalClass2} col-span-9 order-8 lg:col-span-4 lg:row-span-3 lg:order-7`}> <Skill title="Blockchain, Design & others"/></div>
      <div className={`${conditionalClass2} col-span-3 order-5 lg:col-span-4 lg:row-span-1 lg:col-start-5 lg:order-8`} > <Vectors imgAddr="/assets/vector3.png"/> </div>




{/*       
    
    <div className="col-span-12 order-1 row-span-2 lg:col-span-8 lg:row-span-2`}> <IntroCard /> </div>
    <div className=" col-span-1 order-2 row-span-1 lg:col-span-4 lg:row-span-2 "> <Logo /></div>
  
    <div className="col-span-3 row-span-2 order-6 lg:col-span-4 lg:row-span-1"> <Vectors imgAddr="/assets/vector1.png"/> </div>
    <div className="col-span-9 row-span-2 order-4 lg:col-span-4 lg:row-span-3 "> <Skill title="Backend Development"/></div>
  
    <div className="col-span-3 row-span-2 order-7 lg:col-span-4 lg:row-span-1"> <Vectors imgAddr="/assets/vector2.png"/> </div>
    <div className="col-span-9 row-span-2 order-5 lg:col-span-4 lg:row-span-3"> <Skill title="Frontend Development"/></div>
  
    <div className="col-span-9 row-span-2 order-8 lg:col-span-4 lg:row-span-3"> <Skill title="Blockchain, Design & others"/></div>
    <div className=" lg:col-span-4 lg:row-span-1 lg:col-start-5"> <Vectors imgAddr="/assets/vector3.png"/> </div> */}

  



    </div>
    
  );
}

export default About;
