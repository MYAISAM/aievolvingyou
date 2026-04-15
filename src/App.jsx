import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import ContactForm from "./components/ContactForm";
import InterviewCoachCTA from "./components/InterviewCoachCTA";
import WaitlistModal from "./components/WaitlistModal";
import Resources from "./components/Resources";

// Article pages
import ArticleSTAR from "./articles/ArticleSTAR";
import ArticleWeakness from "./articles/ArticleWeakness";
import ArticleFourTypes from "./articles/ArticleFourTypes";
import ArticleSpecificity from "./articles/ArticleSpecificity";
import ArticleAIPrep from "./articles/ArticleAIPrep";
import ArticleLongGap from "./articles/ArticleLongGap";

function HomePage({ onOpenWaitlist }) {
  return (
    <>
      <Hero />

      {/* Bridge */}
      <FadeInSection>
        <div className="section-inner">
          <p>
            AI is changing what employers look for. It's changing how interviews
            are run, how CVs are screened, and which skills get rewarded. The
            people who thrive aren't the ones who ignore that shift - they're
            the ones who understand it and use it to their advantage. Everything
            here is built to help you do exactly that.
          </p>
        </div>
      </FadeInSection>

      {/* Interview Coach featured section */}
      <InterviewCoachCTA />

      {/* What's Here */}
      <FadeInSection id="work">
        <div className="section-inner">
          <h2>What's Here</h2>

          <div>
            <h3>Interview Coach</h3>
            <p>
              AI-powered interview preparation tailored to your actual job
              description. Practice questions, get coaching on every answer,
              leave with a personalised cheat sheet.
            </p>
            <a
              href="https://coach.aievolvingyou.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle"
            >
              Start a session →
            </a>
          </div>

          <div>
            <h3>AI Displacement Report</h3>
            <p>
              Which roles are most exposed to AI disruption - and what you can
              do about it. Research-backed, sector by sector.
            </p>
            <button
              onClick={onOpenWaitlist}
              className="link-subtle"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit" }}
            >
              Join the waitlist →
            </button>
          </div>

          <div>
            <h3>Human Intelligence</h3>
            <p>
              Commentary, thinking, and analysis on AI's impact on work and
              society. The person behind the platform.
            </p>
            <a
              href="https://www.youtube.com/@OurHumanIntelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle"
            >
              Watch on YouTube →
            </a>
            {" "}
            <a
              href="https://ourhumanintelligence.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-subtle"
            >
              Read on Substack →
            </a>
          </div>
        </div>
      </FadeInSection>

      {/* Resources */}
      <Resources />

      {/* Currently Exploring */}
      <FadeInSection>
        <div className="section-inner">
          <h2>Currently Exploring</h2>
          <p>AI and the candidate experience - who's building for the person on the other side of the process</p>
          <p>The human skills that travel - which capabilities hold their value as AI reshapes role definitions</p>
          <p>Organisational frameworks for AI hiring - practical tools for HR teams making AI purchasing decisions responsibly</p>
          <p>What "AI-ready" actually means - beyond "can you use the tools"</p>
          <small>Updated April 2026</small>
        </div>
      </FadeInSection>

      {/* Connect */}
      <ContactForm />

      <p className="signature">- Man Wong</p>
    </>
  )
}

function App() {
  const [waitlistOpen, setWaitlistOpen] = useState(false)

  return (
    <>
      <Nav onOpenWaitlist={() => setWaitlistOpen(true)} />

      <Routes>
        <Route path="/" element={<HomePage onOpenWaitlist={() => setWaitlistOpen(true)} />} />
        <Route path="/resources/star-method" element={<ArticleSTAR />} />
        <Route path="/resources/weakness-question" element={<ArticleWeakness />} />
        <Route path="/resources/four-types-of-interview-question" element={<ArticleFourTypes />} />
        <Route path="/resources/specificity-principle" element={<ArticleSpecificity />} />
        <Route path="/resources/ai-interview-prep" element={<ArticleAIPrep />} />
        <Route path="/resources/interviewing-after-long-gap" element={<ArticleLongGap />} />
      </Routes>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      {/* Hidden form for Netlify */}
      <form name="waitlist" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>
    </>
  )
}

export default App;