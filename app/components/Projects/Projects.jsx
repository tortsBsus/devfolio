import React from "react";
import Info from "./info";
import Image from "next/image";


function Projects() {
  
  let {info,FeaturedProject} = Info; 

  return (
    <div className="text-accent bg-neutral rounded-lg container my-20 py-20"  >
      
      <h1 className="font-vergilia text-heads4 md:text-heads2 tracking-tight leading-none">Other Projects</h1>
      <h2 className="text-accent font-medium text-heads6 md:text-heads5 tracking-tighter leading-none">Other projects that I built in the past</h2>
      <div className="flex justify-evenly mb-6 flex-wrap mt-5"> 
        <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow text-center "> Backend </h2>
        <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow mx-4 text-center "> Mobile </h2>  
        <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow text-center "> Blockchain </h2> 
      </div>
      
        <div className="flex flex-wrap justify-between">
        {info.map((elem,elemIndex) => (
          <section className={` min-h-2/3 w-full md:w-[49%] m-1 p-4 rounded-lg text-neutral bg-primary flex flex-col align-middle justify-between`} 
          // style={{backgroundColor:elem.bgColor}}  
          key = {elemIndex}
          id={elem.id}>
            
            <Image
              alt="Project Image"
              src={elem.screenshots}
              className="rounded-lg  w-full"
              width={500}
              height={128}
            />
            <div className="">
            <h2 className=" font-serif font-bold text-lg">{elem.name}  </h2>
            <h3 className="flex flex-wrap">{elem.keywords.map((word,index)=> <span key={index} className="p-2 mr-1 border-secondary border-2 border-solid rounded-full ">{word}</span>  )}</h3>
            <span>{elem.description}</span>
            </div>
            {/* <p>Demo<a href={elem.liveLink}>🔗</a></p>
            <p>Article<a href={elem.liveLink}>🔗</a></p>
            <p>Github<a href={elem.liveLink}>🔗</a></p> */}
            </section>
        ))}
        </div>
      </div>
  );
}

export default Projects;
