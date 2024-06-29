import React from "react";
import Info from "./info";
import Image from "next/image";

function Projects() {
  let { info, FeaturedProject } = Info;

  return (
    <div id="Work" className="text-accent bg-primary rounded-lg container my-20">
      <h1 className="font-vergilia text-heads4 md:text-heads2 text-secondary tracking-tight leading-none ">
        Featured
      </h1>
      <h2 className="text-secondary font-medium text-heads6 md:text-heads5 tracking-tighter leading-none">A look at what I'm currently working on</h2>
        
      <div className="flex flex-col md:flex-row">
        <section
          className={` min-h-2/3 w-full md:w-[49%] m-1 p-4 rounded-lg text-neutral bg-primary flex flex-col align-middle justify-between`}
          // style={{backgroundColor:elem.bgColor}}
          id={FeaturedProject.id}
        >
          <Image
            alt="Project Image"
            src={FeaturedProject.screenshots}
            className="rounded-lg  w-full"
            width={500}
            height={128}
          />
        </section>
        <section className="w-full md:w-[49%] bg-secondary rounded-lg ">
          <div className="">
            <h2 className=" font-serif font-bold text-lg">
              {FeaturedProject.name}{" "}
            </h2>
            <h3 className="flex flex-wrap">
              {FeaturedProject.keywords.map((word, index ) => (
                <span key={index} className="p-2 mr-1 border-secondary border-2 border-solid rounded-full ">
                  {word}
                </span>
              ))}
            </h3>
            <span>{FeaturedProject.description}</span>
          </div>
          {/* <p>Demo<a href={FeaturedProject.liveLink}>🔗</a></p>
            <p>Article<a href={FeaturedProject.liveLink}>🔗</a></p>
            <p>Github<a href={FeaturedProject.liveLink}>🔗</a></p> */}
        </section>
      </div>
    </div>
  );
}

export default Projects;
