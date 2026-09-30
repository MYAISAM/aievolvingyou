import { Link } from 'react-router-dom'
import JourneyLink from '../components/JourneyLink'
import { articleMetadataBySlug } from './articleMetadata'
import { organisationNextAction } from '../pages/journeyNavigation'
import { toolkitUrl } from '../toolkitSlugs'

export default function OrganisationJourneyNext({ article, journey }) {
  const action = organisationNextAction(journey, article.slug)
  if (!action) return null
  const next = articleMetadataBySlug[action.article]

  return (
    <section className="journey-next" aria-label="Journey next step">
      <p className="journey-next__label">{next ? 'Continue this journey' : 'Put it into practice · Toolkit'}</p>
      {next ? <JourneyLink className="journey-next__card" to={next.slug}>
        <span className="journey-next__title">{next.title}</span>
        <span className="journey-next__action">Read the guide →</span>
      </JourneyLink> : <Link className="journey-next__card" to={toolkitUrl(journey.toolkit.slug)}>
        <span className="journey-next__title">{journey.toolkit.title}</span>
        <span className="journey-next__copy">{journey.toolkit.copy}</span>
        <span className="journey-next__action">View toolkit →</span>
      </Link>}
      {next && <p><Link className="article-cta__secondary" to={toolkitUrl(journey.toolkit.slug)}>
        View {journey.toolkit.title} →
      </Link></p>}
    </section>
  )
}
