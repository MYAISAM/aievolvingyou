// Optional supporting format for a journey or article. No embed or network request.
// Usage: <RelatedVideo title="..." description="..." href="..." platform="YouTube Shorts" />
export default function RelatedVideo({ title, description, href, platform } = {}) {
  if (!title || !href || !platform) return null

  const platformLabel = platform === 'YouTube Shorts' ? 'YouTube' : platform

  return (
    <aside className="related-video" aria-label="Related video">
      <p className="related-video__label">Prefer video?</p>
      <h3>{title}</h3>
      {description && <p>{description}</p>}
      <a href={href} target="_blank" rel="noopener noreferrer">
        Watch on {platformLabel} <span aria-hidden="true">→</span>
        <span className="related-video__new-tab"> (opens in a new tab)</span>
      </a>
    </aside>
  )
}
