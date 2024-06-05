"use client";

import SplashScreen from "./../components/SplashScreen.jsx"
import {useState } from "react";
import Portfolio from "./../components/Portfolio";
import Projects from "../components/Projects/Projects.jsx";



export default function Home() {
  const [splash, setSplash] = useState(true);

  const toggleSplash = () => setSplash(!splash);

  return (
    <div className={`h-screen max-h-screen max-w-screen m-3 rounded-lg`}>
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
