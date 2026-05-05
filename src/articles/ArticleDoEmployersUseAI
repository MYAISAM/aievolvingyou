import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function StatRow({ stat, context }) {
  return (
    <div style={{
      display: "flex",
      gap: 20,
      alignItems: "flex-start",
      padding: "16px 20px",
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 10,
      marginBottom: 10,
    }}>
      <p style={{ fontSize: 22, fontWeight: 700, color: green, margin: 0, flexShrink: 0, lineHeight: 1 }}>{stat}</p>
      <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{context}</p>
    </div>
  );
}

function HowAIIsUsed() {
  const uses = [
    {
      label: "CV and resume screening",
      detail: "The most common application. An algorithm scans your CV for keywords, experience signals, and qualifications that match the job description. In many cases this happens before any human sees your application.",
      common: true,
    },
    {
      label: "Applicant Tracking Systems (ATS)",
      detail: "Most large employers use an ATS to collect and organise applications. Many now have AI built in that ranks or scores candidates automatically. If your CV does not parse cleanly into the system, it can be deprioritised regardless of your actual fit.",
      common: true,
    },
    {
      label: "Video interview analysis",
      detail: "Some employers use tools that analyse recorded video interviews for tone, word choice, and delivery patterns. Less common than CV screening but growing, particularly in volume hiring. You may not be told this is happening.",
      common: false,
    },
    {
      label: "AI chatbot pre-screening",
      detail: "An automated chatbot asks initial screening questions before any human contact. Common in retail, logistics, and hospitality hiring at scale. The chatbot scores responses and decides whether you progress.",
      common: false,
    },
    {
      label: "Skills assessments scored by AI",
      detail: "Tests or tasks completed as part of the application process, scored automatically. The results feed into a ranking rather than being reviewed individually by a recruiter.",
      common: false,
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 32px" }}>
      {uses.map((u, i) => (
        <div key={i} style={{
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "18px 22px",
        }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: 0 }}>{u.label}</p>
            <span style={{
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              color: u.common ? green : orange,
              background: u.common ? greenLight : "#fff8f4",
              borderRadius: 20,
              padding: "2px 8px",
              flexShrink: 0,
            }}>
              {u.common ? "Very common" : "Growing"}
            </span>
          </div>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{u.detail}</p>
        </div>
      ))}
    </div>
  );
}

