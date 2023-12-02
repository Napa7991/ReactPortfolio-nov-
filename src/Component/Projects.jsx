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
            <div className="pCard1">
              <img
                src="./assets/project1.png"
                alt="error"
                className="project1"
              />
            </div>
            <div className="pCard2">
              <h3>Project One</h3>
              <div className="btn-container">
                <button className="btn btn-CV">
                  <a
                    href="https://github.com/Napa7991/friend-portfolio.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </button>
                <button className="btn btn-info">
                  <a
                    href="https://vimal-portfolion.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
                </button>
              </div>
            </div>
          </div>
          <div className="projectCard">
            <div className="pCard1">
              <img
                src="./assets/project2.png"
                alt="error"
                className="project1"
              />
            </div>
            <div className="pCard2">
              <h3>Project Two</h3>
              <div className="btn-container">
                <button className="btn btn-CV">
                  <a
                    href="https://github.com/Napa7991/Tic-Tac-Toe.git"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Github
                  </a>
                </button>
                <button className="btn btn-info">
                  <a
                    href="https://tic-tac-toe-napa.netlify.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    Live Demo
                  </a>
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
