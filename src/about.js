import React from "react";
import Image from "./img/arbz.jpeg";

import "./about.css";
export default function About() {
  return (
    <div>
      <div className="about-bg" id="about">
        <h1>About</h1>

        <div className="about-section">
          <div className="profile-img">
            <img src={Image} alt="img" />
          </div>

          <div className="para">
            <p >
              As a passionate Software Engineer with a background in Mechanical Engineering, I've fallen in love with coding and Front-End development. My mission is to turn user-focused designs into pixel-perfect, high-performance websites and applications that not only look pixel-perfect but also perform blazingly fast. I'm an enthusiastic learner, always eager to embrace new technologies and work across various domains to tackle real-world challenges. I excel in exploring innovative solutions and leveraging technology to make a difference.
            </p>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </div>
  );
}
