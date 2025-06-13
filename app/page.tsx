import ContactSection from './components/ContactSection'
import ExploreSection from './components/ExploreSection'
import HeroSection from './components/HeroSection'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.page}>
      <HeroSection />
      <ExploreSection />
      <ContactSection />
    </div>
  )
}
