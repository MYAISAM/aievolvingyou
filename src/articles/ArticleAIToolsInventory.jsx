import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const inkLight = "#999999";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function StageRow({ number, stage, detail }) {
  return (
    <div style={{
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: "13px 16px",
    }}>
      <span style={{
        fontSize: 11,
        fontWeight: 700,
        color: green,
        letterSpacing: "0.06em",
        flexShrink: 0,
        minWidth: 24,
        marginTop: 2,
      }}>
        {number}
      </span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 3px" }}>{stage}</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{detail}</p>
      </div>
    </div>
  );
}

function StageMap() {
  const stages = [
    { number: "01", stage: "Job ads and adverts", detail: "Writing assistants that generate, rewrite, or optimise job descriptions and ad copy, often built into the posting tool itself." },
    { number: "02", stage: "Sourcing", detail: "Candidate matching and outreach that surfaces and ranks passive candidates inside your ATS, your CRM, or a recruiter platform." },
    { number: "03", stage: "Application screening", detail: "Ranking and filtering of applications against a role before a human ever opens them." },
    { number: "04", stage: "Assessments", detail: "Scored skills tests, game-based assessments, and aptitude or personality tools that produce a number or a rating." },
    { number: "05", stage: "Video and voice interviews", detail: "Tools that transcribe, score, or analyse a candidate's answers, language, or delivery." },
    { number: "06", stage: "Interview note-taking", detail: "Meeting bots and note-takers that join the call, transcribe it, and summarise what was said." },
    { number: "07", stage: "Scheduling and coordination", detail: "Assistants that book interviews, reschedule, and chase candidates and panels without a human in the loop." },
    { number: "08", stage: "Analytics and reporting", detail: "Dashboards that predict time to hire, rank candidate quality, or flag attrition risk." },
    { number: "09", stage: "Vendor and platform layers", detail: "AI features sitting inside the ATS, CRM, and HRIS you already pay for, frequently switched on by default in an update you did not action." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0 32px" }}>
      {stages.map((s) => (
        <StageRow key={s.number} number={s.number} stage={s.stage} detail={s.detail} />
      ))}
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
        border: "1.5px solid rgba(63,111,99,0.5)",
        flexShrink: 0,
        marginTop: 2,
      }} />
      <span style={{ fontSize: 13, color: inkMid, lineHeight: 1.55 }}>{children}</span>
    </div>
  );
}

