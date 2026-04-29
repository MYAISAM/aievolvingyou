import ArticleLayout from "./ArticleLayout";
import { Link } from "react-router-dom";

const nextArticle = {
  slug: "ai-procurement-mistakes",
  label: "Next up",
  title: "What most organisations get wrong when buying AI hiring tools",
  excerpt: "Most procurement conversations start too late, ask the wrong questions, and end with a contract that protects the vendor more than the buyer.",
};

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function FeedbackLoop() {
  const steps = [
    { number: "01", text: "Organisations use AI to screen and filter candidates" },
    { number: "02", text: "Candidates don't know how — or that it's happening at all" },
    { number: "03", text: "Candidates use AI to navigate a process they don't understand" },
    { number: "04", text: "Application volume rises, quality signals become harder to read" },
    { number: "05", text: "Organisations add more automation to cope with the volume" },
    { number: "06", text: "Trust on both sides continues to erode" },
  ];
  return (
    <div style={{ margin: "24px 0 32px" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {steps.map((step, i) => (
          <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, minWidth: 24 }}>{step.number}</span>
            <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step.text}</p>
          </div>
        ))}
        <div style={{ display: "flex", gap: 14, alignItems: "center", background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ fontSize: 14, fontWeight: 700, color: orange, flexShrink: 0 }}>↺</span>
          <p style={{ fontSize: 14, color: orange, fontWeight: 600, margin: 0, lineHeight: 1.55 }}>Back to step 01 — and the loop tightens</p>
        </div>
      </div>
    </div>
  );
}

