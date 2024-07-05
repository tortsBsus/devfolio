"use client";
import React, { useEffect, useRef, useState } from "react";
import Info from "./info";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Flip } from "gsap/all";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FeaturedProject from "./FeaturedProject";

gsap.registerPlugin(Flip);
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const Proj = useRef();

  let { info, FeaturedProject } = Info;

  let [currentProjects, setCurrentProjects] = useState(info);

  const handleFilter = (value) => {
    if (value == "all") setCurrentProjects(info);
    else {
      let temp = info.filter((row) => row.category == value);
      setCurrentProjects(temp);
    }
  };

  return (
    <div
      id="ProjectsSection"
      className="text-accent bg-neutral rounded-lg container my-20 py-20"
    >
      <h1
        className="font-vergilia text-heads4 md:text-heads2 tracking-tight leading-none"
        onClick={() => handleFilter("all")}
      >
       Other
      </h1>


      <h2 className="text-accent font-medium text-heads6 md:text-heads5 tracking-tighter leading-none">
        Projects that I built in the past
      </h2>
      <div className="flex justify-evenly mb-6 flex-wrap mt-5">
        <h2
          className="border-white border-2 border-solid hover:bg-secondary hover:border-secondary hover:shadow-lg font-medium hover:font-semibold shadow-md rounded-2xl p-2 grow text-center "
          onClick={() => handleFilter("backend")}
        >
          {" "}
          Full Stack{" "}
        </h2>
        <h2
          className="border-white border-2 border-solid hover:bg-secondary hover:border-secondary hover:shadow-lg font-medium hover:font-semibold shadow-md rounded-2xl p-2 grow mx-4 text-center "
          onClick={() => handleFilter("mobile")}
        >
          {" "}
          Mobile{" "}
        </h2>
        <h2
          className="border-white border-2 border-solid hover:bg-secondary hover:border-secondary hover:shadow-lg font-medium hover:font-semibold shadow-md rounded-2xl p-2 grow text-center "
          onClick={() => handleFilter("blockchain")}
        >
          {" "}
          Blockchain{" "}
        </h2>
      </div>

      <div className="flex flex-wrap justify-between">
        {currentProjects.map((elem, elemIndex) => (
          <>
            <section
              className={`projecks min-h-1/5 w-full m-1 px-10 py-5 rounded-lg text-neutral bg-primary flex flex-col md:flex-row align-middle items-stretch justify-between`}
              // style={{backgroundColor:elem.bgColor}}
              key={elemIndex}
            >
              <div className=" max-h-1/2 md:max-w-1/3 p-1">
                <Image
                  alt="Project Image"
                  src={elem.screenshots}
                  className="rounded-lg w-full"
                  width={500}
                  height={128}
                />
              </div>

              <div className=" self-center md:w-2/3 p-5 flex flex-col justify-between">
                {/* Card row 1 */}
                <div>
                  <h2 className=" font-serif font-bold text-xl md:text-4xl ">
                    {elem.name}{" "}
                  </h2>
                  <h3 className="flex flex-wrap my-2 text-smalls md:text-captions">
                    {elem.keywords.map((word, index) => (
                      <span
                        key={index}
                        className="p-2 mr-1 mt-1 border-secondary/50 border border-solid rounded-xl "
                      >
                        {word.toUpperCase()}
                      </span>
                    ))}
                  </h3>
                </div>
                {/* Card row 2 */}
                <p className="text-bases my-2">{elem.description}</p>
                {/* Card row 3 */}
                <div className="flex flex-row my-2">
                  {console.log(
                    elem.liveLink.length,
                    elem.mediumLink.length,
                    elem.githubLink.length
                  )}
                  {elem.liveLink.length != 0 && (
                    <a href={elem.liveLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Demo ↗
                      </p>
                    </a>
                  )}
                  {elem.mediumLink.length != 0 && (
                    <a href={elem.mediumLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Article ↗
                      </p>
                    </a>
                  )}
                  {elem.githubLink.length != 0 && (
                    <a href={elem.githubLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Github ↗
                      </p>
                    </a>
                  )}
                </div>
              </div>
            </section>
            {/* <div className="flex flex-row justify-between border-white border-2 border-solid w-full">
            <div className=" font-serif font-bold text-xl md:text-4xl m-2 ">{elem.name}  </div>
            <div className="flex flex-wrap my-2 text-smalls md:text-captions">{elem.keywords.map((word,index)=> <span key={index} className="p-2 mr-1 mt-1 border-secondary/50 border border-solid rounded-xl ">{word.toUpperCase()}</span>  )}</div>
            </div> */}
          </>
        ))}
      </div>
    </div>
  );
}

export default Projects;
