import React from "react";
import "./Skills.css";

function Skills() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="tagline">
        <h1>Skills</h1>
      </div>
      <div className="tech-stack">
        <div className="tech-section">
          <div className="right">
            <div className="center">
              <h2>Frontend</h2>
              <div className="two">
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/html-5--v1.png"
                    alt="html"
                  />
                  <p>HTML</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/css3.png"
                    alt="css"
                  />

                  <p>CSS</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/javascript.png"
                    alt="js"
                  />
                  <p>Javascript</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/plasticine/70/000000/react.png"
                    alt="react"
                  />
                  <p>ReactJs</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/material-ui.png"  
                    alt="material UI"
                  />
                  <p>Material UI</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/typescript.png"  
                    alt="typeScript"
                  />
                  <p>TypeScript</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/redux.png"  
                    alt="redux"
                  />
                  <p>Redux</p>
                </div>
              </div>

              <h2>Backend</h2>
              <div className="two">
                
                <div className="icon-name">
                  <img
                    src="icons8-java-64.png"
                    alt="java"
                  />
                  <p>Core Java</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/sql.png"
                    alt="mongo"
                  />
                  <p>Oracle SQL</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/nodejs.png"
                    alt="nodejs"
                  />
                  <p>NodeJs</p>
                </div>
              </div>
              <h2>Tools</h2>
              <div className="two">
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/ios-glyphs/70/000000/github.png"
                    alt="github"
                  />
                  <p>Github</p>
                </div>
                <div className="icon-name">
                  <img
                    src="https://img.icons8.com/color/70/000000/visual-studio-code-2019.png"
                    alt="vs"
                  />
                  <p>Visual Studio</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default Skills;
