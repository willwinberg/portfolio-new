import React from "react";

const Education = () => (
  <div className="row education">
    <div className="three columns header-col">
      <h1>
        <span>Education</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Lambda School</h3>
          <p className="info">
            Web Development and Computer Science
            <span>&bull;</span>
            <em className="date">August 2018</em>
          </p>

          <p>
            A 9 month Computer Science & Software Engineering Academy that provides an immersive hands-on curriculum with a focus on computer science, and fullstack web development
            </p>
          <li>Approach all coding challenges using pair programming</li>
          <li>Utilize agile software development and Git workflow on all projects</li>
          <li>Gain hands-on experience with client and server testing</li>
          <li>Design original user experiences across a range of web and mobile platforms, from ideation, to wireframing, to final product</li>
          <li>Complete all curriculum course work including: React, React Native, Redux, Node, Express, MongoDB, Jest, Python, Django • Write production-ready code using ReactJS, Redux, and CSS on the frontend and NodeJS and Express on the backend to build single page applications</li>
        </div>
      </div>
    </div>
  </div >
);

export default Education;
