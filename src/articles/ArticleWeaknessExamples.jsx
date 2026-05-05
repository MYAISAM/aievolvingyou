import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function ExampleAnswer({ role, weakness, answer, why }) {
  return (
    <div style={{
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 10,
      padding: "20px 22px",
      marginBottom: 12,
    }}>
      <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 12 }}>
        <span style={{
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          color: green,
          background: greenLight,
          borderRadius: 20,
          padding: "3px 10px",
          flexShrink: 0,
        }}>
          {role}
        </span>
        <p style={{ fontSize: 13, fontWeight: 600, color: inkMid, margin: 0 }}>{weakness}</p>
      </div>
      <div style={{
        background: "#ffffff",
        border: `1.5px solid ${border}`,
        borderRadius: 8,
        padding: "14px 16px",
        marginBottom: 12,
      }}>
        <p style={{ fontSize: 13, color: ink, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>
          "{answer}"
        </p>
      </div>
      <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>
        <span style={{ fontWeight: 600, color: ink }}>Why it works: </span>{why}
      </p>
    </div>
  );
}

function FourBeats() {
  const beats = [
    { number: "01", label: "Name a real weakness", detail: "Not a strength in disguise. Something you actually find hard, or used to." },
    { number: "02", label: "Show you know it is a weakness", detail: "Self-awareness is the thing they are testing. Acknowledge it plainly." },
    { number: "03", label: "Describe what you have done about it", detail: "Concrete action. Not 'I try to be more aware of it', but something specific you actually did." },
    { number: "04", label: "Show progress", detail: "You do not need to be cured. You need to show movement. Where are you now compared to a year ago?" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 32px" }}>
      {beats.map((b) => (
        <div key={b.number} style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-start",
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "16px 20px",
        }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>{b.number}</span>
          <div>
            <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: "0 0 4px" }}>{b.label}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{b.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function WhatNotToSay() {
  const traps = [
    {
      answer: `"I'm a perfectionist."`,
      problem: "Interviewers have heard this tens of thousands of times. It reads as evasion, not honesty. It also isn't usually true in the way people mean it. Most people saying this mean they care about quality, which is not the same as perfectionism.",
    },
    {
      answer: `"I work too hard."`,
      problem: "Same issue. It flips a strength into fake weakness framing. The interviewer knows what you're doing and it signals you're not willing to be genuine.",
    },
    {
      answer: `"I don't really have any weaknesses."`,
      problem: "This answer fails immediately. Everyone has weaknesses. Saying you don't have any tells the interviewer you either lack self-awareness or aren't being honest. Neither of which is what you want them to think.",
    },
    {
      answer: `"I'm not very good with technology / numbers / people." (unqualified)`,
      problem: "Naming a genuine weakness is fine. Leaving it there without any context of awareness or development is not. A bare weakness with no self-reflection just raises a flag with nothing to resolve it.",
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 32px" }}>
      {traps.map((t, i) => (
        <div key={i} style={{
          background: "#fff8f4",
          border: "1.5px solid #f5ddc8",
          borderRadius: 10,
          padding: "16px 20px",
        }}>
          <p style={{ fontSize: 14, fontWeight: 700, color: orange, margin: "0 0 8px" }}>{t.answer}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{t.problem}</p>
        </div>
      ))}
    </div>
  );
}

function BySeniority() {
  const levels = [
    {
      level: "Graduate / Early career",
      note: "You have less work experience to draw from, which is fine. Pick something from your studies, a placement, a part-time job, or a team project. The structure is the same: real weakness, awareness, what you did, progress made.",
      example: `"In my first year at university I struggled with time management across multiple deadlines. I started using a weekly planning system and blocked time for each project rather than working reactively. By my final year I was consistently submitting ahead of deadline and supporting others in my group with their planning."`,
    },
    {
      level: "Mid-level professional",
      note: "You have enough track record to pick something substantive. Avoid picking something trivial — it reads as avoidance. A real professional development area that you have actively worked on lands much better than a safe, low-stakes answer.",
      example: `"Earlier in my career I found it hard to push back on scope creep. I would absorb additional work rather than have an uncomfortable conversation about capacity. I've worked on this deliberately. I now flag scope changes early, frame them in terms of trade-offs, and it's made me a better partner to the people I work with."`,
    },
    {
      level: "Senior / Leadership",
      note: "At this level the bar for self-awareness is higher. You are expected to have reflected seriously on your development. Weak answers at senior level land worse than at junior level, they suggest a lack of the kind of reflective practice that leadership roles require.",
      example: `"When I moved into a leadership role I found it genuinely difficult to let go of hands-on delivery. I wanted to stay close to the work. I've had to be intentional about shifting where I add value; investing more in how I develop the people around me rather than doing things myself. I'm a better leader for it, but it was a real adjustment."`,
    },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "16px 0 32px" }}>
      {levels.map((l, i) => (
        <div key={i} style={{
          background: surface,
          border: `1px solid ${border}`,
          borderRadius: 10,
          padding: "20px 22px",
        }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 8px" }}>{l.level}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: "0 0 14px", lineHeight: 1.6 }}>{l.note}</p>
          <div style={{
            background: "#ffffff",
            border: `1.5px solid ${border}`,
            borderRadius: 8,
            padding: "12px 16px",
          }}>
            <p style={{ fontSize: 13, color: ink, margin: 0, lineHeight: 1.7, fontStyle: "italic" }}>{l.example}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ArticleWeaknessExamples() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="What to say when asked about your biggest weakness in an interview"
      nextArticle={{
        slug: "weakness-question",
        label: "Go deeper",
        title: `The weakness question: why "I'm a perfectionist" is the worst answer`,
        excerpt: "The strategy behind building a weakness answer that actually builds trust rather than eroding it.",
      }}
    >
      <p>Pick something real. Show you know it is a weakness. Explain what you have done about it. That is the full structure. Interviewers are not looking for someone without flaws, they are looking for someone who knows themselves well enough to name one honestly and has done something about it.</p>

      <p>The four beats that make a weakness answer work are straightforward. The difficulty is that most people avoid them, either by naming a fake weakness or by leaving a real one hanging without any context.</p>

      <h2>The four beats every strong answer hits</h2>

      <FourBeats />

      <h2>Worked examples by role type</h2>

      <p>These are real-world weakness answers structured around the four beats. They are starting points. Your answer needs to be yours, drawn from something you have actually experienced.</p>

      <ExampleAnswer
        role="Sales / Client-facing"
        weakness="Overcommitting"
        answer="I've historically had a tendency to say yes to too much at once. In a sales environment that can mean juggling too many active deals at the same time and spreading focus too thin. Over the last year I've got much better at qualifying my pipeline earlier and being more honest with myself about capacity. I now have a simple weekly review process and I'm more willing to have direct conversations with clients about timelines rather than overpromising and underdelivering."
        why="Names a real problem that is recognisable in a sales context. Shows the impact. Demonstrates active change, not just awareness."
      />

      <ExampleAnswer
        role="Project management / Operations"
        weakness="Difficulty delegating"
        answer="I used to find it hard to hand things over, mainly because I cared about the quality of the output and wasn't always confident the brief was clear enough. What changed is that I started investing more time in the briefing process itself. Better briefs meant better outcomes, which meant I trusted the people I was working with more. I'm a much better delegator now and I've seen the quality of work around me improve as a result."
        why="The weakness is specific and understandable. The fix is concrete. The outcome is observable — it does not just claim improvement, it shows what got better."
      />

      <ExampleAnswer
        role="Technical / Engineering"
        weakness="Communication to non-technical stakeholders"
        answer="Earlier in my career I defaulted to technical language when talking to people outside the team. I thought precision mattered more than accessibility, which sometimes meant people nodded along without actually understanding. I've worked on this deliberately. I started asking myself 'what does this person actually need to know and decide?' before I prepare anything for a non-technical audience. The feedback I get from stakeholders now is noticeably different."
        why="Technical professionals are often assumed to struggle here — owning it directly and showing the shift lands as genuine self-awareness rather than evasion."
      />

      <ExampleAnswer
        role="People management / HR"
        weakness="Conflict avoidance"
        answer="I used to soften difficult messages more than I needed to. I thought I was being considerate but I was actually making it harder for people to improve, because the feedback wasn't landing clearly enough. I've had to be more deliberate about separating the care I have for the people I manage from the clarity they need from me. It is still something I think about, but the conversations I have now are more honest and more useful for the people on the receiving end."
        why="Strong because it connects the weakness to impact on others, not just on personal performance. Shows emotional maturity and genuine development."
      />

      <ExampleAnswer
        role="General / Any role"
        weakness="Public speaking"
        answer="Presenting to large groups does not come naturally to me. Earlier in my career I would avoid it where I could. I made a deliberate decision about two years ago to stop avoiding it, I volunteered for internal presentations, led team meetings, and joined a local public speaking group for a few months. I'm noticeably more comfortable now than I was. It is not a natural strength but it is no longer something I would avoid."
        why="Works because it shows a long-term, deliberate approach to development rather than a quick fix. Also picks a weakness that is common enough to be relatable."
      />

      <h2>What not to say</h2>

      <p>These are the answers that consistently backfire. Most of them come from a reasonable instinct, not wanting to say something that damages your chances. The problem is that trying to protect yourself with a non-answer often does more damage than a genuine one.</p>

      <WhatNotToSay />

      <h2>How to tailor it by seniority</h2>

      <p>The structure stays the same at every level. What changes is the depth of reflection expected and the stakes of the weakness you choose.</p>

      <BySeniority />

      <h2>What the interviewer is actually listening for</h2>

      <p>Interviewers asking this question are not hoping to catch you out. They are trying to understand three things:</p>

      <p>First, self-awareness. Can you see yourself clearly? People who cannot identify a genuine weakness are often harder to manage, harder to develop, and more likely to repeat mistakes they cannot see.</p>

      <p>Second, honesty. Are you willing to be direct in a professional context, including about yourself? This matters because it predicts how you will handle difficult conversations, give feedback to others, and raise problems when they arise.</p>

      <p>Third, growth orientation. Do you treat your development as something that happens to you or something you take responsibility for? The action and progress sections of your answer are where this lands.</p>

      <p>A strong answer to this question often does more for a candidate's credibility than almost any other. It is one of the few moments in an interview where genuine vulnerability handled well builds trust rather than eroding it.</p>

      <h2>How to practise saying it out loud</h2>

      <p>Most people write a version of their weakness answer and then try to remember it word for word in the room. That rarely works well. It tends to sound rehearsed, and if you lose your thread midway through you have nowhere to go.</p>

      <p>A better approach is to internalise the structure rather than the script. Know your four beats. Know the rough shape of what you are going to say in each one. Then practise saying it out loud in different ways until it sounds natural rather than recited.</p>

      <p>The goal is an answer that sounds like you are thinking out loud, not reading from a page. That requires practice, and practice requires saying it out loud, not just reading it back silently to yourself.</p>

    </ArticleLayout>
  );
}