import React from "react";
import ServiceComponent from "./ServiceComponent";

const Services = () => {
  const serviceList = [
    {
      title: "WEB DESIGN",
      summary:
        "Web design is the process of creating visually appealing and user-friendly websites...",
      icon: "fa-solid fa-code",
      link: "#",
    },

    {
      title: "UI/UX DESIGN",
      summary:
        " UI/UX design involves designing the layout colors typography images and interactions...",
      icon: "fa-solid fa-crop-simple",
      link: "#",
    },

    {
      title: "APP DESIGN",
      summary:
        "App design focuses on mobile usability and design across platforms...",
      icon: "fa-brands fa-app-store",
      link: "#",
    },
  ];

  return (
    <section id="services" className="service-section">
      <div className="container">
        <h1 className="sub-title">MY SERVICES</h1>
        <div className="services-list">
          {/* <ServiceComponent
            title="WEB"
            summary="SUMMARY"
            icon="fa-solid fa-code"
            link="#"
          /> */}

          {serviceList.map((service) => {
            return (
              <ServiceComponent
                title={service.title}
                summary={service.summary}
                icon={service.icon}
                link={service.link}
              />
            );
          })}

          {/* <div>
            <i className="fa-solid fa-code"></i>
            <h2>WEB DESIGN</h2>
            <p>
              Web design is the process of creating visually appealing and
              user-friendly websites...
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-solid fa-crop-simple"></i>
            <h2>UI/UX DESIGN</h2>
            <p>
              UI/UX design involves designing the layout, colors, typography,
              images, and interactions...
            </p>
            <a href="#">learn more</a>
          </div>
          <div>
            <i className="fa-brands fa-app-store"></i>
            <h2>APP DESIGN</h2>
            <p>
              App design focuses on mobile usability and design across
              platforms...
            </p>
            <a href="#">learn more</a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
