import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function CheckItem({ children }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start", marginBottom: 9 }}>
      <div style={{
        width: 12, height: 12, borderRadius: 3,
        border: "1.5px solid rgba(63,111,99,0.5)",
        flexShrink: 0, marginTop: 2,
      }} />
      <span style={{ fontSize: 13, color: inkMid, lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}

function TableRow({ col1, col2, col3, isLast }) {
  return (
    <tr>
      <td style={{
        padding: "10px 14px", fontSize: 13, color: inkMid,
        borderBottom: isLast ? "none" : `0.5px solid ${border}`,
        lineHeight: 1.55, verticalAlign: "top", fontWeight: 600,
      }}>{col1}</td>
      <td style={{
        padding: "10px 14px", fontSize: 13, color: inkMid,
        borderBottom: isLast ? "none" : `0.5px solid ${border}`,
        lineHeight: 1.55, verticalAlign: "top",
      }}>{col2}</td>
      <td style={{
        padding: "10px 14px", fontSize: 13, color: inkMid,
        borderBottom: isLast ? "none" : `0.5px solid ${border}`,
        lineHeight: 1.55, verticalAlign: "top",
      }}>{col3}</td>
    </tr>
  );
}

export default function ArticleAIHiringOwnership() {
  return (
    <ArticleLayout
      title="Who owns AI in your hiring process?"
      bucket="For Organisations"
      hideCoachCta={true}
      nextArticle={{
        label: "Next in this series",
        title: "The EU AI Act and hiring: what HR teams need to do before August 2026",
        excerpt: "The August 2026 deadline for high-risk AI systems is not a future concern. For organisations using AI in candidate screening and selection, it is a current obligation.",
        slug: "eu-ai-act-hiring",
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
        When something goes wrong with an AI hiring tool, accountability tends to dissolve. HR points to the vendor. The vendor points to the data. The data points to no one. That is not an accident. It is what happens when organisations deploy technology without deciding who is responsible for it.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>I want to ask you a direct question before we get into the evidence.</p>

      <p>If your AI screening tool rejected a candidate tomorrow on the basis of a protected characteristic, who in your organisation would own that problem? Not who would be aware of it, or who would be involved in dealing with it. Who owns it? Who signed off on the tool being used in the first place? Who reviews what it is doing in practice? Who is accountable if it is doing something it should not be?</p>

      <p>Most organisations cannot answer that question cleanly. Not because they are careless, but because the question was never formally asked when the tool was adopted. The tool was procured, it was deployed, and the accountability question got deferred until something went wrong.</p>

      <p>That deferral is now a legal and operational liability.</p>

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
        The accountability gap in AI hiring is not a technology problem. It is a governance problem. Most organisations are running tools that make consequential decisions about people, with no named owner, no review process, and no clear line of responsibility when something goes wrong.
      </div>

      <h2>The gap between adoption and governance</h2>

      <p>SHRM's 2026 reporting makes the structural problem visible. AI is already embedded in HR practice at scale. CHROs expect further integration this year. And yet SHRM's own data shows persistent ambiguity over who leads AI rollout and governance inside organisations. The tools are moving faster than the accountability structures that should govern them.</p>

      <p>Grant Thornton's 2026 AI Impact Survey points in the same direction. Business leaders acknowledge significant uncertainty about whether their organisations could evidence or defend their AI governance if asked to. The confidence gap between AI adoption and AI oversight is not closing. It is widening.</p>

      <p>What both reports describe is not a cautious industry still evaluating AI. It is an industry that has already deployed AI at scale and is now governing it, in most cases, with very little structure.</p>

      <h2>What the vendor contract actually says</h2>

      <p>When organisations buy AI hiring tools, they typically receive a contract structured heavily in the vendor's favour. This is not unusual in enterprise software. But AI hiring tools carry a specific risk that project management software does not: they make decisions about people that are subject to employment law, equality legislation, and increasingly, AI-specific regulation.</p>

      <p>The legal picture on vendor liability has been clarifying quickly. Bloomberg Law states the position directly: employers remain responsible for employment decisions, even when those decisions are informed by third-party technology. Courts have reinforced this. A federal court allowed claims to proceed against Workday, raising the possibility that vendors may face liability alongside employers. But the deploying organisation does not get to transfer its own obligations to the vendor.</p>

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
        The contract protects the vendor. The organisation holds the exposure. That is not a negotiating failure. It is the default position in almost every AI hiring vendor agreement currently on the market.
      </div>

      <p>This matters because most organisations have not read the liability clauses in their AI vendor contracts carefully. They have not mapped what the contract does and does not cover against their own legal obligations. And they have not asked the follow-up question: if the vendor's liability is capped, what does that leave us holding?</p>

      <h2>The three places accountability dissolves</h2>

      <p>In practice, accountability for AI hiring tools tends to dissolve in one of three places.</p>

      {/* Table */}
      <div style={{ margin: "1.5rem 0 2rem", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              {["Where it dissolves", "What it looks like", "Why it happens"].map((h, i) => (
                <th key={i} style={{
                  background: greenLight,
                  color: "#2d5249",
                  fontWeight: 700,
                  textAlign: "left",
                  padding: "10px 14px",
                  fontSize: 11,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow
              col1="At procurement"
              col2="The tool is bought by one team and used by another. No single person signs off on both the commercial and operational decision."
              col3="Procurement and HR operate separately. The person who signed the contract is not the person running the process."
            />
            <TableRow
              col1="At deployment"
              col2="The tool goes live without a named owner, without documented criteria, and without a review mechanism. It simply runs."
              col3="Deployment is treated as a technical task, not a governance decision. Nobody asks who is responsible for what the tool does."
            />
            <TableRow
              col1="At update"
              col2="The vendor updates the model. The tool the organisation evaluated is no longer the tool it is running. Nobody is notified."
              col3="Most contracts do not require disclosure of model updates. The organisation has no mechanism to know when the tool changes."
              isLast={true}
            />
          </tbody>
        </table>
      </div>

      <p>Each of these is a governance failure, not a technology failure. The tool is doing what tools do. The organisation has not built the structure to know what it is doing or to catch it when it goes wrong.</p>

      <h2>What the regulation now requires</h2>

      <p>For organisations operating within or selling into the EU, the AI Act has moved this from a governance best practice to a legal obligation. Article 26 of the EU AI Act explicitly requires deploying organisations to name a competent human oversight person for high-risk AI systems. AI used for candidate screening and selection is classified as high-risk under Article 6.</p>

      <p>That means the question of ownership is not optional for EU-scope organisations. It has a legal answer, and that answer has to be a named person with documented responsibilities.</p>

      <p>UK organisations are not currently subject to the EU AI Act directly, but the ICO's 2026 report found many employers are likely relying on solely automated decisions without realising it and without the required safeguards under UK GDPR. The ICO's position is that automated decision-making in hiring requires explicit safeguards, candidate notification, and a documented human review process. Those obligations exist now, under current UK law, not future regulation.</p>

      {/* Second circuit callout */}
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
        Ownership of AI in hiring is not a philosophical question about responsibility culture. It is a specific legal requirement in an increasing number of jurisdictions, and a liability question in all of them.
      </div>

      <h2>What ownership actually means in practice</h2>

      <p>Naming an owner for AI in hiring does not mean one person takes personal responsibility for everything a tool does. It means the organisation has created a clear line of accountability that connects procurement, deployment, monitoring, and review.</p>

      <p>In practice, that requires four things to be true simultaneously.</p>

      {/* Checklist */}
      <div style={{
        background: surface,
        borderRadius: 10,
        border: `0.5px solid ${border}`,
        padding: "1.1rem 1.25rem",
        margin: "1.5rem 0",
      }}>
        <p style={{
          fontSize: 10, fontWeight: 700, textTransform: "uppercase",
          color: green, letterSpacing: "0.06em", margin: "0 0 12px",
        }}>
          What meaningful AI ownership looks like
        </p>
        <CheckItem>A named person or role is accountable for what the tool does, not just for the contract that governs it</CheckItem>
        <CheckItem>That person can explain, in plain terms, what the tool is assessing candidates against and how decisions are made</CheckItem>
        <CheckItem>There is a documented review process that runs at defined intervals, not just when something goes wrong</CheckItem>
        <CheckItem>The vendor contract requires notification when the model is updated, and triggers a re-evaluation when it is</CheckItem>
        <CheckItem>Candidates are notified that AI is being used and at which stages, with a documented human review option available</CheckItem>
        <CheckItem>There is a documented escalation path when the tool produces outcomes that require human review</CheckItem>
        <p style={{
          fontSize: 12.5, color: inkMid, fontStyle: "italic",
          margin: "10px 0 0", borderTop: `0.5px solid ${border}`, paddingTop: 10,
        }}>
          Most of these do not require new technology. They require decisions, documentation, and a named person who is actually responsible.
        </p>
      </div>

      <h2>The readiness gap is not closing on its own</h2>

      <p>The data on AI governance readiness has not been improving in line with AI adoption. If anything, the gap is widening. Organisations are adding tools faster than they are building the governance structures to manage them. The organisations planning to expand AI use in hiring in 2026 are not, in the main, doing so with a governance framework already in place.</p>

      <p>The organisations that are ahead of this have understood something that the adoption curve obscures: the question is not whether to use AI in hiring. It is whether the organisation can account for what that AI is doing. That is a different question, and it requires a different kind of work.</p>

      <p>Nobody is coming to hand you a governance framework. The vendor will not build it. The regulator will ask for it after something goes wrong. The only organisation that will build it in time is the one that decides, before something goes wrong, that someone owns this.</p>



    </ArticleLayout>
  );
}