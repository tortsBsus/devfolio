"use client"
import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

function Socials() {
  const socialLinks = [
    {
      platform: "GitHub",
      link: "https://github.com/tortsBsus",
      icon: <FaGithub className="w-6 h-6" />,
    },
    {
      platform: "LinkedIn",
      link: "https://www.linkedin.com/in/meghana-rathanraj-link-to-profile/",
      icon: <FaLinkedin className="w-6 h-6" />,
    },
    {
      platform: "Twitter",
      link: "https://twitter.com/megTries",
      icon: <FaTwitter className="w-6 h-6" />,
    },
    // Add more social media links here...
  ];

  const handleEmailButtonClick = () => {
    window.location.href = "mailto:meghanarathanraj@gmail.com"; // Replace with your email
  };

  return (
    <div className="px-4 lg:px-16 py-8 my-20 w-screen h-auto">
      <h1 className="text-heads3 lg:text-heads1 text-left font-bold font-vergilia mb-4">
        Socials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {socialLinks.map((social, index) => (
          <div
            key={index}
            className="bg-secondary shadow-lg rounded-lg overflow-hidden"
          >
            <a
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 flex items-center justify-center text-neutral"
            >
              {social.icon}
              <h2 className="text-2xl font-bold ml-4">{social.platform}</h2>
            </a>
          </div>
        ))}
        <div className="bg-secondary shadow-lg rounded-lg overflow-hidden flex items-center justify-center">
          <button
            onClick={handleEmailButtonClick}
            className="p-6 flex items-center justify-center text-neutral"
          >
            <FaEnvelope className="w-6 h-6" />
            <h2 className="text-2xl font-bold ml-4">Email</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Socials;
