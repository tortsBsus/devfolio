"use client";
import About from "../components/About/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects/Projects";
import Socials from "../components/Socials";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "./../../tailwind.config.js";
import SplashScreen from "./../components/SplashScreen.jsx"
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flip } from "gsap/Flip";
import IntroCard from "../components/About/IntroCard";

gsap.registerPlugin(Flip, ScrollTrigger);

export default function Home() {
  // const main = useRef();
  // // @ts-ignore
  // const fullConfig = resolveConfig(tailwindConfig);

  // useGSAP(
  //   () => {
  //     const animationTimeline = gsap.timeline();

  //     const boxes = gsap.utils.toArray('.section');
  //     boxes.forEach((box: gsap.TweenTarget) => {
  //       console.log(box);
  //       gsap.to(box, {
  //         backgroundColor:"black",
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'top 30%',
  //           end: 'bottom',
  //           scrub: 0.5,
  //           snap:1,
  //           markers: true,
  //         },
  //       });
  //     });

  //     // const outer = document.querySelector("#outerWrapper");
  //     // const IDs = Array.of(document.querySelector("#hero"),document.querySelector("#introduction"),document.querySelector("#about"),document.querySelector("#projects"),document.querySelector("#experience"),document.querySelector("#achievements"),document.querySelector("#social"))

  //     // console.log(fullConfig.theme.colors.primary);

  //     // gsap.to(outer, { backgroundColor:"black", scrollTrigger: {
  //     //     trigger:IDs[0],
  //     //     start: 'bottom top',
  //     //     endTrigger:IDs[1],
  //     //     toggleActions: "play reverse restart reverse",
  //     //     end:"bottom top",
  //     //     id:"about-anim",
  //     //     // scrub:0.5,
  //     //     // snap:1,
  //     //     markers:true
  //     //   }
  //     // })

  //     //   gsap.to(outer, { backgroundColor:"white", scrollTrigger: {
  //     //     trigger:IDs[2],
  //     //     start: 'top top',
  //     //     end:"bottom bottom",
  //     //     scrub:0.5,
  //     //     markers:true
  //     //   }
  //     // })
  //   },
  //   { scope: main }
  // );


  // useGSAP(
  //   () => {


  //     const boxes = gsap.utils.toArray('.section');
  //     boxes.forEach((box: gsap.TweenTarget) => {
  //       console.log(box);
  //       gsap.to(box, {
  //         backgroundColor:"black",
  //         scrollTrigger: {
  //           trigger: box,
  //           start: 'top 30%',
  //           end: 'bottom',
  //           scrub: 0.5,
  //           snap:1,
  //           markers: true,
  //         },
  //       });
  //     });


  //     //   gsap.to(outer, { backgroundColor:"white", scrollTrigger: {
  //     //     trigger:IDs[2],
  //     //     start: 'top top',
  //     //     end:"bottom bottom",
  //     //     scrub:0.5,
  //     //     markers:true
  //     //   }
  //     // })
  //   },
  //   { scope: main }
  // );

  return (
<div className="h-full w-full">
<SplashScreen/>
</div>
    // <div className="bg-secondary" >
    //  <div className="container border-white border-2 border-solid h-screen"> hero </div>
    //   <div className="container border-white border-2 border-solid h-screen"> introcard </div>
    //   <div className="container border-white border-2 border-solid h-screen"> about </div> 
    // <div className="container"> <Projects/> </div> 
    // </div>
  );
}
