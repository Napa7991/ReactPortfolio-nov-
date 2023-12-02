import React  from "react";
import "./CompStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Home = ({homeRef,contactRef,scrollToSection}) => {


  return (
    <>
      <section className="home-container" ref={homeRef}>
        <div className="img-Container">
          <img src="/assets/mypic.jpeg" alt="error" className="firstImg" />
        </div>
        <div className="section-text">
          <p>Hello,I'm </p>
          <h1>Tailang Napa</h1>
          <h3>Frontend Developer</h3>
          <div className="btn-container">
            <button
              className="btn btn-CV"
              onClick={() => {
                window.open(import.meta.env.BASE_URL + "assets/Resume.pdf");
              }}
            >
              Download CV
            </button>
            <button
              className="btn btn-info"
              onClick={() => {
                scrollToSection(contactRef);
              }}
            >
              Contact Info
            </button>
          </div>
          <div id="icons">
            <a href="https://www.linkedin.com/in/tailangnapa/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="https://github.com/Napa7991" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
