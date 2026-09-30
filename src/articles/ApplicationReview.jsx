export default function ApplicationReview() {
  return (
    <section className="journey-next" aria-labelledby="application-review-title">
      <p className="journey-next__label">Your next step</p>
      <h2 id="application-review-title" className="journey-next__title">Before you send another application</h2>
      <p style={{ marginTop: 12 }}>Take one role you genuinely want and review your application against these questions:</p>
      <ul style={{ paddingLeft: 20, display: 'grid', gap: 12, margin: '20px 0', lineHeight: 1.65 }}>
        <li><strong>Is your relevant experience obvious?</strong> Could a recruiter quickly see why your background fits this role?</li>
        <li><strong>Have you matched your evidence to the actual requirements?</strong> Focus on what the employer is asking for rather than generic strengths.</li>
        <li><strong>Is the CV easy to scan?</strong> Keep the structure clear enough for both an ATS to parse and a person to understand quickly.</li>
        <li><strong>Have you replaced vague claims with evidence?</strong> Show what you did, how you did it and what changed.</li>
        <li><strong>Does the role genuinely fit?</strong> Better targeting is often more useful than sending another lightly tailored application.</li>
      </ul>
      <p><strong>Review one application properly before sending the next one.</strong></p>
    </section>
  )
}
