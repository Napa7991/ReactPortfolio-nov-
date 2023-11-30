import React, { useRef } from "react";
import Navbar from "./Navbar/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Projects from "./Component/Projects";
import Skills from "./Component/Skills";
import Footer from "./Component/Footer";
import "./AppStyle.css";

const App = () => {
  const projectRef = useRef(null);
  const skillRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const homeRef=useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Navbar scrollToSection={scrollToSection} aboutRef={aboutRef} skillRef={skillRef} projectRef={projectRef} contactRef={contactRef} homeRef={homeRef}/>
      <div className="main-container">
        <Home homeRef={homeRef} contactRef={contactRef} scrollToSection={scrollToSection}/>
        <Projects projectRef={projectRef} />
        <Skills skillRef={skillRef} />
        <About aboutRef={aboutRef} />
        <Contact contactRef={contactRef} />
      </div>
      <Footer/>
      
    </>
  );
};

export default App;
