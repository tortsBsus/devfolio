import React, { useEffect, useRef, useState } from "react";
import IntroCard from "./About/IntroCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
import info from "./Projects/info";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [title, setTitle] = useState(20);

  const heroSection = useRef();
  useGSAP(
    () => {
      const hero = document.querySelector("#hero");
      var heroTimeline = gsap.timeline();
      heroTimeline.fromTo(
        hero,
        { opacity: "0%" },
        {
          opacity: "100%",
          duration: 0.7,
          ease: "power4.out",
          // onComplete:   ()=> calculateFontSize()
        }
      );
      
      heroTimeline.fromTo(
        document.getElementById("sec1"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("sec2"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("sec3"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("sec4"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("heroCTA"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
    },
    { scope: heroSection }
  );



  return (
    <div
      ref={heroSection}
      id="hero"
      className="min-h-screen px-6  w-full mt-2 bg-neutral "
    >
      <div className="container mt-4 flex flex-col  items-center h-full align-middle justify-between  ">
        <div  className="h-full">
          <h1 id="sec1">
          hi, This page is still being styled! But here are the facts you came
          looking for:
          </h1>
          <div id="sec2" className="my-4">
          <Image
          
          alt="Peerlist Logo"
          src="/assets/WorkInProgress.gif"
          className="w-full"
          width={125}
          height={32}
        />
        <p className="text-center">Elves scrambling to add CSS :P</p>
          </div>
          
          <div id="sec3" className=" my-2">
            <h1 className=" font-vergilia ">Links</h1>
            <p className="flex justify-between align-middle">
              <h2>
                LinkedIn
                <a href="https://www.linkedin.com/in/meghana-rathanraj-link-to-profile/">
                  🔗
                </a>
              </h2>
              <h2>
                Twitter
                <a href="https://twitter.com/megTries">🔗</a>
              </h2>
              <h2>
                Github
                <a href="https://github.com/tortsBsus">🔗</a>
              </h2>
              <h2>
                Email
                <a href="mailto:meghanarathanraj@gmail.com">🔗</a>
              </h2>
            </p>
          </div>
          <div id="sec4"className=" my-2 w-full ">
            <h1 className=" font-vergilia ">Projects</h1>
            <div className="flex flex-col justify-between align-middle">
              {info.map((elem) => (
                <>
                  <a
                    href={elem.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="rounded-lg  p-2 mb-2 bg-secondary">
                      <div className="my-2">
                        <h2 className="flex justify-between font-vergilia">
                          {elem.name}
                        </h2>
                        {/* <p className="text-sm italic">{elem.keywords}</p> */}
                      </div>
                      {/* <p>{elem.description}</p> */}
                    </div>
                  </a>
                </>
              ))}
            </div>
          </div>
          {/* <div className=" my-2">
              <h1 className=" font-vergilia ">Education</h1>
              <p className="flex justify-between align-middle">B.M.S College of Engineering 2019 - 2023</p>
            </div>
            <div className=" my-2">
              <h1 className=" font-vergilia ">Experience</h1>
              <p className="flex justify-between align-middle">Info</p>
            </div> 
            <div className=" my-2">
              <h1 className=" font-vergilia ">Skills</h1>
              <p className="flex justify-between align-middle">Info</p>
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
