import Link from 'next/link'
import React from 'react'
import ContactForm from './ContactForm'

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
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
