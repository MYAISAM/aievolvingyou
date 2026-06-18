import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function STARBreakdown() {
  const parts = [
    { letter: "S", label: "Situation", description: "Set the scene briefly. One or two sentences of context. This is just the setup.", tip: "Keep it short. The situation is not the interesting part.", colour: "#e8f4f0" },
    { letter: "T", label: "Task", description: "What was your specific responsibility? What were you expected to do?", tip: "Be specific about what you personally needed to do.", colour: "#edf4f2" },
    { letter: "A", label: "Action", description: "What did you do? Not your team. Not your manager. You.", tip: "This is the heart of your answer. Spend the most time here.", colour: "#f0f0fd" },
    { letter: "R", label: "Result", description: "What happened? What changed because of what you did?", tip: "Quantify where you can. Numbers, percentages, time saved.", colour: "#fdf4e4" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, margin: "24px 0 32px" }}>
      {parts.map((part) => (
        <div key={part.letter} style={{ background: part.colour, borderRadius: 10, padding: "20px 20px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 28, fontWeight: 700, color: green, lineHeight: 1, letterSpacing: "-0.02em" }}>{part.letter}</div>
          <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{part.label}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{part.description}</p>
          <p style={{ fontSize: 12, color: green, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{part.tip}</p>
        </div>
      ))}
    </div>
  );
}

// Re-skinned to new design system (was orange/warning, now surface/border)
function Mistake({ title, children }) {
  return (
    <div style={{ background: surface, border: `1px solid ${border}`, borderLeft: `3px solid ${green}`, borderRadius: 8, padding: "12px 16px", margin: "10px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{children}</p>
      </div>
    </div>
  );
}

function BuildSteps() {
  const steps = [
    "Write down 5-6 experiences you are proud of. Do not filter yet.",
    "For each one, identify S, T, A, R. No clear action or result? The story is not strong enough.",
    "Time yourself. A strong STAR answer lands in 90 seconds to 2 minutes when spoken.",
    "Say it out loud. The gap between how it reads and how it sounds when nervous is significant.",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 28px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
          <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step}</p>
        </div>
      ))}
    </div>
  );
}

// MERGED FROM BEHAVIOURAL: Five Themes
function FiveThemes() {
  const themes = [
    {
      number: "01",
      label: "Delivering results under pressure",
      prompt: "A time you had a tight deadline, competing demands, or limited resources and got the outcome anyway.",
      colour: "#e8f4f0",
    },
    {
      number: "02",
      label: "Working with and through other people",
      prompt: "A time you collaborated across teams, managed conflict, influenced without authority, or brought different views toward a shared outcome.",
      colour: "#edf4f2",
    },
    {
      number: "03",
      label: "Dealing with setbacks and failure",
      prompt: "A time something went wrong. What happened, what did you do, and what did you take from it? This is an opportunity to show resilience.",
      colour: "#f0f0fd",
    },
    {
      number: "04",
      label: "Adapting to change",
      prompt: "A time the plan changed, the priorities shifted, or you had to work in a new way. How did you respond?",
      colour: "#fdf4e4",
    },
    {
      number: "05",
      label: "Taking initiative and driving improvement",
      prompt: "A time you spotted a problem or opportunity and did something about it without being asked.",
      colour: "#f0f4f3",
    },
  ];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, margin: "20px 0 32px" }}>
      {themes.map((theme) => (
        <div key={theme.number} style={{ background: theme.colour, borderRadius: 10, padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em" }}>{theme.number}</span>
          <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{theme.label}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{theme.prompt}</p>
        </div>
      ))}
    </div>
  );
}

