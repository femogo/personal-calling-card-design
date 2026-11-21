import './calling-card.css'
import { About } from '@/components/calling-card/about'
import { Contact } from '@/components/calling-card/contact'
import { Hero } from '@/components/calling-card/hero'
import { RevealOnScroll } from '@/components/calling-card/reveal-on-scroll'
import { SelectedWork } from '@/components/calling-card/selected-work'

export default function Page() {
  return (
    <div className="cc-page">
      <main className="cc-card">
        <Hero />
        <SelectedWork />
        <About />
        <Contact />
      </main>
      <footer>
        Built with v0 · Source on{' '}
        <a
          href="https://github.com/femogo/personal-calling-card-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
      <RevealOnScroll />
    </div>
  )
}
