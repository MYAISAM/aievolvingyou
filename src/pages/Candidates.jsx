import Link from '../components/JourneyLink'
import { JourneyFrame as CandidateFrame, ResourceCard } from '../components/JourneyPrimitives'
import RelatedVideo from '../components/RelatedVideo'
import IllustrationSlot from '../components/IllustrationSlot'
import { articleMetadataBySlug } from '../articles/articleMetadata'
import { candidateJourneys, popularHelp } from './candidateJourneys'

export function CandidatesLanding() {
  return (
    <CandidateFrame title="Candidates">
      <header className="candidate-hero">
        <div>
          <p className="section-label">For candidates</p>
          <h1>What are you trying to solve?</h1>
          <p className="candidate-lede">Start with where you are in the job search. We’ll point you towards the most useful next step.</p>
        </div>
        <IllustrationSlot src="/images/aiey-candidates-hero-final.png" alt="Candidate navigating applications, interviews and career decisions" />
      </header>
      <section aria-label="Choose your next step" className="candidate-paths">
        {candidateJourneys.map((journey, index) => (
          <Link className="resource-card candidate-path" to={`/candidates/${journey.id}`} key={journey.id}>
            <span className="candidate-number" aria-hidden="true">0{index + 1}</span>
            <h2>{journey.title}</h2>
            <p>{journey.description}</p>
            <span className="candidate-read">Find your next step <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </section>
      <section className="candidate-popular" aria-labelledby="popular-heading">
        <h2 id="popular-heading">Popular help</h2>
        <p>Looking for something specific?</p>
        <div className="candidate-topics">{popularHelp.map(({ label, slug }) => <Link to={slug} key={slug}>{label} <span aria-hidden="true">↗</span></Link>)}</div>
        <Link to="/resources#candidate-library" className="link-subtle">Browse all candidate guides →</Link>
      </section>
    </CandidateFrame>
  )
}

export function CandidateJourney({ journey }) {
  const start = articleMetadataBySlug[journey.start]
  return (
    <CandidateFrame title={journey.title}>
      <Link className="candidate-back" to="/candidates">← All candidate paths</Link>
      <header className="candidate-journey-heading">
        <p className="section-label">For candidates</p>
        <h1>{journey.title}</h1>
        <p className="candidate-lede">{journey.description}</p>
      </header>
      <section className="candidate-start" aria-labelledby="start-heading">
        <div>
          <p className="section-label">Start here · {start.readTime}</p>
          <h2 id="start-heading">{start.title}</h2>
          <p>{journey.startCopy}</p>
        </div>
        <Link className="btn-primary" to={start.slug}>Read the guide <span aria-hidden="true">→</span></Link>
      </section>
      {journey.diagnostics && <section className="candidate-section" aria-labelledby="diagnostic-heading">
        <h2 id="diagnostic-heading">What might not be landing?</h2>
        <p>If you’re getting interviews, something is already working. The next step is to work out what might be holding you back once you’re in the room.</p>
        <div className="candidate-resource-grid candidate-diagnostics">{journey.diagnostics.map(item => <Link className="resource-card" to={item.slug} key={item.title}>
          <h3>{item.title}</h3><p>{item.copy}</p><span className="candidate-read">Read the guide <span aria-hidden="true">→</span></span>
        </Link>)}</div>
      </section>}
      <section className="candidate-section" aria-labelledby="support-heading">
        <h2 id="support-heading">{journey.coach ? 'More help with your answers' : 'Understand what happens to your application'}</h2>
        <div className="candidate-resource-grid">{journey.supporting.map(slug => <ResourceCard slug={slug} key={slug} />)}</div>
      </section>
      {journey.contextual && <section className="candidate-context" aria-labelledby="context-heading">
        <h2 id="context-heading">Help with specific situations</h2>
        <div className="candidate-topics">{journey.contextual.map(slug => <Link key={slug} to={slug}>{articleMetadataBySlug[slug].title} →</Link>)}</div>
      </section>}
      <RelatedVideo {...journey.video} />
      {journey.coach ? <section className="candidate-coach" aria-labelledby="coach-heading">
        <div><p className="section-label">Put it into practice</p><h2 id="coach-heading">AI Interview Coach</h2><p>Practise explaining your experience, with questions matched to your role and feedback to help you prepare.</p></div>
        <a className="btn-primary" href="https://coach.aievolvingyou.com" target="_blank" rel="noopener noreferrer">Practise with Interview Coach ↗</a>
      </section> : <section className="candidate-context" aria-labelledby="application-next-heading">
        <h2 id="application-next-heading">Before you send another application</h2>
        <p>Pick one role you want to apply for. Can someone reading your CV quickly see why your experience fits? Make the relevant examples easy to find before you send it.</p>
        <p>Got an interview lined up? <Link className="link-subtle" to="/candidates/interview-soon">Get ready for the interview →</Link></p>
      </section>}
      <div className="candidate-context"><Link className="link-subtle" to="/resources#candidate-library">Browse all candidate guides →</Link></div>
    </CandidateFrame>
  )
}
