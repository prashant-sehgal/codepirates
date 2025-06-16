import React from 'react'
import { TypeFilter } from '../models/filter.model'

interface Props {
  filters: TypeFilter[]
}

export default function Filters(props: Readonly<Props>) {
  return (
    <ul
      className="portfolio-filters isotope-filters"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      <li data-filter="*" className="filter-active">
        <i className="bi bi-grid-3x3" /> All Projects
      </li>
      {props.filters.map((filter) => (
        <li data-filter={`.filter-${filter.filter}`} key={filter.id}>
          <i className={`bi bi-${filter.icon}`} />
          {filter.title}
        </li>
      ))}
    </ul>
  )
}
