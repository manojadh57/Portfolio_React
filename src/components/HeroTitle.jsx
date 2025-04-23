import React from "react";

const HeroTitle = ({ text }) => {
  return (
    <h2>
      <span className="typing-container">{text}</span>
    </h2>
  );
};

export default HeroTitle;