// MERGED FROM BEHAVIOURAL: Example Bank build steps
function ExampleBankSteps() {
  const steps = [
    "Write down 6-8 experiences you are proud of, or that taught you something significant. Do not filter yet.",
    "For each one, check it has a clear situation, a specific action, and a concrete result. No result? Not strong enough.",
    "Map each example against the five themes. One strong example can cover multiple themes depending on how you frame it.",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
          <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default function ArticleSTAR() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title="The STAR method explained, with three real examples you can actually learn from"
    >
      <p>Most interview advice tells you what the STAR method stands for. Situation, Task, Action, Result — understood. What it does not tell you is why most people's STAR answers still fall flat, and what the difference looks like in practice.</p>

      <p>This article covers what STAR actually is, where people go wrong at each stage, three full worked examples, the five behavioural themes that come up in almost every interview, and how to build a bank of strong answers before you walk in the room.</p>

      <h2>What the STAR method is actually for</h2>

      <p>Interviewers ask behavioural questions — "tell me about a time when...", "give me an example of..." — because they believe past behaviour predicts future performance. They are not asking you to tell a story for the sake of it. They are trying to work out whether you have actually done the thing they need you to do, or something close enough that they can trust you to do it again.</p>

      <p>The STAR method gives you a structure to answer those questions in a way that is complete, credible, and easy to follow. Without it, most people either give vague generalisations ("I am really good at handling pressure") or ramble through a story that does not have a clear point.</p>

      <h2>Breaking down each part</h2>

      <STARBreakdown />

      <h2>Where people go wrong</h2>

      <Mistake title="Too much situation, not enough action">
        People spend two minutes setting up the context and then rush through what they actually did. Flip the ratio — the action is what you are being assessed on.
      </Mistake>

      <Mistake title='"We" instead of "I"'>
        The interviewer is hiring you, not your team. Your specific contribution needs to be clear throughout.
      </Mistake>

      <Mistake title="No result, or a vague one">
        "It went well" tells the interviewer nothing. "Customer complaints dropped by 30% over the following quarter" tells them something real.
      </Mistake>

      <h2>Example 1: Customer service</h2>

      <p><strong>The question:</strong> "Tell me about a time you dealt with a difficult customer."</p>

      <p>In my role as a customer service advisor, we had a period where supply chain disruptions were causing significant delivery delays. I was responsible for managing incoming complaints, and one customer had been waiting six weeks for a large order critical for their business.</p>

      <p>I started by letting them speak without interrupting — they needed to feel heard. Then I pulled up their order history, identified exactly where the hold-up was, and was honest with them about what had gone wrong. I arranged for a partial shipment within 48 hours, escalated the remainder directly to our logistics manager, and called the customer back myself the following day to confirm it was on track.</p>

      <p>The customer ended up leaving a positive review specifically mentioning that interaction. The complaint was closed without further escalation, and my manager used that case as a training example for the rest of the team.</p>

      <h2>Example 2: Graduate or early career</h2>

      <p><strong>The question:</strong> "Tell me about a time you led a team toward a shared goal."</p>

      <p>In my final year, I led a four-person team on a semester-long project to develop and present a full marketing campaign for a charity partner. About three weeks in, two team members had very different ideas about direction and it was affecting the group dynamic. I set up a meeting where each person presented their idea with reasoning rather than just defending their position. We mapped both approaches against the brief and the client's constraints, and I proposed a hybrid approach that incorporated the core insight from one idea and the execution strategy from the other.</p>

      <p>Our final presentation was selected by the professor as the class example. More importantly, the two team members who had been at odds worked well together for the rest of the project.</p>

      <h2>Example 3: Retail or operations</h2>

      <p><strong>The question:</strong> "Tell me about a time you improved a process or made something work better."</p>

      <p>I was working as a senior sales assistant and we were consistently having issues with a particular section of the shop floor. I spent a week observing customer movement patterns during peak hours and realised the layout was not matching how people actually navigated the space. I also noticed our restocking schedule meant the section looked great at 9am and chaotic by 1pm. I put together a short proposal for my manager: reorganise the layout to match natural traffic flow, and shift restocking to the lunchtime rush rather than first thing.</p>

      <p>Over the following month, customer complaints about that section dropped significantly. In our next mystery shopper visit it was specifically highlighted as well-organised and easy to navigate — the first time that section had been noted positively.</p>

      <h2>How to build your own STAR answers</h2>

      <BuildSteps />

      {/* MERGED FROM BEHAVIOURAL: Five Themes */}
      <h2>The five themes most behavioural questions come from</h2>

      <p>Employers across almost every sector and seniority level are trying to assess the same core things. If you have strong examples prepared for each of these, you can answer the vast majority of behavioural questions you will ever face.</p>

      <FiveThemes />

      {/* MERGED FROM BEHAVIOURAL: Example Bank */}
      <h2>Building your example bank</h2>

      <p>The most important preparation you can do is build a bank of strong examples before the interview — not in the room when the question lands.</p>

      <ExampleBankSteps />

      <h2>The thing no one tells you</h2>

      <p>The STAR method is not about telling a perfect story. It is about giving the interviewer enough to make a decision. They are not looking for a flawless experience with a triumphant ending — they are looking for evidence that you can think clearly, take meaningful action, and learn from what happens.</p>

      <p>A STAR answer where things went wrong but you navigated it well is often more compelling than one where everything worked out easily. The goal is not to impress them. It is to give them something real.</p>

    </ArticleLayout>
  );
}
