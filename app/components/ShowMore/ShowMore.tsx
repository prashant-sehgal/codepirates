'use client'
import React, { useState } from 'react'
import styles from './ShowMore.module.css'
import limitString from '@/app/utils/limitString'

interface Props {
  children: React.ReactNode
}

export default function ShowMore(props: Readonly<Props>) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={styles.container}
      style={{ height: isExpanded ? '100%' : '8rem' }}
    >
      <div className={styles.body}>{props.children}</div>
      <button
        className={styles.expandButton}
        onClick={() => setIsExpanded((current) => !current)}
      >
        {isExpanded ? 'Show less' : 'Show more'}
      </button>
    </div>
  )
}
