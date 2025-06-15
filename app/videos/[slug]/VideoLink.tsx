import { TypeRelatedVideo } from '@/app/models/video.model'
import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  video: TypeRelatedVideo
}

export default function VideoLink(props: Readonly<Props>) {
  return (
    <Link className={styles.videoLink} href={props.video.link} target="_blank">
      <Image
        src={props.video.thumbnailUrl}
        alt="thumbnail"
        width={320}
        height={160}
      />
      <p>{props.video.title}</p>
    </Link>
  )
}
