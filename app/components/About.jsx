import Image from "next/image";
import React from "react";

function About() {
  return (
    <div id="About" className="container px-6 h-[75vh] rounded-lg bg-primary w-full mt-10 text-neutral">
      <div className="h-full flex flex-col md:flex-row ">

        <div className="w-full md:w-1/2 bg-primary h-full flex flex-col items-center  justify-center">
          <h1 className=" text-secondary text-heads2 font-vergilia">About</h1>
          <div className="flex  items-stretch content-stretch justify-stretch  mb-6 flex-wrap">
            <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow text-center "> Me </h2>
            <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow mx-4 text-center "> Education & Experience </h2>
            <h2 className="border-white border-2 border-solid shadow-md rounded-2xl p-2 grow text-center "> Skills </h2>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full overflow-hidden">
          {/* ---------------------------------------------- Box 1 ---------------------------------------------- */}
          <div className="w-full h-full flex align-middle items-stretch justify-evenly flex-wrap">

            <div className="bg-neutral text-accent border-primary border-2 border-solid grow p-3 rounded-lg m-1 shadow-sm">
              <h1 className="text-heads3">Me!</h1>
              <div className="flex flex-col md:flex-row ">


                <div className="w-contain h-full relative border-[red] border-2 border-solid flex justify-center">
                  <Image
                    alt="Avatar Image"
                    src="/assets/avatar.jpg"
                    width={125}
                    height={32}
                    className="h-full border-[yellow] border-2 border-solid rounded-md"
                  />
                </div>

                <div className="w-full md:w-2/3">
                  
                  <p className="mt-2">
                    My journey so far has been marked by several notable
                    achievements. I hold a patent for an innovative Neural Network
                    Architecture designed for precision irrigation and have won
                    the maker fair track at IEEE YESIST 12 for the same.
                    Additionally, I received project grants from the Government of
                    India to develop a pedestrian navigation system for smart
                    cities.
                  </p>
                  <p className="mt-2">
                    In my free time, I enjoy building fun side projects, exploring
                    new crafts like Bullet Journalling, and collecting 4-hour long
                    video essays on YouTube. I also love immersing myself in
                    books, mostly fiction, like 'Life of Pi' and 'The House on the
                    Cerulean Sea'. Currently reading my way through 'The
                    hitchhiker's guide to the Galaxy'
                  </p>
                </div>
              </div>
            </div>
            {/* ---------------------------------------------- Box 2 ---------------------------------------------- */}
            <div className="bg-neutral text-accent border-primary border-2 border-solid grow p-3 rounded-lg m-1 shadow-sm">
              <h1 className="text-heads3">Education</h1>
              <h2>
                {" "}
                Got a Bachelor of Engineering in Information Science and
                Engineering from BMS College of Engineering
              </h2>
              <h1>Quiz Club</h1>
            </div>
            {/* ---------------------------------------------- Box 3 ---------------------------------------------- */}
            <div className="bg-neutral text-accent border-primary border-2 border-solid grow p-3 rounded-lg m-1 shadow-sm">
              <h1 className="text-heads3">Experience</h1>
              <h2>CryptApex</h2>
              <h2>Sival Devops</h2>
              <h2>TiH IoT + Mathworks</h2>
              <h2>GE Healthcare</h2>
            </div>
            {/* ---------------------------------------------- Box 4 ---------------------------------------------- */}
            <div className="bg-neutral text-accent border-primary border-2 border-solid grow p-3 rounded-lg m-1 shadow-sm">
              <h1 className="text-heads3">Skills</h1>
              <h2>CryptApex</h2>
              <h2>Sival Devops</h2>
              <h2>TiH IoT + Mathworks</h2>
              <h2>GE Healthcare</h2>
            </div>

          </div>
        </div>

        
      </div>

    </div>
  );
}

export default About;
