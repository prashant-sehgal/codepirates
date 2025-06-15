import { TypeResource } from '@/app/models/video.model'
import Link from 'next/link'
import React from 'react'

interface Props {
  resource: TypeResource
}

export default function Resource(props: Readonly<Props>) {
  return (
    <div className="resource">
      <p className="d-flex gap-1">
        [{props.resource.title}]
        <Link href={props.resource.link} target="_blank">
          {props.resource.link}
        </Link>
      </p>
    </div>
  )
}
