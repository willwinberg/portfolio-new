import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaInstagram,

} from "react-icons/fa";
// https://gorangajic.github.io/react-icons/fa.html

const SocialLinks = () => (
  <ul className="social">
    <li>
      <a href="mailto:wtpwinberg@gmail.com">
        <FaEnvelope />
      </a>
    </li>
    <li>
      <a href="https://www.github.com/willwinberg" target="_blank">
        <FaGithub />
      </a>
    </li>
    <li>
      <a href="https://www.linkedin.com/in/william-winberg" target="_blank">
        <FaLinkedin />
      </a>
    </li>
    {/* <li>
      <a href="https://www.facebook.com/william.winberg.3" target="_blank">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com/wiltraparberg" target="_blank">
        <FaInstagram />
      </a>
    </li> */}
  </ul>
);

export default SocialLinks;
