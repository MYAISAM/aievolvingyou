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

function TimelineItem({ date, title, text, isLast }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "120px 1fr",
      gap: 20,
      padding: "16px 0",
      borderBottom: isLast ? "none" : `0.5px solid ${border}`,
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 700,
        color: green,
        lineHeight: 1.4,
        paddingTop: 2,
      }}>{date}</div>
      <div>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.55, margin: 0 }}>{text}</p>
      </div>
    </div>
  );
}

function TableRow({ col1, col2, col3, isLast }) {
  return (
    <tr>
      <td style={{ padding: "10px 14px", fontSize: 13, color: inkMid, borderBottom: isLast ? "none" : `0.5px solid ${border}`, lineHeight: 1.55, verticalAlign: "top", fontWeight: 600 }}>{col1}</td>
      <td style={{ padding: "10px 14px", fontSize: 13, color: inkMid, borderBottom: isLast ? "none" : `0.5px solid ${border}`, lineHeight: 1.55, verticalAlign: "top" }}>{col2}</td>
      <td style={{ padding: "10px 14px", fontSize: 13, color: inkMid, borderBottom: isLast ? "none" : `0.5px solid ${border}`, lineHeight: 1.55, verticalAlign: "top" }}>{col3}</td>
    </tr>
  );
}

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

