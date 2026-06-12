import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const orangeLight = "#fff8f4";
const orangeBorder = "#f5ddc8";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

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
      <div style={{ fontSize: 22, fontWeight: 700, color: green, lineHeight: 1.2 }}>
        {num}
      </div>
      <div>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.55, margin: 0 }}>{label}</p>
        {source && (
          <p style={{ fontSize: 11, color: inkLight, fontWeight: 600, margin: "5px 0 0" }}>
            {source}
          </p>
        )}
      </div>
    </div>
  );
}

function ContrastBox({ title, titleColor, background, borderColor, items, arrowColor }) {
  return (
    <div style={{
      background,
      border: `1px solid ${borderColor}`,
      borderRadius: 10,
      padding: "1rem 1.25rem",
    }}>
      <p style={{
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        color: titleColor,
        margin: "0 0 10px",
      }}>
        {title}
      </p>
      {items.map((item, i) => (
        <div key={i} style={{
          display: "flex",
          gap: 8,
          alignItems: "flex-start",
          marginBottom: 7,
          fontSize: 13,
          color: inkMid,
          lineHeight: 1.55,
        }}>
          <span style={{ color: arrowColor, fontWeight: 700, flexShrink: 0 }}>→</span>
          <span>{item}</span>
        </div>
      ))}
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
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.06em",
        color: green,
        marginBottom: 5,
        marginTop: 0,
      }}>
        {label}
      </p>
      <p style={{ fontSize: 12.5, color: inkMid, lineHeight: 1.55, margin: 0 }}>{text}</p>
    </div>
  );
}

