import React from "react";
import Logo from "./About/Logo";
import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className=" col-span-8 
                      lg:col-span-7 lg:col-start-2 
                      bg-secondary p-1 mx-2
                      
                      rounded-3xl">
          <div className="navbar 
                        h-full w-full 
                        rounded-3xl 
                        bg-secondary 
                        text-neutral 
                        border-primary border-solid border-2 
                        flex justify-around align-middle">
            <Link href="#hero" className="text-bases lg:text-heads5 font-vergilia">Home</Link>
            {/* <Link href="#projects" className="text-bases lg:text-heads5 font-vergilia">Projects</Link> */}
            <Link href="#about" className="text-bases lg:text-heads5 font-vergilia">About</Link>
            <Link href="#experience" className="text-bases lg:text-heads5 font-vergilia">Experience</Link>
            {/* <Link href="#achievements" className="text-bases lg:text-heads5 font-vergilia">Achievements</Link> */}
            
          </div>
        </div>

        <div className="col-span-4 lg:col-span-3 
                        bg-secondary p-1 mx-2
                        rounded-3xl 
                        flex align-middle items-center justify-center">
          <div className="navbar 
                          h-full w-full rounded-3xl px-10 
                          bg-secondary text-neutral 
                          border-primary border-solid border-2 
                          flex justify-center align-center">
            < Link href="#socials" className="text-bases lg:text-heads5 font-vergilia">
              Contact me!
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
