import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function FiveItem({ num, title, desc }) {
  return (
    <div style={{
      background: surface,
      border: `0.5px solid ${border}`,
      borderRadius: 10,
      padding: "14px 18px",
      display: "grid",
      gridTemplateColumns: "28px 1fr",
      gap: 12,
      alignItems: "start",
    }}>
      <div style={{ fontSize: 16, fontWeight: 700, color: green, lineHeight: 1.3 }}>{num}</div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 3px" }}>{title}</p>
        <p style={{ fontSize: 12.5, color: inkMid, lineHeight: 1.55, margin: 0 }}>{desc}</p>
      </div>
    </div>
  );
}

function StatBlock({ num, label, source }) {
  return (
    <div style={{
      background: surface,
      border: `0.5px solid ${border}`,
      borderRadius: 10,
      padding: "14px 18px",
      display: "grid",
      gridTemplateColumns: "80px 1fr",
      gap: 16,
      alignItems: "start",
    }}>
      <div style={{ fontSize: 22, fontWeight: 700, color: green, lineHeight: 1.2 }}>{num}</div>
      <div>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.55, margin: 0 }}>{label}</p>
        {source && (
          <p style={{ fontSize: 11, color: inkLight, fontWeight: 600, margin: "5px 0 0" }}>{source}</p>
        )}
      </div>
    </div>
  );
}

