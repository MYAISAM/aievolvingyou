import Link from '../components/JourneyLink'
import { JourneyFrame, ResourceCard } from '../components/JourneyPrimitives'
import IllustrationSlot from '../components/IllustrationSlot'
import { articleMetadataBySlug } from '../articles/articleMetadata'
import { toolkitUrl } from '../toolkitSlugs'
import { organisationJourneys, organisationTopics } from './organisationJourneys'

function BrowseGuides() {
  return <Link to="/resources#organisation-library" className="link-subtle">Browse all organisation guidance &amp; tools →</Link>
}

export function OrganisationsLanding({ showIllustration = true }) {
  return (
    <JourneyFrame title="Organisations">
      <header className={`candidate-hero${showIllustration ? '' : ' organisation-hero--text'}`}>
        <div>
          <p className="section-label">For organisations</p>
          <h1>What are you trying to work out?</h1>
          <p className="candidate-lede">Practical guidance for organisations trying to use AI in hiring responsibly, with a clearer route from the problem you are facing to the guidance and tools that can help.</p>
        </div>
        {showIllustration && <IllustrationSlot src="/images/aiey-organisations-hero-final.png" alt="Hiring team reviewing decisions about AI-supported hiring" />}
      </header>
      <section aria-label="Choose your next step" className="candidate-paths organisation-paths">
        {organisationJourneys.map((journey, index) => (
          <Link className="resource-card candidate-path" to={`/organisations/${journey.id}`} key={journey.id}>
            <span className="candidate-number" aria-hidden="true">0{index + 1}</span>
            <h2>{journey.entryTitle}</h2>
            <p>{journey.entryCopy}</p>
            <span className="candidate-read">{journey.entryAction} <span aria-hidden="true">→</span></span>
          </Link>
        ))}
      </section>
      <section className="candidate-popular" aria-labelledby="organisation-topics-heading">
        <h2 id="organisation-topics-heading">Looking for a specific topic?</h2>
        <div className="candidate-topics">
          {organisationTopics.map(({ label, slug }) => <Link to={slug} key={slug}>{label} →</Link>)}
        </div>
        <BrowseGuides />
      </section>
    </JourneyFrame>
  )
}

export function OrganisationJourney({ journey }) {
  const start = articleMetadataBySlug[journey.start]
  return (
    <JourneyFrame title={journey.title}>
      <Link className="candidate-back" to="/organisations">← All organisation paths</Link>
      <header className="candidate-journey-heading">
        <p className="section-label">For organisations</p>
        <h1>{journey.title}</h1>
        <p className="candidate-lede">{journey.description}</p>
      </header>
      <section className="candidate-start" aria-labelledby="start-heading">
        <div>
          <p className="section-label">Start here · {start.readTime}</p>
          <h2 id="start-heading">{start.title}</h2>
          <p>{start.excerpt}</p>
        </div>
        <Link className="btn-primary" to={start.slug}>Read the guide <span aria-hidden="true">→</span></Link>
      </section>
      {journey.sequence.length > 1 && <section className="candidate-section" aria-labelledby="support-heading">
        <h2 id="support-heading">Keep reading</h2>
        <div className="candidate-resource-grid">
          {journey.sequence.slice(1).map(slug => <ResourceCard slug={slug} key={slug} />)}
        </div>
      </section>}
      {journey.supporting.length > 0 && <section className="candidate-context" aria-labelledby="context-heading">
        <h2 id="context-heading">Also worth considering</h2>
        <div className="candidate-topics">
          {journey.supporting.map(slug => <Link to={slug} key={slug}>{articleMetadataBySlug[slug].title} →</Link>)}
        </div>
      </section>}
      <section className="candidate-start organisation-toolkit" aria-labelledby="toolkit-heading">
        <div>
          <p className="section-label">Put it into practice · Toolkit</p>
          <h2 id="toolkit-heading">{journey.toolkit.title}</h2>
          <p>{journey.toolkit.copy}</p>
          {journey.secondaryToolkit && <Link className="link-subtle organisation-toolkit__secondary" to={toolkitUrl(journey.secondaryToolkit.slug)}>{journey.secondaryToolkit.title} →</Link>}
        </div>
        <Link className="btn-primary" to={toolkitUrl(journey.toolkit.slug)}>View toolkit <span aria-hidden="true">→</span></Link>
      </section>
      <div className="candidate-context"><BrowseGuides /></div>
    </JourneyFrame>
  )
}
