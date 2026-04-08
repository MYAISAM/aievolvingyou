import { useState, useEffect, useRef } from 'react'

export default function Nav({ onOpenWaitlist }) {
  const [productsOpen, setProductsOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') setProductsOpen(false)
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  function closeAll() {
    setProductsOpen(false)
  }

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">AI Evolving You</span>
        <div className="nav-links">

          <a href="#work" className="nav-link" onClick={closeAll}>
            Work
          </a>

          {/* Products dropdown */}
          <div className="nav-dropdown" ref={dropdownRef}>
            <button
              className={`nav-link nav-dropdown-trigger${productsOpen ? ' open' : ''}`}
              onClick={() => setProductsOpen(v => !v)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
            >
              Products
              <span className="nav-caret" aria-hidden="true">▾</span>
            </button>
            {productsOpen && (
              <div className="nav-dropdown-menu">
                <a
                  href="https://coach.aievolvingyou.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-dropdown-item"
                  onClick={closeAll}
                >
                  <span className="nav-dropdown-item-title">Interview Coach</span>
                  <span className="nav-badge">Beta</span>
                </a>
                <button
                  className="nav-dropdown-item nav-dropdown-item--report"
                  onClick={() => { closeAll(); onOpenWaitlist() }}
                >
                  <span className="nav-dropdown-item-title">AI Displacement Risk Report</span>
                  <span className="nav-dropdown-item-action">Join the waitlist →</span>
                </button>
              </div>
            )}
          </div>

          <a
            href="https://www.youtube.com/@OurHumanIntelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            YouTube
          </a>

          <a
            href="https://ourhumanintelligence.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Substack
          </a>

          <a href="#connect" className="nav-link nav-link--cta" onClick={closeAll}>
            Connect
          </a>

        </div>
      </div>
    </nav>
  )
}