function TransparencyTable() {
  const rows = [
    { without: "Candidates optimise for unknown criteria", with: "Candidates engage with actual criteria" },
    { without: "Applications become AI-polished noise", with: "Applications reflect genuine capability" },
    { without: "Trust in the process erodes on both sides", with: "Trust is anchored in clear communication" },
    { without: "Employer brand suffers quietly", with: "Employer brand benefits from being different" },
    { without: "Regulatory exposure grows unmanaged", with: "Organisation is ahead of incoming requirements" },
  ];
  return (
    <div style={{ margin: "20px 0 32px", overflowX: "auto" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 2, minWidth: 480 }}>
        <div style={{ background: "#fff4f4", borderRadius: "8px 0 0 0", padding: "12px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: "#c0392b", letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>Without transparency</p>
        </div>
        <div style={{ background: "#f0f9f5", borderRadius: "0 8px 0 0", padding: "12px 16px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: "0.06em", textTransform: "uppercase", margin: 0 }}>With transparency</p>
        </div>
        {rows.map((row, i) => (
          <>
            <div key={`w-${i}`} style={{ background: i % 2 === 0 ? "#fff8f8" : "#fff4f4", padding: "12px 16px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{row.without}</p>
            </div>
            <div key={`t-${i}`} style={{ background: i % 2 === 0 ? "#f5fbf7" : "#f0f9f5", padding: "12px 16px", borderTop: "1px solid rgba(0,0,0,0.05)" }}>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{row.with}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

function CostCards() {
  const costs = [
    { label: "Employer brand", detail: "Candidates talk — on Reddit, LinkedIn, in WhatsApp groups. A hiring process that feels opaque and automated is increasingly a reputational liability in competitive talent markets." },
    { label: "Decision quality", detail: "Heavy filtering on AI-legible signals means you find candidates who are best at navigating AI screening — not the best candidates. Those are not the same group." },
    { label: "Legal and regulatory exposure", detail: "The EU AI Act classifies AI hiring tools as high-risk systems requiring transparency, human oversight, and auditability. It is arriving. Organisations with no governance will be exposed." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {costs.map((cost, i) => (
        <div key={i} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "16px 18px" }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 6px" }}>{cost.label}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{cost.detail}</p>
        </div>
      ))}
    </div>
  );
}

function ProductCTA() {
  return (
    <div style={{ marginTop: 48, padding: "24px 28px", background: greenLight, border: `2px solid ${green}`, borderRadius: 12 }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: green, margin: "0 0 10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Ready to put this into practice?</p>
      <p style={{ fontSize: 15, fontWeight: 600, color: ink, margin: "0 0 8px", lineHeight: 1.35 }}>AI Procurement Questions for Hiring Teams</p>
      <p style={{ fontSize: 13, color: inkMid, margin: "0 0 16px", lineHeight: 1.6 }}>48 structured vendor evaluation questions across 6 categories, with red flags, scoring guidance, and a vendor comparison sheet. £79 + VAT, instant download.</p>
      <Link to="/resources" style={{ display: "inline-block", background: orange, color: "#fff", fontWeight: 600, fontSize: 13, padding: "10px 20px", borderRadius: 6, textDecoration: "none" }}>
        Get it on the resources page
      </Link>
    </div>
  );
}

export default function ArticleTrustProblem() {
  return (
    <ArticleLayout
      bucket="For Organisations"
      title="AI in hiring has created a trust problem on both sides of the table"
      nextArticle={nextArticle}
    >
      <p>I've spent the last year building tools for people navigating AI-disrupted careers. And the longer I've been in this space, the more clearly I can see a problem that almost nobody is naming directly.</p>

      <p>Hiring is broken. Not in the way it's always been slightly broken — slow, inconsistent, occasionally unfair. It's broken in a new, specific, and self-reinforcing way. And AI is at the centre of it on both sides.</p>

      <blockquote style={{ borderLeft: `3px solid ${green}`, paddingLeft: 20, margin: "24px 0", fontStyle: "italic", color: inkMid, fontSize: 15, lineHeight: 1.7 }}>
        "Candidates don't trust the process. So they use AI to protect themselves. Organisations get flooded with AI-polished applications. So they add more automation to filter. Which makes candidates trust the process even less."
      </blockquote>

      <p>Round and round. Nobody wins. And hiring quality — the actual ability of an organisation to find and bring in genuinely good people — quietly degrades.</p>

      <h2>How we got here</h2>

      <p>AI started entering hiring processes quietly. ATS systems began filtering CVs before a human ever saw them. Screening tools started ranking candidates against criteria the candidate couldn't see and often didn't know existed. Interview platforms began analysing speech patterns, word choices, facial expressions.</p>

      <p>Most candidates had no idea this was happening. They just knew the process felt different. Less human. Less legible. They'd apply, hear nothing, and have no way to understand why.</p>

      <p>So they adapted. They started using AI to write their CVs, optimise for keywords, craft cover letters, prepare answers. Not because they wanted to be dishonest — but because they felt like they were competing against a machine and needed to speak its language.</p>

      <p>And then organisations noticed. Applications started sounding similar. Polished in the same way. The keyword density was suspiciously good. The structure weirdly consistent.</p>

      <p>So they responded by adding more AI. Better filters. Smarter screening. More automated stages to weed out the noise.</p>

      <p>Which made candidates feel even more like they were being processed rather than seen. So they leaned on AI even harder.</p>

      <h2>The feedback loop</h2>

      <FeedbackLoop />

      <h2>What this is actually costing organisations</h2>

      <p>The obvious cost is signal noise. When every application is AI-optimised, the quality signals you were relying on — writing style, how someone structures their thinking, what they choose to emphasise — become unreliable. You get volume without clarity.</p>

      <p>But there are less obvious costs that matter more.</p>

      <CostCards />

      <h2>Why transparency is the circuit breaker</h2>

      <p>I'm not suggesting transparency solves everything. It doesn't. Bias still needs auditing. Governance still needs building. Vendor tools still need interrogating.</p>

      <p>But transparency is the thing that can interrupt the loop — because the loop is fundamentally driven by opacity.</p>

      <p>Candidates use AI to cope because they don't understand what they're being evaluated against. When organisations explain clearly — what tools are used, at which stages, how decisions are made, what human involvement looks like — candidates can engage authentically rather than defensively.</p>

      <p>That changes the dynamic. Instead of an arms race between candidate AI and employer AI, you have something that actually resembles an informed process.</p>

      <TransparencyTable />

      <h2>What this means in practice</h2>

      <p>Transparency in AI hiring isn't a values statement. It's an operational decision with real consequences — for trust, for quality, for legal defensibility, and for the kind of candidates you attract and retain.</p>

      <p>The organisations getting ahead of this aren't doing it because it's the right thing to do in an abstract sense. They're doing it because they've realised that opacity is expensive. That an unexplained automated rejection is a reputational event. That candidates who feel treated fairly are more likely to accept offers, refer others, and think well of the brand regardless of outcome.</p>

      <p>It's not soft. It's strategic.</p>

      <p>Most hiring teams I've spoken to know something is off. They can feel the quality of applications changing. They know their process has become more automated but aren't sure what that means for the humans going through it. They want to do this better — they just don't have the language or the structure to act on it.</p>

      <p>That's the gap. And it's very fixable.</p>

      <ProductCTA />

    </ArticleLayout>
  );
}