import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function MediaSection(props: Readonly<Props>) {
  return (
    <div className="col-lg-7" data-aos="fade-right">
      <div className="portfolio-details-media d-flex flex-column gap-3">
        {props.children}
      </div>
    </div>
  )
}
