import React from "react";
import "./CompStyle.css";

const Projects = ({ projectRef }) => {
  return (
    <>
      <section className="projectSection" ref={projectRef}>
          <p>Browse My Recent</p>
          <h2>Projects</h2>

          <div className="projectContainer">
          <div className="projectCard">
          <div className="pCard1">1</div>
          <div className="pCard2">
            <h3>Project One</h3>
            <div className="btn-container">
              <button
                className="btn btn-CV"
                onClick={() => {
                  window.open(import.meta.env.BASE_URL + "assets/Resume.pdf");
                }}
              >
                Github
              </button>
              <button
                className="btn btn-info"
                onClick={() => {
                  scrollToSection(contactRef);
                }}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
        <div className="projectCard">
          <div className="pCard1">1</div>
          <div className="pCard2">
            <h3>Project Two</h3>
            <div className="btn-container">
              <button
                className="btn btn-CV"
                onClick={() => {
                  window.open(import.meta.env.BASE_URL + "assets/Resume.pdf");
                }}
              >
                Github
              </button>
              <button
                className="btn btn-info"
                onClick={() => {
                  scrollToSection(contactRef);
                }}
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
          </div>

       
      </section>
    </>
  );
};

export default Projects;
