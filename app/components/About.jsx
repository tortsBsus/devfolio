import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className=" bg-primary px-6 h-auto w-full mt-10 text-neutral">
      <div className="container h-full  ">
        <h1 className=" text-heads2 font-vergilia">About</h1>
        {/* ---------------------------------------------- Box 1 ---------------------------------------------- */}
        <div className="w-full h-full flex align-middle items-stretch justify-evenly flex-wrap">
          
          <div className="bg-neutral text-accent border-primary border-2 border-solid grow p-3 rounded-lg m-1 shadow-sm">
            <h1 className="text-heads3">Me!</h1>
            <div className="border-white border-2 border-solid flex flex-col md:flex-row ">
             
              
                <div className="w-full md:w-1/3 h-full relative">
                  yo
                  <Image
                    alt="Avatar Image"
                    src="/assets/avatar.jpg"
                    fill
                    sizes="(max-width: 789px) 100vw, (max-width: 1200px) 33vw"
                  />
                </div>
              
              <div className="w-full md:w-2/3">
                <p>
                  Hello! I'm Meghana Rathanraj, a passionate web developer with
                  a strong focus on frontend and full stack web development.
                  Based in Bengaluru, India, I thrive under pressure and love
                  the challenge of learning a new skill
                </p>
                <p>
                  My journey so far has been marked by several notable
                  achievements. I hold a patent for an innovative Neural Network
                  Architecture designed for precision irrigation and have won
                  the maker fair track at IEEE YESIST 12 for the same.
                  Additionally, I received project grants from the Government of
                  India to develop a pedestrian navigation system for smart
                  cities.
                </p>
                <p>
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
  );
}

export default About;
