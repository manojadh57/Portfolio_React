import React from 'react'

const Contact = () => {
  return (
    <section id="contact">
          <div className="container-2">
            <h1 className="sub-title">Contact Me</h1>
            <div className="row">
              <div className="contact-left">
                <p><i className="fa-solid fa-envelope"></i> manojadhikari57@gmail.com</p>
                <p><i className="fa-solid fa-phone"></i> 0424442055</p>
                <div className="social-icons">
                  <a href="#"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#"><i className="fa-brands fa-square-x-twitter"></i></a>
                  <a href="#"><i className="fa-brands fa-instagram"></i></a>
                  <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                </div>
              </div>

              <div className="contact-right">
                <form>
                  <input type="text" name="Name" placeholder="Your Name" required />
                  <input type="email" name="Email" placeholder="Your Email" required />
                  <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>

  )
}

export default Contact