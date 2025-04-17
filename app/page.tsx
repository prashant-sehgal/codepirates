import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'
import ContactSection from './components/ContactSection'

export default function Home() {
  return (
    <div className={styles.page}>
      <main className="main">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <ContactSection />
      </main>
      <a
        href="#"
        id="scroll-top"
        className="scroll-top d-flex align-items-center justify-content-center"
      >
        <i className="bi bi-arrow-up-short" />
      </a>
    </div>
  )
}
