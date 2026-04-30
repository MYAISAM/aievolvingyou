import { Link } from "react-router-dom";

// Design tokens — matches BRAND.md and existing site
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
  tagGreenText: "#3F6F63",
};

// Checkmark icon — inline SVG, no dependency needed
function CheckIcon() {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="14" cy="14" r="14" fill={t.accentGreen} />
      <path
        d="M8.5 14.5L12.5 18.5L19.5 10.5"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Download icon — inline SVG
function DownloadIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M9 2v9m0 0L5.5 7.5M9 11l3.5-3.5M3 14h12"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ThankYou() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "72px 24px 96px",
        fontFamily:
          "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      }}
    >
      {/* Confirmation header */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 16,
          marginBottom: 36,
        }}
      >
        <div style={{ paddingTop: 3, flexShrink: 0 }}>
          <CheckIcon />
        </div>
        <div>
          <p
            style={{
              fontSize: "0.78rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: t.accentGreen,
              margin: "0 0 8px",
            }}
          >
            Order confirmed
          </p>
          <h1
            style={{
              fontSize: "clamp(1.55rem, 4vw, 2rem)",
              fontWeight: 700,
              color: t.ink,
              letterSpacing: "-0.03em",
              lineHeight: 1.2,
              margin: "0 0 12px",
            }}
          >
            You've got the questions.
            <br />
            Now ask them.
          </h1>
          <p
            style={{
              fontSize: "0.95rem",
              color: t.inkMid,
              lineHeight: 1.65,
              margin: 0,
              maxWidth: 520,
            }}
          >
            Your copy of the{" "}
            <strong style={{ color: t.ink, fontWeight: 600 }}>
              AI Procurement Questions for Hiring Teams
            </strong>{" "}
            is ready to download. Use it the next time you're evaluating an AI
            hiring tool — or share it with whoever is.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          borderTop: `1px solid rgba(0,0,0,0.08)`,
          marginBottom: 40,
        }}
      />

      {/* Download card */}
      <div
        style={{
          background: t.surface,
          border: `2px solid ${t.accentGreen}`,
          borderRadius: 12,
          padding: "32px 28px",
          marginBottom: 32,
        }}
      >
        {/* Document meta */}
        <div
          style={{
            display: "flex",
            gap: 8,
            marginBottom: 16,
            flexWrap: "wrap",
          }}
        >
          <span
            style={{
              fontSize: "0.68rem",
              fontWeight: 700,
              letterSpacing: "0.07em",
              textTransform: "uppercase",
              color: "#ffffff",
              background: t.accentGreen,
              borderRadius: 20,
              padding: "3px 12px",
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

        <h2
          style={{
            fontSize: "1.15rem",
            fontWeight: 700,
            color: t.ink,
            letterSpacing: "-0.02em",
            lineHeight: 1.35,
            margin: "0 0 10px",
          }}
        >
          AI Procurement Questions for Hiring Teams
        </h2>

        <p
          style={{
            fontSize: "0.88rem",
            color: t.inkMid,
            lineHeight: 1.65,
            margin: "0 0 6px",
          }}
        >
          50 structured questions across 8 evaluation categories: transparency,
          bias and fairness, data handling, candidate experience, compliance,
          performance claims, integration, and vendor accountability.
        </p>

        <p
          style={{
            fontSize: "0.8rem",
            color: t.inkLight,
            margin: "0 0 24px",
          }}
        >
          PDF · 12 pages
        </p>

        {/* Download button */}
        <a
          href="/downloads/AI-Procurement-Questions-for-Hiring-Teams.pdf"
          download="AI-Procurement-Questions-for-Hiring-Teams.pdf"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: t.accentGreen,
            color: "#ffffff",
            fontFamily:
              "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
            fontWeight: 600,
            fontSize: "0.9rem",
            padding: "12px 22px",
            borderRadius: 6,
            textDecoration: "none",
            cursor: "pointer",
          }}
        >
          <DownloadIcon />
          Download your PDF
        </a>

        {/* Reassurance note */}
        <p
          style={{
            fontSize: "0.78rem",
            color: t.inkLight,
            marginTop: 14,
            marginBottom: 0,
            lineHeight: 1.5,
          }}
        >
          If the download doesn't start,{" "}
          <a
            href="/downloads/AI-Procurement-Questions-for-Hiring-Teams.pdf"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: t.accentGreen,
              textDecoration: "underline",
              textUnderlineOffset: 2,
            }}
          >
            open it directly in your browser
          </a>
          .
        </p>
      </div>

      {/* What's next card */}
      <div
        style={{
          background: t.bg,
          border: `1px solid ${t.border}`,
          borderRadius: 12,
          padding: "28px 28px 24px",
          marginBottom: 40,
        }}
      >
        <p
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: t.accentGreen,
            margin: "0 0 10px",
          }}
        >
          What's next
        </p>
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: t.ink,
            letterSpacing: "-0.01em",
            margin: "0 0 10px",
          }}
        >
          More frameworks are on the way
        </h2>
        <p
          style={{
            fontSize: "0.88rem",
            color: t.inkMid,
            lineHeight: 1.65,
            margin: "0 0 20px",
          }}
        >
          The full AI Hiring Toolkit will include the Procurement Questions
          you've just downloaded, plus a Governance Framework, Bias Audit
          Checklist, and Candidate Transparency Guide. The complete toolkit will
          be £149.
        </p>
        <p
          style={{
            fontSize: "0.88rem",
            color: t.inkMid,
            lineHeight: 1.65,
            margin: "0 0 20px",
          }}
        >
          In the meantime, the two articles that informed this document are live
          on the Resources page — useful background reading before your next
          vendor evaluation.
        </p>

        {/* CTA row */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            to="/resources"
            onClick={() => {
              // Pre-select the orgs tab when coming from here
              sessionStorage.setItem("resourcesTrack", "orgs");
            }}
            style={{
              display: "inline-block",
              background: t.accentGreen,
              color: "#ffffff",
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              fontWeight: 600,
              fontSize: "0.88rem",
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Back to Resources
          </Link>

          <a
            href="/connect"
            style={{
              display: "inline-block",
              background: "transparent",
              border: `1px solid rgba(0,0,0,0.15)`,
              color: t.ink,
              fontFamily:
                "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
              fontWeight: 500,
              fontSize: "0.88rem",
              padding: "10px 20px",
              borderRadius: 6,
              textDecoration: "none",
            }}
          >
            Get notified when the full toolkit launches
          </a>
        </div>
      </div>

      {/* Quiet footer note */}
      <p
        style={{
          fontSize: "0.8rem",
          color: t.inkLight,
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        Questions? Get in touch via the{" "}
        <a
          href="/connect"
          style={{
            color: t.accentGreen,
            textDecoration: "underline",
            textUnderlineOffset: 2,
          }}
        >
          Connect page
        </a>
        . A receipt from Stripe will have been sent to your email.
      </p>
    </main>
  );
}