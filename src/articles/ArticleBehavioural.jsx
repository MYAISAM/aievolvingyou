import ArticleLayout from "./ArticleLayout";

const nextArticle = {
  slug: "career-changers",
  label: "Going further",
  title: "Interview tips for career changers",
  excerpt: "When you're crossing industries or roles, your biggest challenge isn't your experience, it's how you frame it. Here's how to turn a non-linear career into a strength.",
};

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function FiveThemes() {
  const themes = [
    {
      number: "01",
      label: "Delivering results under pressure",
      prompt: "A time you had a tight deadline, competing demands, or limited resources - and got the outcome anyway.",
      colour: "#e8f4f0",
    },
    {
      number: "02",
      label: "Working with and through other people",
      prompt: "A time you collaborated across teams, managed conflict, influenced without authority, or brought different views toward a shared outcome.",
      colour: "#fdf0e4",
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

function StrongExampleChecklist() {
  const items = [
    { label: "Specific", detail: "A real situation, a real decision, a real outcome. Not a summary." },
    { label: "Your contribution", detail: "What you did, not what the team did. Your individual role must be clear." },
    { label: "Concrete result", detail: "A number, a change in outcome, a piece of feedback, or a clear marker of progress." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 3px" }}>{item.label}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ExampleBankSteps() {
  const steps = [
    "Write down 6-8 experiences you're proud of, or that taught you something significant. Don't filter yet.",
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

export default function ArticleBehavioural() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="How to prepare for a behavioural interview"
      nextArticle={nextArticle}
    >
      <p>Behavioural interviews are the most common interview format used by employers today. And they are also the most predictable. Once you understand what they are looking for and how to prepare properly, they stop being something to dread and start being something you can actually control.</p>

      <p>This article covers what behavioural interviews are, why employers use them, and exactly how to prepare so that you walk in with a bank of strong answers rather than hoping something comes to you in the room.</p>

      <h2>What a behavioural interview actually is</h2>

      <p>A behavioural interview is one built around questions that ask you to describe specific past experiences. The questions typically start with phrases like "tell me about a time when...", "give me an example of...", or "describe a situation where..."</p>

      <p>The logic behind them is straightforward: past behaviour is the best predictor of future behaviour. If you have handled a difficult stakeholder well before, you are more likely to handle one well again. If you have never managed competing priorities under pressure, that is worth knowing before an employer hires you.</p>

      <p>What this means for you as a candidate is that preparation is almost entirely within your control. The questions are predictable. The structure for answering them is learnable. The only variable is whether you have prepared the right examples.</p>

      <h2>The five themes that come up in almost every behavioural interview</h2>

      <p>Employers across almost every sector and seniority level are trying to assess the same core things. If you have strong examples prepared for each of these, you can answer the vast majority of behavioural questions you will ever face.</p>

      <FiveThemes />

      <h2>How to build your example bank</h2>

      <p>The most important preparation you can do is build a bank of strong examples before the interview - not in the room when the question lands.</p>

      <ExampleBankSteps />

      <h2>What makes an example strong</h2>

      <p>The most common mistake candidates make is choosing examples that are too vague or too general. "I once led a project that went well" is not an example. It is a summary with nothing behind it. A strong example has three things:</p>

      <StrongExampleChecklist />

      <p>The structure to use for each answer is STAR: Situation, Task, Action, Result. Keep the Situation brief - one or two sentences of context. Spend the majority of your answer on the Action. Land clearly on the Result.</p>

      <p>When spoken, a strong STAR answer runs 90 seconds to two minutes. If you are consistently going over that, you are spending too long on the setup. If you are under a minute, you are not giving enough on the action.</p>

      <h2>How to read the question correctly</h2>

      <p>Behavioural questions often contain clues about what the interviewer is really trying to assess. "Tell me about a time you had to influence someone without direct authority" is not just asking for a story - it is signalling that influence and stakeholder management matter in this role.</p>

      <p>Before you answer, take a second to identify what the question is actually probing. Then choose your example accordingly. You are not just telling a story - you are demonstrating the specific quality they are looking for.</p>

      <h2>Preparation on the day</h2>

      <p>The night before, read through your example bank. Do not try to memorise scripts - you want to know your stories well enough to tell them naturally. Run through two or three of them out loud. The difference between how an answer sounds in your head and how it lands when you say it out loud is significant.</p>

      <p>In the room, if a question catches you off guard, it is fine to take a moment. "Let me think of the best example for that" is a perfectly reasonable thing to say. It is far better than rushing into a story that does not quite fit.</p>

      <h2>The thing most candidates get wrong</h2>

      <p>Most candidates prepare for behavioural interviews by thinking about what they might be asked. The candidates who perform best prepare by knowing their own stories so well that they can answer whatever comes up.</p>

      <p>The interview is not a test of how well you remember a list of answers. It is a conversation about your experience. If you know your examples properly - the detail, the thinking, the outcome - you can answer follow-up questions, handle challenges, and adapt on the spot.</p>

      <p>Preparation is not about having a script. It is about having clarity. Know your stories. Know what they demonstrate. Walk in ready to have a real conversation about your experience rather than hoping the questions match what you rehearsed.</p>

    </ArticleLayout>
  );
}