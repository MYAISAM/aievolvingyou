import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ArticleCTA from "./ArticleCTA";
import JourneyNext from "./JourneyNext";
import { articleMetadataBySlug } from "./articleMetadata";

export default function ArticleLayout({ title, bucket, children, nextArticle, hideCoachCta, track }) {
  const location = useLocation();
  const article = articleMetadataBySlug[location.pathname];
  const resourcesPath = article?.track === "org" || track === "orgs" ? "/resources#organisations" : "/resources";

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div style={{ paddingTop: 62 }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 80px" }}>

        <Link
          to={resourcesPath}
          style={{
            display: "inline-block",
            fontSize: 13, color: "#555555",
            textDecoration: "none", marginBottom: 40,
            transition: "color 0.15s",
          }}
          onMouseEnter={e => e.target.style.color = "#111111"}
          onMouseLeave={e => e.target.style.color = "#555555"}
        >
          Back to resources
        </Link>

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

        <h1 style={{
          fontSize: "clamp(26px, 5vw, 38px)",
          fontWeight: 700, letterSpacing: "-0.025em",
          lineHeight: 1.15, marginBottom: 40,
          color: "#111111",
        }}>
          {title}
        </h1>

        <div className="article-body">
          {children}
        </div>

        <JourneyNext article={article} />
        <ArticleCTA cta={article?.cta} />

      </div>
    </div>
  )
}
