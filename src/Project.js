import React from "react";
import "./Project.css";
import Image from "./img/imdb.png";
import Img from "./img/adminPanel.png";
import Ima from "./img/todolist.png"


export default function Projects() {
  return (
    <div id="projects">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-section">
          <div className="center">
            <div className="one">
              <img src={Image} alt="project" />
              <h2>Imdb Movies Search</h2>
              <p>
                Unlock a World of Entertainment: Explore Movies, TV Shows, and People on TMDb.
              </p>
              <p>Teck-Stack: HTML | CSS | Javascript | React.Js | Tailwind | Redux</p>

              <a
                href="https://imdb-movies-search.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/Arbaz-Ahmed-509/ImdbMovies"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
           
            <div className="one">
              <img src={Img} alt="project" />
              <h2>Admin Panel</h2>
              <p>
                 About This Project Incorporate 'Analytics & Statistics,' 'Bar & Pie Charts,' and 'Tables' for data-driven insights and efficient organization..
              </p>
              <p>
                Teck-Stack: HTML | CSS | Javascript | React.Js | Material UI |
              </p>

              <a
                href="https://admin-panel-five-gamma.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/Arbaz-Ahmed-509/AdminPanel"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
            <div className="one">
              <img src={Ima} alt="project" />
              <h2>TodoList</h2>
              <p>
                About This Projec the User Can Able to Add data, Edit data and Delete.
              </p>
              <p>
                Teck-Stack: HTML | CSS | JavaScript | Reactjs | BootStrap
              </p>

              <a
                href="https://todo-list-woad-five.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                <button>Demo</button>
              </a>
              <a
                href="https://github.com/Arbaz-Ahmed-509/TodoList"
                target="_blank"
                rel="noreferrer"
              >
                <button>GitHub Link</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
