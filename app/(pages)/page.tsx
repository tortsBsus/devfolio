import About from "../components/About/About";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Socials from "../components/Socials";
import Experience from "../components/Experience";
import Achievements from "../components/Achievements";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div id="hero"><Hero/></div>
      <div id="about"><About/></div>
      {/* <div id="projects"><Projects/></div> */}
      <div id="experience"><Experience/></div>
      {/* <div id="achievements"><Achievements/></div> */}
      <div id="socials"><Socials/></div>
    </div>    
  );
}
