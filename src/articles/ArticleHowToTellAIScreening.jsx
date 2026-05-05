import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function SignalCard({ signal, what, means }) {
  return (
    <div style={{
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 10,
      padding: "20px 22px",
      marginBottom: 10,
    }}>
      <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 6px" }}>{signal}</p>
      <p style={{ fontSize: 13, color: inkMid, margin: "0 0 12px", lineHeight: 1.6 }}>{what}</p>
      <div style={{
        background: greenLight,
        borderRadius: 8,
        padding: "10px 14px",
        borderLeft: `3px solid ${green}`,
      }}>
        <p style={{ fontSize: 12, fontWeight: 600, color: green, margin: "0 0 2px", letterSpacing: "0.04em", textTransform: "uppercase" }}>What it means for you</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{means}</p>
      </div>
    </div>
  );
}

function ActionList() {
  const actions = [
    {
      number: "01",
      action: "Mirror the language of the job description",
      detail: `If the role says "stakeholder management" and your CV says "managing relationships with senior leaders," an AI keyword scan may not connect them. Use the exact phrasing from the job description where it accurately describes your experience. You are not gaming the system — you are making your genuine experience legible to it.`,
    },
    {
      number: "02",
      action: "Make your CV easy to parse",
      detail: "Complex layouts, tables, text boxes, headers in unusual fonts, and graphics can break how an ATS reads your CV. A clean, single-column format with clear section headings — Experience, Education, Skills — is more reliably parsed than a designed template. Style matters less than structure at the screening stage.",
    },
    {
      number: "03",
      action: "Put the most important information at the top",
      detail: "AI screeners weight signals differently depending on where they appear. Your most relevant experience and skills should appear prominently, not buried halfway through. If you are a career changer, a short summary at the top that contextualises your transition helps both AI and human reviewers.",
    },
    {
      number: "04",
      action: "Check for obvious keyword gaps before submitting",
      detail: "Read the job description carefully. Note the skills, tools, and phrases used repeatedly. Check whether those words appear in your CV where they genuinely apply. This takes ten minutes and meaningfully improves your chances of passing an automated screen.",
    },
    {
      number: "05",
      action: "Do not assume rejection means you were assessed",
      detail: "If you did not hear back, it is possible your application was filtered before any human reviewed it. That is useful information. It does not mean you were not right for the role — it may mean your application was not legible enough to the system. Adjust and reapply if the role is still live.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 32px" }}>
      {actions.map((a) => (
        <div key={a.number} style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "18px 22px",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>{a.number}</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 6px" }}>{a.action}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{a.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function RightsBox() {
  const rights = [
    "In the UK, you have the right under GDPR to request that a solely automated decision affecting you is reviewed by a human.",
    "New York City now requires employers to disclose the use of AI hiring tools and conduct annual bias audits.",
    "The EU AI Act classifies AI hiring tools as high-risk, requiring transparency and human oversight.",
    "In most other jurisdictions, employers are currently not required to tell you that AI is being used.",
  ];
  return (
    <div style={{
      background: "#fff8f4",
      border: "1.5px solid #f5ddc8",
      borderRadius: 10,
      padding: "20px 22px",
      margin: "16px 0 32px",
    }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: orange, margin: "0 0 14px", letterSpacing: "0.05em", textTransform: "uppercase" }}>What you are entitled to know</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {rights.map((r, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: orange, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{r}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ArticleHowToTellAIScreening() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="How do I know if a company is using AI to screen my application?"
      nextArticle={{
        slug: "do-employers-use-ai-to-screen-applications",
        label: "Related",
        title: "Do employers use AI to screen job applications?",
        excerpt: "How widespread AI screening actually is, which sectors use it most, and what it means for how you apply.",
      }}
    >
      <p>In most cases you will not be told directly. Employers are rarely required to disclose that AI is being used, and most do not volunteer it. But there are signals worth knowing — and whether or not AI is in play, the practical response is largely the same.</p>

      <h2>Signals that AI screening is likely</h2>

      <p>None of these are definitive on their own. Together they give you a reasonable read on what you are likely dealing with.</p>

      <SignalCard
        signal="The application is through an online portal with structured fields"
        what="Platforms like Workday, Greenhouse, Lever, Taleo, and iCIMS are Applicant Tracking Systems — and most now include AI-powered ranking and filtering built in. If you are filling in a structured form rather than emailing a CV directly to someone, there is very likely an ATS involved."
        means="Your CV needs to be clean and parseable. Avoid tables, text boxes, and unusual formatting. Make sure your key experience appears in plain text that a system can read."
      />

      <SignalCard
        signal="You receive an instant or very fast automated acknowledgement"
        what="A confirmation email within seconds of submitting is almost always automated. That is not unusual — but if it is followed quickly by a rejection, that is a signal the initial screen was automated too."
        means="A fast rejection is more likely to be a screening filter than a human decision. If you were genuinely qualified for the role, consider whether the way your CV was written matched the language of the job description."
      />

      <SignalCard
        signal="You are asked to complete a pre-screening questionnaire"
        what="Structured yes/no or multiple choice questions at the application stage are often used to automatically filter out candidates who do not meet minimum requirements — before any human reviews your materials."
        means="Answer these carefully and honestly. Some systems will automatically reject applications where a disqualifying answer is given, regardless of what else is in your CV."
      />

      <SignalCard
        signal="The job is at a large employer with high application volumes"
        what="Any employer receiving hundreds or thousands of applications for a single role has a practical need for automated filtering. Enterprise employers, graduate schemes, and well-known brands almost universally use ATS and AI screening at scale."
        means="For large employers, assume AI screening is in play. Tailor your CV to the specific role and use the language of the job description where it genuinely reflects your experience."
      />

      <SignalCard
        signal="You are invited to a recorded video interview as a first step"
        what="Platforms like HireVue, Spark Hire, and Vieple are used to collect recorded responses to set questions. Some use AI to analyse the responses — assessing word choice, delivery, and content — before a human reviews selected candidates."
        means="Prepare as you would for a live interview. Speak clearly and structure your answers. Do not assume a relaxed approach because there is no live interviewer on screen."
      />

      <h2>What you are entitled to know</h2>

      <p>This is an area where regulation is developing faster than most people realise — but it is patchy and jurisdiction-dependent.</p>

      <RightsBox />

      <p>In practice, exercising these rights mid-application is rare and may not be practical. The more useful response is to prepare for AI screening as a matter of course, rather than waiting to find out whether it applies.</p>

      <h2>What you can actually do about it</h2>

      <p>The good news is that preparing for AI screening and preparing for human review point in the same direction. A clear, well-structured, relevant CV serves you in both contexts. There is no version of optimising for AI that undermines how a human reads your application — as long as you are not stuffing in keywords that do not reflect your actual experience.</p>

      <ActionList />

      <h2>What happens after the screen</h2>

      <p>If your application passes the automated stage, you are into human territory. A recruiter or hiring manager will review what the system surfaced. From that point, the usual rules apply — your experience, how you present yourself, how well you have prepared.</p>

      <p>AI screening is a gatekeeping layer, not a hiring decision. Getting through it means your application reached a human who can actually assess you. That is the goal of everything above. What happens next depends on how well you have prepared for the conversation — which is a different challenge entirely, and one worth taking as seriously as the application itself.</p>

    </ArticleLayout>
  );
}