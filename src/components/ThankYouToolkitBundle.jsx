import { Link } from "react-router-dom";

const t = {
  surface: "#f9f9f9",
  border: "rgba(0,0,0,0.07)",
  ink: "#111111",
  inkMid: "#555555",
  inkLight: "#999999",
  accentGreen: "#3F6F63",
};

const documents = [
  {
    title: "AI Procurement Questions for Hiring Teams",
    href: "/downloads/AI-Procurement-Questions-for-Hiring-Teams.pdf",
    download: "AI-Procurement-Questions-for-Hiring-Teams.pdf",
  },
  {
    title: "Candidate Transparency Guide",
    href: "/downloads/Candidate-Transparency-Guide.pdf",
    download: "Candidate-Transparency-Guide.pdf",
  },
  {
    title: "Bias Audit Checklist",
    href: "/downloads/Bias-Audit-Checklist-for-AI-Hiring.pdf",
    download: "Bias-Audit-Checklist-for-AI-Hiring.pdf",
  },
  {
    title: "AI Hiring Policy Framework",
    href: "/downloads/AI-Hiring-Policy-Framework.pdf",
    download: "AI-Hiring-Policy-Framework.pdf",
  },
];

function CheckIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="14" cy="14" r="14" fill={t.accentGreen} />
      <path d="M8.5 14.5L12.5 18.5L19.5 10.5" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style={{ flexShrink: 0 }}>
      <path d="M9 2v9m0 0L5.5 7.5M9 11l3.5-3.5M3 14h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ThankYouToolkitBundle() {
  return (
    <main
      style={{
        maxWidth: 720,
        margin: "0 auto",
        padding: "72px 24px 96px",
        fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 36 }}>
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
            Thank you. Your AI Hiring Toolkit Bundle is ready.
          </h1>
          <p style={{ fontSize: "0.95rem", color: t.inkMid, lineHeight: 1.65, margin: 0, maxWidth: 560 }}>
            Your bundle includes all four AI Hiring Toolkits. Download each document below and keep them for your team&apos;s internal use.
          </p>
        </div>
      </div>

      <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", marginBottom: 40 }} />

      <div style={{ display: "grid", gap: 14, marginBottom: 32 }}>
        {documents.map((document) => (
          <div
            key={document.href}
            style={{
              background: t.surface,
              border: `1.5px solid ${t.border}`,
              borderRadius: 12,
              padding: "20px 22px",
              display: "flex",
              gap: 16,
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <h2 style={{ fontSize: "1rem", fontWeight: 700, color: t.ink, lineHeight: 1.35, margin: 0 }}>
              {document.title}
            </h2>
            <a
              href={document.href}
              download={document.download}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: t.accentGreen,
                color: "#ffffff",
                fontWeight: 600,
                fontSize: "0.88rem",
                padding: "10px 18px",
                borderRadius: 6,
                textDecoration: "none",
              }}
            >
              <DownloadIcon />
              Download PDF
            </a>
          </div>
        ))}
      </div>

      <div style={{ marginBottom: 40 }}>
        <Link
          to="/resources/toolkits"
          style={{
            display: "inline-block",
            background: t.accentGreen,
            color: "#ffffff",
            fontWeight: 600,
            fontSize: "0.88rem",
            padding: "10px 20px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Back to Toolkit Library
        </Link>
      </div>

      <p style={{ fontSize: "0.8rem", color: t.inkLight, lineHeight: 1.6, margin: 0 }}>
        If you have any issue accessing the files, contact{" "}
        <a href="mailto:man@aievolvingyou.com" style={{ color: t.accentGreen, textDecoration: "underline", textUnderlineOffset: 2 }}>
          man@aievolvingyou.com
        </a>{" "}
        and include the email address used at checkout.
      </p>
    </main>
  );
}
