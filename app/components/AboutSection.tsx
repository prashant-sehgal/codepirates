import React from 'react'

export default function AboutSection() {
  return (
    <section id="about" className="about section">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <div
            className="col-lg-6 d-flex flex-column justify-content-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <div className="content">
              <h3>About</h3>
              <h2>Sailing the Web for the Best Coding Videos</h2>
              <div>
                <p>
                  At Code Pirates, we bring together the most helpful and
                  inspiring coding videos from across the internet — all in one
                  place. Whether you're a beginner or a pro, learning is just a
                  click away.
                </p>
                <p>
                  No ads. No clutter. Just pure code, curated for you. Join our
                  growing community of developers and start your journey today —
                  the pirate way.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay={200}
          >
            <img src="assets/img/about.jpg" className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
