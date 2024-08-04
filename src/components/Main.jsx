import React from "react";

export function Main() {
  return (
    <div className="main">
      <div className="content">
        <p>Hi !</p>
        <h1>
          I'm{" "}
          <div className="typing-text">
            <span>Suraj </span>
            <span>Gitte</span>
          </div>
        </h1>
        <p className="work">Web & UI/UX Designer</p>
        <p className="info">
          I'm a 1st year Btech student in Vit pune <br /> With more than 1 year
          experience in web development.
        </p>

        <a href="mailto:suraj.gitte23@vit.edu">
          <button type="button" className="btn btn-primary mb-3 mt-3 me-3">
            Hire me
          </button>
        </a>
        <a href="index.html#projects">
          <button type="button" className="btn btn-outline-primary mb-3 mt-3">
            My Work
          </button>
        </a>

        <div className="social">
          <a
            href="https://www.instagram.com/suraj_gitte_6708?igsh=OXQ5bGJhZXhyMjR2"
            target="_blank"
          >
            <div>
              <i className="fa-brands fa-square-instagram"></i>
            </div>
          </a>
          <a
            href="http://www.linkedin.com/in/suraj-gitte-7b71a7288"
            target="_blank"
          >
            <div>
              <i className="fa-brands fa-linkedin"></i>
            </div>
          </a>
          <a href="https://github.com/Suraj6708" target="_blank">
            <div>
              <i className="fa-brands fa-github"></i>
            </div>
          </a>
        </div>
      </div>

      <div className="container1">
        <img
          src="image/Myimg.jpg"
          alt="myphoto"
          className="hower-image"
          id="hower-image"
        />
        <div className="overlay">
          <a
            href="https://www.instagram.com/suraj_gitte_6708?igsh=OXQ5bGJhZXhyMjR2"
            target="_blank"
          >
            <div>
              <i className="fa-brands fa-square-instagram" id="icons"></i>
            </div>
          </a>
          <a
            href="http://www.linkedin.com/in/suraj-gitte-7b71a7288"
            target="_blank"
          >
            <div className="icons">
              <i className="fa-brands fa-linkedin" id="icons"></i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
