import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Link from './JourneyLink'
import { articleMetadataBySlug } from '../articles/articleMetadata'

export function JourneyFrame({ children, title }) {
  const { pathname } = useLocation()
  const heading = useRef(null)
  useEffect(() => {
    const previousTitle = document.title
    document.title = `${title} | AI Evolving You`
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    heading.current?.focus({ preventScroll: true })
    return () => { document.title = previousTitle }
  }, [pathname, title])
  return <main className="candidate-page" ref={heading} tabIndex={-1}>{children}</main>
}

export function ResourceCard({ slug }) {
  const article = articleMetadataBySlug[slug]
  return (
    <Link className="resource-card" to={article.slug}>
      <span className="resource-card__meta">{article.readTime}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
      <span className="candidate-read">Read guide <span aria-hidden="true">→</span></span>
    </Link>
  )
}

