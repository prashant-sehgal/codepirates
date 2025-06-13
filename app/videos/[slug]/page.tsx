import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

export default function page() {
  return (
    <div className={styles.page}>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-7" data-aos="fade-right">
              <div className="portfolio-details-media">
                <iframe
                  className={styles.videoFrame}
                  src="https://www.youtube.com/embed/thc9iLZf0HQ?si=pQw3hHPaGD3ZeXw1"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />

                <div
                  className="tech-stack-badges"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <span>Angular</span>
                  <span>Express.js</span>
                  <span>PostgreSQL</span>
                  <span>GraphQL</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
            <div className="col-lg-5" data-aos="fade-left">
              <div className="portfolio-details-content">
                <div className="project-meta">
                  <div className="badge-wrapper">
                    <span className="project-badge">TECH</span>
                  </div>
                </div>
                <h2 className="project-title">
                  Mac vs PC - ROLE REVERSAL feat. iJustine
                </h2>
                <div className="project-website">
                  <i className="bi bi-link-45deg" />
                  <Link href="" target="blank">
                    @LinusTechTips
                  </Link>
                </div>
                <div className="project-overview">
                  <p className="lead">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas varius tortor nibh, sit amet tempor nibh finibus
                    et. Aenean eu enim justo. Vestibulum aliquam hendrerit
                    molestie.
                  </p>
                  <div
                    className="accordion project-accordion"
                    id="portfolio-details-projectAccordion"
                  >
                    <div className="accordion-item" data-aos="fade-up">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#portfolio-details-collapse-1"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <i className="bi bi-clipboard-data me-2" />
                          Docs & Resources
                        </button>
                      </h2>
                      <div
                        id="portfolio-details-collapse-1"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#portfolio-details-projectAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Cras ultricies ligula sed magna dictum porta. Nulla
                            quis lorem ut libero malesuada feugiat. Curabitur
                            non nulla sit amet nisl tempus convallis quis ac
                            lectus. Pellentesque in ipsum id orci porta dapibus.
                            Vestibulum ac diam sit amet quam vehicula elementum
                            sed sit amet dui.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="accordion-item" data-aos="fade-up">
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#portfolio-details-collapse-2"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <i className="bi bi-youtube me-2" /> More Videos on
                          This Topic
                        </button>
                      </h2>
                      <div
                        id="portfolio-details-collapse-2"
                        className="accordion-collapse collapse show"
                        data-bs-parent="#portfolio-details-projectAccordion"
                      >
                        <div className="accordion-body">
                          <p>
                            Cras ultricies ligula sed magna dictum porta. Nulla
                            quis lorem ut libero malesuada feugiat. Curabitur
                            non nulla sit amet nisl tempus convallis quis ac
                            lectus. Pellentesque in ipsum id orci porta dapibus.
                            Vestibulum ac diam sit amet quam vehicula elementum
                            sed sit amet dui.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="project-features"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <h3>
                    <i className="bi bi-stars" /> Key Features
                  </h3>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check2-circle" /> Real-time Data
                          Visualization
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> User Role
                          Management
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> Secure
                          Authentication
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="feature-list">
                        <li>
                          <i className="bi bi-check2-circle" /> Customizable
                          Dashboards
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> Data Export
                          Options
                        </li>
                        <li>
                          <i className="bi bi-check2-circle" /> Multi-device
                          Support
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
