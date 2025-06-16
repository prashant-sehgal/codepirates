import React from 'react'
import Filters from './Filters'
import Video from '../models/video.model'
import * as db from '../lib/db'
import Filter, { TypeFilter } from '../models/filter.model'
import VideoCard from './VideoCard'

export default async function ExploreSection() {
  await db.connect()
  const videos = await Video.find()
  const filters = await Filter.find()

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
          <Filters filters={filters} />
          <div
            className="row g-4 isotope-container"
            data-aos="fade-up"
            data-aos-delay={300}
          >
            {videos.map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                filter={
                  filters.find(
                    (filter) => filter.filter === video.filter
                  )! as TypeFilter
                }
              />
            ))}
          </div>
          {/* End Portfolio Container */}
        </div>
      </div>
    </section>
  )
}
