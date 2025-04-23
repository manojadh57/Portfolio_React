import React from "react";

const NavBar = () => {
  return (
    <nav>
      <div className="left">
        <a href="/">Manoj Adhikari</a>
      </div>
      <div className="right">
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
