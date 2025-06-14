import React from 'react'
import styles from './page.module.css'

interface Props {
  children: React.ReactNode
}

export default function Container(props: Readonly<Props>) {
  return (
    <div className={styles.page}>
      <section id="portfolio-details" className="portfolio-details section">
        <div className="container">
          <div className="row gy-4">{props.children}</div>
        </div>
      </section>
    </div>
  )
}
