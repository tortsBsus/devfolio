import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import info from "./info";

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const horizontalScroll = useRef();
  useGSAP(() => {}, { scope: horizontalScroll });

  return (
    <div
      ref={horizontalScroll}
      className="text-accent container border-white border-2 h-screen border-solid"
    >
      Projects
      <div className="flex flex-row justify-center align-middle flex-wrap">
        {info.map((elem) => (
          <>
            <div className="w-1/3 rounded-lg border-white border-2 border-solid">
              {elem.name}
              <a href={elem.liveLink}>🔗</a> 
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
