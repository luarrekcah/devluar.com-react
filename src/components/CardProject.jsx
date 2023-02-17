import React, { useState } from "react";
import PropTypes from "prop-types";
import "./css/CardProject.css";

const CardProject = ({ title, description, image, link }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} />
      <div className={`card-overlay ${isHovered ? "active" : ""}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a target={'_blank'} href={link}>Link</a>
      </div>
    </div>
  );
};

CardProject.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardProject;
