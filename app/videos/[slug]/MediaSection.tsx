import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function MediaSection(props: Readonly<Props>) {
  return (
    <div className="col-lg-7" data-aos="fade-right">
      <div className="portfolio-details-media">{props.children}</div>
    </div>
  )
}
