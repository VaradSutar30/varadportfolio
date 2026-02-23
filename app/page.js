import About from "./components/About";
import Hero from "./components/Hero";
import Mobile_hero from "./components/Mobile_hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Specialities from "./components/Specialities";
import Skills from "./components/Skills";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <>
      <Hero />
      <Mobile_hero />
      <Skills/>
      <Projects/>
      <About/>

      <Specialities/>

      <Services/>
      
      <Footer/>
    </>
  );
}
