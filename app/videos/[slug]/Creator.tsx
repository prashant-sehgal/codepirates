import Link from 'next/link'
import React from 'react'

interface Props {
  creatorProfileUrl: string
}

export default function Creator(props: Readonly<Props>) {
  return (
    <div className="project-website">
      <i className="bi bi-link-45deg" />
      <Link href={props.creatorProfileUrl} target="_blank">
        {props.creatorProfileUrl}
      </Link>
    </div>
  )
}
