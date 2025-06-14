import React from 'react'
import * as db from '../lib/db'
import Filter from '../models/filter.model'

export default async function Filters() {
  await db.connect()
  const filters = (await Filter.find()) || []

  return (
    <ul
      className="portfolio-filters isotope-filters"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <li data-filter="*" className="filter-active">
        <i className="bi bi-grid-3x3" /> All Projects
      </li>
      {filters.map((filter) => (
        <li data-filter={`.filter-${filter.filter}`} key={filter.id}>
          <i className={`bi bi-${filter.icon}`} />
          {filter.title}
        </li>
      ))}
    </ul>
  )
}
