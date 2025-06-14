import React from 'react'
import Filters from './Filters'

export default function ExploreSection() {
  return (
    <section id="explore" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Explore</h2>
        <div>
          <span>Check Our</span>{' '}
          <span className="description-title">Best Picks</span>
        </div>
      </div>
      {/* End Section Title */}
      <div className="container-fluid" data-aos="fade-up" data-aos-delay={100}>
        <div
          className="isotope-layout"
          data-default-filter="*"
          data-layout="masonry"
          data-sort="original-order"
        >
          <Filters />
          <div
            className="row g-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-1.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">UI/UX Design</div>
                      <h3 className="entry-title">Mobile Banking App</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-1.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-ui"
                          data-glightbox="title: Mobile Banking App; description: Praesent commodo cursus magna, vel scelerisque nisl consectetur."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-10.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Development</div>
                      <h3 className="entry-title">E-Learning Platform</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-10.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-development"
                          data-glightbox="title: E-Learning Platform; description: Nulla vitae elit libero, a pharetra augue mollis interdum."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-7.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Photography</div>
                      <h3 className="entry-title">Urban Architecture</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-7.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-photography"
                          data-glightbox="title: Urban Architecture; description: Sed ut perspiciatis unde omnis iste natus error sit voluptatem."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-4.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Marketing</div>
                      <h3 className="entry-title">Social Media Campaign</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-4.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-marketing"
                          data-glightbox="title: Social Media Campaign; description: Quis autem vel eum iure reprehenderit qui in ea voluptate."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-ui">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-2.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">UI/UX Design</div>
                      <h3 className="entry-title">Smart Home Interface</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-2.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-ui"
                          data-glightbox="title: Smart Home Interface; description: At vero eos et accusamus et iusto odio dignissimos ducimus."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-development">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-11.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Development</div>
                      <h3 className="entry-title">Cloud Management System</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-11.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-development"
                          data-glightbox="title: Cloud Management System; description: Temporibus autem quibusdam et aut officiis debitis."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-photography">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-8.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Photography</div>
                      <h3 className="entry-title">Nature Collection</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-8.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-photography"
                          data-glightbox="title: Nature Collection; description: Integer posuere erat a ante venenatis dapibus posuere velit aliquet."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
            <div className="col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-marketing">
              <article className="portfolio-entry">
                <figure className="entry-image">
                  <img
                    src="assets/img/portfolio/portfolio-5.webp"
                    className="img-fluid"
                    alt=""
                    loading="lazy"
                  />
                  <div className="entry-overlay">
                    <div className="overlay-content">
                      <div className="entry-meta">Marketing</div>
                      <h3 className="entry-title">Brand Strategy</h3>
                      <div className="entry-links">
                        <a
                          href="assets/img/portfolio/portfolio-5.webp"
                          className="glightbox"
                          data-gallery="portfolio-gallery-marketing"
                          data-glightbox="title: Brand Strategy; description: Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum."
                        >
                          <i className="bi bi-arrows-angle-expand" />
                        </a>
                        <a href="portfolio-details.html">
                          <i className="bi bi-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </figure>
              </article>
            </div>
            {/* End Portfolio Item */}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  )
}
