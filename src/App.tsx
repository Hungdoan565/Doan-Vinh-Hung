import { ThemeProvider } from '@/context/ThemeContext'
import { LanguageProvider } from '@/context/LanguageContext'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { TechMarquee } from '@/components/TechMarquee'
import { About } from '@/components/About'
import { Timeline } from '@/components/Timeline'
import { Skills } from '@/components/Skills'
import { Projects } from '@/components/Projects'
import { Experience } from '@/components/Experience'
import { Testimonials } from '@/components/Testimonials'
import { CurrentlyLearning } from '@/components/CurrentlyLearning'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { ScrollToTop } from '@/components/ScrollToTop'
import { BottomNav } from '@/components/BottomNav'

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-bg relative noise">
          <Navbar />

          <main className="pb-20 md:pb-0">
            <Hero />
            <TechMarquee />
            <About />
            <Timeline />
            <Experience />
            <Skills />
            <Projects />
            <Testimonials />
            <CurrentlyLearning />
            <Contact />
          </main>

          <Footer />
          <ScrollToTop />
          <BottomNav />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
