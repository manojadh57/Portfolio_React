import React from "react";
import HeroTitle from "./HeroTitle";
import SkillComponent from "./SkillComponent";
import DefaultLayout from "../layout/DefaultLayout";

const Skills = () => {
  const skillList = [
    {
      imgUrl: "https://img.icons8.com/color/48/000000/html-5--v1.png",
      skill: "HTML",
    },

    {
      imgUrl: "https://img.icons8.com/color/48/000000/javascript--v1.png",
      skill: "JavaScript",
    },

    {
      imgUrl: "https://img.icons8.com/color/48/000000/bootstrap.png",
      skill: "BootStrap",
    },

    {
      imgUrl: "https://img.icons8.com/color/48/000000/css3.png",
      skill: "CSS",
    },
    {
      imgUrl: "https://img.icons8.com/color/48/000000/react-native.png",
      skill: "React",
    },
    {
      imgUrl: "https://img.icons8.com/color/48/000000/nodejs.png",
      skill: "Node JS",
    },
    {
      imgUrl: "https://img.icons8.com/color/48/000000/mongodb.png",
      skill: "Mogo DB",
    },
    {
      imgUrl: "https://img.icons8.com/color/48/000000/git.png",
      skill: "Git",
    },
    {
      imgUrl: "https://img.icons8.com/color/48/000000/github.png",
      skill: "GitHub",
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>SKILLS</h2>
      <div className="text">
        Expert in modern CSS techniques including Flexbox, Grid, animations, and
        responsive design.
      </div>

      <div className="cells">
        <div className="cell">
          {skillList.map((Skills) => {
            return (
              <SkillComponent imgUrl={Skills.imgUrl} skill={Skills.skill} />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
