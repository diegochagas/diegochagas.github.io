import BackgroundImage from './components/background-image'
import { ContactLink } from '../components/contact-link'
import ScrollTop from '../components/scroll-top'
import Portfolio from './components/portfolio'
import AboutMe from './components/about-me'
import Skills from './components/skills'

export default function Home() {
  return (
    <>
      <main className="relative">
        <BackgroundImage />
        <ContactLink />
        <ScrollTop />
        <AboutMe />
        <Portfolio />
        <Skills />
      </main>
    </>
  )
}
