import { Link } from 'react-router-dom'
import JourneyLink from '../components/JourneyLink'
import { articleMetadataBySlug } from './articleMetadata'
import { nextInJourney } from '../pages/journeyNavigation'

export default function JourneyNext({ article, journey }) {
  // Direct visitors choose a journey explicitly; the old universal sequence
  // must not silently assign one or move application readers into interviews.
  if (!journey || !article) return null
  const next = articleMetadataBySlug[nextInJourney(journey, article.slug)]
  return (
    <section className="journey-next" aria-label="Journey next step">
      {next ? <>
        <p className="journey-next__label">Next in this journey</p>
        <JourneyLink className="journey-next__card" to={next.slug}>
          <span className="journey-next__title">{next.title}</span>
          <span className="journey-next__action">Read the guide →</span>
        </JourneyLink>
      </> : <>
        <p className="journey-next__label">Your next step</p>
        {journey.audience === 'candidate' && !journey.coach && <p>Choose one role and check that your CV makes the relevant experience easy to find.</p>}
        <Link className="journey-next__related-link" to={journey.path}>← Back to {journey.navigationLabel}</Link>
      </>}
    </section>
  )
}
