import "../index.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faGithub } from "@fortawesome/free-brands-svg-icons";

/**
 * https://fontawesome.com/icons
 */

const Footer = () => {
  return (
    <footer>
      <div>Raul Rodrigues &#169; 2022</div>
      <a className="social-icons" href="https://github.com/luarrekcah">
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;
