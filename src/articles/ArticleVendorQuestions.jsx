import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function QItem({ question, why }) {
  return (
    <div style={{
      background: surface,
      border: `0.5px solid ${border}`,
      borderRadius: 10,
      padding: "14px 18px",
    }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>{question}</p>
      <p style={{ fontSize: 12.5, color: inkMid, lineHeight: 1.55, margin: 0 }}>{why}</p>
    </div>
  );
}

function LegalCard({ label, text }) {
  return (
    <div style={{
      background: surface,
      border: `0.5px solid ${border}`,
      borderRadius: 10,
      padding: "0.875rem 1rem",
    }}>
      <p style={{
        fontSize: 10, fontWeight: 700, textTransform: "uppercase",
        letterSpacing: "0.06em", color: green, marginBottom: 5, marginTop: 0,
      }}>{label}</p>
      <p style={{ fontSize: 12.5, color: inkMid, lineHeight: 1.55, margin: 0 }}>{text}</p>
    </div>
  );
}

export default function ArticleVendorQuestions() {
  return (
    <ArticleLayout  
      title="AI hiring vendor due diligence: the questions that matter"      bucket="For Organisations"
      hideCoachCta={true}
      nextArticle={{
        label: "Related reading",
        title: "What most organisations get wrong when buying AI hiring tools",
        excerpt: "Most procurement conversations start too late, ask the wrong questions, and hand too much trust to vendors who have not earned it.",
        slug: "ai-procurement-mistakes",
      }}
    >

      {/* Standfirst */}
      <p style={{
        borderLeft: `3px solid ${green}`,
        paddingLeft: "1rem",
        fontSize: 14,
        color: inkMid,
        lineHeight: 1.65,
        margin: "0 0 1.75rem",
      }}>
        Most organisations evaluating AI hiring tools never ask the questions that matter most. And when they do, the answers are often vague, proprietary, or unavailable altogether. That gap between what vendors promise and what they can actually demonstrate is where your legal and operational exposure lives.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>The EEOC made the core problem explicit in its May 2023 guidance on AI in hiring: AI vendors will not usually disclose their testing methods. That is not a legal opinion. It is a description of standard vendor behaviour. The information organisations need to govern these tools responsibly is often not available, not volunteered, and in some cases deliberately withheld.</p>

      <p>Bennett Jones LLP's 2025 analysis of standard-form AI vendor contracts found sweeping data-use rights, indefinite retention clauses, and no obligation to provide audit reports or training data disclosure. The ICO's November 2024 audit found contracts described as "deliberately broad" to leave recruiters in the dark about what the tool was actually doing with candidate data.</p>

      <p>The EEOC guidance removes the vendor-assurance defence entirely: employers remain responsible for discriminatory outcomes even when caused by third-party technology. A federal court allowed claims to proceed against Workday on the basis that an AI vendor may be treated as an agent of the employer. That does not transfer liability to the vendor. It adds them to the frame. Your exposure remains.</p>

      {/* Circuit callout */}
      <div style={{
        background: greenLight,
        borderLeft: `3px solid ${green}`,
        borderRadius: "0 10px 10px 0",
        padding: "1rem 1.25rem",
        fontSize: 14,
        fontWeight: 600,
        color: "#2d5249",
        margin: "1.5rem 0",
        lineHeight: 1.6,
      }}>
        The vendor cannot make your organisation compliant. They can provide a tool. The governance, the oversight, and the liability sit with you. That means the questions you ask before signing matter more than anything in the sales deck.
      </div>

      <h2>The questions procurement teams should be asking</h2>

      <p>These are not designed to catch vendors out. They are the baseline due diligence that any organisation deploying a consequential AI system should be able to answer. If the vendor cannot answer them, that is information worth having before you sign.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "1.25rem 0 2rem" }}>
        <QItem
          question="What exactly is the tool scoring candidates against, and how were those criteria determined?"
          why="Vendors frequently describe their tools as scoring for job fit or potential without specifying what that means in practice. You need to know what proxies are being used, how scoring criteria were validated against actual job performance, and whether those criteria have been reviewed for proxy discrimination."
        />
        <QItem
          question="What data was the model trained on, and how was it validated?"
          why="A model trained on historical hiring data from a non-diverse workforce will replicate those patterns. You cannot assess bias risk without understanding the training data. Most vendors treat this as proprietary. That is a legitimate position. It is also a compliance blind spot you need to account for."
        />
        <QItem
          question="Has a bias audit been conducted, by whom, and are the results available?"
          why="The Cornell/CAT Lab/Consumer Reports study found only 18 of 391 employers subject to NYC Local Law 144 published the required bias audit reports. A vendor who has conducted an independent audit and will share the results is in a different category from one who offers assurances without evidence. The methodology matters as much as the outcome: a vendor-designed audit of their own tool is not the same as an independent one."
        />
        <QItem
          question="Can you explain how a specific decision was reached for a specific candidate?"
          why="The ICO's 2024 audit found widespread failure on this point. If a candidate challenges a decision made by an AI tool, your organisation needs to provide a meaningful explanation. The algorithm scored them lower does not meet that bar under UK GDPR or the EU AI Act. If the vendor cannot support you in providing one, that is a compliance gap."
        />
        <QItem
          question="What happens to candidate data after the process ends, and who can use it for what?"
          why="Bennett Jones LLP's contract analysis found indefinite retention clauses and broad rights for vendors to use candidate data for model training. Candidates assessed by your tool may not know their data is being retained or repurposed. You need to know what you agreed to on their behalf."
        />
        <QItem
          question="Will you notify us when the model is updated, and is re-evaluation required?"
          why="Most vendor contracts do not require disclosure of model updates. The tool you evaluated is not necessarily the tool you are running six months later. Without a notification and re-evaluation clause, your due diligence at procurement becomes disconnected from what is actually deployed."
        />
        <QItem
          question="What is your position on liability if the tool produces a discriminatory outcome?"
          why="The EEOC guidance is explicit: the vendor-assurance defence does not work. Understanding the vendor's liability position, and what it does not cover, is the starting point for understanding your own exposure."
        />
      </div>

      <h2>What the legal cases tell you</h2>

      <p>Across the major AI hiring cases so far, the pattern is remarkably consistent: organisations deployed systems they did not fully understand, could not adequately explain, and had not independently validated. The details differ. The failure point is consistent.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
        gap: 9,
        margin: "1.25rem 0 2rem",
      }}>
        <LegalCard
          label="EEOC v. iTutorGroup, 2023"
          text="$365,000 settlement. AI tool automatically rejected applicants based on age before any human reviewed them. The vendor's tool, the employer's liability."
        />
        <LegalCard
          label="Mobley v. Workday, ongoing"
          text="14,000+ opt-ins, potentially 1.1 billion rejected applications under review. A federal court established that AI vendors may face liability alongside employers. Neither party is insulated."
        />
        <LegalCard
          label="HireVue BIPA class action"
          text="Facial recognition and biometric data collected during video interviews without adequate disclosure. Candidates did not know what was being collected or how it was being used."
        />
        <LegalCard
          label="UK ICO audit, 2024"
          text="296 recommendations across vendor engagements. Tools inferring gender and ethnicity from names. Vendors misclassifying themselves as processors to avoid compliance obligations."
        />
      </div>

      <h2>What a reasonable vendor response looks like</h2>

      <p>A vendor who cannot answer the questions in this article is not necessarily hiding something. They may not have done the work. But the practical consequence for your organisation is the same either way.</p>

      <p>A vendor who has done the work will be able to describe their training data and validation methodology in plain terms, provide an independent bias audit with published results, explain how candidate decisions can be reviewed and challenged, specify what happens to candidate data and when it is deleted, and commit contractually to notifying you of model updates.</p>

      <p>That is not an unreasonable ask. It is the minimum due diligence for a tool that is making consequential decisions about people's careers. The organisations that normalise asking these questions will be better positioned when regulation tightens, when a candidate challenges a decision, and when a court wants to know what governance was in place.</p>

      <p>The vendor who cannot answer clearly is not your compliance problem to solve. But deploying their tool without answers is.</p>

      {/* CTA */}
      <div style={{
        borderTop: `0.5px solid ${border}`,
        marginTop: "2.75rem",
        paddingTop: "1.5rem",
      }}>
        <p style={{ fontSize: 14, color: inkMid, lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          If you want a structured set of questions to take into vendor conversations, the procurement toolkit is built for exactly that.
        </p>
        <p style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.06em", color: green, margin: "0 0 8px",
        }}>
          Put it into practice
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>
          AI Procurement Questions for Hiring Teams
        </p>
        <p style={{ fontSize: 12.5, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>
          48 structured vendor evaluation questions across 6 categories. Red flags, guidance notes, and a comparison framework. Built for HR and procurement teams who are not AI experts.
        </p>
        <a
          href="/thank-you/ai-procurement-questions"
          style={{
            display: "inline-block",
            background: green,
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
            padding: "9px 16px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          Buy the toolkit — £79
        </a>
      </div>

    </ArticleLayout>
  );
}