import React from 'react'
import { TypeVideo } from '../models/video.model'
import { TypeFilter } from '../models/filter.model'
import Link from 'next/link'
import Image from 'next/image'
import limitString from '../utils/limitString'

interface Props {
  video: TypeVideo
  filter: TypeFilter
}

export default function VideoCard(props: Readonly<Props>) {
  return (
    <div
      className={`col-xl-3 col-lg-4 col-md-6 portfolio-item isotope-item filter-${props.filter.filter}`}
    >
      <article className="portfolio-entry">
        <figure className="entry-image">
          {/* <img
            src="assets/img/portfolio/portfolio-1.webp"
            className="img-fluid"
            alt=""
            loading="lazy"
          /> */}
          <Image
            src={props.video.thumbnailUrl}
            alt="thumbnail"
            width={1280}
            height={720}
          />
          <div className="entry-overlay">
            <div className="overlay-content">
              <div className="entry-meta">{props.filter.title}</div>
              <h3 className="entry-title">
                {limitString(props.video.title, 6)}
              </h3>
              <div className="entry-links">
                <Link href={`/videos/${props.video.slug}`}>
                  <i className="bi bi-arrow-right" />
                </Link>
              </div>
            </div>
          </div>
        </figure>
      </article>
    </div>
  )
}
