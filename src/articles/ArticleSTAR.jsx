import ArticleLayout from "./ArticleLayout";

const nextArticle = {
  slug: "weakness-question",
  label: "Then try this",
  title: "The weakness question: why \"I'm a perfectionist\" is the worst answer",
  excerpt: "Interviewers have heard it thousands of times and it tells them nothing useful. Here's what a strong, honest answer actually looks like.",
};

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const orangeLight = "#fdf0e4";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

// STAR four-part breakdown
function STARBreakdown() {
  const parts = [
    {
      letter: "S",
      label: "Situation",
      description: "Set the scene briefly. One or two sentences of context. This is just the setup.",
      tip: "Keep it short. The situation is not the interesting part.",
      colour: "#e8f4f0",
    },
    {
      letter: "T",
      label: "Task",
      description: "What was your specific responsibility? What were you expected to do?",
      tip: "Be specific about what you personally needed to do.",
      colour: "#fdf0e4",
    },
    {
      letter: "A",
      label: "Action",
      description: "What did you do? Not your team. Not your manager. You.",
      tip: "This is the heart of your answer. Spend the most time here.",
      colour: "#f0f0fd",
    },
    {
      letter: "R",
      label: "Result",
      description: "What happened? What changed because of what you did?",
      tip: "Quantify where you can. Numbers, percentages, time saved.",
      colour: "#fdf4e4",
    },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
      gap: 12,
      margin: "24px 0 32px",
    }}>
      {parts.map((part) => (
        <div key={part.letter} style={{
          background: part.colour,
          borderRadius: 10,
          padding: "20px 20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <div style={{
            fontSize: 28, fontWeight: 700,
            color: green, lineHeight: 1,
            letterSpacing: "-0.02em",
          }}>
            {part.letter}
          </div>
          <p style={{
            fontSize: 15, fontWeight: 700,
            color: ink, margin: 0, lineHeight: 1.3,
          }}>
            {part.label}
          </p>
          <p style={{
            fontSize: 13, color: inkMid,
            margin: 0, lineHeight: 1.55,
          }}>
            {part.description}
          </p>
          <p style={{
            fontSize: 12, color: green,
            margin: 0, lineHeight: 1.5,
            fontStyle: "italic",
          }}>
            {part.tip}
          </p>
        </div>
      ))}
    </div>
  );
}

// Common mistakes callout
function Mistake({ title, children }) {
  return (
    <div style={{
      background: "#fff8f4",
      border: "1.5px solid #f5ddc8",
      borderRadius: 8,
      padding: "12px 16px",
      margin: "10px 0",
      display: "flex",
      gap: 12,
      alignItems: "flex-start",
    }}>
      <span style={{ color: orange, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✗</span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{children}</p>
      </div>
    </div>
  );
}

// Weak vs Strong comparison
function WeakStrong({ weak, strong }) {
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 12,
      margin: "20px 0 28px",
    }}>
      <div style={{
        background: "#fff4f4",
        border: "1.5px solid #f5c6c6",
        borderRadius: 10,
        padding: "16px 18px",
      }}>
        <p style={{
          fontSize: 11, fontWeight: 700,
          color: "#c0392b", letterSpacing: "0.06em",
          textTransform: "uppercase", marginBottom: 10,
        }}>
          Weak answer
        </p>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.6, margin: 0 }}>{weak}</p>
      </div>
      <div style={{
        background: "#f0f9f5",
        border: "1.5px solid #a8d5bc",
        borderRadius: 10,
        padding: "16px 18px",
      }}>
        <p style={{
          fontSize: 11, fontWeight: 700,
          color: green, letterSpacing: "0.06em",
          textTransform: "uppercase", marginBottom: 10,
        }}>
          Strong answer
        </p>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.6, margin: 0 }}>{strong}</p>
      </div>
    </div>
  );
}

