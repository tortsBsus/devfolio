import React, { useEffect, useRef, useState } from "react";
// import IntroCard from "./About/IntroCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [title, setTitle] = useState(20);

  

  const downloadPDF = () => {
    // URL of the PDF file
    const pdfUrl = '/assets/Meghana_Rathanraj_Resume.pdf';

    // Create an invisible 'a' element
    const link = document.createElement('a');
    link.href = pdfUrl;

    // Set the download attribute with a filename
    link.download = 'Meghana_Rathanraj_Resume.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div
      
      id="hero"
      className="text-primary h-[85vh] md:h-[90vh] px-4 max-h-[95vh] w-full mt-5 bg-neutral flex flex-col align-middle justify-center"
    >
      <div id="sec1" className="flex justify-start my-5">
        <div className="p-1 md:p-2 border-secondary/70 border-2 border-solid flex items-center justify-between rounded-lg text-center  ">
          <div className="bg-secondary text-secondary rounded-full mr-1 w-[2vh] h-[2vh] md:w-[1.5em] md:h-[1.5em] text-sm"></div>
          <div className=" tracking-wide font-bold text-bases md:text-lg">
            OPEN TO WORK
          </div>
        </div>
      </div>
      {/* <------------------------------- Tablet and Desktop Version -------------------------------> */}
      <h1 
        style={{ fontSize: "clamp(5rem, 3.8rem + 3.2vw, 7rem)" }}
        className="sec2 leading-tight text-primary font-vergilia font-bold hidden md:flex md:flex-wrap md:items-center"
      >
        <p className="px-1">Versatile</p>
        <span>
          <b className="text-secondary px-2 ">Web</b>
          <b className="text-secondary px-2  ">Dev</b>
        </span>
        <span className="px-1 flex justify-between">
          <i className="px-1 ">&</i>
          <b className=" px-1">Tech</b>
        </span>
        <b className=" px-1 ">Explorer</b>
      </h1>

      {/* <------------------------------- Mobile Version -------------------------------> */}
      <h1 
        style={{ fontSize: "clamp(1rem, 1rem + 3.5vh, 2.7rem)" }}
        className="z-10 sec2 leading-tight text-primary font-vergilia font-bold tracking-wide sm:hidden  flex flex-wrap items-center break-words"
      >
        <p className="px-1">Versatile</p>
        
          <b className="text-secondary px-1 ">Web</b>
          <b className="text-secondary px-1 ">Dev</b>
        
        <span className="px-1 flex justify-between">
          <i className=" ">&</i>
          <b className=" px-1">Tech</b>
        </span>
        <b className=" px-1 ">Explorer</b>
      </h1>

      <p id="sec3" className="font-serif text-bases md:text-heads5 tracking-wide w-3/4">
        Hi! I'm Meghana Rathanraj, a <span className="text-primary decoration-secondary underline underline-offset-4 font-bold ">Full Stack Developer </span>based in
       <span className="text-primary font-bold "> Bengaluru, India </span> with a focus on building solutions to interesting
        problems!
      </p>

      <div id="heroCTA" className="w-fit my-4 px-10 py-2 md:px-20 md:py-3 shadow-sm rounded-md 
      
      bg-primary text-neutral font-vergilia tracking-wide text-bases text-center  "
      // className="hover:bg-secondary transform-gpu transition-all duration-300 hover:shadow-lg "
      onClick={downloadPDF}
      >
        My Resume
      </div>
      
    </div>
  );
}

export default Hero;
