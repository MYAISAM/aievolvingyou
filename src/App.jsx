import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import ContactForm from "./components/ContactForm";
import InterviewCoachCTA from "./components/InterviewCoachCTA";
import WaitlistModal from "./components/WaitlistModal";
import Resources from "./components/Resources";

// Candidate article pages
import ArticleSTAR from "./articles/ArticleSTAR";
import ArticleWeakness from "./articles/ArticleWeakness";
import ArticleFourTypes from "./articles/ArticleFourTypes";
import ArticleSpecificity from "./articles/ArticleSpecificity";
import ArticleAIPrep from "./articles/ArticleAIPrep";
import ArticleLongGap from "./articles/ArticleLongGap";
import ArticleBehavioural from "./articles/ArticleBehavioural";
import ArticleCareerChangers from "./articles/ArticleCareerChangers";

// Companion / quick-answer articles
import ArticleWeaknessExamples from "./articles/ArticleWeaknessExamples";
import ArticleDoEmployersUseAI from "./articles/ArticleDoEmployersUseAI";
import ArticleHowToTellAIScreening from "./articles/ArticleHowToTellAIScreening";

// Org article pages
import ArticleTrustProblem from "./articles/ArticleTrustProblem";
import ArticleProcurementMistakes from "./articles/ArticleProcurementMistakes";
import ArticleAIHiringBias from "./articles/ArticleAIHiringBias";
import ArticleAIHiringOwnership from "./articles/ArticleAIHiringOwnership";
import ArticleCandidateWants from "./articles/ArticleCandidateWants";
import ArticleVendorQuestions from "./articles/ArticleVendorQuestions";
import ArticleEUAIAct from "./articles/ArticleEUAIAct";

// Route
<Route path="/resources/ai-hiring-ownership" element={<ArticleAIHiringOwnership />} />

// Thank you
import ThankYou from "./components/ThankYou";

const cardStyle = {
  background: '#f9f9f9',
  border: '1px solid rgba(0,0,0,0.07)',
  borderLeft: '3px solid #3F6F63',
  borderRadius: 8,
  padding: '28px 28px 24px',
}

const cardStyleMuted = {
  background: '#f9f9f9',
  border: '1px solid rgba(0,0,0,0.07)',
  borderLeft: '3px solid #e0e0e0',
  borderRadius: 8,
  padding: '28px 28px 24px',
}

function HomePage({ onOpenWaitlist }) {
  return (
    <>
      <Hero />

      {/* Bridge */}
      <FadeInSection>
        <div className="section-inner">
          <p>
            AI is changing how careers are built, how hiring works, and what employers actually value.
            There is no shortage of tools being built in response. Resume optimisers, application generators,
            screening platforms. Most of them are built to help candidates pass a machine's filter.
          </p>
          <p style={{ marginTop: '1.25rem', fontSize: '1.1rem', fontWeight: 500, color: '#111111', lineHeight: 1.7 }}>
            That is not preparation. That is performance.
          </p>
          <p style={{ marginTop: '1.25rem' }}>
            AI Evolving You builds tools that develop real capability. For candidates who want to compete
            with genuine confidence, and for organisations that want to use AI in hiring responsibly.
          </p>
        </div>
      </FadeInSection>

      <InterviewCoachCTA />

      {/* What's Here */}
      <FadeInSection id="work">
        <div className="section-inner">
          <h2>What's Here</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>

            <div style={cardStyle}>
              <p className="section-label" style={{ marginBottom: '8px' }}>For candidates</p>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>Interview Coach</h3>
              <p style={{ marginBottom: '16px' }}>
                Practise with questions tailored to your actual job description. Answer by voice or in writing,
                get coaching on every response, and walk away with a personalised cheat sheet. Built for anyone
                preparing for their next interview at whatever level and whatever role.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a
                  href="https://coach.aievolvingyou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Try it free →
                </a>
                <a href="/resources" className="link-subtle">
                  Browse guides and resources →
                </a>
              </div>
            </div>

            <div style={cardStyle}>
              <p className="section-label" style={{ marginBottom: '8px' }}>For organisations</p>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>Frameworks and Tools</h3>
              <p style={{ marginBottom: '16px' }}>
                Practical resources for HR teams and hiring leaders navigating AI adoption responsibly.
                Procurement questions, governance frameworks and bias audit tools. Built to help organisations
                make better decisions before they buy, deploy and scale AI in their hiring process.
              </p>
              <a href="/resources" className="link-subtle">
                See the resources →
              </a>
            </div>

            <div style={cardStyle}>
              <p className="section-label" style={{ marginBottom: '8px' }}>For thinking</p>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>Human Intelligence</h3>
              <p style={{ marginBottom: '16px' }}>
                Commentary, analysis and conversation about AI's impact on work, careers and society.
                The thinking behind the platform.
              </p>
              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.youtube.com/@OurHumanIntelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Watch on YouTube →
                </a>
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

            <div style={cardStyleMuted}>
              <p className="section-label" style={{ marginBottom: '8px', color: '#999999' }}>Coming soon</p>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, color: '#111111', marginBottom: '10px' }}>AI Displacement Report</h3>
              <p style={{ marginBottom: '16px' }}>
                Which roles are most exposed to AI disruption and what you can do about it.
                Research-backed, sector by sector.
              </p>
              <button
                onClick={onOpenWaitlist}
                className="link-subtle"
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer", font: "inherit" }}
              >
                Join the waitlist →
              </button>
            </div>

          </div>
        </div>
      </FadeInSection>

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
        <Route path="/resources" element={<Resources />} />

        {/* Candidate articles */}
        <Route path="/resources/four-types-of-interview-question" element={<ArticleFourTypes />} />
        <Route path="/resources/star-method" element={<ArticleSTAR />} />
        <Route path="/resources/weakness-question" element={<ArticleWeakness />} />
        <Route path="/resources/ai-interview-prep" element={<ArticleAIPrep />} />
        <Route path="/resources/behavioural-interview" element={<ArticleBehavioural />} />
        <Route path="/resources/career-changers" element={<ArticleCareerChangers />} />
        <Route path="/resources/specificity-principle" element={<ArticleSpecificity />} />
        <Route path="/resources/interviewing-after-long-gap" element={<ArticleLongGap />} />

        {/* Companion articles */}
        <Route path="/resources/weakness-question-examples" element={<ArticleWeaknessExamples />} />
        <Route path="/resources/do-employers-use-ai-to-screen-applications" element={<ArticleDoEmployersUseAI />} />
        <Route path="/resources/how-to-tell-if-ai-is-screening-you" element={<ArticleHowToTellAIScreening />} />

        {/* Org articles */}
        <Route path="/resources/ai-hiring-trust-problem" element={<ArticleTrustProblem />} />
        <Route path="/resources/ai-procurement-mistakes" element={<ArticleProcurementMistakes />} />
        <Route path="/resources/ai-hiring-bias" element={<ArticleAIHiringBias />} />  {/* ADD THIS */}
        <Route path="/resources/ai-hiring-ownership" element={<ArticleAIHiringOwnership />} />
        <Route path="/resources/candidate-transparency-wants" element={<ArticleCandidateWants />} />
        <Route path="/resources/ai-vendor-questions" element={<ArticleVendorQuestions />} />
        <Route path="/resources/eu-ai-act-hiring" element={<ArticleEUAIAct />} />

        {/* Thank you */}
        <Route path="/thank-you/ai-procurement-questions" element={<ThankYou />} />
      </Routes>

      <WaitlistModal
        open={waitlistOpen}
        onClose={() => setWaitlistOpen(false)}
      />

      <form name="waitlist" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>
    </>
  )
}

export default App;