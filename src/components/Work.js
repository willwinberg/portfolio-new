import React from "react";

const Work = () => (
  <div className="row work">
    <div className="three columns header-col">
      <h1>
        <span>Work</span>
      </h1>
    </div>

    <div className="nine columns main-col">
      <div className="row item">
        <div className="twelve columns">
          <h3>Freelance</h3>
          <p className="info">
            Web Application Developer
            <span>&bull;</span>
            <em className="date">Apr 2023 - Present</em>
          </p>
          <li>Consult clients on frontend Vue architecture and development of seamless single-page applications</li>
          <li>Built an e-commerce platform for a small business which allowed them to move away from clunky subscription service</li>
          <li>Built a CMS platform for a local gym to reduce logistical work and streamline communication/upselling with their clients</li>
        </div>
      </div>
    </div>

    <div className="nine columns main-col pull-right" style={{marginTop: '2em'}}>
      <div className="row item">
        <div className="twelve columns">
          <h3>StreamNative</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">Nov 2020 - Mar 2023</em>
          </p>
          <li>Developed a custom UI library to streamline the UI development flow and eliminated costly UI update requests</li>
          <li>Rebuilt the entire Vue client into well defined, documented and tested modules, upgrading to Vue 3 and Composition API</li>
          <li>Put into place an extensive style/contribution guide to ensure clean code of which benefits compound into the future</li>
          <li>Built a CMS marketing site to remove the need of engineers in the content development flow, cutting turnaround time by 90%</li>
          <li>Employed Cypress into the continuous integration cycle which increased e2e test coverage from 0 to to 87% (UI library 100%)</li>
        </div>
      </div>
    </div>

    <div className="nine columns main-col pull-right" style={{marginTop: '2em'}}>
      <div className="row item">
        <div className="twelve columns">
          <h3>PassiveCrypto</h3>
          <p className="info">
            Software Developer
            <span>&bull;</span>
            <em className="date">Dec 2019 - Nov 2020</em>
          </p>
          <li>Took lead of the Vue frontend within 2 months of being hired</li>
          <li>Implemented support for 5 additional crypto exchanges resulting in a 60% increase in user onboarding completion</li>
          <li>Developed a user analytics and bug tracking system which increased user retention by 28%</li>
          <li>Implemented a style guide/linter to ensure clean code and eliminated cumbersome merge conflicts</li>
          <li>Developed a new-user walkthrough which resulted in a 3x increase in users completing account setup requirements</li>
        </div>
      </div>
    </div>

    <div className="nine columns main-col" style={{marginTop: '2em'}}>
      <div className="row item">
        <div className="twelve columns">
          <h3>G.O. Green Enterprises</h3>
          <p className="info">
            Software Engineer
            <span>&bull;</span>
            <em className="date">Mar 2019 - Feb 2020</em>
          </p>
          <li>built a free shipping with minimum order feature which raised average order margin by 12% and “featured item” sales by 33%</li>
          <li>Integrated SMS notifications for customers to track their shipments which decreased support requests by 35%</li>
          <li>Developed a “persisted shopping cart” feature to be used across applications, resulting in a 20% increase in cart retention</li>
          <li>Built a task app which streamlined engineer/non-technical staff communication, eliminating lengthy requirement gathering</li>
        </div>
      </div>
    </div>
  </div>
);

export default Work;
