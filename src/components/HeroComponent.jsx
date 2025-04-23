import React from "react";

const HeroComponent = ({ icon, link, summary }) => {
  return (
    <>
      <a href={link}>
        <i className={icon}></i> {summary}
      </a>
    </>
  );
};

export default HeroComponent;
