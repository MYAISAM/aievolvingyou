import { useState, useEffect, useRef } from 'react'

export default function Nav() {
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

  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">AI Evolving You</span>
        <div className="nav-links">

          <a
            href="#work"
            className="nav-link"
            onClick={() => setProductsOpen(false)}
          >
            Work
          </a>

          <a
            href="https://www.youtube.com/@OurHumanIntelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            YouTube
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
                  onClick={() => setProductsOpen(false)}
                >
                  Interview Coach
                  <span className="nav-badge">Beta</span>
                </a>
                <span className="nav-dropdown-item nav-dropdown-item--disabled">
                  Evolve AI Displacement Report
                  <span className="nav-badge nav-badge--soon">Soon</span>
                </span>
              </div>
            )}
          </div>

          <a
            href="https://manwong.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Substack
          </a>

          <a
            href="#connect"
            className="nav-link nav-link--cta"
            onClick={() => setProductsOpen(false)}
          >
            Connect
          </a>

        </div>
      </div>
    </nav>
  )
}
