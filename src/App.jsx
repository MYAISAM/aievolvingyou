import { lazy, Suspense, useEffect, useRef, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import FadeInSection from "./components/FadeInSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WaitlistModal from "./components/WaitlistModal";
import Resources from "./components/Resources";

// Candidate article pages
import ArticleSTAR from "./articles/ArticleSTAR";
import ArticleWeakness from "./articles/ArticleWeakness";
import ArticleFourTypes from "./articles/ArticleFourTypes";
import ArticleSpecificity from "./articles/ArticleSpecificity";
import ArticleAIPrep from "./articles/ArticleAIPrep";
import ArticleLongGap from "./articles/ArticleLongGap";
import ArticleCareerChangers from "./articles/ArticleCareerChangers";
import ArticleAtsMyth from "./articles/ArticleAtsMyth";
import ArticleAIScreeningWorks from "./articles/ArticleAIScreeningWorks";
import ArticleCanYouTellAIScreening from "./articles/ArticleCanYouTellAIScreening";
import ArticleCvDidntChange from "./articles/ArticleCvDidntChange";
import ArticleAtsFriendly from "./articles/ArticleAtsFriendly";
import ArticleNeverHearBack from "./articles/ArticleNeverHearBack";

// Companion / quick-answer articles
import ArticleWeaknessExamples from "./articles/ArticleWeaknessExamples";

// Org article pages
import ArticleTrustProblem from "./articles/ArticleTrustProblem";
import ArticleProcurementMistakes from "./articles/ArticleProcurementMistakes";
import ArticleAIHiringBias from "./articles/ArticleAIHiringBias";
import ArticleAIHiringOwnership from "./articles/ArticleAIHiringOwnership";
import ArticleAIToolsInventory from "./articles/ArticleAIToolsInventory";
import ArticleCandidateDisclosure from "./articles/ArticleCandidateDisclosure";

// Thank you pages
import ThankYou from "./components/ThankYou";
import ThankYouTransparencyGuide from "./components/ThankYouTransparencyGuide";
import ThankYouBiasAudit from "./components/ThankYouBiasAudit";
import ThankYouPolicyFramework from "./components/ThankYouPolicyFramework";
import ThankYouToolkitBundle from "./components/ThankYouToolkitBundle";
import { articleMetadataBySlug } from "./articles/articleMetadata";

const LegalPage = lazy(() => import('./components/LegalPage'))

const latestThinkingSlugs = [
  "/resources/ai-hiring-trust-problem",
  "/resources/ai-procurement-mistakes",
  "/resources/ai-interview-prep",
]

const latestThinkingLabels = {
  "/resources/ai-hiring-trust-problem": "AI & hiring",
  "/resources/ai-procurement-mistakes": "Responsible procurement",
  "/resources/ai-interview-prep": "Interview prep",
}

const latestThinking = latestThinkingSlugs.map((slug) => ({
  label: latestThinkingLabels[slug],
  title: articleMetadataBySlug[slug].title,
  to: articleMetadataBySlug[slug].slug,
}))

const ecosystemPillars = [
  {
    title: "Tools",
    body: "Practical products that help people prepare for change.",
  },
  {
    title: "Resources",
    body: "Frameworks and guidance for organisations adopting AI responsibly.",
  },
  {
    title: "Research",
    body: "Evidence and data on workforce change and labour market trends.",
  },
  {
    title: "Commentary",
    body: "Articles, videos and analysis exploring how AI is reshaping work.",
  },
]

function CountUpNumber({ value, duration = 1600 }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(0)
  const formattedValue = value.toLocaleString('en-GB')

  useEffect(() => {
    const element = ref.current
    if (!element) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplayValue(value)
      return undefined
    }

    let animationFrame
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return

      const start = performance.now()
      const animate = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        const eased = 1 - Math.pow(1 - progress, 3)
        setDisplayValue(Math.round(value * eased))

        if (progress < 1) animationFrame = window.requestAnimationFrame(animate)
      }

      animationFrame = window.requestAnimationFrame(animate)
      observer.disconnect()
    }, { threshold: 0.35 })

    observer.observe(element)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
    }
  }, [duration, value])

  return <strong ref={ref} aria-label={formattedValue}>{displayValue.toLocaleString('en-GB')}</strong>
}

