import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRouter } from "next/navigation";



function SplashScreen(props) {

  const router = useRouter();
  const toggleSplash = props.complete;

  const splash = useRef();
  useGSAP(
    () => {
      const boxes = document.querySelector("#overlay");
      const outer = document.querySelector("#outer");

      var tl = gsap.timeline();
      
      tl.to(me,  {display:"flex", visibility:"hidden", delay:0.01,   ease: "power2.in"});
      tl.to(me,  {visibility:"visible", delay:0.1,   ease: "power2.in"});
      tl.to(boxes,  { width:"100%", height:"4px" , top:"0"   , borderWidth:"4px 0 0 0", borderColor:"#d6d3d6", borderStyle:"solid", ease: "power2.in"});
      tl.to(boxes,  { width:"4px" , height:"100%", top:"0"   , right:"0", borderWidth:"0 4px 0 0", borderColor:"#d6d3d6", borderStyle:"solid", ease: "none"});
      tl.to(boxes,  { width:"100%", height:"100%", bottom:"0", right:"0", borderWidth:"0 0 4px 0", borderColor:"#d6d3d6", borderStyle:"solid", ease: "none"});
      tl.to(boxes,  { width:"4px" , height:"100%", bottom:"0", left:"0" , borderWidth:"0 0 0 4px", borderColor:"#d6d3d6", borderStyle:"solid", ease: "power2.in"});

      tl.to(boxes, {width:"100%", height:"100%", backgroundColor:"#d6d3d6"})         
      tl.to(outer, {alignItems:"flex-start", justifyContent:"start", ease: "power4.in"        ,delay: 0.01})         
      tl.to(boxes, {height:"100%", width:"100%", backgroundColor:"#d6d3d6", ease: "power.in", delay: 0.01},"<")  
      tl.to(document.getElementById("animContainer"), {height:"100%", width:"100%", backgroundColor:"#d6d3d6", ease: "power.in", delay: 0.01},"<")      
      tl.to(outer, {display:"none", ease: "power.in", delay: 0.01,  onComplete:   ()=> toggleSplash()})
     

    },
    { scope: splash }
  );

  return (
    <>
      <div
        ref={splash}
        id="outer"
        className="bg-primary text-3xl overflow-hidden rounded-lg h-full w-full flex items-center justify-center"
      >
        <div id="animContainer" className="      
        w-2/3 h-2/3 relative
        ">
          {/* overlay */}
          <div id="overlay" className=" rounded-lg absolute h-full w-0 z-4 text-primary text-[0.1rem]">  i  </div>
          {/* content */}
          <div id="splashScreen" className=" h-full p-2 m-2 text-neutral flex items-center justify-center md:flex-row z-2 ">
            <div id="hi" className=" h-full flex md:flex-row items-center justify-center text-heads3 md:text-titles font-extrabold ">Portfolio</div>
            <div id="me" className=" hidden self-center">
             {" "}<b className="text-secondary rounded-lg text-bases md:text-heads5 " > 2024 </b> </div>
           
          </div>
        </div>
      </div>
    </>
  );
}

export default SplashScreen;
