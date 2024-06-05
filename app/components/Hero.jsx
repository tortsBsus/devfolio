import React, { useEffect, useRef, useState } from "react";
// import IntroCard from "./About/IntroCard";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function Hero() {
  const [title, setTitle] = useState(20);

  const heroSection = useRef();
  useGSAP(
    () => {
      const hero = document.querySelector("#hero");

      
      console.log(document.getElementById("nameContainer").clientWidth);

      const nameContainer = document.getElementById("nameContainer");
      const name =  document.getElementById("innerName");

      // function calculateFontSize() {
      //   const containerWidth = nameContainer.offsetWidth; // Get container width
      //   const minFontSize = 30; // Minimum allowed font size
      //   const maxFontSize = 48; // Maximum allowed font size

      //   // Calculate ideal font size based on container width (adjust formula as needed)
      //   const idealFontSize = Math.min(containerWidth / 10, maxFontSize);

      //   // Clamp the font size between minimum and maximum
      //   const bestFontSize = Math.max(idealFontSize, minFontSize);

      //   name.style.fontSize = `${bestFontSize}px`;
      //   document.getElementById("nameRathanraj").style.fontSize = `${bestFontSize}px`;
      // }

      

      var heroTimeline = gsap.timeline();
      heroTimeline.fromTo(
        hero,
        { opacity: "0%" },
        { opacity: "100%", duration: 0.7, ease: "power4.out" ,
          // onComplete:   ()=> calculateFontSize()
        }
          
      );
      heroTimeline.to(document.getElementById("name"), {
        duration: 0.5,
        text: "Hi, I'm",
      });
      heroTimeline.to(document.getElementById("nameMeghana"), {
        duration: 0.5,
        ease: "sine.in",
        text: "Meghana",
      });

      heroTimeline.to(document.getElementById("nameRathanraj"), {
        duration: 1,
        ease: "sine.in",
        text: "Rathanraj",
      });
      heroTimeline.fromTo(
        document.getElementById("briefDesc"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("meghanaImage"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("meghanaFacts"),
        { x: "-10%", opacity: "0%" },
        { x: "0%", opacity: "100%", duration: 0.7, ease: "power4.out" }
      );
      heroTimeline.fromTo(
        document.getElementById("meghanaSkills"),
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

  // useEffect(() => {

  //   // console.log(document.getElementById("name").offsetWidth);
  //   console.log(document.getElementById("nameContainer").offsetWidth);
  //   console.log(document.getElementById("nameContainer").offsetHeight);
  //   setTitle(document.getElementById("nameContainer").offsetHeight * 0.20);
  //   console.log(document.getElementById("nameContainer").offsetHeight * 0.50);
  //   return () => {

  //   }
  // }, [])

  return (
    <div
      ref={heroSection}
      id="hero"
      className="min-h-screen px-6 max-h-[90vh] w-full mt-2 bg-neutral  grid grid-cols-12 md:grid-cols-11  gap-2 "
    >
      {/* Section 1 */}
      <div
        id="nameContainer"
        className=" col-span-12 md:col-span-11 row-span-1 flex justify-around relative items-center font-vergilia text-[7.5rem] leading-tight flex-wrap"
      >
        {title != 0 && (
          <div
            id="innerName"
            style={{ fontSize: "clamp(1.8rem, 0% , 8rem)" }}
            onClick={() =>
              console.log(document.getElementById("innerName").clientHeight)
            }
            className={`flex-nowrap overflow-x-visible  text-heads4   `}
          >
            <span id="name"></span>{" "}
            <b id="nameMeghana" className=" text-secondary"></b>
          </div>
        )}
      </div>

      {/* Section 2 */}
      <div
        id="briefDesc"
        className="border-primary/50 border-2 border-solid text-captions md:text-heads4 p-5 flex tracking-tighter text-center justify-center items-center  
        col-span-8 md:col-span-7 md:row-span-2 "
      >
        I build and design pixel perfect frontends and performant backends for
        various applications
      </div>

      {/* Section 4 */}
      <div
        id="meghanaImage"
        className="border-primary/50 border-2 border-solid col-span-4 md:col-span-3 md:row-span-2 p-2"
      >
        <div className="border-primary/50 border-2 border-solid h-full w-full">
          <Image
            alt="Avatar Image"
            src="/assets/avatar.jpg"
            fill
            sizes="(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw"
          />
        </div>
      </div>

      {/* Section 3 */}
      <div className="col-span-12 md:col-span-1 row-span-1 md:row-span-5 flex justify-center items-center font-vergilia md:mb-0 md:my-0 my-4 ">
        <div
          id="nameRathanraj"
          className=" absolute md:rotate-90 text-heads4 md:text-[5.7rem] leading-none  "
        ></div>
      </div>

      {/* Section 5 */}
      <div
        id="meghanaFacts"
        className=" p-5 text-smalls  flex flex-col tracking-tighter justify-center border-primary/50 border-2 border-solid col-span-12 md:col-span-4 md:row-span-2"
      >
        <span className="text-heads5 md:text-heads5 text-center font-bold ">
          Interesting facts abt me
        </span>
        <ul className="text-bases md:heads5">
          <li> I got my first patent at 22 </li>
          <li> I've won two project grants for my ideas </li>
          <li>
            {" "}
            I've presented my projects to the Ministry of Science and Technology{" "}
          </li>
        </ul>
      </div>

      {/* Section  6*/}
      <div
        id="meghanaSkills"
        className="p-5 col-span-12 md:col-span-6 md:row-span-3  h-full w-full border-primary/50 border-2 border-solid flex flex-col"
      >
        <div className="text-smalls md:text-heads5 text-center tracking-tighter font-bold">
          Check out my work in
        </div>
        <div className=" flex flex-row grow font-vergilia">
          <div className="flex items-stretch flex-col grow">
            <div className="bg-primary text-neutral text-center flex items-end justify-start m-1 grow p-3 text-smalls md:text-heads5 rounded-md">
              Frontend
            </div>
            <div className="bg-primary text-neutral text-center flex items-end justify-start m-1 grow p-3 text-smalls md:text-heads5 rounded-md">
              Backend
            </div>
          </div>
          <div className="flex items-stretch flex-col grow">
            <div className="bg-primary text-neutral text-center flex items-end justify-start m-1 grow p-3 text-smalls md:text-heads5 rounded-md">
              Blockchain
            </div>
            <div className="bg-primary text-neutral text-center flex items-end justify-start m-1 grow p-3 text-smalls md:text-heads5 rounded-md">
              Design
            </div>
          </div>
        </div>
      </div>

      {/* Section  7*/}
      <div
        id="heroCTA"
        className="p-5 rounded-md flex items-center justify-center text-center text-smalls md:text-heads5 tracking-wider font-extrabold col-span-12 md:col-span-4 bg-primary text-neutral"
      >
        Let's Get In Touch!
      </div>
    </div>
  );
}

export default Hero;
