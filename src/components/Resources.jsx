import { useState } from "react";
import { Link } from "react-router-dom";

// Design tokens
const t = {
  bg: "#ffffff",
  surface: "#f9f9f9",
  surfaceAlt: "#f2f2f2",
  border: "rgba(0,0,0,0.07)",
  ink: "#111111",
  inkMid: "#555555",
  inkLight: "#999999",
  accentGreen: "#3F6F63",
  accentPop: "#D47A2C",
  tagGreen: "#edf4f2",
  tagOrange: "#fdf0e4",
  tagOrangeText: "#7A3A0E",
};

// Stripe buy link — replace this URL once your Stripe Payment Link is live
const PROCUREMENT_STRIPE_URL = "https://buy.stripe.com/REPLACE_WITH_LIVE_LINK";

// Candidate articles — slugs must match routes in App.jsx
const candidateArticles = [
  {
    slug: "four-types-of-interview-question",
    label: "Start here",
    tag: "Interview prep",
    title: "The 4 types of interview question and how to answer each one",
    excerpt:
      "Most interview questions fall into four categories. Once you know which type you're dealing with, you can structure your answer before the interviewer has finished speaking.",
    readTime: "6 min read",
    live: true,
  },
  {
    slug: "star-method",
    label: "Next up",
    tag: "Interview prep",
    title: "The STAR method explained with real examples",
    excerpt:
      "Situation, Task, Action, Result. It's the most reliable structure for behavioural answers but most people use it wrong. Here's how to use it right.",
    readTime: "5 min read",
    live: true,
  },
  {
    slug: "weakness-question",
    label: "Then try this",
    tag: "Interview prep",
    title: "The weakness question: why \"I'm a perfectionist\" is the worst answer",
    excerpt:
      "Interviewers have heard it thousands of times and it tells them nothing useful. Here's what a strong, honest, strategically smart weakness answer actually looks like.",
    readTime: "5 min read",
    live: true,
  },
  {
    slug: "ai-interview-prep",
    label: "Level up",
    tag: "AI & interviews",
    title: "How to use AI to prep for interviews without sounding like a robot",
    excerpt:
      "AI can make your interview prep sharper. It can also make you sound like everyone else. The difference is in how you use it.",
    readTime: "6 min read",
    live: true,
  },
  {
    slug: "behavioural-interview",
    label: "Go deeper",
    tag: "Interview prep",
    title: "How to prepare for a behavioural interview",
    excerpt:
      "Behavioural interviews are predictable once you know the pattern. Here's how to build a bank of strong examples that work across dozens of different questions.",
    readTime: "7 min read",
    live: false,
  },
  {
    slug: "career-changers",
    label: "Going further",
    tag: "Career change",
    title: "Interview tips for career changers",
    excerpt:
      "When you're crossing industries or roles, your biggest challenge isn't your experience, it's how you frame it. Here's how to turn a non-linear career into a strength.",
    readTime: "6 min read",
    live: false,
  },
];

// Org articles
const orgArticles = [
  {
    slug: "ai-hiring-trust-problem",
    label: "Start here",
    tag: "Candidate transparency",
    title: "AI in hiring has created a trust problem on both sides of the table",
    excerpt:
      "Candidates don't trust the process. Organisations don't trust the applications. And both sides have reached for AI to cope. Here's why that's making everything worse and what can actually interrupt it.",
    readTime: "8 min read",
    live: true,
  },
  {
    slug: "ai-procurement-mistakes",
    label: "Next up",
    tag: "Responsible procurement",
    title: "What most organisations get wrong when buying AI hiring tools",
    excerpt:
      "Most procurement conversations start too late, ask the wrong questions, and end with a contract that protects the vendor more than the buyer. Here's what a more rigorous evaluation looks like.",
    readTime: "9 min read",
    live: true,
  },
];

// Journey badge — green for Start here, orange for all steps
function JourneyBadge({ label }) {
  const isStart = label === "Start here";
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.68rem",
        fontWeight: 600,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        color: isStart ? "#ffffff" : t.tagOrangeText,
        background: isStart ? t.accentGreen : t.tagOrange,
        borderRadius: 20,
        padding: "3px 10px",
        marginBottom: 10,
      }}
    >
      {label}
    </span>
  );
}

