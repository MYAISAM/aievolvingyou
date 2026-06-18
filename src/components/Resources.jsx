import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { articleMetadata } from "../articles/articleMetadata";

const PROCUREMENT_STRIPE_URL = "https://buy.stripe.com/3cI14n93k5lI1AoeCF5Ne00";
const TRANSPARENCY_STRIPE_URL = "https://buy.stripe.com/fZubJ17Zg01o7YMbqt5Ne07";
const BIAS_AUDIT_STRIPE_URL = "https://buy.stripe.com/dRm3cvenEaG2frebqt5Ne08";
const POLICY_FRAMEWORK_STRIPE_URL = "https://buy.stripe.com/9B63cv6Vc8xUfreamp5Ne09";
const TOOLKIT_BUNDLE_STRIPE_URL = "https://buy.stripe.com/6oUdR993keWibaYamp5Ne0a";

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
    id: "ai-hiring-toolkit-bundle",
    title: "AI Hiring Toolkit Bundle",
    price: "£199",
    label: "BEST VALUE",
    body: "Get all four documents together: procurement questions, candidate transparency, bias audit and policy governance.",
    note: "Save £57 compared with buying separately.",
    href: TOOLKIT_BUNDLE_STRIPE_URL,
    button: "Buy bundle",
    featured: true,
  },
  {
    id: "procurement-questions",
    title: "AI Procurement Questions for Hiring Teams",
    price: "£79",
    label: "Procurement Questions",
    body: "50 questions to cut through vendor claims and evaluate AI hiring tools properly, covering bias, privacy, transparency, legal exposure and vendor accountability.",
    href: PROCUREMENT_STRIPE_URL,
    button: "Buy toolkit",
  },
  {
    id: "candidate-transparency-guide",
    title: "Candidate Transparency Guide",
    price: "£49",
    label: "Candidate Transparency Guide",
    body: "A practical guide for explaining where AI is used, what it affects, what stays human and how candidates can reach a person.",
    href: TRANSPARENCY_STRIPE_URL,
    button: "Buy toolkit",
  },
  {
    id: "bias-audit-checklist",
    title: "Bias Audit Checklist",
    price: "£49",
    label: "Bias Audit Checklist",
    body: "A structured checklist for reviewing fairness risks across AI hiring tools, vendors, data, outcomes and decision points.",
    href: BIAS_AUDIT_STRIPE_URL,
    button: "Buy toolkit",
  },
  {
    id: "ai-hiring-policy-framework",
    title: "AI Hiring Policy Framework",
    price: "£79",
    label: "AI Hiring Policy Framework",
    body: "A practical governance document for AI use in recruitment, ready to adapt for internal ownership, review and escalation.",
    href: POLICY_FRAMEWORK_STRIPE_URL,
    button: "Buy toolkit",
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
    <article className={`toolkit-card${toolkit.featured ? " toolkit-card--featured" : ""}`} id={toolkit.id}>
      <div>
        <span className="toolkit-card__label">{toolkit.label}</span>
        <h3>{toolkit.title}</h3>
        <p>{toolkit.body}</p>
        {toolkit.note && <p className="toolkit-card__note">{toolkit.note}</p>}
      </div>
      <div className="toolkit-card__footer">
        <strong>{toolkit.price}</strong>
        <a href={toolkit.href} target="_blank" rel="noopener noreferrer">
          {toolkit.button}
        </a>
      </div>
    </article>
  );
}

function AudienceCard({ title, copy, href }) {
  return (
    <a className="audience-card" href={href}>
      <h2>{title}</h2>
      <p>{copy}</p>
    </a>
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
        <p className="section-label">RESOURCES</p>
        <h1>AI is changing hiring. Getting hired is still human.</h1>
        <p className="resources-hero__subheading">
          Understand how AI is shaping recruitment, improve your applications, perform better in interviews, and use practical frameworks to make hiring more transparent, fair and accountable.
        </p>
        <div className="audience-chooser" aria-label="Choose resource audience">
          <AudienceCard
            title="For candidates"
            copy="Understand AI-shaped hiring, improve your applications, and practise for interviews."
            href="#candidate-library"
          />
          <AudienceCard
            title="For hiring teams"
            copy="Review AI hiring tools, improve transparency, reduce bias, and create governance."
            href="#organisation-library"
          />
        </div>
      </section>

      <section className="resource-section" id="candidate-library">
        <span className="anchor-alias" id="candidates" aria-hidden="true" />
        <div className="resource-section__heading">
          <p className="section-label">Candidate Library</p>
          <p className="resource-section__kicker">Start here</p>
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
          <h2>Specific interview challenges.</h2>
          <p>Practical guides for common situations candidates get stuck on.</p>
        </div>
        <div className="quick-answer-grid">
          {quickAnswers.map((article) => (
            <ArticleLinkCard article={article} key={article.slug} />
          ))}
        </div>
      </section>

      <section className="resource-section" id="organisation-library">
        <span className="anchor-alias" id="organisations" aria-hidden="true" />
        <div className="resource-section__heading">
          <p className="section-label">Organisation Library</p>
          <h2>Building or buying AI hiring tools?</h2>
          <p>Start with the problem in front of you: understanding risk, building trust, reviewing fairness, or putting governance in place before issues land.</p>
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

      <section className="resource-section resource-section--soft" id="toolkit-library">
        <span className="anchor-alias" id="toolkits" aria-hidden="true" />
        <div className="resource-section__heading">
          <p className="section-label">Toolkit Library</p>
          <h2>Practical AI hiring frameworks your team can use without hiring another consultant.</h2>
          <p>AI hiring is noisy. These documents help teams ask better questions, review vendors, improve transparency, reduce bias and establish clear ownership without waiting for someone else to lead it.</p>
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
