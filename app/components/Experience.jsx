import React from "react";

function Experience() {
  return (
    <div className="mt-10 px-4 lg:px-16 min-h-screen w-screen">
      <h1 className="text-heads3 lg:text-titles text-center font-bold font-vergilia "> Experience  </h1>
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        
        {/* Sival Devops */}
        <li>
          
          {/* Icon */}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-start timeline-box md:text-end mb-10">
            <time className="font-mono italic">
              January 2023 - December 2023
            </time>
            <div className="text-lg font-black">Sival Devops Pvt Ltd</div>
            <p>
              Full Stack Web Developer, Bangalore, IN
                  <br />
                  <br />
                  Spearheaded front-end development, specializing in designing
                  and developing interactive dashboards and landing pages using
                  React, Material-UI, Tailwind CSS, and Figma. Optimized
                  performance and improved dashboard load times by 25%,
                  resulting in a more responsive user interface.
                  <br />
                  <br />
                  Played a pivotal role in DevOps tasks, including Nginx web
                  server configuration, and Docker containerization. Led the
                  development of FastAPI-based APIs, achieving a 30% reduction
                  in response time and enhancing overall system efficiency.
            </p>
          </div>
          <hr />
        </li>

        {/* TiH IoT */}
        <li>
          <hr />

          {/* Icon */}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="timeline-end timeline-box mb-10">
            <time className="font-mono italic">August 2022 - May 2023</time>
            <div className="text-lg font-black">TIH-IoT</div>
            <p>
              Software Development Intern, Bangalore, IN
              <br />
                  <br />
                  Led a team of 4 in developing an IoT-based Smart Irrigation
                  System, including designing the system, integrating soil
                  moisture sensors, weather APIs, an LSTM deep learning model,
                  and creating a mobile application.
                  <br />
                  <br />
                  Demonstrated a 15% reduction in water usage during a 3-month
                  field test while maintaining crop yield for American sweet
                  corn, showcasing the system’s effectiveness.
            </p>
          </div>
          <hr />
        </li>
        
        {/* GE Healthcare */}
        <li>
          <hr />

          {/* Icon */}
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
              clipRule="evenodd"
            />
            </svg>
          </div>

          <div className="timeline-start timeline-box md:text-end mb-10">
            <time className="font-mono italic">
              September 2021 - December 2021
            </time>

            <div className="text-lg font-black">GE Healthcare</div>

            <p>
              Software Intern, Bangalore, IN
                  <br />
                  <br />
              
                  Orchestrated the development of a real-time Self-Service
                  Reporting system using the Elastic, Logstash, and Kibana (ELK)
                  stack, achieving a 40% increase in data processing speed and
                  enabling real-time data visualization across multiple
                  geographic locations.
                  <br />
                  <br />
                  Successfully migrated the legacy SQL database to a NoSQL
                  solution, enhancing data processing capabilities, resulting in
                  a 60% reduction in query response time with seamless
                  integration with Logstash.
              
            </p>
          </div>
          <hr />
        </li>

      </ul>
    </div>
  );
}

export default Experience;
