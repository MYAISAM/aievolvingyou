import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Nav({ onOpenWaitlist }) {
  const [productsOpen, setProductsOpen] = useState(false)
  const [channelsOpen, setChannelsOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const productsRef = useRef(null)
  const channelsRef = useRef(null)

  useEffect(() => {
    function handleClickOutside(e) {
      if (productsRef.current && !productsRef.current.contains(e.target)) {
        setProductsOpen(false)
      }
      if (channelsRef.current && !channelsRef.current.contains(e.target)) {
        setChannelsOpen(false)
      }
    }
    function handleEscape(e) {
      if (e.key === 'Escape') closeAll()
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
    setChannelsOpen(false)
    setMobileOpen(false)
  }

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link to="/" className="nav-logo" onClick={closeAll} style={{ textDecoration: "none" }}>AI Evolving You</Link>

          {/* Desktop links */}
          <div className="nav-links nav-links--desktop">

            {/* Products dropdown */}
            <div className="nav-dropdown" ref={productsRef}>
              <button
                className={`nav-link nav-dropdown-trigger${productsOpen ? ' open' : ''}`}
                onClick={() => { setProductsOpen(v => !v); setChannelsOpen(false) }}
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
                  <Link
                    to="/resources#orgs"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    <span className="nav-dropdown-item-title">AI Procurement Questions for Hiring Teams</span>
                    <span className="nav-dropdown-item-action">£79 + VAT →</span>
                  </Link>
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

            <Link to="/resources" className="nav-link" onClick={closeAll}>
              Resources
            </Link>

            {/* Human Intelligence dropdown */}
            <div className="nav-dropdown" ref={channelsRef}>
              <button
                className={`nav-link nav-dropdown-trigger${channelsOpen ? ' open' : ''}`}
                onClick={() => { setChannelsOpen(v => !v); setProductsOpen(false) }}
                aria-expanded={channelsOpen}
                aria-haspopup="true"
              >
                Human Intelligence
                <span className="nav-caret" aria-hidden="true">▾</span>
              </button>
              {channelsOpen && (
                <div className="nav-dropdown-menu">
                  <a
                    href="https://www.youtube.com/@OurHumanIntelligence"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    <span className="nav-dropdown-item-title">YouTube</span>
                    <span className="nav-dropdown-item-action">Human Intelligence →</span>
                  </a>
                  <a
                    href="https://ourhumanintelligence.substack.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-dropdown-item"
                    onClick={closeAll}
                  >
                    <span className="nav-dropdown-item-title">Substack</span>
                    <span className="nav-dropdown-item-action">Read and subscribe →</span>
                  </a>
                </div>
              )}
            </div>

            <a href="#connect" className="nav-link nav-link--cta" onClick={closeAll}>
              Connect
            </a>

          </div>

          {/* Hamburger - mobile only */}
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger-bar${mobileOpen ? ' open' : ''}`} />
            <span className={`hamburger-bar${mobileOpen ? ' open' : ''}`} />
            <span className={`hamburger-bar${mobileOpen ? ' open' : ''}`} />
          </button>

        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <a
            href="https://coach.aievolvingyou.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-item"
            onClick={closeAll}
          >
            Interview Coach <span className="nav-badge">Beta</span>
          </a>
          <Link
            to="/resources#orgs"
            className="nav-mobile-item"
            onClick={closeAll}
          >
            AI Procurement Questions
          </Link>
          <button
            className="nav-mobile-item"
            onClick={() => { closeAll(); onOpenWaitlist() }}
          >
            AI Displacement Report
          </button>
          <Link to="/resources" className="nav-mobile-item" onClick={closeAll}>
            Resources
          </Link>
          <a
            href="https://www.youtube.com/@OurHumanIntelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-item"
            onClick={closeAll}
          >
            YouTube
          </a>
          <a
            href="https://ourhumanintelligence.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-item"
            onClick={closeAll}
          >
            Substack
          </a>
          <a href="#connect" className="nav-mobile-item nav-mobile-item--cta" onClick={closeAll}>
            Connect
          </a>
        </div>
      )}
    </>
  )
}