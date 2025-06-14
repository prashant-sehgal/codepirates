import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import * as db from '@/app/lib/db'
import Video, { TypeVideo } from '@/app/models/video.model'
import { notFound } from 'next/navigation'
import Container from './Container'
import MediaSection from './MediaSection'
import VideoFrame from './VideoFrame'
import Keywords from './Keywords'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function page(props: Readonly<Props>) {
  const { slug } = await props.params
  await db.connect()
  const video: TypeVideo | null = await Video.findOne({ slug })

  if (!video) return notFound()

  return (
    <Container>
      <MediaSection>
        <VideoFrame videoUrl={video.videoUrl} />
        <Keywords keywords={video.keywords} />
      </MediaSection>
      <div className="col-lg-5" data-aos="fade-left">
        <div className="portfolio-details-content">
          <div className="project-meta">
            <div className="badge-wrapper">
              <span className="project-badge">{video.filter.title}</span>
            </div>
          </div>
          <h2 className="project-title">{video.title}</h2>
          <div className="project-website">
            <i className="bi bi-link-45deg" />
            <Link href="video.creatorProfileUrl" target="blank">
              {video.creatorProfileUrl}
            </Link>
          </div>
          <div className="project-overview">
            <p className="lead">{video.description}</p>
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
                      Cras ultricies ligula sed magna dictum porta. Nulla quis
                      lorem ut libero malesuada feugiat. Curabitur non nulla sit
                      amet nisl tempus convallis quis ac lectus. Pellentesque in
                      ipsum id orci porta dapibus. Vestibulum ac diam sit amet
                      quam vehicula elementum sed sit amet dui.
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
                    <i className="bi bi-youtube me-2" /> More Videos on This
                    Topic
                  </button>
                </h2>
                <div
                  id="portfolio-details-collapse-2"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#portfolio-details-projectAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      Cras ultricies ligula sed magna dictum porta. Nulla quis
                      lorem ut libero malesuada feugiat. Curabitur non nulla sit
                      amet nisl tempus convallis quis ac lectus. Pellentesque in
                      ipsum id orci porta dapibus. Vestibulum ac diam sit amet
                      quam vehicula elementum sed sit amet dui.
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
                    <i className="bi bi-check2-circle" /> User Role Management
                  </li>
                  <li>
                    <i className="bi bi-check2-circle" /> Secure Authentication
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
                    <i className="bi bi-check2-circle" /> Data Export Options
                  </li>
                  <li>
                    <i className="bi bi-check2-circle" /> Multi-device Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
