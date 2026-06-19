import ArticleLayout from "./ArticleLayout";

// SLUG FROZEN: /resources/career-changers
// Hardcoded in Interview Coach prompt. Do not change.

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

// Re-skinned: was red/orange negative side, now surface/border negative, green positive
function DecisionVsDrift() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 28px" }}>
      <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Sounds like escape</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "\"I wanted something different\"",
            "\"I was not really going anywhere\"",
            "\"I just fancied a change\"",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: inkMid, fontWeight: 700, flexShrink: 0, fontSize: 13 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{item}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: inkMid, margin: "12px 0 0", lineHeight: 1.5 }}>Signals you might run again when things get hard.</p>
      </div>
      <div style={{ background: "#fff", border: `1.5px solid rgba(63,111,99,0.3)`, borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Sounds like a decision</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "\"I have been moving in this direction for two years\"",
            "\"Here is what I have done to prepare\"",
            "\"Here is what draws me to this specifically, and why now\"",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13 }}>→</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{item}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: green, margin: "12px 0 0", lineHeight: 1.5 }}>Shows intentionality, builds confidence that you will stay.</p>
      </div>
    </div>
  );
}

function TranslationFlow() {
  const steps = [
    {
      from: "I managed a team of 12 in retail",
      to: "I led a team of 12 people through a period of significant operational change, managing performance, development, and day-to-day delivery against tight commercial targets.",
      label: "Retail to operations or HR",
    },
    {
      from: "I taught secondary school English for eight years",
      to: "I designed and delivered curriculum for groups of 25-30 people, managed performance data across cohorts, handled complex stakeholder relationships including parents, senior leadership and external examiners, and adapted my approach constantly based on what the evidence told me was working.",
      label: "Teaching to L&D, comms, project management",
    },
    {
      from: "I ran my own business for four years",
      to: "I was responsible for every function of a small business, business development, client relationships, delivery, finances, and hiring. I built it to a point where I had three employees and recurring revenue, and I made every decision with limited information and no safety net.",
      label: "Self-employed to corporate",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 14, margin: "20px 0 32px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ background: surface, border: `1px solid ${border}`, borderRadius: 10, padding: "18px 20px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 10px" }}>{step.label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ background: "#fff", border: `1px solid ${border}`, borderRadius: 7, padding: "10px 13px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 5px" }}>How it often gets described</p>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55, fontStyle: "italic" }}>"{step.from}"</p>
            </div>
            <div style={{ background: greenLight, borderRadius: 7, padding: "10px 13px" }}>
              <p style={{ fontSize: 10, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.05em", margin: "0 0 5px" }}>Translated for the new context</p>
              <p style={{ fontSize: 13, color: ink, margin: 0, lineHeight: 1.6 }}>"{step.to}"</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ArticleCareerChangers() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title="Interview tips for career changers"
    >
      <p>When you are crossing industries or roles, the instinct is to apologise for your background. To lead with what you do not have. To frame your experience as almost relevant, nearly qualified, close but not quite there.</p>

      <p>That instinct is wrong, and it costs people interviews they could have got.</p>

      <p>Career changers do not have a lack of experience. They have experience that needs translating. That is a skills problem, not an evidence problem. And once you learn how to translate, the conversation changes.</p>

      <h2>The question they are really asking</h2>

      <p>When an interviewer asks "why are you making this change?", they are not just curious. They are checking for three things.</p>

      <p>First: is this a decision or an escape? Someone running away from their last role is a retention risk. Someone who has been moving deliberately toward this one is not.</p>

      <p>Second: do you understand what you are getting into? A career changer who has researched the role and the sector thoroughly signals commitment. One who is vague about the day-to-day reality signals they might be disappointed when they arrive.</p>

      <p>Third: is your previous experience actually useful here? They are not asking you to prove you have done this exact job before. They are asking you to make the connection between what you have done and what they need.</p>

      <DecisionVsDrift />

      <h2>The translation problem</h2>

      <p>Most career changers undersell themselves because they describe their experience in the language of where they came from, rather than the language of where they are going. The experience is real and relevant. It just does not sound that way because the framing is wrong.</p>

      <p>Translation is not spin. It is accuracy. You are not inventing relevance, you are revealing it. The goal is to describe what you actually did in language that lets the interviewer recognise the value without having to do the translation themselves.</p>

      <TranslationFlow />

      <h2>The gap they are worried about</h2>

      <p>Every interviewer considering a career changer has a version of the same concern: what do you not know that someone who came up through this sector would know? That concern is legitimate, and trying to pretend it does not exist makes it worse.</p>

      <p>The move is to name it before they do, be specific about what it actually is, and show what you have done about it. A gap you have not addressed is a risk. A gap you have named, understood, and are actively closing is just a gap, and every candidate has some of those.</p>

      <div style={{ background: greenLight, borderRadius: 10, padding: "18px 20px", margin: "20px 0 28px" }}>
        <p style={{ fontSize: 13, fontWeight: 600, color: green, margin: "0 0 8px" }}>A structure that works</p>
        <p style={{ fontSize: 13, color: ink, margin: "0 0 8px", lineHeight: 1.6 }}>"The gap I am aware of is [specific thing]. I do not think it is a barrier because [reason], but I want to be honest that it is there. Here is what I have done to address it: [specific action]. And here is how I expect to close it quickly once I am in the role: [concrete plan]."</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6, fontStyle: "italic" }}>This signals self-awareness, honesty, and preparation, three things any interviewer values over a candidate who pretends the concern away.</p>
      </div>

      <h2>Telling the career change story</h2>

      <p>You will be asked to explain your move. You need a version that is short (two minutes or less), clear (a logical thread, not a rambling explanation), and confident (not apologetic).</p>

      <p>The structure: here is where I have been and what I have built. Here is what I realised I was moving toward and why. Here is what I have done to get ready for this. Here is why this role specifically makes sense as the next step.</p>

      <p>That story needs to feel like it ends here, at this role, at this company, not like it could have ended anywhere. The more specific you are about why this particular opportunity, the more convincing the narrative becomes.</p>

      <h2>What actually matters in the room</h2>

      <p>In the interview itself, the job is not to defend your background. It is to make the connection so clearly that the interviewer does not have to.</p>

      <p>When a question lands, ask yourself: what quality is this question trying to assess? Then choose the example from your experience, regardless of which sector it came from, that best demonstrates that quality. The best answer to "tell me about a time you managed a difficult stakeholder" is the best story you have. It does not matter if it came from teaching, retail, or running a small business.</p>

      <p>The candidates who succeed as career changers are not the ones who manage to hide their background. They are the ones who make their background make sense.</p>

    </ArticleLayout>
  );
}
