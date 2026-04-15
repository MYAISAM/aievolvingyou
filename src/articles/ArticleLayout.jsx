import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function ArticleLayout({ title, bucket, children }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: 62 }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 80px" }}>

        {/* Back link */}
        <Link
          to="/#resources"
          style={{
            display: "inline-block",
            fontSize: 13, color: "#555555",
            textDecoration: "none", marginBottom: 40,
            transition: "color 0.15s",
          }}
          onMouseEnter={e => e.target.style.color = "#111111"}
          onMouseLeave={e => e.target.style.color = "#555555"}
        >
          ← Back to resources
        </Link>

        {/* Bucket label */}
        <div style={{ marginBottom: 16 }}>
          <span style={{
            display: "inline-block",
            fontSize: 10, fontWeight: 600,
            letterSpacing: "0.07em", textTransform: "uppercase",
            padding: "2px 8px", borderRadius: 20,
            background: "#edf4f2", color: "#3F6F63",
          }}>
            {bucket}
          </span>
        </div>

        {/* Title */}
        <h1 style={{
          fontSize: "clamp(26px, 5vw, 38px)",
          fontWeight: 700, letterSpacing: "-0.025em",
          lineHeight: 1.15, marginBottom: 40,
          color: "#111111",
        }}>
          {title}
        </h1>

        {/* Article body */}
        <div className="article-body">
          {children}
        </div>

        {/* CTA */}
        <div style={{
          marginTop: 56, padding: "32px 28px",
          background: "#f9f9f9",
          border: "1.5px solid rgba(0,0,0,0.07)",
          borderRadius: 12,
        }}>
          <p style={{
            fontSize: 15, color: "#555555",
            lineHeight: 1.7, fontWeight: 300, marginBottom: 16,
          }}>
            Practice your interview answers with coaching tailored to your actual
            job description. The AI Interview Coach gives you specific feedback
            on every response - before the real thing.
          </p>
          <a
            href="https://coach.aievolvingyou.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "#3F6F63", color: "#ffffff",
              padding: "12px 24px", borderRadius: 6,
              fontSize: 14, fontWeight: 500,
              textDecoration: "none",
            }}
          >
            Try the Interview Coach →
          </a>
        </div>

      </div>
    </div>
  )
}