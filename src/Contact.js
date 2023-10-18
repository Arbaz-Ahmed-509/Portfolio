import React from "react";
import "./Contact.css";
export default function Contacts() {
  return (
    <div>
      <div className="contacts" id="Contact">
        <h1>Contact Me</h1>
        <div className="center-div">

        <div className="phone">
          <i className="fa fa-phone"> </i>

          <a tel="+91 7259175188" target="_blank" rel="noreferrer">
            +91 7259175188
          </a>
        </div>
        <div className="phone">
            <i className="fa fa-envelope-o"></i>
            <a href="mailto: arbazahmed577@gmail.com">
              arbazahmed577@gmail.com
            </a>
          </div>
          </div>

        <a href="https://github.com/Arbaz-Ahmed-509" target="_blank" rel="noreferrer">
          <i className="fa fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/arbaz-ahmed-5b643323b/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-linkedin"></i>
        </a>
       
        {/* <a
          href="https://twitter.com/ArbazAhmed"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a> */}
        <a href="mailto: arbazahmed577@gmail.com">
          <i className="fa fa-envelope-o"></i>
        </a>
      </div>
    </div>
  );
}
