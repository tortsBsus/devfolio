import React from "react";
import Info from "./info";
import Image from "next/image";

function Projects() {
  let { info, FeaturedProject } = Info;

  return (
    <div className="text-accent bg-neutral rounded-lg container my-20">
      <h1 className="font-vergilia text-heads4 md:text-heads2 text-accent tracking-tight leading-none text-right ">
        Featured
      </h1>
      <h2 className="text-accent font-medium text-heads6 md:text-heads5 tracking-tighter leading-none text-right">A look at what I'm currently working on</h2>
        
      <div className="flex flex-col md:flex-row shadow-2xl bg-primary text-neutral border-neutral/5 border border-solid rounded-lg p-4 mt-5">
        <section
          className={` min-h-2/3 w-full md:w-[49%] m-1 p-4 rounded-lg text-neutral bg-primary flex flex-col align-middle justify-between`}
          // style={{backgroundColor:FeaturedProject.bgColor}}
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
        <section className="w-full rounded-lg p-4 ">        
            <div className=" self-center p-5 flex flex-col justify-between">
                {/* Card row 1 */}
                <div>
                  <h2 className=" font-serif font-bold text-2xl md:text-4xl ">
                    {FeaturedProject.name}{" "}
                  </h2>
                  <h3 className="flex flex-wrap my-2 text-smalls md:text-captions">
                    {FeaturedProject.keywords.map((word, index) => (
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
                <p className="text-bases my-2">{FeaturedProject.description}</p>
                {/* Card row 3 */}
                <div className="flex flex-row my-2">
                  {console.log(
                    FeaturedProject.liveLink.length,
                    FeaturedProject.mediumLink.length,
                    FeaturedProject.githubLink.length
                  )}
                  {FeaturedProject.liveLink.length != 0 && (
                    <a href={FeaturedProject.liveLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Demo ↗
                      </p>
                    </a>
                  )}
                  {FeaturedProject.mediumLink.length != 0 && (
                    <a href={FeaturedProject.mediumLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Article ↗
                      </p>
                    </a>
                  )}
                  {FeaturedProject.githubLink.length != 0 && (
                    <a href={FeaturedProject.githubLink}>
                      <p className="md:text-2xl font-semibold mr-2 hover:decoration-secondary hover:decoration-1 hover:decoration-solid hover:underline-offset-2 hover:underline">
                        Github ↗
                      </p>
                    </a>
                  )}
                </div>
                </div>
        </section>
      </div>
    </div>
  );
}

export default Projects;
