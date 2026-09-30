import { Link } from 'react-router-dom'

export function ArticleLibraryLink({ library }) {
  return <Link className="article-library-link" to={library.path}>{library.label} <span aria-hidden="true">→</span></Link>
}

export default function ArticleJourneyContext({ journey, memberships, library }) {
  return (
    <nav className="article-journey-context" aria-label="Guide navigation">
      <div className="article-journey-context__primary">
        <p className="article-journey-context__label">{journey ? 'Your journey' : 'Find help with your situation'}</p>
        {journey ? <Link className="article-journey-context__link" to={journey.path}>← Back to {journey.navigationLabel}</Link> :
          <div className="article-journey-context__paths">{memberships.map(item => <Link className="article-journey-context__link" key={item.path} to={item.path}>Explore: {item.navigationLabel} →</Link>)}</div>}
      </div>
      <ArticleLibraryLink library={library} />
    </nav>
  )
}