function CheckItem({ children }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 9 }}>
      <div style={{
        width: 12,
        height: 12,
        borderRadius: 3,
        border: `1.5px solid rgba(63,111,99,0.5)`,
        flexShrink: 0,
        marginTop: 2,
      }} />
      <span style={{ fontSize: 13, color: inkMid, lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}

export default function ArticlePillar2Bias() {
  return (
    <ArticleLayout
      title="AI did not remove bias from hiring. It gave it a uniform and a spreadsheet."
      bucket="For Organisations"
      hideCoachCta={true}
      nextArticle={{
        label: "Next in this series",
        title: "Who owns AI in your hiring process?",
        excerpt: "When something goes wrong with an AI hiring tool, accountability tends to dissolve. HR points to the vendor. The vendor points to the data. The data points to no one. That is not an accident.",
        slug: "ai-hiring-ownership",
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
        The case for AI in hiring was always partly a fairness argument. Humans are biased. AI is consistent. Remove the human from the loop and you remove the problem. The evidence now tells a different story.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>I want to start with the version of this that gets told most often in vendor decks and conference keynotes.</p>

      <p>The story goes: human hiring is riddled with bias. People make snap judgements based on names, faces, accents, schools. AI removes that subjectivity. It scores everyone against the same criteria. Consistently. At scale. The result is fairer hiring.</p>

      <p>It is a compelling argument. And it is not entirely wrong. There are contexts where structured, criteria-based AI assessment genuinely reduces certain types of in-the-moment human bias. Nobody is arguing that gut-feel interviewing is a model of fairness either.</p>

      <p>But the version of AI that actually gets deployed is not that story. What gets deployed is a model trained on historical data, set against criteria that reflect existing norms, scoring candidates in ways that often cannot be fully explained, with minimal post-deployment monitoring to check what it is actually doing in practice.</p>

      <p>That is not removing bias. That is encoding it, automating it, and running it at a scale no human interviewer ever could.</p>

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
        Automation did not eliminate bias from hiring. It absorbed historical patterns, replicated them at scale, and made them harder to question by giving them the appearance of objectivity.
      </div>

      <h2>The Amazon lesson most organisations skipped</h2>

      <p>In 2014, Amazon began building an AI tool to automate CV screening. It was trained on ten years of historical hiring data, which meant it was trained primarily on ten years of who had previously been hired and promoted at Amazon. At that point in time, Amazon's technical workforce was predominantly male.</p>

      <p>By 2015, Amazon's own engineers had detected the problem. The model was downgrading CVs that included the word "women's" as in "women's chess club." It was penalising graduates of all-female colleges. It had learned that male-pattern CVs were the ones that had historically succeeded, and it was optimising accordingly.</p>

      <p>The engineers tried to fix it. They could not fully remediate the pattern. The project was scrapped in 2017. The public only found out in October 2018 when Reuters broke the story. Three to four years passed between internal detection and public disclosure.</p>

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
        Amazon's tool was not malfunctioning. It was doing exactly what it had been designed to do: find patterns in successful past hires and replicate them. The problem was what the patterns encoded.
      </div>

      <p>Amazon is not an anomaly. It became the most cited example because Reuters got the story. The more uncomfortable question is how many organisations are running a quieter version of the same dynamic right now, without knowing it.</p>

      <p>I know this problem from the other side. At CandidateX, I built tooling that used AI and NLP to redact personal identifiers from applications before a recruiter ever saw them. Removing the name, the address, the university. The things that trigger snap judgements. It worked technically. What we could not solve was adoption: most recruiters did not want to spend more time reviewing applications, even if that time meant fairer decisions. The system was not broken. The incentives were.</p>

      <h2>What the evidence now shows</h2>

      <p>Since the Amazon story broke, the research base has grown substantially. The findings are consistent across multiple methodologies, populations, and tool types.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "1.25rem 0 2rem" }}>
        <StatBlock
          num="85.1%"
          label="of cases in a 2024 University of Washington study saw AI tools prefer white-associated names over Black-associated names. The study used 554 real resumes, 571 job descriptions, three leading LLMs, 120 names across four demographic categories, and over three million comparisons."
          source="Wilson & Caliskan, UW iSchool — AAAI/ACM Conference on AI, Ethics & Society, October 2024"
        />
        <StatBlock
          num="Up to 100%"
          label="In the same study, Black male applicants were disadvantaged in up to 100% of comparisons, depending on the model."
          source="Wilson & Caliskan, UW iSchool, 2024"
        />
      </div>

      <p>Multiple studies and enforcement reviews suggest many organisations deploying AI in hiring still lack robust audit and monitoring practices. The compliance picture that has emerged in jurisdictions where regulation exists does not suggest this is a minority problem.</p>

      <p>The pattern does not stop at race. Similar issues appear in systems assessing communication style, speech, and behavioural signals.</p>

      <p>AI interview tools trained on speech and language data consistently encode the communication styles that have historically been rewarded in professional environments. Those styles are not neutral. They reflect who has historically held professional power and how they have historically spoken.</p>

      <p>Neurodivergent candidates face a related problem. Tools that score for engagement signals, speech rhythm, or eye contact in video interviews are not measuring capability. They are measuring performance against a template of neurotypical presentation that many candidates do not share and should not be required to approximate.</p>

      <h2>Why this is harder to see than human bias</h2>

      <p>Human bias is at least visible, in principle. A manager who consistently passes over women for promotion can be challenged. Their reasoning can be questioned. The pattern can be identified and addressed.</p>

      <p>Algorithmic bias is different. The model produces a score. The score looks like a measurement. It carries the implicit authority of data and technology. Candidates who are filtered out have no visibility into why. Hiring managers who rely on the score often cannot interrogate it even if they want to. Vendors frequently describe their models as proprietary, which means the organisations deploying them may be unable to explain their own decisions.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "1.5rem 0 2rem" }}>
        <ContrastBox
          title="What bias looked like before AI"
          titleColor={orange}
          background={orangeLight}
          borderColor={orangeBorder}
          arrowColor={orange}
          items={[
            "A manager makes a biased call. It can be challenged and attributed.",
            "The reasoning, however flawed, is available for scrutiny.",
            "Scale is limited to one person's reach and capacity.",
            "Correction is possible when patterns are identified.",
          ]}
        />
        <ContrastBox
          title="What algorithmic bias looks like now"
          titleColor={green}
          background="#ffffff"
          borderColor="rgba(63,111,99,0.35)"
          arrowColor={green}
          items={[
            "A model produces a score. The mechanism is opaque to the hiring manager.",
            "The appearance of objectivity makes the score harder to question.",
            "Scale is millions of decisions per cycle, often without human review.",
            "Correction requires identifying drift in a system you may not fully own or understand.",
          ]}
        />
      </div>

      <h2>Bias laundering: the compliance gap</h2>

      <p>New York City's Local Law 144 was passed in 2021 as the first major attempt to regulate AI hiring tools in the US. It required employers using automated employment decision tools to conduct annual bias audits and publish the results.</p>

      <p>A study by Cornell, Consumer Reports, and Data and Society examined 391 employers subject to the law. Only 18 published the required audit reports. A December 2025 audit by the New York State Comptroller found potential compliance violations in a sample of companies that the city's own enforcement agency had previously reviewed and largely cleared.</p>

      <p>The pattern the researchers identified has since been described as bias laundering: organisations commission audits, receive results showing disparate impact, and decline to publish them. The audit becomes a box to check rather than a mechanism for accountability.</p>

      <div style={{
        background: surface,
        borderLeft: `2px solid ${border}`,
        padding: "0.65rem 1rem",
        fontSize: 13.5,
        color: inkMid,
        fontStyle: "italic",
        margin: "1.25rem 0",
      }}>
        An unpublished bias audit is not a governance process. It is evidence that something was found, and then buried.
      </div>

      <h2>The legal exposure that is no longer theoretical</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(0,1fr))",
        gap: 9,
        margin: "1.25rem 0 2rem",
      }}>
        <LegalCard
          label="2023 — iTutorGroup / EEOC"
          text="First resolved AI hiring discrimination case. $365,000 settlement. AI tool automatically rejected applicants based on age before any human reviewed them."
        />
        <LegalCard
          label="2025 — Workday class action"
          text="A federal court allowed claims to proceed against Workday, raising the possibility that AI vendors may be treated as agents of employers in discrimination cases, exposing both sides to liability."
        />
        <LegalCard
          label="2026 — Eightfold AI class action"
          text="A live class action alleges Eightfold's platform may fall within the Fair Credit Reporting Act framework. If upheld, it would substantially expand compliance requirements for AI hiring tools."
        />
        <LegalCard
          label="2024 — UK ICO audit"
          text="296 recommendations issued to AI recruitment tool providers. ICO found tools inferring gender and ethnicity from names without disclosure, and vendors misclassifying themselves to avoid compliance duties."
        />
      </div>

      <p>The direction of travel is clear across jurisdictions. Courts and regulators are getting more specific, more active, and more willing to assign liability. The organisations that bought AI hiring tools on the basis of vendor assurances are now, in some cases, discovering what that costs.</p>

      <h2>What responsible audit practice actually requires</h2>

      <p>Auditing is the mechanism that makes any of this accountable. But not all audits are equal, and the gap between a box-ticking audit and a substantive one is significant.</p>

      <p>A responsible audit process addresses four things: what the tool is actually scoring candidates against; whether disparate impact is present across protected characteristics; whether the audit methodology is independent and its results published; and whether post-deployment monitoring tracks what the tool does in practice, not just what it did in a test environment.</p>

      <p>That last point matters considerably. Vendors update their models. When they do, the tool you evaluated is no longer the tool you are running. Without a contractual requirement for disclosure and re-evaluation on model updates, organisations are continuously exposed to drift they cannot see and did not agree to.</p>

      <div style={{
        background: surface,
        borderRadius: 10,
        border: `0.5px solid ${border}`,
        padding: "1.1rem 1.25rem",
        margin: "1.5rem 0",
      }}>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          color: green,
          letterSpacing: "0.06em",
          margin: "0 0 12px",
        }}>
          What an audit process should cover
        </p>
        <CheckItem>Documentation of what the model is scoring and how, not just vendor assurance that it does so fairly</CheckItem>
        <CheckItem>Disparate impact testing across race, gender, age, and disability at minimum</CheckItem>
        <CheckItem>Independent methodology, not a vendor-designed audit of their own tool</CheckItem>
        <CheckItem>Published results, not just an internal report that confirms compliance and disappears</CheckItem>
        <CheckItem>Post-deployment monitoring with defined review intervals</CheckItem>
        <CheckItem>Contractual requirement for disclosure when the vendor updates the model</CheckItem>
        <CheckItem>A named internal owner responsible for what the tool does in practice</CheckItem>
        <p style={{
          fontSize: 12.5,
          color: inkMid,
          fontStyle: "italic",
          margin: "10px 0 0",
          borderTop: `0.5px solid ${border}`,
          paddingTop: 10,
        }}>
          Most organisations currently have none of these in place. A vendor bias certificate is not a substitute for any of them.
        </p>
      </div>

      <h2>The harder question</h2>

      <p>Even a well-audited AI tool cannot fully resolve a deeper problem: the criteria it is scoring against.</p>

      <p>If a tool is trained to identify candidates who match the profile of people who have historically succeeded in a role, and that historical population was not diverse, then the tool is not finding the best candidates. It is finding candidates who resemble the people previously hired into a system that had its own biases baked in long before the AI arrived.</p>

      <p>This is not a technology problem. It is a design problem. The questions of what to measure, why, and against what benchmark belong to the organisation, not the vendor. AI can execute those decisions at scale and at speed. It cannot make them legitimate on its own.</p>

      <p>The organisations getting this right have understood something the vendor sales pitch never quite says: the AI reflects the decisions that go into it. If those decisions are not interrogated, the AI does not fix them. It accelerates them.</p>

      <p>Bias did not get removed from hiring when AI arrived. It got a new set of tools, a larger operational reach, and a harder-to-challenge wrapper. The organisations that recognise this now, and build processes to address it, will not be waiting for a regulator or a court to make the point for them.</p>

      {/* CTA */}
      <div style={{
        borderTop: `0.5px solid ${border}`,
        marginTop: "2.75rem",
        paddingTop: "1.5rem",
      }}>
        <p style={{ fontSize: 14, color: inkMid, lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          If this is the problem, the next question is what to check inside your own process.
        </p>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: green,
          margin: "0 0 8px",
        }}>
          Put it into practice
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>
          Bias Audit Checklist for AI Hiring
        </p>
        <p style={{ fontSize: 12.5, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>
          A structured internal review tool to identify where bias risk is entering or scaling in your AI-enabled hiring process. Seven audit dimensions, 40 questions, practical remediation prompts.
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
