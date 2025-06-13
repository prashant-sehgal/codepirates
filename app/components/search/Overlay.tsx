import React from 'react'
import styles from './Search.module.css'

interface Props {
  children: React.ReactNode
}
export default function Overlay(props: Readonly<Props>) {
  return (
    <div className={styles.overlay}>
      <div className={styles.searchContainer}>{props.children}</div>
    </div>
  )
}