function HomePage({ onOpenWaitlist }) {
  return (
    <>
      <Hero />

      <FadeInSection className="section-band section-band--surface">
        <div className="section-inner section-inner--wide ecosystem-intro">
          <p className="section-label">What is AI Evolving You?</p>
          <h2>Four ways to understand the AI shift.</h2>
          <div className="pillar-grid">
            {ecosystemPillars.map((pillar) => (
              <article className="pillar-card" key={pillar.title}>
                <span>{pillar.title}</span>
                <p>{pillar.body}</p>
              </article>
            ))}
          </div>
        </div>
      </FadeInSection>

      <FadeInSection id="choose-your-path">
        <div className="section-inner section-inner--wide">
          <div className="section-heading-row">
            <p className="section-label">Choose your path</p>
            <h2>Start with the part of the shift you are closest to.</h2>
          </div>

          <div className="pathway-layout">
            <article className="pathway-card pathway-card--individuals">
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
                <Link to="/resources#candidate-library" className="link-subtle">Browse candidate guides →</Link>
              </div>
            </article>

            <article className="pathway-card pathway-card--organisations">
              <p className="pathway-label">For organisations</p>
              <h3>Use AI in hiring with more ownership.</h3>
              <p>
                Practical articles, procurement questions and governance resources for
                teams evaluating AI tools before they buy, deploy or scale them.
              </p>
              <div className="pathway-actions">
                <Link to="/resources#toolkit-library" className="link-subtle">Browse toolkits →</Link>
                <Link to="/resources#organisation-library" className="link-subtle">See resources →</Link>
              </div>
            </article>

            <article className="pathway-card pathway-card--research">
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
                <a
                  href="https://ourhumanintelligence.substack.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-subtle"
                >
                  Read on Substack →
                </a>
              </div>
            </article>
          </div>
        </div>
      </FadeInSection>

      <FadeInSection className="section-band section-band--plain">
        <div className="section-inner section-inner--wide">
          <article className="featured-project">
            <div>
              <p className="section-label">Featured project</p>
              <h2>Displaced Index</h2>
              <p>Tracking the human impact of AI on work.</p>
              <a
                href="https://displaced.aievolvingyou.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-primary--inline"
              >
                View the index →
              </a>
            </div>

            <div className="featured-metric" aria-label="Jobs tracked">
              <span>JOBS TRACKED</span>
              <CountUpNumber value={91476} />
              <small>Beyond headlines. Into the data.</small>
            </div>
          </article>
        </div>
      </FadeInSection>

      <FadeInSection className="section-band section-band--surface">
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

          <div style={{ marginTop: 24 }}>
            <Link to="/resources" className="link-subtle">Explore all resources →</Link>
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

      <Suspense fallback={<main className="legal-page" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<HomePage onOpenWaitlist={() => setWaitlistOpen(true)} />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/resources/toolkits" element={<Resources />} />
          <Route path="/terms" element={<LegalPage documentKey="terms" />} />
          <Route path="/privacy" element={<LegalPage documentKey="privacy" />} />
          <Route path="/terms-of-use" element={<LegalPage documentKey="terms-of-use" />} />

          {/* Candidate articles */}
          <Route path="/resources/do-ats-systems-reject-75-percent" element={<ArticleAtsMyth />} />
          <Route path="/resources/how-ai-screening-actually-works" element={<ArticleAIScreeningWorks />} />
          <Route path="/resources/can-you-tell-when-ai-is-screening-your-application" element={<ArticleCanYouTellAIScreening />} />
          <Route path="/resources/the-cv-didnt-change" element={<ArticleCvDidntChange />} />
          <Route path="/resources/ats-friendly-cvs-what-matters" element={<ArticleAtsFriendly />} />
          <Route path="/resources/applications-you-never-hear-back-from" element={<ArticleNeverHearBack />} />
          <Route path="/resources/four-types-of-interview-question" element={<ArticleFourTypes />} />
          <Route path="/resources/star-method" element={<ArticleSTAR />} />
          <Route path="/resources/weakness-question" element={<ArticleWeakness />} />
          <Route path="/resources/ai-interview-prep" element={<ArticleAIPrep />} />
          <Route path="/resources/career-changers" element={<ArticleCareerChangers />} />
          <Route path="/resources/specificity-principle" element={<ArticleSpecificity />} />
          <Route path="/resources/interviewing-after-long-gap" element={<ArticleLongGap />} />

          {/* Companion articles */}
          <Route path="/resources/weakness-question-examples" element={<ArticleWeaknessExamples />} />

          {/* Org articles */}
          <Route path="/resources/ai-hiring-trust-problem" element={<ArticleTrustProblem />} />
          <Route path="/resources/ai-procurement-mistakes" element={<ArticleProcurementMistakes />} />
          <Route path="/resources/ai-hiring-bias" element={<ArticleAIHiringBias />} />
          <Route path="/resources/ai-hiring-ownership" element={<ArticleAIHiringOwnership />} />
          <Route path="/resources/how-many-ai-tools-in-hiring" element={<ArticleAIToolsInventory />} />
          <Route path="/resources/what-to-tell-candidates-about-ai" element={<ArticleCandidateDisclosure />} />

          {/* Thank you pages */}
          <Route path="/thank-you/ai-procurement-questions" element={<ThankYou />} />
          <Route path="/thank-you/candidate-transparency-guide" element={<ThankYouTransparencyGuide />} />
          <Route path="/thank-you/bias-audit-checklist" element={<ThankYouBiasAudit />} />
          <Route path="/thank-you/ai-hiring-policy-framework" element={<ThankYouPolicyFramework />} />
          <Route path="/thank-you/toolkit-bundle" element={<ThankYouToolkitBundle />} />
        </Routes>
      </Suspense>

      <Footer />

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
