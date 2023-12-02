import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

import "./CompStyle.css";
import {
  SiHtml5,
  SiReact,
  SiBootstrap,
  SiGithub,
  SiVisualstudiocode,
  SiPhp,
} from "react-icons/si";
import { FaCss3Alt, FaJsSquare } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const Skills = ({ skillRef }) => {
  return (
    <>
      <section className="skillSection" ref={skillRef}>
        <div className="skill-container">
          <div className="section-text">
            <p>Explore My</p>
            <h2>Skills</h2>
            <div className="card-container">
              <div className="card card1">
                <h3>Frontend Developement</h3>
                <div className="article-card">
                  <article>
                    <SiHtml5 size={32} color="orange" />
                    <div className="innerCard1">
                      <h2>HTML</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <FaCss3Alt size={32} color="#1572B6" />
                    <div className="innerCard1">
                      <h2>CSS</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <FaJsSquare size={32} color="#F7DF1E" />
                    <div className="innerCard1">
                      <h2>JAVASCRIPT</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <SiReact size={32} color="#61DAFB" />
                    <div className="innerCard1">
                      <h2>REACT</h2>
                      <p>Beginner</p>
                    </div>
                  </article>
                  <article>
                    <SiBootstrap size={32} color="#7952B3" />
                    <div className="innerCard1">
                      <h2>BOOTSTRAP</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                </div>
              </div>
              <div className="card card2">
                <h3>Backend Developement</h3>
                <div className="article-card">
                  <article>
                    <GiCoffeeCup size={32} color="#A0522D" />
                    <div className="innerCard2">
                      <h2>CORE JAVA</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <SiPhp size={32} color="#777BB4" />
                    <div className="innerCard2">
                      <h2>PHP</h2>
                      <p>Beginner</p>
                    </div>
                  </article>
                  <article>
                    <SiGithub size={32} color="#181717" />
                    <div className="innerCard2">
                      <h2>GIT HUB</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <SiVisualstudiocode size={32} color="#007ACC" />
                    <div className="innerCard2">
                      <h2>VS CODE</h2>
                      <p>Intermediate</p>
                    </div>
                  </article>
                  <article>
                    <FontAwesomeIcon
                      icon={faDatabase}
                      size="2x"
                      color="#007ACC"
                    />

                    <div className="innerCard2">
                      <h2>MY SQL</h2>
                      <p>Beginner</p>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
