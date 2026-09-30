import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ArticleJourneyContext, { ArticleLibraryLink } from "./ArticleJourneyContext";
import ApplicationReview from "./ApplicationReview";
import ArticleCTA from "./ArticleCTA";
import JourneyNext from "./JourneyNext";
import OrganisationJourneyNext from "./OrganisationJourneyNext";
import { activeJourney, journeysForArticle, libraryForArticle, articleCta, isCoachJourneyEnd } from "../pages/journeyNavigation";
import { articleMetadataBySlug } from "./articleMetadata";

export default function ArticleLayout({ title, bucket, children, nextArticle, hideCoachCta, track }) {
  const location = useLocation();
  const article = articleMetadataBySlug[location.pathname];
  const journey = activeJourney(location);
  const organisationJourney = journey?.audience === 'organisation';
  const memberships = journeysForArticle(location.pathname);
  const library = libraryForArticle(article);
  const aiPrepPractice = journey?.path === '/candidates/interviews-no-offers' && article?.slug === '/resources/ai-interview-prep';
  const applicationReview = journey?.path === '/candidates/no-interviews' && article?.slug === '/resources/ats-friendly-cvs-what-matters';
  const coachJourneyEnd = isCoachJourneyEnd(journey, article?.slug);
  const cta = (coachJourneyEnd || aiPrepPractice) ? "interview-coach" : articleCta(article);

  useEffect(() => {
    if (location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })
  }, [location.pathname, location.hash])

  return (
    <div style={{ paddingTop: 62 }}>
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "56px 24px 80px" }}>

        <ArticleJourneyContext journey={journey} memberships={memberships} library={library} />

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

        <div className="article-next-actions">
          {organisationJourney ? <OrganisationJourneyNext article={article} journey={journey} /> : <>
          {applicationReview ? <ApplicationReview /> : !coachJourneyEnd && !aiPrepPractice && <JourneyNext article={article} journey={journey} />}
          <ArticleCTA cta={cta} showLibraryLink={false} coachCopy={aiPrepPractice ? {
            label: 'Put it into practice',
            title: 'Practise without scripting your answers',
            text: 'Use Interview Coach to practise answering questions in your own words, with role-specific questions and feedback designed to sharpen your thinking rather than write the answer for you.',
          } : undefined} />
          </>}
          <nav className="article-next-actions__library" aria-label="Browse more guides">
            {(coachJourneyEnd || aiPrepPractice || applicationReview) && <div style={{ marginBottom: 10 }}>
              <Link className="article-library-link" to={journey.path}>← Back to {journey.navigationLabel}</Link>
            </div>}
            <ArticleLibraryLink library={library} />
          </nav>
        </div>

      </div>
    </div>
  )
}
