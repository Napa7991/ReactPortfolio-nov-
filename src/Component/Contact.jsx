import React from "react";

const Contact = ({ contactRef }) => {
  return (
    <>
      <section className="contactSection" ref={contactRef}>
        <p>Get In Touch</p>
        <h2>Contact Me</h2>
        <div className="contactDiv">
          <a href="/">
            <img
              src="./assets/email.png"
              alt="error"
              style={{ width: "50px", height: "50px" }}
            />
            tailangnapa1@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/tailangnapa/">
            <img
              src="./assets/linkedin.png"
              alt="error"
              style={{ width: "40px", height: "40px" }}
            />
            Linkedin.com
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
