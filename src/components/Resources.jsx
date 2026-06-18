import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { articleMetadata } from "../articles/articleMetadata";

const PROCUREMENT_STRIPE_URL = "https://buy.stripe.com/3cI14n93k5lI1AoeCF5Ne00";
const TRANSPARENCY_STRIPE_URL = "https://buy.stripe.com/fZubJ17Zg01o7YMbqt5Ne07";
const BIAS_AUDIT_STRIPE_URL = "https://buy.stripe.com/dRm3cvenEaG2frebqt5Ne08";
const POLICY_FRAMEWORK_STRIPE_URL = "https://buy.stripe.com/9B63cv6Vc8xUfreamp5Ne09";

const candidateStages = [
  { id: "understand", label: "Understand", copy: "See what actually changed before trying to optimise for the wrong system." },
  { id: "adapt", label: "Adapt", copy: "Make your CV and applications readable to the tools and the people behind them." },
  { id: "perform", label: "Perform", copy: "Turn visibility into strong interview answers once you are in the room." },
];

const orgDrawers = [
  { id: "understand-risk", label: "Understand Risk", copy: "Map where AI is already shaping hiring and where trust is breaking down." },
  { id: "build-trust-fairness", label: "Build Trust & Fairness", copy: "Explain AI use clearly and review fairness risks before they harden." },
  { id: "create-governance", label: "Create Governance", copy: "Ask better procurement questions and name ownership before problems land." },
];

const toolkits = [
  {
    id: "procurement-questions",
    title: "AI Procurement Questions for Hiring Teams",
    price: "£79",
    label: "Procurement Questions",
    body: "50 questions to cut through vendor claims and evaluate AI hiring tools properly, covering bias, privacy, transparency, legal exposure and vendor accountability.",
    href: PROCUREMENT_STRIPE_URL,
  },
  {
    id: "candidate-transparency-guide",
    title: "Candidate Transparency Guide",
    price: "£49",
    label: "Candidate Transparency Guide",
    body: "A practical guide for explaining where AI is used, what it affects, what stays human and how candidates can reach a person.",
    href: TRANSPARENCY_STRIPE_URL,
  },
  {
    id: "bias-audit-checklist",
    title: "Bias Audit Checklist",
    price: "£49",
    label: "Bias Audit Checklist",
    body: "A structured checklist for reviewing fairness risks across AI hiring tools, vendors, data, outcomes and decision points.",
    href: BIAS_AUDIT_STRIPE_URL,
  },
  {
    id: "ai-hiring-policy-framework",
    title: "AI Hiring Policy Framework",
    price: "£79",
    label: "AI Hiring Policy Framework",
    body: "A practical governance document for AI use in recruitment, ready to adapt for internal ownership, review and escalation.",
    href: POLICY_FRAMEWORK_STRIPE_URL,
  },
];

function sortByOrder(items) {
  return [...items].sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
}

function ArticleLinkCard({ article, index }) {
  return (
    <Link className="resource-card" to={article.slug}>
      {typeof index === "number" && <span className="resource-card__step">{String(index).padStart(2, "0")}</span>}
      <span className="resource-card__meta">{article.readTime}</span>
      <h3>{article.title}</h3>
      <p>{article.excerpt}</p>
    </Link>
  );
}

function ToolkitCard({ toolkit }) {
  return (
    <article className="toolkit-card" id={toolkit.id}>
      <div>
        <span className="toolkit-card__label">{toolkit.label}</span>
        <h3>{toolkit.title}</h3>
        <p>{toolkit.body}</p>
      </div>
      <div className="toolkit-card__footer">
        <strong>{toolkit.price}</strong>
        <a href={toolkit.href} target="_blank" rel="noopener noreferrer">
          Buy toolkit
        </a>
      </div>
    </article>
  );
}

export default function Resources() {
  const location = useLocation();
  const candidates = articleMetadata.filter((article) => article.track === "candidate");
  const orgs = articleMetadata.filter((article) => article.track === "org");
  const quickAnswers = candidates.filter((article) => article.stage === "quick-answer");

  useEffect(() => {
    if (!location.hash) return;
    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ block: "start" });
    });
  }, [location.hash]);

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <p className="section-label">Resources</p>
        <h1>Practical guidance for candidates and hiring teams navigating AI-shaped recruitment.</h1>
      </section>

      <section className="resource-section" id="candidates">
        <div className="resource-section__heading">
          <p className="section-label">Candidate Library</p>
          <h2>Understand → Adapt → Perform → Practise</h2>
        </div>

        <div className="candidate-staircase">
          {candidateStages.map((stage) => {
            const articles = sortByOrder(candidates.filter((article) => article.stage === stage.id));
            if (articles.length === 0) return null;

            return (
              <section className="candidate-stage" key={stage.id}>
                <div className="candidate-stage__intro">
                  <span>{stage.label}</span>
                  <p>{stage.copy}</p>
                </div>
                <div className="candidate-stage__list">
                  {articles.map((article) => (
                    <ArticleLinkCard article={article} index={article.order} key={article.slug} />
                  ))}
                </div>
              </section>
            );
          })}

          <section className="candidate-stage candidate-stage--practise">
            <div className="candidate-stage__intro">
              <span>Practise</span>
              <p>Put the frameworks under pressure with questions matched to your role.</p>
            </div>
            <a className="coach-endpoint" href="https://coach.aievolvingyou.com" target="_blank" rel="noopener noreferrer">
              <span>12</span>
              <strong>Interview Coach</strong>
              <p>Live practice, real-time feedback and a cheat sheet you keep.</p>
            </a>
          </section>
        </div>
      </section>

      <section className="resource-section resource-section--soft" id="quick-answers">
        <div className="resource-section__heading">
          <p className="section-label">Quick Answers</p>
          <h2>Situational side-shelf resources.</h2>
        </div>
        <div className="quick-answer-grid">
          {quickAnswers.map((article) => (
            <ArticleLinkCard article={article} key={article.slug} />
          ))}
        </div>
      </section>

      <section className="resource-section" id="organisations">
        <div className="resource-section__heading">
          <p className="section-label">Organisation Library</p>
          <h2>Browse by problem.</h2>
        </div>
        <div className="org-drawers">
          {orgDrawers.map((drawer) => {
            const articles = orgs.filter((article) => article.stage === drawer.id);
            if (articles.length === 0) return null;

            return (
              <section className="org-drawer" key={drawer.id}>
                <h3>{drawer.label}</h3>
                <p>{drawer.copy}</p>
                <div className="org-drawer__links">
                  {articles.map((article) => (
                    <ArticleLinkCard article={article} key={article.slug} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </section>

      <section className="resource-section resource-section--soft" id="toolkits">
        <div className="resource-section__heading">
          <p className="section-label">Toolkit Library</p>
          <h2>Single-purpose documents for teams that need to act.</h2>
        </div>
        <div className="toolkit-grid">
          {toolkits.map((toolkit) => (
            <ToolkitCard toolkit={toolkit} key={toolkit.id} />
          ))}
        </div>
      </section>
    </main>
  );
}
