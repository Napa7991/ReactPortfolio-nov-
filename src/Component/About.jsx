import React from "react";
import "./CompStyle.css";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ({ aboutRef }) => {
  return (
    <>
      <section className="aboutSection" ref={aboutRef}>
        <p>Get To Know More</p>
        <h2>About Me</h2>

        <div className="aboutContainer">
          <div className="box aboutImageContainer">
            <img
              className="sideImg"
              src="/assets/sidePic3.png"
              alt="errorImage"
            />
          </div>
          <div className="box aboutTitle">
            <div className="aboutPart1">
              <div className="education">
                <FontAwesomeIcon
                  className="fontIcon"
                  icon={faGraduationCap}
                  size="2x"
                />
                <h3>Education</h3>
                <p className="para">
                  <li>Bachelore in Computer Application(2019-2022)</li>
                  <li>class 12(2019)</li>
                </p>
              </div>
              <div className="courses">
                <FontAwesomeIcon className="fontIcon" icon={faBook} size="2x" />

                <h3>Courses</h3>
                <p className="para">
                  <li>FrontEnd Course From Prostack Academy(2023)</li>
                  <li>Internshala 6-week Web Course(2022)</li>
                  <li>Udemy Web Developement BootCamp(2022)</li>
                </p>
              </div>
            </div>
            <div className="aboutPart2">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Veritatis atque eius maiores et ullam, sunt hic voluptate minima
                molestiae ducimus iusto facilis eaque facere quia. Facere harum
                quidem dolore deserunt!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