export default function ArticleAIToolsInventory() {
  return (
    <ArticleLayout
      track="orgs"
      bucket="For Organisations"
      title="How many AI tools are already in your hiring process?"
      hideCoachCta={true}
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
        If you cannot say how many AI tools touch your hiring process, the honest answer is almost certainly more than you think. And that matters, because you cannot govern, audit, or defend what you have never counted. Before any policy, any bias review, any vendor conversation, there is a step most teams skip: the inventory.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>Ask a hiring team how many AI tools they use and you tend to get one of two answers. Either a confident "we don't really use AI in hiring," or a single name, usually whatever the most visible screening or sourcing platform happens to be. Both answers are normally wrong, and wrong in the same direction. They undercount.</p>

      <p>I have spent the last year building tools in this space, and before that I co-founded an AI hiring product. So I have sat on both sides of the table: the vendor selling the tool, and the team trying to work out what they have actually bought. The pattern is consistent. Organisations almost always have more AI running through their hiring process than anyone in the room can list from memory.</p>

      <p>This is not a gotcha. It is a governance problem, and it is the first one to solve, because every other thing you might want to do about AI in hiring depends on knowing what is there.</p>

      <h2>Why the number is always higher than you expect</h2>

      <p>The reason is simple. AI stopped being a product category you buy and became a feature inside the products you already run.</p>

      <p>A few years ago, adding AI to your hiring meant a deliberate purchase. You evaluated a vendor, signed a contract, and switched something on. You knew you had done it. That is no longer how most AI arrives. Today the applicant tracking system you bought for workflow has quietly added candidate ranking. The job posting tool has added a writing assistant. The scheduling tool has added an automated assistant. The video platform has added scoring. None of these were sold to you as "an AI tool." They were sold to you as recruiting software, and the AI turned up later in a release note nobody read.</p>

      <p>So when someone asks "do we use AI in hiring," the mental search runs against the category that no longer exists. People look for the standalone AI product, fail to find one, and answer no. Meanwhile the actual answer is sitting in five or six tools they use every single day.</p>

      <h2>The nine places AI is already touching your hiring</h2>

      <p>Here is the map I walk teams through. It is not exhaustive, but it covers the places AI has most commonly already arrived. Read it as a checklist and count how many apply to you.</p>

      <StageMap />

      <p>Most teams I do this with stop somewhere around the fourth or fifth item and go quiet, because they had genuinely only been thinking about one or two. The point of laying it out stage by stage is that AI is rarely concentrated in the place you expect. It is spread thinly across the whole process, which is exactly what makes it easy to miss and hard to govern.</p>

      <h2>The shadow AI problem</h2>

      <p>Everything above is at least visible in principle, because it lives in tools the organisation bought. The harder layer is the AI nobody bought.</p>

      <p>A hiring manager drafts a job advert in a chatbot before pasting it into the system. A recruiter runs a browser extension that scores and summarises profiles. Someone drops an AI note-taker into an interview because it saves them writing up the conversation afterwards. None of this appears on any procurement record. It was not approved, it was not evaluated, and in many cases the rest of the team does not know it is happening.</p>

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
        The AI you can find in a contract is the easy part. The AI an individual switched on quietly, to save themselves time, is the part most likely to be touching candidate data with no oversight at all.
      </div>

      <p>This is not a discipline problem and it does not help to treat it as one. People reach for these tools because the work is heavy and the tools make it lighter. But it means an honest inventory cannot be built from the procurement list alone. You have to ask the people doing the work what they actually use, and you have to ask it in a way that does not sound like an accusation, or they will not tell you.</p>

      <h2>Why "we don't use AI in hiring" is often less true than it sounds</h2>

      <p>When a team says this, they are usually being sincere. What they mean is "we have not bought a standalone AI screening product." That can be perfectly true. But it is a statement about one category of purchase, not a statement about the process, and the gap between the two is where the exposure sits.</p>

      <p>The advert was shaped by AI. The ranking was influenced by AI. The interview was transcribed and summarised by AI. The schedule was run by AI. At what point does a process that uses AI at four stages stop being a process that "doesn't use AI"? The honest answer is that it stopped some time ago, and the belief simply has not caught up.</p>

      <p>This matters for a practical reason rather than a philosophical one. A candidate who asks whether AI was involved in their rejection does not care whether it arrived as a standalone product or a feature update. If your process is reviewed later, that distinction may not help you much. The obligation attaches to what the tool does to the candidate, not to how it appeared on your invoice. If your answer to "do you use AI in hiring" is no, and the real answer is yes at several points, that gap is now yours to explain.</p>

      <h2>What an inventory actually involves</h2>

      <p>The good news is that the fix for all of this starts with something unglamorous and entirely within your control. You make a list.</p>

      <p>An inventory is not a technical audit and you do not need a specialist to run one. You go stage by stage through your own hiring process, using a map like the one above, and for each tool in play you capture a small number of things: what it does, which stage it touches, whether it influences a decision about a person, and whether a human reviews that output before it counts. You include the shadow tools by asking your team directly, not just by reading the procurement file.</p>

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
          What a usable inventory captures
        </p>
        <CheckItem>The name of every tool that touches hiring, including features inside platforms you bought for something else</CheckItem>
        <CheckItem>Which stage of the process each one sits in</CheckItem>
        <CheckItem>What the tool actually does, in plain language, not the vendor's description</CheckItem>
        <CheckItem>Whether it influences a decision about a candidate, or only assists a human who decides</CheckItem>
        <CheckItem>Whether a person reviews its output before it affects the candidate</CheckItem>
        <CheckItem>The tools your team uses informally that never went through procurement</CheckItem>
        <p style={{
          fontSize: 12.5,
          color: inkMid,
          fontStyle: "italic",
          margin: "10px 0 0",
          borderTop: `0.5px solid ${border}`,
          paddingTop: 10,
        }}>
          You are not grading anything yet. You are just making the invisible visible. The judgements come after you can see the full picture.
        </p>
      </div>

      <p>One distinction is worth drawing while you build the list. For the tools already running, the inventory tells you what to govern. For the tools you are still evaluating or about to buy, the work is different: it is about what to ask the vendor before you sign. I have written those questions up separately in the <a href="/resources#toolkits" style={{ color: green, fontWeight: 600, textDecoration: "none" }}>Procurement Questions document</a>, so the inventory can stay focused on what you already have rather than turning into a buying exercise.</p>

      <h2>Inventory is the foundation, not the finish</h2>

      <p>Counting the tools does not govern them. It is the step that makes governing them possible.</p>

      <p>Once the map exists, the decisions that felt impossibly large become specific. This tool ranks candidates, so it needs a bias review. This one makes a decision with no human in the loop, so it needs either oversight or a change. This one touches candidate data informally, so it needs to be brought into the open or stopped. This contract says nothing about model updates, so it needs a clause. None of those calls can be made in the abstract. They can only be made against a list, because each one is a judgement about a specific tool doing a specific thing at a specific stage.</p>

      <p>That is why I always start here. Not because counting is the interesting part, but because everything interesting depends on it. The organisations that struggle with AI governance are rarely the ones that made a bad decision about a tool. They are the ones that never had the full list in front of them, and so were making every decision half blind. The inventory is how you stop doing that.</p>

      {/* Foot CTA */}
      <div style={{
        borderTop: `0.5px solid ${border}`,
        marginTop: "2.75rem",
        paddingTop: "1.5rem",
      }}>
        <p style={{ fontSize: 14, color: inkMid, lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          Once you have the list, the next question is what rules apply to each tool on it.
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
          AI Hiring Policy Framework
        </p>
        <p style={{ fontSize: 12.5, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>
          A ready to adapt framework for turning your tool inventory into clear internal rules: ownership, classification, human oversight, data protection, bias monitoring, candidate rights, and what happens when something goes wrong.
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