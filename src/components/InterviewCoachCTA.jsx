import { useEffect, useRef } from 'react'

export default function InterviewCoachCTA() {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -48px 0px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} id="coach" className="fade-section">
      <div className="section-inner">
        <span className="section-label">Beta — Free to use</span>

        {/* Grid background matching hero */}
        <div style={{
          position: 'relative',
          background: '#ffffff',
          borderTop: '1px solid rgba(63,111,99,0.15)',
          borderBottom: '1px solid rgba(63,111,99,0.15)',
          borderRadius: 4,
          padding: '48px 0 52px',
          overflow: 'hidden',
          marginTop: -8,
        }}>
          {/* Animated grid */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(63,111,99,0.07) 1px, transparent 1px),
              linear-gradient(90deg, rgba(63,111,99,0.07) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
            animation: 'gridDrift 40s linear infinite',
            pointerEvents: 'none',
          }} aria-hidden="true" />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 3.5vw, 2.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: '#111111',
              marginBottom: 16,
            }}>
              Preparing for your next interview?
            </h2>

            <p style={{
              fontSize: '1.05rem',
              color: '#555555',
              lineHeight: 1.75,
              maxWidth: 520,
              marginBottom: 36,
            }}>
              Our AI Interview Coach helps you practise with questions tailored to your actual job description. Answer out loud or in writing, and get personalised coaching on every response. Free to use during beta.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
              <a
                href="https://coach.aievolvingyou.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: '#3F6F63',
                  color: '#ffffff',
                  fontSize: 13,
                  fontWeight: 500,
                  padding: '13px 28px',
                  textDecoration: 'none',
                  letterSpacing: '0.02em',
                  transition: 'opacity 0.2s ease',
                }}
                onMouseEnter={e => e.target.style.opacity = '0.84'}
                onMouseLeave={e => e.target.style.opacity = '1'}
              >
                Try the Interview Coach →
              </a>
              <span style={{ fontSize: 12, color: '#999999', fontStyle: 'italic' }}>
                No signup · No payment · 8 role categories
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}