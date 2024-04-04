"use client";

import SplashScreen from "./../components/SplashScreen.jsx"
import {useState } from "react";
import Portfolio from "./../components/Portfolio";
import Projects from "../components/Projects/Projects.jsx";



export default function Home() {
  const [splash, setSplash] = useState(true);

  const toggleSplash = () => setSplash(!splash);

  return (
    <div className={`min-h-screen w-full bg-neutral`}>
      <SplashScreen complete = {toggleSplash} />
      {
        !splash && 
        <>
        <Portfolio/>
        </>
       }

      
    </div>

  );
}
