import "../index.css";

import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGithub,
  faWhatsapp,
  faInstagram,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";

/**
 * https://fontawesome.com/icons
 */

const Footer = () => {
  return (
    <footer className="dark">
      <div>Raul Rodrigues &#169; 2022</div>
        <a className="social-icons" href="https://github.com/luarrekcah">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a className="social-icons" href="https://wa.me/+556892402096">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
        <a className="social-icons" href="https://www.instagram.com/luarrekcah/">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a className="social-icons" href="https://discordapp.com/users/701953428510736396">
          <FontAwesomeIcon icon={faDiscord} />
        </a>
    </footer>
  );
};

export default Footer;
