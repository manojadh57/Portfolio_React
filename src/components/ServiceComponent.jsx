import React from "react";

const ServiceComponent = ({ title, summary, icon, link }) => {
  return (
    <div>
      <i className={icon}></i>
      <h2>{title}</h2>
      <p>{summary}</p>
      <a href={link}>learn more</a>
    </div>
  );
};

export default ServiceComponent;
