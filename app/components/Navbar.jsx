import React, { useRef } from "react";
import Logo from "./About/Logo";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const nav = useRef();
  useGSAP(
    () => {
      const navbar = document.querySelector("#navbar");
      gsap.fromTo(
        navbar,
        { y: "-100%" },
        { y: "0", duration: 0.7, ease: "power4.out" }
      );
      
    },
    { scope: nav}
  );

  return (
    <>
      <header ref={nav}
        id="navbar"
        className="border-[black] border-24 border-solid w-full bg-neutral text-[black]  "
      >
        <nav className=" mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="text-[black] font-bold text-xl">
              <a href="#">Meghana Rathanraj</a>
            </div>
            <div className="hidden md:block">
              <ul className="flex items-center space-x-8">
                <li>
                  <a href="#" className="text-[black]">
                    Let's Talk!
                  </a>
                </li>
                {/* <li>
                  <a href="#" className="text-[black]">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[black]">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Contact
                  </a>
                </li> */}
              </ul>
            </div>
            <div className="md:hidden">
            <button className="outline-none mobile-menu-button ">
            ≣ 
</button>
            </div>
          </div>
          <div className="mobile-menu hidden md:hidden">
            <ul className="mt-4 space-y-4">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-white bg-gray-900 rounded"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
