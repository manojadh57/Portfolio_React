import React from "react";

const SkillComponent = ({ imgUrl, skill }) => {
  return (
    <div className="skill-component">
      <img src={imgUrl} alt={skill} />
      <span>{skill}</span>
    </div>
  );
};

export default SkillComponent;
