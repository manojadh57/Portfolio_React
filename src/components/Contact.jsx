import React from "react";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container-2">
        <h1 className="sub-title">Contact Me</h1>
        <div className="row">
          <div className="contact-left">
            <p>
              <i className="fa-solid fa-envelope"></i> manojadhikari57@gmail.com
            </p>
            <p>
              <i className="fa-solid fa-phone"></i> 0424442055
            </p>
            <div className="social-icons">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-square-x-twitter"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="contact-right">
            <form>
              <input type="text" name="Name" placeholder="Your Name" required />
              <input
                type="email"
                name="Email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="Message"
                rows="6"
                placeholder="Your Message"
              ></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>
          {/* 
          <iframe
            id="JotFormIFrame-251120328698862"
            title="General Inquiry Contact Form"
            onload="window.parent.scrollTo(0,0)"
            allowtransparency="true"
            allow="geolocation; microphone; camera; fullscreen"
            src="https://form.jotform.com/251120328698862"
            frameborder="0"
            style={{
              minWidth: "100%",
              maxWidth: "100%",
              height: "539px",
              border: "none",
            }}
            scrolling="no"
          ></iframe>
          <script src="https://cdn.jotfor.ms/s/umd/latest/for-form-embed-handler.js"></script>
          <script>
            window.jotformEmbedHandler("iframe[id='JotFormIFrame-251120328698862']",
            "https://form.jotform.com/")
          </script> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