// Article card shared by both tracks
function ArticleCard({ article, dimmed }) {
  return (
    <div
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 12,
        padding: "24px 24px 20px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        opacity: dimmed ? 0.5 : 1,
        position: "relative",
      }}
    >
      {dimmed && (
        <span
          style={{
            position: "absolute",
            top: 14,
            right: 14,
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: t.inkLight,
            background: t.surfaceAlt,
            borderRadius: 20,
            padding: "3px 10px",
          }}
        >
          Coming soon
        </span>
      )}

      <JourneyBadge label={article.label} />

      <span
        style={{
          fontSize: "0.72rem",
          fontWeight: 600,
          color: t.accentGreen,
          letterSpacing: "0.05em",
          textTransform: "uppercase",
        }}
      >
        {article.tag}
      </span>

      <h3
        style={{
          fontSize: "1rem",
          fontWeight: 700,
          color: t.ink,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
          margin: 0,
        }}
      >
        {article.title}
      </h3>

      <p
        style={{
          fontSize: "0.88rem",
          color: t.inkMid,
          lineHeight: 1.65,
          margin: 0,
          flexGrow: 1,
        }}
      >
        {article.excerpt}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 4,
        }}
      >
        <span style={{ fontSize: "0.75rem", color: t.inkLight }}>
          {article.readTime}
        </span>

        {!dimmed && article.live && (
          <Link
            to={`/resources/${article.slug}`}
            style={{
              fontSize: "0.8rem",
              fontWeight: 600,
              color: t.accentGreen,
              textDecoration: "none",
            }}
          >
            Read
          </Link>
        )}
      </div>
    </div>
  );
}

// Procurement product card
function ProcurementCard() {
  return (
    <div
      style={{
        background: "#ffffff",
        border: `2px solid ${t.accentGreen}`,
        borderRadius: 12,
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 700,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            color: "#ffffff",
            background: t.accentGreen,
            borderRadius: 20,
            padding: "4px 12px",
          }}
        >
          Framework document
        </span>
        <span
          style={{
            fontSize: "0.68rem",
            fontWeight: 600,
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            color: t.accentPop,
          }}
        >
          Responsible procurement
        </span>
      </div>

      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 700,
          color: t.ink,
          lineHeight: 1.35,
          letterSpacing: "-0.02em",
          margin: 0,
        }}
      >
        AI Procurement Questions for Hiring Teams
      </h3>

      <p
        style={{
          fontSize: "0.9rem",
          color: t.inkMid,
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        48 structured vendor evaluation questions across 6 categories, with red
        flags, scoring guidance, and a comparison sheet. Built for HR Directors,
        Talent leads, and Procurement teams who are not AI experts but need to
        ask better ones.
      </p>

      <ul
        style={{
          margin: 0,
          paddingLeft: 0,
          listStyle: "none",
          display: "flex",
          flexDirection: "column",
          gap: 7,
        }}
      >
        {[
          "6 evaluation categories: bias, data, explainability, human oversight, vendor accountability, exit",
          "Core questions for every vendor call plus deeper-dive questions for Legal and Risk",
          "Red flags and weak answer guide for every category",
          "Vendor comparison scoring sheet",
          "Internal alignment prompts to work through before your first vendor call",
        ].map((item, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 8,
              fontSize: "0.82rem",
              color: t.inkMid,
              lineHeight: 1.55,
            }}
          >
            <span
              style={{
                color: t.accentGreen,
                fontWeight: 700,
                marginTop: 1,
                flexShrink: 0,
              }}
            >
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          marginTop: 6,
          flexWrap: "wrap",
        }}
      >
        <div>
          <span
            style={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: t.ink,
              letterSpacing: "-0.03em",
            }}
          >
            £79
          </span>
          <span
            style={{
              fontSize: "0.8rem",
              color: t.inkLight,
              marginLeft: 6,
            }}
          >
            one-time · instant download
          </span>
        </div>

        <a
          href={PROCUREMENT_STRIPE_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: t.accentPop,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "11px 22px",
            borderRadius: 6,
            textDecoration: "none",
            flexShrink: 0,
          }}
        >
          Buy now
        </a>
      </div>

      <p
        style={{
          fontSize: "0.72rem",
          color: t.inkLight,
          lineHeight: 1.5,
          margin: 0,
          borderTop: `1px solid ${t.border}`,
          paddingTop: 12,
        }}
      >
        This is a structured vendor evaluation tool, not legal advice or a
        contract template. For contract negotiation and data processing
        agreements, work with qualified legal counsel.
      </p>
    </div>
  );
}

// Candidate track CTA
function CandidateCTA() {
  return (
    <div
      style={{
        background: t.surface,
        border: `1px solid ${t.border}`,
        borderRadius: 12,
        padding: "28px 24px",
        textAlign: "center",
      }}
    >
      <p
        style={{
          fontSize: "1rem",
          fontWeight: 600,
          color: t.ink,
          margin: "0 0 6px",
          letterSpacing: "-0.01em",
        }}
      >
        Ready to put this into practice?
      </p>
      <p
        style={{
          fontSize: "0.88rem",
          color: t.inkMid,
          margin: "0 0 18px",
          lineHeight: 1.6,
        }}
      >
        The Interview Coach turns these frameworks into a tailored, live session.
        Questions matched to your role, real-time coaching, and a personalised
        cheat sheet.
      </p>
      <a
        href="https://coach.aievolvingyou.com"
        style={{
          display: "inline-block",
          background: t.accentPop,
          color: "#ffffff",
          fontWeight: 600,
          fontSize: "0.9rem",
          padding: "11px 22px",
          borderRadius: 6,
          textDecoration: "none",
        }}
      >
        Try the Interview Coach
      </a>
    </div>
  );
}

