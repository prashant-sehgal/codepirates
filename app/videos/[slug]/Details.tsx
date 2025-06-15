import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Details(props: Readonly<Props>) {
  return (
    <div className="col-lg-5" data-aos="fade-left">
      <div className="portfolio-details-content">{props.children}</div>
    </div>
  )
}
