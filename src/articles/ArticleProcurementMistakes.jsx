import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function QuestionsComparison() {
  const often = [
    "How quickly can we implement this?",
    "How much admin time will this save?",
    "Which clients are already using it?",
    "Does it integrate with our ATS?",
    "What does the support look like?",
  ];
  const need = [
    "What is the model actually scoring candidates on?",
    "What data was it trained on, and how representative is it?",
    "How is bias tested, and can we see the methodology?",
    "Where does human review sit in this process?",
    "What happens when the tool gets something wrong?",
    "What are the exit terms if this relationship ends?",
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 32px" }}>
      <div style={{ background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: orange, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>What buyers often ask</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {often.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: inkMid, flexShrink: 0, fontSize: 13, marginTop: 1 }}>•</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{q}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#f0f9f5", border: "1.5px solid #a8d5bc", borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>What they also need to ask</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {need.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FourMistakes() {
  const mistakes = [
    {
      label: "Speed over scrutiny",
      stat: "78% of senior leaders lack confidence they could pass an AI governance audit within 90 days.",
      source: "Grant Thornton, 2026",
      detail: "Procurement moves fast because the problem feels urgent. Questions that slow things down get deprioritised. The tool goes in under-examined.",
    },
    {
      label: "Trusting the demo",
      stat: null,
      source: null,
      detail: "Demos are built to impress. Vendors choose the scenarios. The edge cases that expose how a model behaves on candidates from underrepresented groups or non-linear career paths do not tend to feature.",
    },
    {
      label: "Skipping the bias question",
      stat: "Over 60% of organisations deploying AI in hiring have never conducted a formal algorithmic audit.",
      source: "OECD AI Policy Observatory",
      detail: "Most buyers assume the vendor has handled it. Almost no one asks to see the methodology or the results.",
    },
    {
      label: "No internal accountability",
      stat: "Only 25% of companies report having fully deployed AI governance frameworks.",
      source: "AuditBoard research",
      detail: "The tool gets bought, deployed, and owned by no one in particular. Nobody is named as responsible for what it does in practice.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "20px 0 32px" }}>
      {mistakes.map((m, i) => (
        <div key={i} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "20px 22px" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>0{i + 1}</span>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{m.label}</p>
          </div>
          <p style={{ fontSize: 13, color: inkMid, margin: "0 0 10px", lineHeight: 1.6 }}>{m.detail}</p>
          {m.stat && (
            <div style={{ background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 8, padding: "10px 14px" }}>
              <p style={{ fontSize: 13, color: ink, margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>"{m.stat}"</p>
              <p style={{ fontSize: 11, color: inkMid, margin: "6px 0 0", fontWeight: 600 }}>{m.source}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function LegalCases() {
  const cases = [
    {
      year: "2023",
      who: "iTutorGroup / EEOC",
      what: "First resolved AI hiring discrimination case. $365,000 settlement after AI tool automatically rejected applicants based on age.",
      tag: "First resolved case",
    },
    {
      year: "2025",
      who: "Workday class action",
      what: "Federal court established that AI vendors can act as agents of employers, making vendors directly liable alongside the organisations using their tools.",
      tag: "Vendor liability established",
    },
    {
      year: "Jan 2026",
      who: "Eightfold AI class action",
      what: "New legal theory: AI scoring platforms may need to comply with the Fair Credit Reporting Act, expanding compliance requirements significantly.",
      tag: "New legal theory",
    },
    {
      year: "2023 to 2024",
      who: "UK ICO",
      what: "296 recommendations issued after auditing AI recruitment tool providers, focused on DPIAs, candidate transparency, and bias monitoring post-deployment.",
      tag: "UK regulator",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {cases.map((c, i) => (
        <div key={i} style={{
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 8,
          padding: "14px 18px",
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
        }}>
          <div style={{ flexShrink: 0, minWidth: 72 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: ink, margin: 0 }}>{c.year}</p>
            <span style={{
              display: "inline-block",
              fontSize: 10, fontWeight: 600,
              color: orange, background: "#fdf0e4",
              borderRadius: 20, padding: "2px 8px",
              marginTop: 4, letterSpacing: "0.04em",
            }}>
              {c.tag}
            </span>
          </div>
          <div>
            <p style={{ fontSize: 13, fontWeight: 600, color: ink, margin: "0 0 4px" }}>{c.who}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{c.what}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function VendorQuestions() {
  const vendor = [
    "What data was this model trained on, and how representative is it of our candidate pool?",
    "How do you test for bias? What protected characteristics, what methodology, and can we see the results?",
    "Where does human review happen, and how can a candidate challenge an automated decision?",
    "What happens when the model is wrong? Who is accountable, you or us?",
    "What are you unable to explain about how this tool scores or ranks candidates?",
    "What are the exit terms if we need to move to a different system?",
    "How will you notify us if the model is updated, and what re-evaluation process applies?",
    "What logs do you retain, and can we access them if we need to demonstrate compliance?",
  ];
  const internal = [
    "Who in this organisation is the named owner of this tool?",
    "How will we monitor what it is doing in practice?",
    "What is our candidate notification process?",
    "What is our response plan if a decision is challenged?",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16, margin: "16px 0 28px" }}>
      <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "20px 22px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: green, margin: "0 0 14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Ask the vendor</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {vendor.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{q}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 13, color: ink, fontWeight: 600, margin: "16px 0 0", borderTop: `1px solid ${border}`, paddingTop: 14 }}>A vendor who cannot answer these questions clearly is answering you anyway.</p>
      </div>
      <div style={{ background: "#edf4f2", border: `1.5px solid ${green}`, borderRadius: 10, padding: "20px 22px" }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: green, margin: "0 0 14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Ask internally first</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {internal.map((q, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{q}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ArticleProcurementMistakes() {
  return (
    <ArticleLayout
      bucket="For Organisations"
      title="What most organisations get wrong when buying AI hiring tools"
      ctaVariant="org"
    >
      <p>Many teams buying AI hiring technology are asking sensible questions. The problem is that the most consequential ones often stay too broad, too vague, or too late in the process. Here is what responsible procurement actually looks like, and why it matters more than most buyers realise.</p>

      <h2>The demo goes well. That is the problem.</h2>

      <p>The purchase usually starts with a real problem: too many CVs, too slow a process, inconsistent screening. A vendor gets in touch. There is a demo. The tool looks slick. A reference checks out. The contract gets signed.</p>

      <p>What often does not happen is enough depth on how the tool actually works. Not because buyers are careless. More often it is the opposite: teams are trying to do a decent job, but they are working without a structured way to probe. AI tools can create a quiet imposter syndrome in the room. Nobody wants to ask a question that makes them look like they do not understand the technology. So the vendor stays in control of the frame, and the hardest questions stay underexplored.</p>

      <p>This is not just an observation. Research from the International Journal of Human Resource Management identifies it as a structural skills gap: 39% of VP-level leaders say they lack the knowledge to make vendor decisions involving AI. An HRO Today survey found only 22% of HR leaders felt AI data had meaningfully increased their decision-making confidence, with just 2% saying it had done so to a great extent.</p>

      <p>Most organisations buy AI hiring tools the way they would buy project management software. These are not the same category of decision. Project management software organises tasks. AI hiring tools influence which people get opportunities and which do not.</p>

      <h2>What buyers often ask versus what they also need to ask</h2>

      <QuestionsComparison />

      <h2>The information asymmetry problem</h2>

      <p>AI hiring vendors operate with a significant information advantage. They understand their models. They know which questions are hard to answer. They have been through enough sales cycles to know which topics buyers rarely push on.</p>

      <p>This is not always bad faith. It is often just sales gravity: vendors optimise for clarity, confidence, and conversion. If buyers do not ask harder questions, the harder topics stay off the table. The demo stays clean. The narrative stays tight.</p>

      <p>Buyers who go in with a structured question set change the balance of the conversation. They signal that this organisation is paying attention. That the sale will not close on confidence and polish alone. That the vendor needs to demonstrate, not just describe.</p>

      <h2>The four mistakes most organisations make</h2>

      <FourMistakes />

      <h2>The legal exposure most buyers are not pricing in</h2>

      <p>Until recently, a cautious buyer might have assessed AI procurement risk as reputational: a bad press story, a difficult candidate complaint, an uncomfortable conversation with a regulator. That risk calculation has changed.</p>

      <LegalCases />

      <p>The pattern across jurisdictions is consistent: regulators and courts are getting more specific, more active, and more willing to assign liability. The organisations that bought AI hiring tools without asking hard questions are now, in some cases, finding out what that costs.</p>

      <h2>The evidence architecture gap</h2>

      <p>An organisation might hold a bias audit certificate. It might have signed a vendor contract. It might have a policy document somewhere on a shared drive. And it can still be significantly exposed, because it cannot demonstrate what it actually needs to demonstrate when something goes wrong.</p>

      <p>That means: evidence that candidates were notified that AI was being used. Logs showing what the tool did and when. Documentation of where human review happened. And critically, what the organisation did when the vendor updated its model.</p>

      <p>That last point is underappreciated. Vendors update their models. When they do, the tool you evaluated is no longer the tool you are running. Without a contractual requirement for disclosure and re-evaluation on model updates, organisations are continuously exposed to drift they cannot see and did not consent to.</p>

      <h2>What good procurement looks like</h2>

      <p>This is not about making procurement slower. It is about making it more honest. Vendors with well-built tools tend to welcome rigorous questions. They know their product holds up. It is the ones with more to hide who get evasive.</p>

      <VendorQuestions />

      <h2>Buying better is a competitive advantage</h2>

      <p>Organisations that evaluate AI hiring tools rigorously do not just reduce their legal and reputational exposure. They end up with tools that actually work, because they have stress-tested the claims, examined the limitations, and chosen vendors who can stand behind their product.</p>

      <p>Most teams are still under-equipped for this kind of procurement conversation. The teams that close that gap are already differentiated: in the quality of the tools they use, the trust they maintain with candidates, and their readiness for a regulatory environment that has already arrived, even if enforcement is still catching up.</p>

      <p>Responsible procurement starts with better questions. Most teams do not yet have a structure for asking them.</p>

    </ArticleLayout>
  );
}