import Image from 'next/image'
import styles from './page.module.css'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import VideoSection from './components/VideoSection'
import ContactSection from './components/ContactSection'
import AuthGuard from './components/AuthGuard'

export default function Home() {
  return (
    <main className="main">
      <HeroSection />
      <AboutSection />
      <AuthGuard>
        <VideoSection />
      </AuthGuard>
      <ContactSection />
    </main>
  )
}
