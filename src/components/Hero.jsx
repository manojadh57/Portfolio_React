import React from "react";
import manoj from "../assets/manoj.jpg";
import HeroComponent from "./HeroComponent";
import { Icons } from "react-toastify";
import HeroTitle from "./HeroTitle";

const Hero = () => {
  const heroList = [
    {
      link: "#skills",
      icon: "fa-solid fa-code",
      summary: "Skills",
    },

    {
      link: "#services",
      icon: "fa-solid fa-envelope",
      summary: "My Service",
    },
    {
      link: "#contact",
      icon: "fa-solid fa-envelope",
      summary: "Contact",
    },
  ];

  return (
    <section className="hero-section">
      <div className="text">
        <HeroTitle text="Hey! 👋😊 I am Manoj Adhikari" />
        <p>
          I love building beautiful, responsive, and user-friendly websites
          using HTML, CSS, and JavaScript. My focus is on creating seamless user
          experiences with clean and efficient code...
        </p>
        <div className="links">
          {heroList.map((Hero) => {
            return (
              <HeroComponent
                link={Hero.link}
                icon={Hero.icon}
                summary={Hero.summary}
              />
            );
          })}

          <br />
          <br />

          <HeroComponent
            link={manoj}
            icon="fa-solid fa-file"
            summary="DOWNLOAD RESUME"
          />
        </div>
      </div>
      <div className="headshot">
        <img src={manoj} alt="Manoj Adhikari" />
      </div>
    </section>
  );
};

export default Hero;
