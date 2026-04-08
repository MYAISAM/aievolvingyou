import { useState } from 'react'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import ContactForm from "./components/ContactForm";
import InterviewCoachCTA from "./components/InterviewCoachCTA";
import WaitlistModal from "./components/WaitlistModal";

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <>
      <Nav onOpenWaitlist={() => setWaitlistOpen(true)} />
      <Hero />

      <FadeInSection>
        <div className="section-inner">
          <h2>The Structural Shift</h2>
          <p>
            AI increases capability. Capability reshapes incentives. Incentives shape behaviour.
          </p>
          <p>
            When adoption accelerates faster than culture evolves, friction shows up in trust, ownership and leadership.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection id="work">
        <div className="section-inner">
          <h2>Current Work</h2>

          <div>
            <h3>Evolve</h3>
            <p>
              A platform examining how AI reshapes workforce resilience and role transition.
            </p>
          </div>

          <div>
            <h3>Human Intelligence</h3>
            <p>
              Analysis and occasional writing exploring AI, power and structural change.
            </p>
            <a
              href="https://www.youtube.com/@OurHumanIntelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle"
            >
              Watch & read →
            </a>
          </div>

          <div>
            <h3>Build Experiments</h3>
            <p>
              Working with founders to prototype and test AI-enabled capability.
            </p>
          </div>
        </div>
      </FadeInSection>

      <InterviewCoachCTA />

      <FadeInSection>
        <div className="section-inner">
          <h2>Currently Exploring</h2>

          <p>How AI changes what organisations reward</p>
          <p>Workforce transition beyond fear narratives</p>
          <p>Decision systems that preserve ownership</p>
          <p>Designing for dignity under automation pressure</p>

          <small>Updated March 2026</small>
        </div>
      </FadeInSection>

      <ContactForm />

      <p className="signature">— Man Wong</p>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      {/* Hidden form for Netlify to detect waitlist submissions at build time */}
      <form name="waitlist" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>
    </>
  );
}

export default App;
