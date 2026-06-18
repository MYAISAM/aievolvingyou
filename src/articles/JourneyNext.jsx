import { Link } from "react-router-dom";
import { articleMetadataBySlug } from "./articleMetadata";

function SmartLink({ to, className, children }) {
  if (!to) return null;
  if (to.startsWith("http")) {
    return (
      <a className={className} href={to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
}

export default function JourneyNext({ article }) {
  if (!article?.journeyMode || !article.label) return null;

  if (article.journeyMode === "forward") {
    const next = article.nextArticle;
    if (!next?.slug || !next.title) return null;

    return (
      <section className="journey-next journey-next--forward" aria-labelledby="journey-next-title">
        <p className="journey-next__label" id="journey-next-title">{article.label}</p>
        <SmartLink className="journey-next__card" to={next.slug}>
          <span className="journey-next__title">{next.title}</span>
          {next.copy && <span className="journey-next__copy">{next.copy}</span>}
          <span className="journey-next__action">Continue</span>
        </SmartLink>
      </section>
    );
  }

  if (article.journeyMode === "related") {
    const related = (article.relatedArticles || []).filter((item) => item?.slug && articleMetadataBySlug[item.slug]);
    if (related.length === 0) return null;

    return (
      <section className="journey-next journey-next--related" aria-labelledby="journey-related-title">
        <p className="journey-next__label" id="journey-related-title">{article.label}</p>
        <div className="journey-next__related-list">
          {related.map((item) => (
            <Link className="journey-next__related-link" to={item.slug} key={item.slug}>
              {item.title}
            </Link>
          ))}
        </div>
      </section>
    );
  }

  return null;
}
