import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { articleMetadata } from "../articles/articleMetadata";
import FadeInSection from "./FadeInSection";
import ToolkitDetailModal from "./ToolkitDetailModal";

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

const individualToolkits = [
  {
    id: "procurement-questions",
    title: "AI Procurement Questions for Hiring Teams",
    label: "Procurement Questions",
    price: "£79",
    href: PROCUREMENT_STRIPE_URL,
    button: "Buy toolkit",
    audience: "For HR leaders, talent teams, procurement and legal stakeholders reviewing AI hiring vendors.",
    valueProposition: "Move vendor conversations from reassurance to evidence, so you can tell a strong AI hiring tool from a weak one before you sign.",
    cardDescription: "48 vendor evaluation questions across six categories, each with red flag guidance and a strong-answer benchmark. Includes internal alignment prompts and a scored comparison sheet to evaluate vendors side by side.",
    cardSummary: "Questions and scoring tools to test AI hiring vendors before you sign.",
    featureChips: ["48 Questions", "6 Categories", "Vendor Scoring"],
    modalHeading: "Evaluate AI hiring vendors with structure, not guesswork",
    modalSummary: "This toolkit gives non-technical buyers the language and structure to question AI hiring vendors properly. You work through internal alignment first, ask the questions live in vendor calls, and score each vendor on a comparison sheet to build an evidenced, side-by-side record before you commit.",
    whatsIncluded: [
      "48 vendor evaluation questions across six categories: bias and fairness, data and privacy, explainability, human oversight, vendor accountability, and contract and exit",
      "27 Core and 21 Deeper Dive questions, so you know what to prioritise",
      "Red flag and weak answer guidance for every category",
      "A strong-answer benchmark for every category",
      "8 internal alignment prompts to run with your team before any vendor conversation",
      "A vendor comparison sheet with a 1 to 5 scoring grid, notes column and overall score out of 30",
    ],
    bestFor: [
      "Shortlisting between competing AI hiring vendors",
      "Bringing legal or risk into a procurement decision",
      "Replacing an informal vendor review with a documented one",
    ],
    ctaLabel: "Buy toolkit",
  },
  {
    id: "candidate-transparency-guide",
    title: "Candidate Transparency Guide",
    label: "Candidate Transparency Guide",
    price: "£49",
    href: TRANSPARENCY_STRIPE_URL,
    button: "Buy toolkit",
    audience: "For HR directors, talent leads and anyone responsible for what candidates are told about AI in hiring.",
    valueProposition: "Tell candidates what they need to know about AI in your process, at the right stage and in the right language, before opacity becomes a legal or reputational problem.",
    cardDescription: "Stage-by-stage guidance on what to tell candidates about AI, when to tell them, and how to write it clearly. Includes regulatory mapping, alignment prompts and an eight-touchpoint audit sheet.",
    cardSummary: "Guidance for explaining AI use to candidates clearly at each hiring stage.",
    featureChips: ["5 Sections", "Reg Mapping", "Audit Sheet"],
    modalHeading: "Communicate AI use to candidates clearly and credibly",
    modalSummary: "Most candidates now meet AI somewhere in hiring, and many do not know it. This guide covers what to say at each stage, how to write it in plain language rather than legal register, and where your regulatory obligations sit. It ends with an audit sheet so you can see where your current practice has gaps.",
    whatsIncluded: [
      "Stage-by-stage communication guidance across job posting, application confirmation, pre-assessment briefing, rejection notice and on-request responses",
      "24 review items across five sections, split into Core and Deeper Dive",
      "Plain language versus legal language guidance, with examples of good and weak practice at each stage",
      "Regulatory mapping across the EU AI Act, UK ICO guidance, NYC Local Law 144, EEOC and the Illinois AI Video Interview Act",
      "6 internal alignment prompts for HR, talent and legal teams",
      "An eight-touchpoint transparency audit sheet mapping current state, gap and action needed",
      "Review trigger guidance for when AI tools or your hiring process change",
    ],
    bestFor: [
      "Writing or reviewing candidate-facing AI disclosures",
      "Aligning recruiters and hiring managers on consistent messaging",
      "Reducing complaints and negative reviews from unexplained automated rejection",
    ],
    ctaLabel: "Buy toolkit",
  },
  {
    id: "bias-audit-checklist",
    title: "Bias Audit Checklist for AI Hiring",
    label: "Bias Audit Checklist",
    price: "£49",
    href: BIAS_AUDIT_STRIPE_URL,
    button: "Get the checklist",
    audience: "For HR directors, heads of talent, AI governance leads, DPOs and DEI leads accountable for fair AI hiring.",
    valueProposition: "Get an honest, documented picture of where bias risk sits in your AI hiring process, and a clear set of actions to close the gaps that matter most.",
    cardDescription: "47 audit questions across seven categories, each marked Met, Partial or Gap, with remediation prompts built in. Includes a summary sheet to record your position and assign owners.",
    cardSummary: "A checklist to spot bias risks, assign owners and set actions.",
    featureChips: ["47 Questions", "7 Risk Areas", "Remediation Prompts"],
    modalHeading: "Find where bias risk sits in your AI hiring process",
    modalSummary: "Bias did not leave hiring when AI arrived; it gained reach and a harder-to-challenge wrapper. This checklist reviews the seven categories where bias most often enters, scales or goes undetected. You mark each question Met, Partial or Gap, then use the remediation prompts to set specific actions and owners.",
    whatsIncluded: [
      "47 audit questions across seven categories: training data and model design, pre-deployment bias testing, protected characteristics coverage, post-deployment monitoring, accountability and governance, vendor transparency and contractual safeguards, and candidate impact and redress",
      "28 Core and 19 Deeper Dive questions, with Met, Partial or Gap scoring for each",
      "Remediation prompts for every category, turning findings into actions",
      "Red flag and weak practice indicators per category",
      "Coverage of frequently missed protected characteristics including neurodivergence, non-binary gender identities, age over 50 and candidates for whom English is a second language",
      "References to EU AI Act Article 26, UK GDPR Article 22, and the DUAA 2025 complaints procedure",
      "A summary audit sheet with a seven-category status tracker, priority actions, named owners and completion date",
    ],
    bestFor: [
      "Running a structured internal bias review with your governance team",
      "Identifying monitoring and accountability gaps after a tool is already live",
      "Preparing for external scrutiny or a candidate challenge",
    ],
    ctaLabel: "Get the checklist",
  },
  {
    id: "ai-hiring-policy-framework",
    title: "AI Hiring Policy Framework",
    label: "AI Hiring Policy Framework",
    price: "£79",
    href: POLICY_FRAMEWORK_STRIPE_URL,
    button: "Buy framework",
    audience: "For CHROs, HR directors, DPOs and General Counsel responsible for governing AI in hiring.",
    valueProposition: "Leave with a usable first draft of your AI hiring policy, built from a structured review of where your current governance falls short.",
    cardDescription: "A six-category readiness review plus a ten-section policy template with sample text throughout. Move from assessing your current position to a draft policy ready for legal and board review.",
    cardSummary: "A readiness review and policy template for review-ready AI hiring governance.",
    featureChips: ["42 Questions", "10 Sections", "Ready to Adapt"],
    modalHeading: "Build a board-ready AI hiring policy from a structured starting point",
    modalSummary: "This toolkit has two parts. Part 1 is a readiness review that identifies the gaps in your current governance. Part 2 is a draft AI hiring policy template with plain-English sample text in every section, ready to adapt and take to Legal, your DPO and executive sign-off.",
    whatsIncluded: [
      "40 policy readiness questions across six governance categories, split into Core and Deeper Dive",
      "A Part 1 readiness summary sheet recording current status, priority gap and owner per category",
      "A Part 2 ten-section AI Hiring Policy template with sample text throughout",
      "An approved and prohibited uses section, specific enough to include in staff guidance",
      "A meaningful human review definition that addresses the rubber-stamping failure",
      "A four-tier escalation path from recruiter to HR Director to DPO or Legal to executive sponsor, plus trigger conditions",
      "A training requirements section and a regulatory timeline appendix covering UK and EU developments from March 2024 to August 2026",
    ],
    bestFor: [
      "Writing a first AI hiring policy from scratch",
      "Preparing governance evidence ahead of EU AI Act obligations",
      "Taking a structured draft to Legal, the DPO and the board",
    ],
    ctaLabel: "Buy framework",
  },
];

