export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <span className="nav-logo">AI Evolving You</span>
        <div className="nav-links">
          <a href="#work" className="nav-link">Work</a>
          <a
            href="https://www.youtube.com/@OurHumanIntelligence"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Analysis
          </a>
          <a href="#connect" className="nav-link nav-link--cta">Connect</a>
        </div>
      </div>
    </nav>
  )
}
