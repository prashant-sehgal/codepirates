import Link from 'next/link'
import React from 'react'

export default function ContactSection() {
  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Contact</h2>
        <div>
          <span>Let's</span> <span className="description-title">Connect</span>
        </div>
      </div>
      {/* End Section Title */}
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        {/* Contact Info Boxes */}
        <div className="row gy-4 mb-5">
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={100}>
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-linkedin" />
              </div>
              <div className="info-content">
                <h4>LinkedIn</h4>
                <Link
                  href="https://www.linkedin.com/in/prashantsehgal~"
                  target="_blank"
                >
                  linkedin.com/prashantsehgal~
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={200}>
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-envelope" />
              </div>
              <div className="info-content">
                <h4>Email Address</h4>
                <Link
                  href="mailto:prashant_sehgal@outlook.com?subject=%23CodePirates%20-%20Quick%20Question"
                  target="_blank"
                >
                  prashant_sehgal@outlook.com
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay={300}>
            <div className="contact-info-box">
              <div className="icon-box">
                <i className="bi bi-twitter-x" />
              </div>
              <div className="info-content">
                <h4>X</h4>
                <Link href="https://x.com/prashantsehgal_" target="_blank">
                  x.com/prashantsehgal_
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Google Maps (Full Width) */}

      {/* Contact Form Section (Overlapping) */}
      <div className="container form-container-overlap mt-1">
        <div
          className="row justify-content-center"
          data-aos="fade-up"
          data-aos-delay={300}
        >
          <div className="col-lg-10">
            <div className="contact-form-wrapper">
              <h2 className="text-center mb-4">Get in Touch</h2>
              <form
                action="forms/contact.php"
                method="post"
                className="php-email-form"
              >
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-person" />
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          placeholder="First Name"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-envelope" />
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          placeholder="Email Address"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-text-left" />
                        <input
                          type="text"
                          className="form-control"
                          name="subject"
                          placeholder="Subject"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <div className="input-with-icon">
                        <i className="bi bi-chat-dots message-icon" />
                        <textarea
                          className="form-control"
                          name="message"
                          placeholder="Write Message..."
                          style={{ height: 180 }}
                          required
                          defaultValue={''}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="loading">Loading</div>
                    <div className="error-message" />
                    <div className="sent-message">
                      Your message has been sent. Thank you!
                    </div>
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary btn-submit"
                    >
                      SEND MESSAGE
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
