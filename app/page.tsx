import Image from 'next/image'
import styles from './page.module.css'
import Nav from './components/Nav'

export default function Home() {
  return (
    <div className={styles.page}>
      <Nav />
      <h1>Hello World</h1>
    </div>
  )
}