function WhatThisMeans() {
  const points = [
    {
      heading: "Keywords matter more than at first contact",
      body: "If your CV does not contain the language the job description uses, an AI screener may filter it out before a human sees it. This is not about gaming the system — it is about making sure your genuine experience is legible to automated tools. Use the words from the job description where they accurately describe what you do.",
    },
    {
      heading: "Generic applications are higher risk",
      body: "A CV sent to 50 jobs without tailoring was always a weaker approach. AI screening makes it riskier. Systems that rank candidates by relevance will consistently deprioritise applications that do not clearly match the role. Tailoring is no longer optional for competitive roles.",
    },
    {
      heading: "You may not know it is happening",
      body: "Most employers are not required to tell you that AI is being used to screen your application. Unless they volunteer this, you are unlikely to find out until you are already through or rejected. The practical response is to assume AI screening is in play for any mid-to-large employer and prepare accordingly.",
    },
    {
      heading: "Rejection may not mean what you think",
      body: "If you are not hearing back, it is worth considering whether your CV is being filtered rather than reviewed. A qualified candidate can be screened out by a mismatch in terminology alone. This is not a reflection of your ability — it is a reflection of how your experience is being communicated.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "20px 0 32px" }}>
      {points.map((p, i) => (
        <div key={i} style={{
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "20px 22px",
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 8px" }}>{p.heading}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{p.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function ArticleDoEmployersUseAI() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="Do employers use AI to screen job applications?"
      nextArticle={{
        slug: "how-to-tell-if-ai-is-screening-you",
        label: "Read next",
        title: "How do I know if a company is using AI to screen my application?",
        excerpt: "The signals to look for, what it means for how you apply, and what you can actually do about it.",
      }}
    >
      <p>Yes — and more widely than most candidates realise. The majority of large employers now use some form of AI or automated tool at some point in the hiring process. For many roles, your application will be assessed by an algorithm before any human sees it.</p>

      <p>That does not mean every employer uses it, or uses it in the same way. The picture is more complicated than a simple yes or no — and understanding the detail changes how you approach your applications.</p>

      <h2>How widespread is it?</h2>

      <StatRow stat="87%" context="of organisations globally use AI at some stage in their hiring process, according to multiple surveys from 2025." />
      <StatRow stat="99%" context="of Fortune 500 companies use Applicant Tracking Systems, most of which now include AI-powered ranking and filtering." />
      <StatRow stat="75%" context="of resumes are estimated to be filtered out before a human reviews them, due to automated screening systems." />
      <StatRow stat="48%" context="of hiring managers report actively using AI to screen applications — though this varies significantly by company size and sector." />

      <p>Those numbers look alarming until you read the detail. A separate survey of 600 hiring managers found that over a third said they do not use AI tools in their hiring process at all, rising to almost three quarters among older hiring managers. The adoption is real but uneven. Smaller employers are far less likely to use AI screening than large ones. Sectors like retail, logistics, and financial services tend to use it more heavily. Creative industries and small businesses tend to use it less.</p>

      <p>The honest answer is: it depends on who you are applying to. But for any employer with a recognisable name, a high volume of applicants, or an online application system, you should assume some form of AI is in play.</p>

      <h2>How employers actually use AI in hiring</h2>

      <p>AI is not one thing. It shows up at different points in the hiring process, in different ways. These are the most common.</p>

      <HowAIIsUsed />

      <h2>Why employers use it</h2>

      <p>The scale problem is real. Goldman Sachs received over 315,000 applications for its 2024 internship programme. Google receives millions of applications a year. Even a mid-sized company posting a single role can receive hundreds of CVs within days of posting.</p>

      <p>No recruiter team can meaningfully review that volume manually. AI screening is primarily a response to that problem — a way to reduce a large pool to a manageable shortlist before human review begins.</p>

      <p>That context matters because it changes how you think about what is happening. The AI is not making a final decision about you as a person. It is doing a first-pass filter to decide whether your application looks relevant enough to warrant a human's time. That is a much narrower question — and one you can prepare for.</p>

      <h2>What this means for how you apply</h2>

      <WhatThisMeans />

      <h2>What AI screening cannot assess</h2>

      <p>It is worth being clear about what these systems are not doing. AI screening tools are generally assessing surface signals — keywords, structure, formatting, stated experience. They are not assessing your potential, your character, your working style, or whether you would actually be good at the job.</p>

      <p>That means the candidates who get through AI screening are not necessarily the best candidates. They are the candidates whose applications were most legible to the system. Getting past the screen is a prerequisite for the actual assessment — it is not the assessment itself.</p>

      <p>Once you are talking to a human, the dynamic shifts completely. That is where your preparation, your self-awareness, and your ability to communicate your experience clearly becomes what matters. The AI gets you into the room. What you do in the room is still entirely up to you.</p>

      <h2>The trust problem candidates are right to notice</h2>

      <p>Concern about AI screening is well-founded and not just a feeling. Research consistently shows that AI screening tools can filter out qualified candidates due to terminology mismatches, unconventional career paths, or biases baked into the training data. A system trained on historically successful hires tends to favour candidates who look like past hires — which can disadvantage career changers, people returning from gaps, and candidates from underrepresented backgrounds.</p>

      <p>This is not an argument against preparing for AI screening. It is an argument for understanding what you are dealing with, so you can give yourself the best possible chance within a system that is imperfect but real.</p>

    </ArticleLayout>
  );
}