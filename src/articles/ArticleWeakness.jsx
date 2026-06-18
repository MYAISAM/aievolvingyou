import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

// Four coloured cards — re-skinned from coloured backgrounds to new system
function TestingCards() {
  const items = [
    { label: "Self-awareness", description: "Do you know how you come across? Can you identify where your working style creates problems?", colour: "#e8f4f0" },
    { label: "Honesty under pressure", description: "If you deflect a question this predictable, what happens when something genuinely difficult comes up?", colour: "#edf4f2" },
    { label: "Growth mindset", description: "Do you acknowledge gaps and work to close them, or get defensive? This tells interviewers how you will respond to feedback.", colour: "#f0f0fd" },
    { label: "Judgment", description: "Are you choosing something genuinely relevant but not disqualifying? Poor judgment here undermines everything else.", colour: "#fdf4e4" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 12, margin: "20px 0 32px" }}>
      {items.map((item) => (
        <div key={item.label} style={{ background: item.colour, borderRadius: 10, padding: "18px 18px 16px", display: "flex", flexDirection: "column", gap: 8 }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: 0 }}>{item.label}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// Four strategy cards
function StrategyCards() {
  const strategies = [
    {
      number: "01",
      label: "Genuine weakness with active improvement",
      description: "Name something real, explain how it has shown up, and describe specifically what you have done to address it.",
      example: "\"Early in my career I found it hard to delegate. I would take on too much myself because I wanted to make sure things were done to a certain standard, which created bottlenecks. Over the last two years I have identified where my involvement is genuinely necessary versus where I am just hovering, and I have been giving my team more autonomy. I have shifted from doing to coaching, and the team's output has actually improved.\"",
    },
    {
      number: "02",
      label: "Skill gap you are actively closing",
      description: "Name a genuine gap framed as something you are proactively addressing. Works well for career changers or senior role moves.",
      example: "\"I have not had as much experience presenting to large senior audiences as I would like. I know this role involves more of that, so I joined a public speaking group six months ago and I have been putting myself forward for presentations at my current company whenever the opportunity comes up.\"",
    },
    {
      number: "03",
      label: "Bridge",
      description: "Acknowledge a genuine trait honestly, then pivot to how you manage it.",
      example: "\"I can be impatient when projects move slowly, particularly when I can see a clear path forward and there are process delays. I have learned to channel that energy constructively — I use it to push for clearer timelines and to flag blockers early rather than letting frustration build.\"",
    },
    {
      number: "04",
      label: "Past weakness, now resolved",
      description: "A genuine story of growth — something that was a real challenge earlier in your career that you have demonstrably moved past.",
      example: "\"A few years ago I struggled with giving direct feedback to colleagues. I would soften things too much and the message would not land. I took a management training course and made a deliberate effort to be clearer and more direct while staying respectful. My last 360 review specifically noted that my feedback had become more useful and actionable.\"",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "20px 0 32px" }}>
      {strategies.map((s) => (
        <div key={s.number} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "20px 22px" }}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>{s.number}</span>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{s.label}</p>
          </div>
          <p style={{ fontSize: 13, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>{s.description}</p>
          <div style={{ background: greenLight, borderRadius: 8, padding: "12px 14px" }}>
            <p style={{ fontSize: 12, fontWeight: 600, color: green, margin: "0 0 6px", letterSpacing: "0.05em", textTransform: "uppercase" }}>Example</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>{s.example}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Avoid list — re-skinned from orange warning to new design system
function AvoidList() {
  const items = [
    { title: "Do not choose something core to the job.", detail: "If you are applying for a data analyst role, \"I have never been comfortable with numbers\" is not the move." },
    { title: "Do not choose something with no resolution.", detail: "If you name a weakness and have nothing to say about what you have done about it, you have told the interviewer you are aware of a problem and left it unaddressed." },
    { title: "Do not over-rehearse to the point it sounds scripted.", detail: "This question invites a human answer. Know your answer, but let it breathe." },
    { title: "Do not give multiple weaknesses.", detail: "Pick one, go deep on it." },
    { title: "Do not end on the weakness itself.", detail: "Always end on the action or the result." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 16px", background: surface, border: `1px solid ${border}`, borderRadius: 8 }}>
          <span style={{ color: green, fontWeight: 700, fontSize: 14, flexShrink: 0, marginTop: 2 }}>→</span>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: ink }}>{item.title}</strong> {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}

// Answer structure steps
function AnswerStructure() {
  const steps = [
    "Name the weakness clearly and specifically (one sentence)",
    "Give a brief example of how it has shown up in practice (two or three sentences)",
    "Explain what you have done about it — specific actions, not vague intentions (two or three sentences)",
    "Land on a result or marker of progress where possible (one sentence)",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 8px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
          <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step}</p>
        </div>
      ))}
    </div>
  );
}

export default function ArticleWeakness() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title={`The weakness question: why "I'm a perfectionist" is the worst answer`}
    >
      <p>"What is your greatest weakness?"</p>

      <p>It is the question candidates dread most. And ironically, it is the one where most people give exactly the same answer.</p>

      <p>I am a perfectionist. I work too hard. I care too much.</p>

      <p>Every hiring manager has heard all of these. And every time someone says one of them, the interviewer's pen stops moving — because there is nothing to write down. The candidate has just told them nothing real.</p>

      <p>The weakness question is not a trap. It is designed to find out whether you know yourself — and whether you are the kind of person who can reflect honestly, take feedback, and grow.</p>

      <h2>Why "I'm a perfectionist" is the worst answer</h2>

      <p>When you say "I am a perfectionist", you are doing two things simultaneously. You are claiming a weakness that sounds like a strength (which the interviewer sees straight through), and you are telling them you are not willing to be honest under mild pressure. Neither of those things builds confidence.</p>

      <p>What the interviewer actually wants to hear is something real. Not something catastrophic — you do not need to confess your biggest professional failure. But something honest enough that they believe you, and structured enough that it shows you have actually thought about it and done something about it.</p>

      <p>There is a big difference between "I am a perfectionist" and "I have found that I can sometimes over-prepare for things that do not require it, which has occasionally slowed me down. I have been working on recognising earlier when something is good enough to move forward, and giving myself a clearer time limit on certain tasks."</p>

      <p>That second answer is specific, believable, and shows self-awareness and active effort. That is what the question is looking for.</p>

      <h2>What the question is actually testing</h2>

      <TestingCards />

      <h2>Four strategies for answering it well</h2>

      <StrategyCards />

      <h2>What to avoid</h2>

      <AvoidList />

      <h2>The structure</h2>

      <AnswerStructure />

      <p style={{ fontSize: 14, color: inkMid, marginTop: 12 }}>Total answer: 90 seconds to two minutes when spoken.</p>

      <h2>The real point</h2>

      <p>"I am a perfectionist" says: I am not willing to answer this question properly.</p>

      <p>A real answer says: I know myself, I am honest about it, and I am not done growing.</p>

      <p>That is a much better thing to walk out of an interview having said.</p>

    </ArticleLayout>
  );
}