// Section label for org track
function SectionLabel({ children }) {
  return (
    <div
      style={{
        fontSize: "0.72rem",
        fontWeight: 700,
        letterSpacing: "0.08em",
        textTransform: "uppercase",
        color: t.accentGreen,
        marginBottom: 14,
        marginTop: 36,
      }}
    >
      {children}
    </div>
  );
}

// Main Resources component
export default function Resources() {
  const [track, setTrack] = useState("candidates");

  return (
    <main
      id="resources"
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "64px 24px 96px",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <h1
          style={{
            fontSize: "clamp(1.6rem, 4vw, 2rem)",
            fontWeight: 700,
            color: t.ink,
            letterSpacing: "-0.03em",
            margin: "0 0 10px",
          }}
        >
          Resources
        </h1>
        <p
          style={{
            fontSize: "1rem",
            color: t.inkMid,
            lineHeight: 1.65,
            margin: 0,
            maxWidth: 560,
          }}
        >
          Practical guides and frameworks for people navigating AI in the
          workplace, whether you're preparing for interviews or making hiring
          decisions.
        </p>
      </div>

      {/* Track switcher */}
      <div
        style={{
          display: "flex",
          gap: 4,
          background: t.surfaceAlt,
          borderRadius: 8,
          padding: 4,
          marginBottom: 44,
          width: "fit-content",
        }}
      >
        {[
          { id: "candidates", label: "For Candidates" },
          { id: "orgs", label: "For Organisations" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setTrack(tab.id)}
            style={{
              padding: "9px 20px",
              borderRadius: 6,
              border: "none",
              cursor: "pointer",
              fontFamily: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
              fontSize: "0.88rem",
              fontWeight: track === tab.id ? 600 : 400,
              color: track === tab.id ? "#ffffff" : t.inkMid,
              background: track === tab.id ? t.accentGreen : "transparent",
              transition: "all 0.15s ease",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* CANDIDATES TRACK */}
      {track === "candidates" && (
        <div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: t.accentGreen,
              marginBottom: 14,
            }}
          >
            Interview Resources
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              color: t.inkMid,
              lineHeight: 1.65,
              margin: "0 0 28px",
            }}
          >
            Practical guides for interview preparation. Follow the journey in
            order, or jump to what you need.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
            }}
          >
            {candidateArticles.map((article) => (
              <ArticleCard key={article.slug} article={article} dimmed={false} />
            ))}
          </div>

          <div style={{ marginTop: 40 }}>
            <CandidateCTA />
          </div>
        </div>
      )}

      {/* ORGS TRACK */}
      {track === "orgs" && (
        <div>
          <div
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: t.accentGreen,
              marginBottom: 14,
            }}
          >
            For HR teams, Talent leads and Hiring managers
          </div>

          <p
            style={{
              fontSize: "0.88rem",
              color: t.inkMid,
              lineHeight: 1.65,
              margin: "0 0 28px",
            }}
          >
            AI is changing what responsible hiring looks like. These articles
            and frameworks help organisations get ahead of the problem, not
            respond to it after something goes wrong.
          </p>

          <SectionLabel>Read first</SectionLabel>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
              marginBottom: 12,
            }}
          >
            {orgArticles.map((article) => (
              <ArticleCard
                key={article.slug}
                article={article}
                dimmed={!article.live}
              />
            ))}
          </div>

          <SectionLabel>Then put it into practice</SectionLabel>

          <ProcurementCard />

          {/* Toolkit teaser */}
          <div
            style={{
              marginTop: 32,
              padding: "20px 24px",
              background: t.surface,
              borderRadius: 10,
              border: `1px solid ${t.border}`,
            }}
          >
            <p
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: t.ink,
                margin: "0 0 6px",
              }}
            >
              More frameworks coming
            </p>
            <p
              style={{
                fontSize: "0.8rem",
                color: t.inkMid,
                lineHeight: 1.6,
                margin: "0 0 14px",
              }}
            >
              The full AI Hiring Toolkit will include four documents: Governance
              Framework, Bias Audit Checklist, Candidate Transparency Guide, and
              the Procurement Questions above. Combined price for the full
              toolkit: £149.
            </p>
            <a
              href="/connect"
              style={{
                fontSize: "0.82rem",
                fontWeight: 600,
                color: t.accentGreen,
                textDecoration: "none",
              }}
            >
              Get notified when the full toolkit launches
            </a>
          </div>
        </div>
      )}
    </main>
  );
}