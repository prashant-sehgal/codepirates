import React from 'react'

export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1 data-aos="fade-up">
              Your treasure map to the best dev content online
            </h1>
            <p data-aos="fade-up" data-aos-delay={100}>
              Explore, learn, and grow with videos you’ll actually enjoy
            </p>
            <div
              className="d-flex flex-column flex-md-row"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <a href="#about" className="btn-get-started">
                Get Started <i className="bi bi-arrow-right" />
              </a>
              <a
                href="https://www.youtube.com/watch?v=EFmxPMdBqmU&t=89s"
                className="glightbox btn-watch-video d-flex align-items-center justify-content-center ms-0 ms-md-4 mt-4 mt-md-0"
              >
                <i className="bi bi-play-circle" />
                <span>Animation vs. Coding</span>
              </a>
            </div>
          </div>
          <div
            className="col-lg-6 order-1 order-lg-2 hero-img"
            data-aos="zoom-out"
          >
            <img
              src="assets/img/hero-img.png"
              className="img-fluid animated"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  )
}
