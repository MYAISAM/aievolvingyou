import ArticleLayout from "./ArticleLayout";

const nextArticle = {
  slug: "behavioural-interview",
  label: "Go deeper",
  title: "How to prepare for a behavioural interview",
  excerpt: "Behavioural interviews are predictable once you know the pattern. Here's how to build a bank of strong examples that work across dozens of different questions.",
};

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function ThreeWays() {
  const methods = [
    {
      number: "01",
      label: "Generate questions, not answers",
      description: "This is the highest-value use of AI in interview prep and the one most people overlook. Ask for twenty realistic questions specific to the role.",
      prompt: "\"I'm interviewing for a Senior Customer Success Manager role at a B2B SaaS company with around 200 employees. The role involves managing enterprise accounts, driving renewals, and working cross-functionally with product and sales. Give me twenty interview questions I'm likely to be asked.\"",
      tip: "The AI generates the questions. Your answers need to be yours — in your own words, out loud, drawing from your own experience.",
    },
    {
      number: "02",
      label: "Sharpen your language, not write it for you",
      description: "Paste your answer in and ask for editing feedback. The AI helps you refine your own thinking — that's very different from asking it to think for you.",
      prompt: "\"How can I make this more concise and punchy without losing the specifics?\" or \"Does this answer actually address the question, or am I going off on a tangent?\"",
      tip: "Never take the AI's rewritten version wholesale. Read it, take what's useful, rewrite it again in your own voice.",
    },
    {
      number: "03",
      label: "Run a practice interview",
      description: "Ask the AI to play the role of an interviewer. Give it context, ask it to go one question at a time, wait for your answer, and give feedback before moving on.",
      prompt: "\"Act as an interviewer for a [role] at [company]. Ask me one question at a time, wait for my answer, give brief feedback, then move to the next question.\"",
      tip: "Answer out loud — not by typing. The gap between how something sounds in your head and how it sounds when you say it out loud is significant.",
    },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "20px 0 32px" }}>
      {methods.map((m) => (
        <div key={m.number} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "20px 22px" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 8 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>{m.number}</span>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{m.label}</p>
          </div>
          <p style={{ fontSize: 13, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>{m.description}</p>
          <div style={{ background: "#f0f4f3", borderRadius: 8, padding: "12px 14px", marginBottom: 10 }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: green, margin: "0 0 6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Example prompt</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{m.prompt}</p>
          </div>
          <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
            <span style={{ color: green, fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 1 }}>→</span>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{m.tip}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function PrepTimeline() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 32px" }}>
      <div style={{ background: "#e8f4f0", borderRadius: 10, padding: "20px 20px 18px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: green, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>The day before</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Read the job description carefully",
            "Ask AI to generate specific questions",
            "Work through each question out loud",
            "Paste your 2-3 weakest answers in for editing feedback",
            "Rewrite them in your own words",
            "Finish with a 10-question mock interview, out loud, timed",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>✓</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
      <div style={{ background: "#fdf4e4", borderRadius: 10, padding: "20px 20px 18px" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: orange, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>The morning of</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "Don't go back to the AI",
            "Read through your notes",
            "Then put them away",
            "You want answers to come from understanding, not from trying to remember a script",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: orange, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function AILimits() {
  const items = [
    "Give you the experiences you're drawing on",
    "Make you believe in what you're saying",
    "Replicate the moment when an interviewer thinks \"yes, that's the person\"",
  ];
  return (
    <div style={{ background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 10, padding: "20px 22px", margin: "16px 0 28px" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: orange, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>What AI cannot do for you</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {items.map((item, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: orange, fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 1 }}>✗</span>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{item}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 13, color: inkMid, margin: "14px 0 0", lineHeight: 1.6, borderTop: `1px solid rgba(0,0,0,0.07)`, paddingTop: 14 }}>
        That moment comes from clarity, confidence, and authenticity. From knowing your own story well enough to tell it simply. AI helps you get ready to do that. It doesn't do it for you.
      </p>
    </div>
  );
}

export default function ArticleAIPrep() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="How to use AI to prep for interviews without sounding like a robot"
      nextArticle={nextArticle}
    >
      <p>AI is the best interview prep tool available right now. Most people are using it wrong.</p>

      <p>I say that having watched candidates walk into interviews having done extensive AI-assisted preparation and still perform badly. Not because the tool failed them - because they used it in a way that made them sound like they were reading from a script. Polished on the surface, hollow underneath.</p>

      <p>There's a version of AI-assisted interview prep that genuinely works. It makes you sharper, more prepared, and more confident. And there's a version that produces answers that sound impressive until someone asks a follow-up question, at which point the whole thing falls apart.</p>

      <h2>Why AI interview prep has a problem</h2>

      <p>A candidate gets an interview. They go to ChatGPT or Claude and type something like "give me answers to common interview questions for a marketing manager role." The AI produces ten polished, well-structured responses. The candidate reads through them, memorises a few lines, and goes into the interview feeling prepared.</p>

      <p>In the room, they deliver an answer that sounds technically correct but slightly off - like it was written for a generic marketing manager rather than this person, applying for this role, at this company. The interviewer asks a follow-up. The candidate hesitates, because the follow-up wasn't in the list. The answer unravels.</p>

      <p>The problem isn't AI. The problem is using AI to generate answers you then try to pass off as your own thinking. That approach fails for two reasons.</p>

      <p>First, experienced interviewers can sense when an answer has been rehearsed from someone else's script. Second, interviews are conversations. You can't script a conversation. You can only prepare the thinking behind it.</p>

      <p>The goal of AI-assisted interview prep isn't to get better answers. It's to get clearer thinking. That's a subtle but important distinction.</p>

      <h2>Three ways to use AI that actually work</h2>

      <ThreeWays />

      <h2>What good AI prep looks like in practice</h2>

      <PrepTimeline />

      <h2>What no AI can do for you</h2>

      <AILimits />

      <p>The candidates who use it well treat it like a sparring partner - something to push against, to help them find their edges, to sharpen their thinking. The candidates who use it badly treat it like a crutch. And crutches fall apart in conversations.</p>

      <h2>One more thing</h2>

      <p>If you go into an interview and your answers sound like they were written by an AI, the interviewer will notice. Not always consciously - but something will feel slightly off. The tell is always the follow-up. When an interviewer asks "can you tell me more about that?" - that's where preparation built on your own thinking holds up, and preparation built on borrowed answers doesn't.</p>

      <p>Use the tools. They're genuinely useful. Just make sure that when you walk into that room, the answers are yours.</p>

    </ArticleLayout>
  );
}