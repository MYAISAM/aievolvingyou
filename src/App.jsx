import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import ContactForm from "./components/ContactForm";
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
import ArticleDoEmployersUseAI from "./articles/ArticleDoEmployersUseAI.jsx";
import ArticleHowToTellAIScreening from "./articles/ArticleHowToTellAIScreening";

// Org article pages
import ArticleTrustProblem from "./articles/ArticleTrustProblem";
import ArticleProcurementMistakes from "./articles/ArticleProcurementMistakes";
import ArticleAIHiringBias from "./articles/ArticleAIHiringBias";
import ArticleAIHiringOwnership from "./articles/ArticleAIHiringOwnership";

// Thank you pages
import ThankYou from "./components/ThankYou";
import ThankYouTransparencyGuide from "./components/ThankYouTransparencyGuide";

const latestThinking = [
  {
    label: "AI & hiring",
    title: "AI in hiring has created a trust problem on both sides of the table",
    to: "/resources/ai-hiring-trust-problem",
  },
  {
    label: "Responsible procurement",
    title: "What most organisations get wrong when buying AI hiring tools",
    to: "/resources/ai-procurement-mistakes",
  },
  {
    label: "Interview prep",
    title: "How to use AI to prep for interviews without sounding like a robot",
    to: "/resources/ai-interview-prep",
  },
]

function HomePage({ onOpenWaitlist }) {
  return (
    <>
      <Hero />

      <FadeInSection>
        <div className="section-inner ecosystem-intro">
          <p className="section-label">What is AI Evolving You?</p>
          <h2>Tools, research and practical resources for the AI shift at work.</h2>
          <p className="section-lede">
            AI is changing how people build careers, how organisations make decisions,
            and what skills get rewarded. AI Evolving You helps individuals and teams
            navigate that change with clearer tools, grounded research and usable guidance.
          </p>
        </div>
      </FadeInSection>

      <FadeInSection id="work">
        <div className="section-inner section-inner--wide">
          <div className="section-heading-row">
            <p className="section-label">Choose your path</p>
            <h2>Start with the part of the shift you are closest to.</h2>
          </div>

          <div className="pathway-layout">
            <article className="pathway-card pathway-card--primary">
              <p className="pathway-label">For individuals</p>
              <h3>Prepare for changing careers and interviews.</h3>
              <p>
                Practise stronger answers, understand how AI affects hiring, and build
                confidence in a process that is becoming less transparent.
              </p>
              <div className="pathway-actions">
                <a
                  href="https://coach.aievolvingyou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Try Interview Coach →
                </a>
                <Link to="/resources" className="link-subtle">Browse candidate guides →</Link>
              </div>
            </article>

            <article className="pathway-card">
              <p className="pathway-label">For organisations</p>
              <h3>Use AI in hiring with more ownership.</h3>
              <p>
                Practical articles, procurement questions and governance resources for
                teams evaluating AI tools before they buy, deploy or scale them.
              </p>
              <div className="pathway-actions">
                <Link to="/resources" className="link-subtle">See resources →</Link>
              </div>
            </article>

            <article className="pathway-card">
              <p className="pathway-label">Research & insight</p>
              <h3>Track what is changing in the labour market.</h3>
              <p>
                Human Intelligence, articles and Displaced Index research connect
                individual experience to wider shifts in work.
              </p>
              <div className="pathway-actions">
                <a
                  href="https://displaced.aievolvingyou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Open Displaced Index →
                </a>
                <a
                  href="https://www.youtube.com/@OurHumanIntelligence"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Watch Human Intelligence →
                </a>
              </div>
            </article>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="section-inner section-inner--wide">
          <article className="featured-project">
            <div>
              <p className="section-label">Featured project</p>
              <h2>Displaced Index</h2>
              <p>
                A public tracker of AI-attributed workforce reductions,
                counter-signals and emerging labour market patterns.
              </p>
              <a
                href="https://displaced.aievolvingyou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary--inline"
              >
                View the index →
              </a>
            </div>

            <div className="featured-metric" aria-label="AI-attributed job cuts tracked">
              <span>AI-attributed job cuts tracked</span>
              <strong>91,476</strong>
              <small>Editorially rated, source-led</small>
            </div>
          </article>
        </div>
      </FadeInSection>

      <FadeInSection>
        <div className="section-inner section-inner--wide">
          <div className="section-heading-row">
            <p className="section-label">Latest thinking</p>
            <h2>Recent writing on AI, hiring and work.</h2>
          </div>

          <div className="thinking-list">
            {latestThinking.map((item) => (
              <Link className="thinking-item" to={item.to} key={item.to}>
                <span>{item.label}</span>
                <strong>{item.title}</strong>
                <em>Read →</em>
              </Link>
            ))}
          </div>
        </div>
      </FadeInSection>

      <ContactForm />

      <p className="signature">— Man Wong</p>
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
        <Route path="/resources/ai-hiring-bias" element={<ArticleAIHiringBias />} />
        <Route path="/resources/ai-hiring-ownership" element={<ArticleAIHiringOwnership />} />

        {/* Thank you pages */}
        <Route path="/thank-you/ai-procurement-questions" element={<ThankYou />} />
        <Route path="/thank-you/candidate-transparency-guide" element={<ThankYouTransparencyGuide />} />
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
