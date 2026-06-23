import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-inner footer-legal-links" aria-label="Legal">
        <Link to="/terms">Terms of Business</Link>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/terms-of-use">Terms of Use</Link>
      </nav>
    </footer>
  )
}
