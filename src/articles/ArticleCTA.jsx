import { Link } from "react-router-dom";

const ctas = {
  "interview-coach": {
    text: "The Interview Coach turns these frameworks into a live, personalised practice session, with questions matched to your role and a cheat sheet you keep.",
    button: "Start for free",
    href: "https://coach.aievolvingyou.com",
  },
  "toolkit-1": {
    text: "The AI Procurement Questions guide helps your team evaluate AI hiring tools with clearer questions, stronger evidence and fewer blind spots. £79.",
    button: "View toolkit",
    href: "/resources/toolkits#procurement-questions",
  },
  "toolkit-2": {
    text: "The Candidate Transparency Guide helps you explain AI use in hiring clearly, fairly and without over-disclosing. £49.",
    button: "View toolkit",
    href: "/resources/toolkits#candidate-transparency-guide",
  },
  "toolkit-3": {
    text: "The Bias Audit Checklist gives your team a structured way to review fairness risks across AI hiring tools and processes. £49.",
    button: "View toolkit",
    href: "/resources/toolkits#bias-audit-checklist",
  },
  "toolkit-4": {
    text: "The AI Hiring Policy Framework gives your team a practical governance document for AI use in recruitment, ready to adapt. £79.",
    button: "View toolkit",
    href: "/resources/toolkits#ai-hiring-policy-framework",
  },
};

export default function ArticleCTA({ cta }) {
  const config = ctas[cta];
  if (!config) return null;

  const isExternal = config.href.startsWith("http");

  return (
    <section className="article-cta">
      <p>{config.text}</p>
      {isExternal ? (
        <a className="article-cta__button" href={config.href} target="_blank" rel="noopener noreferrer">
          {config.button}
        </a>
      ) : (
        <Link className="article-cta__button" to={config.href}>
          {config.button}
        </Link>
      )}
    </section>
  );
}
