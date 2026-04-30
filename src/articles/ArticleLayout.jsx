import { Link } from "react-router-dom";
import { useEffect } from "react";

const PROCUREMENT_STRIPE_URL = "https://buy.stripe.com/3cI14n93k5lI1AoeCF5Ne00";

const green = "#3F6F63";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function CandidateCTA() {
  return (
    <div style={{
      marginTop: 16,
      padding: "32px 28px",
      background: surface,
      border: "1.5px solid rgba(0,0,0,0.07)",
      borderRadius: 12,
    }}>
      <p style={{ fontSize: 15, color: inkMid, lineHeight: 1.7, fontWeight: 300, marginBottom: 16 }}>
        Practice your interview answers with coaching tailored to your actual job description.
        The AI Interview Coach gives you specific feedback on every response — before the real thing.
      </p>
      <a
        href="https://coach.aievolvingyou.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          background: green, color: "#ffffff",
          padding: "12px 24px", borderRadius: 6,
          fontSize: 14, fontWeight: 500, textDecoration: "none",
        }}
      >
        Try the Interview Coach
      </a>
    </div>
  );
}

function OrgCTA() {
  return (
    <div style={{
      marginTop: 16,
      background: "#ffffff",
      border: `2px solid ${green}`,
      borderRadius: 12,
      padding: "28px 28px 24px",
      display: "flex",
      flexDirection: "column",
      gap: 14,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
        <span style={{
          fontSize: 10, fontWeight: 700, letterSpacing: "0.07em", textTransform: "uppercase",
          color: "#ffffff", background: green, borderRadius: 20, padding: "4px 12px",
        }}>
          Framework document
        </span>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
          color: orange,
        }}>
          Responsible procurement
        </span>
      </div>

      <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: ink, lineHeight: 1.35, letterSpacing: "-0.02em", margin: 0 }}>
        AI Procurement Questions for Hiring Teams
      </h3>

      <p style={{ fontSize: "0.88rem", color: inkMid, lineHeight: 1.65, margin: 0 }}>
        48 structured vendor evaluation questions across 6 categories, with red flags, scoring
        guidance, and a comparison sheet. Built for HR Directors, Talent leads, and Procurement
        teams who need to ask better questions.
      </p>

      <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 7 }}>
        {[
          "6 evaluation categories: bias, data, explainability, human oversight, vendor accountability, exit",
          "Red flags and weak answer guide for every category",
          "Vendor comparison scoring sheet",
          "Internal alignment prompts to work through before your first vendor call",
        ].map((item, i) => (
          <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: "0.82rem", color: inkMid, lineHeight: 1.55 }}>
            <span style={{ color: green, fontWeight: 700, marginTop: 1, flexShrink: 0 }}>✓</span>
            {item}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 6, flexWrap: "wrap" }}>
        <div>
          <span style={{ fontSize: "1.4rem", fontWeight: 700, color: ink, letterSpacing: "-0.03em" }}>£79</span>
          <span style={{ fontSize: "0.78rem", color: inkLight, marginLeft: 6 }}>one-time + VAT, instant download</span>
        </div>
        <a
          href={PROCUREMENT_STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block", background: orange, color: "#ffffff",
            fontWeight: 600, fontSize: "0.88rem", padding: "11px 22px",
            borderRadius: 6, textDecoration: "none", flexShrink: 0,
          }}
        >
          Buy now
        </a>
      </div>

      <p style={{
        fontSize: "0.72rem", color: inkLight, lineHeight: 1.5, margin: 0,
        borderTop: `1px solid ${border}`, paddingTop: 12,
      }}>
        This is a structured vendor evaluation tool, not legal advice or a contract template.
        For contract negotiation and data processing agreements, work with qualified legal counsel.
      </p>
    </div>
  );
}

// ctaVariant: "candidate" (default) | "org" | "none"
export default function ArticleLayout({ title, bucket, children, nextArticle, ctaVariant = "candidate" }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const isOrg = ctaVariant === "org";
  const backHref = isOrg ? "/resources#orgs" : "/resources";

  return (
    <div style={{ paddingTop: 62 }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 80px" }}>

        <Link
          to={backHref}
          style={{
            display: "inline-block", fontSize: 13, color: "#555555",
            textDecoration: "none", marginBottom: 40, transition: "color 0.15s",
          }}
          onMouseEnter={e => e.target.style.color = "#111111"}
          onMouseLeave={e => e.target.style.color = "#555555"}
        >
          Back to resources
        </Link>

        <div style={{ marginBottom: 16 }}>
          <span style={{
            display: "inline-block", fontSize: 10, fontWeight: 600,
            letterSpacing: "0.07em", textTransform: "uppercase",
            padding: "2px 8px", borderRadius: 20,
            background: "#edf4f2", color: "#3F6F63",
          }}>
            {bucket}
          </span>
        </div>

        <h1 style={{
          fontSize: "clamp(26px, 5vw, 38px)",
          fontWeight: 700, letterSpacing: "-0.025em",
          lineHeight: 1.15, marginBottom: 40, color: "#111111",
        }}>
          {title}
        </h1>

        <div className="article-body">
          {children}
        </div>

        {nextArticle && (
          <div style={{
            marginTop: 56, padding: "24px 28px",
            background: "#f9f9f9", border: "1.5px solid rgba(0,0,0,0.07)", borderRadius: 12,
          }}>
            <span style={{
              display: "inline-block", fontSize: 10, fontWeight: 600,
              letterSpacing: "0.07em", textTransform: "uppercase",
              color: "#7A3A0E", background: "#fdf0e4",
              padding: "2px 9px", borderRadius: 20, marginBottom: 12,
            }}>
              {nextArticle.label}
            </span>
            <p style={{
              fontSize: 16, fontWeight: 600, color: "#111111",
              lineHeight: 1.35, letterSpacing: "-0.01em",
              marginBottom: 8, marginTop: 8,
            }}>
              {nextArticle.title}
            </p>
            <p style={{ fontSize: 14, color: "#555555", lineHeight: 1.6, marginBottom: 16 }}>
              {nextArticle.excerpt}
            </p>
            <Link
              to={`/resources/${nextArticle.slug}`}
              style={{ fontSize: 13, fontWeight: 600, color: "#3F6F63", textDecoration: "none" }}
            >
              Read next
            </Link>
          </div>
        )}

        {ctaVariant === "candidate" && <CandidateCTA />}
        {ctaVariant === "org" && <OrgCTA />}

      </div>
    </div>
  );
}