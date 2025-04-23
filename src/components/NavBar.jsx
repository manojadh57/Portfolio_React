import React from "react";
import HeroComponent from "./HeroComponent";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/">Manoj Adhikari</a>
      </div>
      <div className="right">
        <Link className="menu" to="/" rel="noreferrer">
          <span> Home</span>
        </Link>

        <Link className="menu" to="/skills" rel="noreferrer">
          <span> Skills</span>
        </Link>

        <Link className="menu" to="/services" rel="noreferrer">
          <span> Services</span>
        </Link>

        <Link className="menu" to="/contact" rel="noreferrer">
          <span> Contact</span>
        </Link>

        <a href="https://github.com" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
          <span> Github</span>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i>
          <span> Linkedin</span>
        </a>
        <a href="mailto:manojadhikari57@gmail.com">
          <i className="fas fa-envelope"></i>
          <span> E-mail</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
