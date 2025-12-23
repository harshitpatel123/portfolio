import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Experience from '../components/Experience'
import Certificates from '../components/Certificates'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import FloatingElements from '../components/FloatingElements'

export default function Home() {
  return (
    <main className="relative">
      <FloatingElements />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  )
}