export default function ArticleCandidateWants() {
  return (
    <ArticleLayout
      title="What candidates actually want to know about AI in your hiring process"
      bucket="For Organisations"
      hideCoachCta={true}
      nextArticle={{
        label: "Related reading",
        title: "AI in hiring has created a trust problem on both sides of the table",
        excerpt: "Candidates do not trust the process. Organisations do not trust their own tools. The data on both sides tells the same story.",
        slug: "ai-hiring-trust-problem",
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
        Candidates are not asking organisations to stop using AI. They are asking to be told when it is happening, what it is doing, and whether a human will look at the result. Most organisations are not telling them. That gap is now showing up in withdrawal rates, offer declines, and employer brand scores.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>There is a version of this conversation that positions candidates as technophobes who need to be managed around their discomfort with AI. The data does not support that version.</p>

      <p>What the research consistently shows is something more specific and more actionable. Candidates are not categorically opposed to AI in hiring. Many accept it in principle, especially when its use is explained clearly and paired with visible human review. What they cannot accept is opacity. They want to know what is happening to them in a process that shapes their livelihood, and right now, most of them are not being told.</p>

      <p>That is not a technology problem. It is a communication and governance problem. And it has a measurable cost.</p>

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
        The crisis in candidate trust around AI in hiring is not one of technology. It is one of disclosure. Candidates will accept AI in your process. They will not accept being assessed by something they were never told about.
      </div>

      <h2>What the acceptance numbers actually say</h2>

      <p>The headline statistics on candidate attitudes toward AI in hiring are often presented as evidence of widespread resistance. Read more carefully, they tell a more nuanced story.</p>

      <p>UK survey summaries linked to Totaljobs suggest that most candidates are comfortable with AI being used in at least some parts of recruitment, but strongly oppose fully automated decisions and expect disclosure when AI is involved. HireVue's 2025 reporting suggests trust is rising in some areas, with 57% of workers saying AI could help reduce racial and ethnic bias in hiring. That is qualified optimism, not blanket endorsement.</p>

      <p>NACE-reported research shows student attitudes remain cautious. In 2024, only 18% said they were favourably impressed with employers' use of AI screening, down from 22% in 2023. Among the candidates entering the workforce now, enthusiasm is not growing. It is declining.</p>

      <p>The Capterra 2024 survey found 38% of job seekers would reject an offer from a process they described as AI-heavy. But the same research suggests candidate resistance drops when organisations explain how AI is being used and create space for questions. The rejection is not of AI. It is of AI without explanation.</p>

      {/* Inline callout */}
      <div style={{
        background: surface,
        borderLeft: `2px solid ${border}`,
        padding: "0.65rem 1rem",
        fontSize: 13.5,
        color: inkMid,
        fontStyle: "italic",
        margin: "1.25rem 0",
      }}>
        The Greenhouse 2026 report found 63% of job seekers have now faced an AI interview. 70% of them say they were never told AI was evaluating them. That is the problem in one statistic.
      </div>

      <h2>The five expectations candidates consistently raise</h2>

      <p>Across recent candidate surveys and transparency research, a consistent pattern emerges. Candidates want to know whether AI is being used, where in the process it appears, what it is assessing, whether a human reviews the output, and whether the tool has been checked for fairness or bias. These five expectations are a synthesis of multiple studies, not a single validated five-point scale.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "1.25rem 0 2rem" }}>
        <FiveItem
          num="01"
          title="That AI is being used at all"
          desc="The baseline expectation is notification before the process begins. Candidates are not asking for a technical briefing. They are asking to know that automated tools are involved before they invest time in the process."
        />
        <FiveItem
          num="02"
          title="At which stage AI is involved"
          desc="Candidates distinguish between AI being used to schedule an interview and AI being used to assess one. A general disclosure that AI exists somewhere in the process is not sufficient. They want to know which stages involve automated evaluation."
        />
        <FiveItem
          num="03"
          title="What the AI is measuring"
          desc="Penn State and URI research (Xiong and Kim, 2025) found that transparency about assessment criteria in job ads directly increases candidate trust and positive word-of-mouth about the employer. Candidates do not need a technical specification. They need a plain-language explanation of what is being evaluated."
        />
        <FiveItem
          num="04"
          title="Whether a human reviews the output"
          desc="The PNAS study by Goergen, de Bellis and Klesse (June 2025, N=13,342) found that candidates behave differently when they believe a human will review an AI assessment versus when they believe the AI decision is final. Human review is not just a legal safeguard. It is a signal of organisational fairness that candidates actively respond to."
        />
        <FiveItem
          num="05"
          title="Whether the tool has been checked for fairness"
          desc="Ochmann et al. (Information Systems Journal, 2024) found perceived algorithmic fairness is significantly higher when organisations disclose audit processes, even when detailed audit results are not shared. The commitment to checking matters, not just the outcome."
        />
      </div>

      <h2>What happens when disclosure is absent</h2>

      <p>The withdrawal data is the clearest signal that this is a business problem, not just a values question.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "1.25rem 0 2rem" }}>
        <StatBlock
          num="38%"
          label="of US candidates have already walked away from a hiring process because of concerns about AI use, according to the Greenhouse 2026 report (n=2,950). Lack of disclosure appears alongside AI-only interviews and AI monitoring as one of the leading triggers for withdrawal."
          source="Greenhouse 2026 Candidate AI Interview Report"
        />
        <StatBlock
          num="74% → 51%"
          label="Gartner reported that candidate offer acceptance fell from 74% in Q2 2023 to 51% by 2025. AI-related concerns were one of several signals shaping candidate trust during that period."
          source="Gartner, Q2 2025"
        />
      </div>

      <p>The employer brand consequences extend beyond a single hiring cycle. Research and candidate reporting both suggest that poor AI experiences are memorable, shareable, and likely to travel beyond the process itself. Public candidate commentary increasingly clusters around the same frustration: being assessed by AI without being clearly informed.</p>

      <h2>What disclosure actually requires</h2>

      <p>None of the five expectations candidates consistently raise requires significant operational change. What they require is a decision that the organisation will meet them.</p>

      <p>A pre-application or pre-interview statement covering which stages involve AI, what it is assessing, and whether human review follows. A plain-language explanation of the audit process, or an honest acknowledgement that one is in progress. A named contact or process for candidates who want to raise concerns.</p>

      <p>Research on hiring transparency suggests that proactive disclosure builds more trust than waiting for candidates to ask. The difference is not in what is said. It is in who initiates the conversation.</p>

      {/* Inline callout */}
      <div style={{
        background: surface,
        borderLeft: `2px solid ${border}`,
        padding: "0.65rem 1rem",
        fontSize: 13.5,
        color: inkMid,
        fontStyle: "italic",
        margin: "1.25rem 0",
      }}>
        Candidates are not asking for AI to be removed from your process. They are asking to be treated as adults who are entitled to know how decisions about them are being made. That is a reasonable request, and in an increasing number of jurisdictions, it is also a legal one.
      </div>

      <h2>The organisations getting this right</h2>

      <p>The employers with the strongest candidate trust scores on AI are not the ones who use AI least. They are the ones who communicate most clearly. They name the tools, describe the stages, confirm human review, and make the audit commitment visible.</p>

      <p>That is not a significant operational investment. It is a governance decision that most organisations have not yet made, partly because nobody has been asked to make it, and partly because the short-term cost of making AI visible feels higher than the long-term cost of the trust gap it creates.</p>

      <p>The long-term cost is now visible in the data. Withdrawal rates, offer declines, and brand scores are all moving in the same direction. The candidates who walk away do not always say why. The ones who complete the process do not always stay. The research on what candidates want is clear. The question is whether the organisation has decided to listen to it.</p>

      {/* CTA */}
      <div style={{
        borderTop: `0.5px solid ${border}`,
        marginTop: "2.75rem",
        paddingTop: "1.5rem",
      }}>
        <p style={{ fontSize: 14, color: inkMid, lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          If you want to know what your current process looks like from the candidate's side, the Transparency Guide is built for that.
        </p>
        <p style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          letterSpacing: "0.06em", color: green, margin: "0 0 8px",
        }}>
          Put it into practice
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>
          Candidate Transparency Guide
        </p>
        <p style={{ fontSize: 12.5, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>
          A practical guide for HR teams on communicating AI use to candidates. Covers disclosure language, timing, human review signalling, and audit transparency. Written for the people running the process, not the people who built the tool.
        </p>
        <a
          href="/resources#toolkits"
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
          See all organisational tools →
        </a>
      </div>

    </ArticleLayout>
  );
}