export default function ArticleEUAIAct() {
  return (
    <ArticleLayout
      title="EU AI Act hiring compliance: what HR teams need to do now"
      bucket="For Organisations"
      hideCoachCta={true}
      nextArticle={{
        label: "Related reading",
        title: "Who owns AI in your hiring process?",
        excerpt: "When something goes wrong with an AI hiring tool, accountability tends to dissolve. HR points to the vendor. The vendor points to the data. The data points to no one.",
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
        The August 2026 deadline for high-risk AI systems is the date most HR teams have been working toward. In May 2026, EU lawmakers provisionally agreed to push it to December 2027. That agreement is not yet law. Until it is formally adopted, the original deadline remains the current legal position. The advice from employment lawyers is consistent: keep preparing.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      {/* Deadline alert */}
      <div style={{
        background: orangeLight,
        border: `1px solid ${orangeBorder}`,
        borderRadius: 10,
        padding: "1rem 1.25rem",
        margin: "0 0 2rem",
      }}>
        <p style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: orange, margin: "0 0 6px" }}>
          Deadline status — May 2026
        </p>
        <p style={{ fontSize: 13.5, color: inkMid, lineHeight: 1.6, margin: 0 }}>
          A provisional political agreement under the Digital Omnibus would push high-risk AI Act obligations from 2 August 2026 to 2 December 2027. This is not yet law. The original August 2026 deadline remains the current legal position unless and until the Omnibus changes are formally adopted and published in the EU Official Journal. Employment lawyers advise continuing to prepare for August 2026. The AI Act remains operationally and legally fluid in places, particularly around implementation timing and practical enforcement guidance.
        </p>
      </div>

      <h2>Why the deadline shift does not reduce the urgency</h2>

      <p>There is a temptation, when a regulatory deadline looks like it might move, to treat the pressure as having lifted.</p>

      <p>With the EU AI Act, that temptation is worth resisting.</p>

      <p>The Digital Omnibus political deal reached on 7 May 2026 would push the Annex III high-risk AI obligations from 2 August 2026 to 2 December 2027. But political agreement is not the same as legal adoption. If formal adoption does not happen before 2 August, the original deadline applies.</p>

      <p>Littler's guidance is direct: organisations should continue preparing as if August 2026 remains the operative date.</p>

      <p>There is also a broader point. Even if the deadline shifts, the obligations themselves do not disappear. They arrive later. And the existing UK GDPR obligations — as enforced and interpreted by the ICO — already apply now, regardless of what the EU AI Act does.</p>

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
        The Act does not prohibit AI in hiring. It regulates it. Organisations using AI in hiring are not being asked to stop. They are being asked to govern it properly, document it, and demonstrate human oversight.
      </div>

      <h2>What the Act covers in hiring</h2>

      <p>The EU AI Act classifies certain AI systems as high-risk under Article 6 and Annex III.</p>

      <p>For HR teams, the relevant categories are explicit: AI used for recruitment and selection of natural persons, notably for placing targeted job advertisements, for analysing and filtering applications, and for evaluating candidates in the course of interviews or tests.</p>

      <p>That covers a wide range of tools currently in use. CV screening software, video interview assessment platforms, automated application ranking systems, and AI-assisted shortlisting tools all fall within scope if they are used in relation to EU-based candidates or in EU-based operations.</p>

      <p>The scope question for UK employers selling into or operating in the EU remains highly relevant. The Act applies based on where candidates are located, not just where the employer is based. UK employers with EU operations, EU candidates, or EU clients should take legal advice on their specific situation.</p>

      <h2>The timeline HR teams need to know</h2>

      <div style={{ margin: "1.25rem 0 2rem", background: surface, borderRadius: 10, border: `0.5px solid ${border}`, padding: "0 1.25rem" }}>
        <TimelineItem
          date="August 2024"
          title="Act entered into force"
          text="The EU AI Act became law. Prohibited practices provisions apply from this date."
        />
        <TimelineItem
          date="August 2025"
          title="GPAI and governance obligations"
          text="General-purpose AI model obligations and governance structure requirements came into effect."
        />
        <TimelineItem
          date="August 2026"
          title="High-risk AI — current legal deadline"
          text="Full Annex III obligations including hiring AI apply. This date legally stands unless the Omnibus deal is formally adopted before it."
        />
        <TimelineItem
          date="December 2027"
          title="Proposed Omnibus extension"
          text="If the Digital Omnibus deal is formally adopted before August 2026, this becomes the operative deadline for Annex III high-risk systems including hiring AI."
          isLast={true}
        />
      </div>

      <h2>Provider vs deployer: where the obligations fall</h2>

      <p>The EU AI Act distinguishes between providers (who build AI systems) and deployers (who use them in their operations).</p>

      <p>HR teams buying and using AI hiring tools are deployers. The obligations fall on them regardless of what the vendor does or does not provide. This is the conceptual point most HR teams have not yet internalised: your vendor's compliance does not substitute for your own.</p>

      <div style={{ margin: "1.5rem 0 2rem", overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr>
              {["Obligation", "Article", "What it means in practice"].map((h, i) => (
                <th key={i} style={{
                  background: greenLight, color: "#2d5249", fontWeight: 700,
                  textAlign: "left", padding: "10px 14px",
                  fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em",
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <TableRow
              col1="Human oversight"
              col2="Art. 14 / Art. 26"
              col3="A named, competent person must be able to understand, monitor, and where necessary override the AI system's outputs. Rubber-stamping a score does not meet this bar."
            />
            <TableRow
              col1="Use within intended purpose"
              col2="Art. 26(1)"
              col3="The tool must be used only for the purposes documented in the provider's instructions. Using a CV screener for a different role type than it was validated for is a compliance failure."
            />
            <TableRow
              col1="Candidate notification"
              col2="Art. 26(6) / Art. 50"
              col3="Candidates must be informed when AI systems are being used in assessment processes. That disclosure should occur before or at the point of assessment."
            />
            <TableRow
              col1="Fundamental rights impact assessment"
              col2="Art. 27"
              col3="Certain deployers — particularly public bodies and deployers operating in specified high-risk contexts — may be required to carry out a documented assessment of how the AI system affects fundamental rights, including non-discrimination."
            />
            <TableRow
              col1="Record-keeping"
              col2="Art. 12 / Art. 26(5)"
              col3="Logs of system operation must be retained for at least six months. Deployers must be able to demonstrate what the system did and when."
            />
            <TableRow
              col1="Incident reporting"
              col2="Art. 26(5)"
              col3="Serious incidents and malfunctioning that may breach obligations or create risk may trigger reporting obligations to the provider and, in some circumstances, to national authorities."
              isLast={true}
            />
          </tbody>
        </table>
      </div>

      <h2>The readiness gap</h2>

      <p>Littler's survey of European employers, published in November 2025, found that 72% are already using AI in HR functions.</p>

      <div style={{
        background: surface,
        border: `0.5px solid ${border}`,
        borderRadius: 10,
        padding: "14px 18px",
        display: "grid",
        gridTemplateColumns: "80px 1fr",
        gap: 16,
        alignItems: "start",
        margin: "0 0 1.1rem",
      }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: green, lineHeight: 1.2 }}>18%</div>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.55, margin: 0 }}>
          Only 18% of European employers describe themselves as very prepared for EU AI Act compliance, according to Littler's November 2025 survey — despite 72% already using AI in HR functions.
        </p>
      </div>

      <p>That is a significant gap between adoption and governance, and it exists in organisations that have known about this regulation for years.</p>

      <p>The preparation failures are consistent. No named human oversight person. No candidate notification process. No fundamental rights impact assessment. No documented use-case scope. No log retention.</p>

      <p>These are not edge cases. They describe the majority of current deployments.</p>

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
        The organisations that will face the most difficulty are not the ones that used AI in hiring. They are the ones that used it without building any of the governance infrastructure the regulation requires — and assumed the vendor's compliance was sufficient cover for their own.
      </div>

      <h2>The UK position</h2>

      <p>UK organisations are not directly subject to the EU AI Act unless they deploy AI systems used by candidates or workers in EU member states.</p>

      <p>But the existing UK GDPR obligations — as enforced and interpreted by the ICO — already create overlapping requirements that apply now.</p>

      <p>The ICO's March 2026 guidance on automated decision-making in recruitment is explicit: where AI tools make or materially influence hiring decisions, existing UK GDPR requirements apply. That means candidate notification, a meaningful human review mechanism, and the ability to explain how a decision was reached.</p>

      <p>The ICO's November 2024 audit found many employers were already non-compliant with these existing requirements. The EU AI Act, when it fully applies, adds a further layer on top of obligations that are already live.</p>

      <p>UK employers with EU operations, EU candidates, or EU clients should take legal advice on whether the EU AI Act applies to their specific situation. The territorial scope question is not always straightforward, and the legal and operational exposure from getting it wrong is significant.</p>

      <h2>What to do now</h2>

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
          Practical steps for HR teams
        </p>
        <CheckItem>Map every AI tool currently used in your hiring process and confirm whether it falls within EU AI Act Annex III scope</CheckItem>
        <CheckItem>Name a human oversight person for each in-scope tool with documented responsibilities — a job title is not sufficient, the person must be competent to understand and override the system</CheckItem>
        <CheckItem>Build a candidate notification process that discloses AI use before or at the point of assessment, not buried in a privacy policy</CheckItem>
        <CheckItem>Request technical documentation from each vendor confirming intended use scope, bias testing methodology, and training data validation</CheckItem>
        <CheckItem>Establish log retention for AI-assisted decisions — minimum six months under Article 12</CheckItem>
        <CheckItem>Assess whether your organisation falls within the scope of the fundamental rights impact assessment requirement under Article 27</CheckItem>
        <CheckItem>Review vendor contracts for notification obligations on model updates — if none exist, add them</CheckItem>
        <CheckItem>Take legal advice on territorial scope if you operate across UK and EU jurisdictions</CheckItem>
        <p style={{
          fontSize: 12.5, color: inkMid, fontStyle: "italic",
          margin: "10px 0 0", borderTop: `0.5px solid ${border}`, paddingTop: 10,
        }}>
          These steps apply regardless of whether the August 2026 deadline shifts. They represent the minimum governance infrastructure for defensible AI use in hiring under current and forthcoming regulation.
        </p>
      </div>

      <p>The provisional Omnibus deal, if it becomes law, gives organisations more time. It does not change what they are required to build.</p>

      <p>Legal, operational, and reputational exposure do not pause during the extension period.</p>

      <p>Prepare for August. If the deadline moves, you will be ahead. If it does not, you will be ready. And until the law formally changes, the August 2026 deadline remains the operative position.</p>
  
    </ArticleLayout>
  );
}
