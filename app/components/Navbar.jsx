import React, { useRef } from "react";
// import Logo from "./About/Logo";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {


  const menuAnim = () => {
    document.getElementById("navMobileMenu").classList.toggle("hidden");
    const menuItems = document.querySelectorAll("#navMobileMenu li");
    menuItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.toggle('opacity-0');
        item.classList.toggle('-translate-y-4');
      }, index * 100);
    })
  }

  return (
    <>
      <header
        id="navbar"
        className="container top-0 left-0 w-full mb-1  text-[black] z-50 bg-neutral rounded-lg opacity-100 "
      >
        
         <nav className=" px-6 py-3 ">
          <div className="flex items-center justify-between">
            <div className="text-[black] font-bold text-xl">
              <a href="#hero">Meghana Rathanraj</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a href="#Work" className="text-[black]">
                    Work
                  </a>
                </li>
                {/* <li>
                  <a href="#About" className="text-[black]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#Achievements" className="text-[black]">
                    Achievements
                  </a>
                </li> */}
                <li>
                  <a href="#Socials" className="text-[black]">
                    Let's Talk!
                  </a>
                </li>
              </ul>
            </div>
            <div className="md:hidden">
              <button className="outline-none mobile-menu-button " onClick={menuAnim}>≣</button>
            </div>
          </div>
          <div id ="navMobileMenu" className="   hidden md:hidden  relative ">
            <ul className="mt-4 space-y-4">
              <li className="opacity-0 transform -translate-y-4 transition-opacity transition-transform  duration-200 delay-[150]">
                <a
                  href="#Work"
                  className=" block px-4 py-2 rounded"
                >
                  Work
                </a>
                <hr className="opacity-10"/>
              </li>
              {/* <li className="opacity-0 transform -translate-y-4 transition-opacity transition-transform duration-200 delay-[250]">
                <a
                  href="#About"
                  className="block px-4 py-2 rounded"
                >
                  About
                </a>
                <hr className="opacity-10"/>
              </li>
              <li className="opacity-0 transform -translate-y-4 transition-opacity transition-transform duration-200 delay-400 ">
                <a
                  href="#Achievements"
                  className="block px-4 py-2 rounded"
                >
                  Achievements
                </a>
                <hr className="opacity-10"/>
              </li> */}
              <li className="opacity-0 transform -translate-y-4 transition-opacity transition-transform duration-200 delay-[250]">
                <a
                  href="#Socials"
                  className="block px-4 py-2 rounded"
                >
                  Let's Talk!
                </a>
              </li>
            </ul>
          </div>
        </nav> 
        <hr className="opacity-10"/>
      </header>
    </>
  );
}

export default Navbar;