// Build steps
function BuildSteps() {
  const steps = [
    "Write down 5-6 experiences you're proud of. Don't filter yet.",
    "For each one, identify S, T, A, R. No clear action or result? Story isn't strong enough.",
    "Time yourself. A strong STAR answer lands in 90 seconds to 2 minutes when spoken.",
    "Say it out loud. The gap between how it reads and how it sounds when nervous is significant.",
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 28px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{
          display: "flex", gap: 14, alignItems: "flex-start",
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 8, padding: "12px 16px",
        }}>
          <span style={{
            width: 24, height: 24, borderRadius: "50%",
            background: greenLight, color: green,
            fontSize: 12, fontWeight: 700,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}>
            {i + 1}
          </span>
          <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default function ArticleSTAR() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="The STAR method explained, with three real examples you can actually learn from"
      nextArticle={nextArticle}
    >
      <p>Most interview advice tells you what the STAR method stands for. Situation, Task, Action, Result - got it. What it doesn't tell you is why most people's STAR answers still fall flat, and what the difference looks like in practice.</p>

      <p>I've sat on both sides of the interview table. I've coached candidates through hundreds of interview prep sessions. And the thing I see most often isn't people who don't know the STAR method - it's people who think they're using it but aren't actually landing it.</p>

      <p>This article is going to fix that. We'll cover what STAR actually is, where people go wrong at each stage, and then walk through three full worked examples so you can see exactly what good looks like.</p>

      <h2>What the STAR method is actually for</h2>

      <p>Interviewers ask behavioural questions - "tell me about a time when...", "give me an example of..." - because they believe past behaviour predicts future performance. They're not asking you to tell a story for the sake of it. They're trying to work out whether you've actually done the thing they need you to do, or something close enough that they can trust you to do it again.</p>

      <p>The STAR method gives you a structure to answer those questions in a way that's complete, credible, and easy to follow. Without it, most people either give vague generalisations ("I'm really good at handling pressure") or ramble through a story that doesn't have a clear point.</p>

      <h2>Breaking down each part</h2>

      <STARBreakdown />

      <h2>Where people go wrong</h2>

      <Mistake title="Too much situation, not enough action">
        People spend two minutes setting up the context and then rush through what they actually did. Flip the ratio - the action is what you're being assessed on.
      </Mistake>

      <Mistake title='"We" instead of "I"'>
        The interviewer is hiring you, not your team. Your specific contribution needs to be clear throughout.
      </Mistake>

      <Mistake title="No result, or a vague one">
        "It went well" tells the interviewer nothing. "Customer complaints dropped by 30% over the following quarter" tells them something real.
      </Mistake>

      <h2>Example 1: Customer service</h2>

      <p><strong>The question:</strong> "Tell me about a time you dealt with a difficult customer."</p>

      <WeakStrong
        weak="I've dealt with lots of difficult customers in my career. I always try to stay calm and listen to what they need. In my last role I had a customer who was really unhappy about a delay and I managed to sort it out by communicating clearly and making sure they felt heard. They ended up being happy with the outcome."
        strong="In my role as a customer service advisor, we had supply chain disruptions causing significant delivery delays. One customer had been waiting six weeks for a large order critical for their business. I let them speak without interrupting, pulled up their order history, and was honest about what had gone wrong. I arranged a partial shipment within 48 hours, escalated the rest to our logistics manager, and called back personally the next day. The customer left a positive review specifically mentioning that interaction."
      />

      <h2>Example 2: Graduate or early career</h2>

      <p><strong>The question:</strong> "Tell me about a time you led a team toward a shared goal."</p>

      <p>In my final year, I led a four-person team on a semester-long project to develop and present a full marketing campaign for a charity partner. About three weeks in, two team members had very different ideas about direction and it was affecting the group dynamic. I set up a meeting where each person presented their idea with reasoning rather than just defending their position. We mapped both approaches against the brief and the client's constraints, and I proposed a hybrid approach that incorporated the core insight from one idea and the execution strategy from the other.</p>

      <p>Our final presentation was selected by the professor as the class example. More importantly, the two team members who'd been at odds worked well together for the rest of the project.</p>

      <h2>Example 3: Retail or operations</h2>

      <p><strong>The question:</strong> "Tell me about a time you improved a process or made something work better."</p>

      <p>I was working as a senior sales assistant and we were consistently having issues with a particular section of the shop floor. I spent a week observing customer movement patterns during peak hours and realised the layout wasn't matching how people actually navigated the space. I also noticed our restocking schedule meant the section looked great at 9am and chaotic by 1pm. I put together a short proposal for my manager: reorganise the layout to match natural traffic flow, and shift restocking to the lunchtime rush rather than first thing.</p>

      <p>Over the following month, customer complaints about that section dropped significantly. In our next mystery shopper visit it was specifically highlighted as well-organised and easy to navigate - the first time that section had been noted positively.</p>

      <h2>How to build your own STAR answers</h2>

      <BuildSteps />

      <h2>The thing no one tells you</h2>

      <p>The STAR method isn't about telling a perfect story. It's about giving the interviewer enough to make a decision. They're not looking for a flawless experience with a triumphant ending - they're looking for evidence that you can think clearly, take meaningful action, and learn from what happens.</p>

      <p>A STAR answer where things went wrong but you navigated it well is often more compelling than one where everything worked out easily. The goal isn't to impress them. It's to give them something real.</p>

    </ArticleLayout>
  );
}