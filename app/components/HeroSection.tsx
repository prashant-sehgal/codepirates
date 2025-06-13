import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 content-col" data-aos="fade-up">
            <div className="content">
              <div className="agency-name">
                <h5>OUR AGENCY</h5>
              </div>
              <div className="main-heading">
                <h1>
                  CREATIVE <br />
                  DESIGN
                </h1>
              </div>
              <div className="divider" />
              <div className="description">
                <p>
                  Discover innovative strategies for impactful visual
                  communication. We transform ideas into compelling realities,
                  ensuring your brand stands out in a crowded marketplace. Our
                  dedicated team leverages cutting-edge techniques to deliver
                  exceptional results that resonate with your audience.
                </p>
              </div>
              <div className="cta-button">
                <a href="#services" className="btn">
                  <span>EXPLORE SERVICES</span>
                  <i className="bi bi-arrow-right" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-5" data-aos="zoom-out">
            <div className="visual-content">
              <div className="fluid-shape">
                <img
                  src="assets/img/abstract/abstract-1.webp"
                  alt="Abstract Fluid Shape"
                  className="fluid-img"
                />
              </div>
              <div className="stats-card">
                <div className="stats-number">
                  <h2>5K</h2>
                </div>
                <div className="stats-label">
                  <p>Successful Campaigns</p>
                </div>
                <div className="stats-arrow">
                  <a href="#portfolio">
                    <i className="bi bi-arrow-up-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
