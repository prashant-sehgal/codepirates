import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import StatsCard from './StatsCard'
import BrandDiscription from './BrandDiscription'

export default function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div className="container">
        <div className="row">
          <div className="col-lg-7 content-col" data-aos="fade-up">
            <div className="content">
              <div className="agency-name">
                <h5>UNLOCK YOUR INNER CODER</h5>
              </div>
              <div className="main-heading">
                <h1>
                  NO SEARCH <br />
                  REQUIRED
                </h1>
              </div>
              <div className="divider" />
              <BrandDiscription />
              <div className="cta-button">
                <Link href="/#explore" className="btn">
                  <span>START YOUR JOURNEY</span>
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-5" data-aos="zoom-out">
            <div className="visual-content">
              <div className="fluid-shape">
                <Image
                  width={780}
                  height={646}
                  src="/assets/img/abstract/hero-img.png"
                  alt="Abstract Fluid Shape"
                  className="fluid-img"
                />
              </div>
              <StatsCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