const bundleToolkit = {
  id: "ai-hiring-toolkit-bundle",
  title: "AI Hiring Toolkit Bundle",
  price: "£199",
  label: "BEST VALUE",
  href: TOOLKIT_BUNDLE_STRIPE_URL,
  button: "Buy bundle",
  audience: "For teams that want the full procurement, transparency, bias and governance set.",
  valueProposition: "The four toolkits work as one governance journey, from evaluating a vendor through to a signed-off policy, at over 20% less than buying them separately.",
  cardDescription: "All four AI Hiring Toolkits in one set: procurement questions, candidate transparency, bias audit and policy framework. Covers the full path from vendor evaluation to documented governance. Save over 20%.",
  cardSummary: "All four AI Hiring Toolkits in one set, covering vendor evaluation, transparency, bias review and governance.",
  featureChips: ["4 Toolkits", "Governance Set", "Save 20%+"],
  modalHeading: "The complete AI hiring governance set, from procurement to policy",
  modalSummary: "Each toolkit handles one stage of responsible AI hiring, and together they form a single governance journey. You evaluate vendors, build candidate transparency, audit for bias, and document the policy that ties it all together. Buying the set costs over 20% less than purchasing the four individually.",
  whatsIncluded: [
    "AI Procurement Questions for Hiring Teams: 48 vendor evaluation questions across six categories with red flag guidance and a scored comparison sheet",
    "Candidate Transparency Guide: stage-by-stage communication guidance, regulatory mapping and an eight-touchpoint audit sheet",
    "Bias Audit Checklist for AI Hiring: 47 audit questions across seven categories with remediation prompts and a summary tracker",
    "AI Hiring Policy Framework: a 40-question readiness review and a ten-section policy template with sample text throughout",
    "The four together cover the full sequence: evaluate, communicate, audit and govern",
    "Priced at £199, a saving of over 20% against individual purchase",
  ],
  bestFor: [
    "Standing up AI hiring governance from scratch",
    "Equipping an HR, legal and DPO group with one shared toolset",
    "Preparing for EU AI Act and UK regulatory obligations across the whole process",
  ],
  ctaLabel: "Buy bundle",
  featured: true,
};

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

