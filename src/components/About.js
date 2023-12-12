import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          I'm a full stack software developer from Los Angeles, CA.
          I'm in love with Javascript and making the internet better than it was before I started.
          When I'm not in cyberspace, you'll still usually find me making things in the physical realm, or otherwise
          soaking in the infinite knowledge of this universe. That is, unless I'm destroying things, but
          that's back in cyberspace... Just to clarify, I'm talking about video games.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>William Winberg</span>
              <br />
              <span>
                Remote
              </span>
              <br />
              <span><a href="mailto:wtpwinberg@gmail.com">wtpwinberg@gmail.com</a></span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://resume.creddle.io/embed/65upvwd36iu"
                target="_blank"
                className="button">
                Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
