import React from 'react'

interface Props {
  filter: string
}

export default function Meta(props: Readonly<Props>) {
  return (
    <div className="project-meta">
      <div className="badge-wrapper">
        <span className="project-badge">{props.filter}</span>
      </div>
    </div>
  )
}