function ToolkitCard({ toolkit, onOpenDetails }) {
  return (
    <article className={`toolkit-card${toolkit.featured ? " toolkit-card--featured" : ""}`} id={toolkit.id}>
      <div>
        <span className="toolkit-card__label">{toolkit.label}</span>
        <h3>{toolkit.title}</h3>
        <p>{toolkit.cardSummary}</p>
        <div className="toolkit-card__chips" aria-label={`${toolkit.title} features`}>
          {toolkit.featureChips.map((chip) => (
            <span key={chip}>{chip}</span>
          ))}
        </div>
      </div>
      <div className="toolkit-card__footer">
        <strong>{toolkit.price}</strong>
        <div className="toolkit-card__actions">
          <button type="button" onClick={() => onOpenDetails(toolkit)}>
            What's included?
          </button>
          <a href={toolkit.href} target="_blank" rel="noopener noreferrer">
            {toolkit.button}
          </a>
        </div>
      </div>
    </article>
  );
}

function AudienceCard({ title, copy, href, variant }) {
  return (
    <a className={`audience-card audience-card--${variant}`} href={href}>
      <h2>{title}</h2>
      <p>{copy}</p>
    </a>
  );
}

export default function Resources() {
  const location = useLocation();
  const [selectedToolkit, setSelectedToolkit] = useState(null);
  const toolkitScrollY = useRef(null);
  const candidates = articleMetadata.filter((article) => article.track === "candidate");
  const orgs = articleMetadata.filter((article) => article.track === "org");
  const quickAnswers = candidates.filter((article) => article.stage === "quick-answer");

  function openToolkitDetails(toolkit) {
    toolkitScrollY.current = window.scrollY;
    setSelectedToolkit(toolkit);
  }

  function closeToolkitDetails() {
    const restoreY = toolkitScrollY.current;
    setSelectedToolkit(null);
    if (typeof restoreY === "number") {
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: restoreY, left: 0, behavior: "auto" });
      });
    }
  }

  function scrollToResourceHash(hash = window.location.hash, behavior) {
    if (!hash) return undefined;

    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    target?.scrollIntoView({ block: "start", ...(behavior ? { behavior } : {}) });
    return target;
  }

  useEffect(() => {
    if (new URLSearchParams(location.search).has("toolkit")) return undefined;

    const hash = location.hash || window.location.hash;
    if (!hash) return undefined;

    window.requestAnimationFrame(() => scrollToResourceHash(hash));
    const timeout = window.setTimeout(() => scrollToResourceHash(hash), 150);
    return () => window.clearTimeout(timeout);
  }, [location.pathname, location.search, location.hash, location.key]);

  useEffect(() => {
    const toolkitId = new URLSearchParams(location.search).get("toolkit");
    if (!toolkitId) return undefined;

    const toolkit = [...individualToolkits, bundleToolkit].find((item) => item.id === toolkitId);
    if (!toolkit) return undefined;

    const frame = window.requestAnimationFrame(() => {
      scrollToResourceHash(location.hash || `#${toolkit.id}`, "instant");
      toolkitScrollY.current = window.scrollY;
      setSelectedToolkit(toolkit);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [location.pathname, location.search, location.hash, location.key]);

  useEffect(() => {
    function handleHashChange() {
      if (new URLSearchParams(window.location.search).has("toolkit")) return;

      window.requestAnimationFrame(() => scrollToResourceHash());
      window.setTimeout(() => scrollToResourceHash(), 150);
    }

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <main className="resources-page">
      <section className="resources-hero">
        <p className="section-label">RESOURCES</p>
        <h1>AI is changing hiring. Getting hired is still human.</h1>
        <p className="resources-hero__subheading">
          AI is changing how organisations hire and how candidates get hired. Explore practical guidance, evidence-based articles, interview coaching and governance resources.
        </p>
        <div className="audience-chooser" aria-label="Choose resource audience">
          <AudienceCard
            variant="candidate"
            title="For candidates"
            copy="Understand how AI is shaping hiring, improve your applications, and prepare for interviews with confidence."
            href="#candidate-library"
          />
          <AudienceCard
            variant="teams"
            title="For hiring teams"
            copy="Review AI hiring tools, improve transparency, reduce bias, and create governance."
            href="#organisation-library"
          />
        </div>
      </section>

      <FadeInSection revealOnly className="resource-section" id="candidate-library">
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
      </FadeInSection>

      <FadeInSection revealOnly className="candidate-to-teams-bridge" aria-label="Hiring team resources">
        <div>
          <h2>Looking for hiring-team resources instead?</h2>
          <p>Explore guidance on transparency, fairness, procurement and governance.</p>
        </div>
        <a href="#organisation-library">Jump to Hiring Teams ↓</a>
      </FadeInSection>

      <FadeInSection revealOnly className="resource-section resource-section--soft" id="quick-answers">
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
      </FadeInSection>

      <FadeInSection revealOnly className="resource-section" id="organisation-library">
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
      </FadeInSection>

      <FadeInSection revealOnly className="resource-section resource-section--soft" id="toolkit-library">
        <span className="anchor-alias" id="toolkits" aria-hidden="true" />
        <div className="resource-section__heading">
          <p className="section-label">Toolkit Library</p>
          <h2>Practical AI hiring frameworks for teams reviewing tools, transparency, bias and governance.</h2>
          <p>AI hiring is full of claims, vendors and conflicting advice. These resources help teams ask better questions, review tools, improve transparency, reduce bias and establish clear ownership.</p>
        </div>
        <div className="toolkit-grid">
          {individualToolkits.map((toolkit) => (
            <ToolkitCard toolkit={toolkit} key={toolkit.id} onOpenDetails={openToolkitDetails} />
          ))}
        </div>
        <ToolkitCard toolkit={bundleToolkit} onOpenDetails={openToolkitDetails} />
        <p className="toolkit-pricing-note">
          Prices are shown in GBP. We are not currently VAT registered, so VAT is not charged. Digital downloads for business and professional use. Not legal advice.
        </p>
      </FadeInSection>

      <ToolkitDetailModal toolkit={selectedToolkit} onClose={closeToolkitDetails} />
    </main>
  );
}
