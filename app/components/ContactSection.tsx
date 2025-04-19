import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact Us</p>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay={200}>
                  <i className="bi bi-envelope" />
                  <h3>Email Us</h3>
                  <Link
                    href="mailto:prashant_sehgal@outlook.com?subject=#AskCodePirates Quick Query Inside"
                    target="_blank"
                  >
                    prashant_sehgal@outlook.com
                  </Link>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay={300}>
                  <i className="bi bi-linkedin" />
                  <h3>LinkedIn</h3>
                  <Link
                    href="https://www.linkedin.com/in/prashantsehgal~/"
                    target="_blank"
                  >
                    Linkedin.com/prashantsehgal~
                  </Link>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay={400}>
                  <i className="bi bi-twitter-x" />
                  <h3>X.com</h3>
                  <Link href="https://x.com/prashantsehgal_" target="_blank">
                    X.com/prashantsehgal_
                  </Link>
                </div>
              </div>
              {/* End Info Item */}
              <div className="col-md-6">
                <div className="info-item" data-aos="fade" data-aos-delay={500}>
                  <i className="bi bi-instagram" />
                  <h3>Instagram</h3>
                  <Link
                    href="https://www.instagram.com/prashantsehgal_?utm_source=qr"
                    target="_blank"
                  >
                    Instagram.com/prashantsehgal_
                  </Link>
                </div>
              </div>
              {/* End Info Item */}
            </div>
          </div>
          <div className="col-lg-6">
            <form
              action="forms/contact.php"
              method="post"
              className="php-email-form"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <div className="row gy-4">
                <div className="col-md-6">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="col-12">
                  <textarea
                    className="form-control"
                    name="message"
                    rows={6}
                    placeholder="Message"
                    required
                    defaultValue={''}
                  />
                </div>
                <div className="col-12 text-center">
                  <div className="loading">Loading</div>
                  <div className="error-message" />
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                  <button type="submit">Send Message</button>
                </div>
              </div>
            </form>
          </div>
          {/* End Contact Form */}
        </div>
      </div>
    </section>
  )
}
