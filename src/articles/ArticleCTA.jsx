import { Link } from "react-router-dom";
import { TOOLKIT_SLUGS, toolkitUrl } from "../toolkitSlugs";

const ctas = {
  "interview-coach": {
    text: "The Interview Coach turns these frameworks into a live, personalised practice session, with questions matched to your role and a cheat sheet you keep.",
    label: "Start practising",
    title: "AI Interview Coach",
    button: "Practise with Interview Coach",
    href: "https://coach.aievolvingyou.com",
  },
  "toolkit-1": {
    label: "Put it into practice",
    title: "AI Procurement Questions",
    text: "Use structured questions to test vendor claims, risk controls, human oversight, data use, bias monitoring and contractual safeguards before you buy.",
    button: "View toolkit",
    href: toolkitUrl(TOOLKIT_SLUGS.procurementQuestions),
    secondary: "Browse all organisation guidance & tools",
    secondaryHref: "/resources#organisation-library",
  },
  "toolkit-2": {
    label: "Put it into practice",
    title: "Candidate Transparency Guide",
    text: "Give candidates clear, practical explanations of where AI is used, what it affects, and how human review works.",
    button: "View toolkit",
    href: toolkitUrl(TOOLKIT_SLUGS.candidateTransparencyGuide),
    secondary: "Browse all organisation guidance & tools",
    secondaryHref: "/resources#organisation-library",
  },
  "toolkit-3": {
    label: "Put it into practice",
    title: "Bias Audit Checklist for AI Hiring",
    text: "Review where AI hiring tools may create, hide or amplify bias across screening, assessment, interview and decision stages.",
    button: "View toolkit",
    href: toolkitUrl(TOOLKIT_SLUGS.biasAuditChecklist),
    secondary: "Browse all organisation guidance & tools",
    secondaryHref: "/resources#organisation-library",
  },
  "toolkit-4": {
    label: "Put it into practice",
    title: "AI Hiring Policy Framework",
    text: "Turn your AI hiring inventory into clear internal rules for ownership, classification, human oversight, data protection, bias monitoring, candidate rights and incident response.",
    button: "View toolkit",
    href: toolkitUrl(TOOLKIT_SLUGS.aiHiringPolicyFramework),
    secondary: "Browse all organisation guidance & tools",
    secondaryHref: "/resources#organisation-library",
  },
};

export default function ArticleCTA({ cta, showLibraryLink = true, coachCopy }) {
  const config = cta === "interview-coach" && coachCopy ? { ...ctas[cta], ...coachCopy } : ctas[cta];
  if (!config) return null;

  const isExternal = config.href.startsWith("http");
  const isToolkit = cta.startsWith("toolkit-");

  return (
    <section className={`article-cta${isToolkit ? " article-cta--toolkit" : ""}`}>
      {config.label && <span className="article-cta__label">{config.label}</span>}
      {config.title && <h2>{config.title}</h2>}
      <p>{config.text}</p>
      <div className="article-cta__actions">
        {isExternal ? (
          <a className="article-cta__button" href={config.href} target="_blank" rel="noopener noreferrer">
            {config.button}
          </a>
        ) : (
          <Link className="article-cta__button" to={config.href}>
            {config.button}
          </Link>
        )}
        {showLibraryLink && config.secondary && (
          <Link className="article-cta__secondary" to={config.secondaryHref}>
            {config.secondary}
          </Link>
        )}
      </div>
    </section>
  );
}
