import React from 'react'
import styles from './page.module.css'

interface Props {
  videoUrl: string
}

export default function VideoFrame(props: Readonly<Props>) {
  return (
    <iframe
      className={styles.videoFrame}
      src={props.videoUrl}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}
