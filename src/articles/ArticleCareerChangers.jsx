import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function DecisionVsDrift() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 28px" }}>
      <div style={{ background: "#fff4f4", border: "1.5px solid #f5c6c6", borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#c0392b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Sounds like escape</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "\"I wanted something different\"",
            "\"I was not really going anywhere\"",
            "\"I just fancied a change\"",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: "#c0392b", fontWeight: 700, flexShrink: 0, fontSize: 13 }}>✗</span>
              <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5, fontStyle: "italic" }}>{item}</p>
            </div>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#c0392b", margin: "12px 0 0", lineHeight: 1.5 }}>Signals you might run again when things get hard.</p>
      </div>
      <div style={{ background: "#f0f9f5", border: "1.5px solid #a8d5bc", borderRadius: 10, padding: "18px 18px 16px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 12 }}>Sounds like a decision</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            "\"I have been moving in this direction for two years\"",
            "\"Here is what I have done to prepare\"",
            "\"Here is what draws me to this specifically, and why now\"",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
              <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 13 }}>✓</span>
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
    { label: "Job requirement", detail: "Read each key requirement in the job description carefully.", colour: "#e8f4f0" },
    { label: "Your experience", detail: "Ask: where have I done something that demonstrates this, even if it looked different?", colour: "#fdf0e4" },
    { label: "Make it explicit", detail: "\"What this looked like in my previous role was X - and here is how I see that applying here.\"", colour: "#f0f0fd" },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "16px 0 28px", alignItems: "center" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: step.colour, borderRadius: 10, padding: "16px 18px", maxWidth: 180 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 6px" }}>{step.label}</p>
            <p style={{ fontSize: 12, color: inkMid, margin: 0, lineHeight: 1.5 }}>{step.detail}</p>
          </div>
          {i < steps.length - 1 && (
            <span style={{ color: inkMid, fontSize: 18, fontWeight: 300 }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}

function GapScript() {
  return (
    <div style={{ background: greenLight, border: `1.5px solid ${green}`, borderRadius: 10, padding: "18px 20px", margin: "16px 0 28px" }}>
      <p style={{ fontSize: 12, fontWeight: 700, color: green, margin: "0 0 10px", letterSpacing: "0.05em", textTransform: "uppercase" }}>A script that works</p>
      <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.65, fontStyle: "italic" }}>
        "I know my background is not a conventional fit for this role. What I do bring is X, Y, and Z - and here is specifically how I see that applying."
      </p>
      <p style={{ fontSize: 13, color: ink, margin: "12px 0 0", lineHeight: 1.55 }}>
        Naming the gap yourself shows confidence and self-awareness. It takes the awkwardness out of the room and gives you control over how the conversation frames your background.
      </p>
    </div>
  );
}

function CareerChangerAdvantage() {
  const qualities = ["Adaptability", "Resilience", "A willingness to be a beginner again in service of getting somewhere better"];
  return (
    <div style={{ background: "#f0f9f5", border: `2px solid ${green}`, borderRadius: 10, padding: "22px 24px", margin: "16px 0 28px" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: green, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>The career changer advantage</p>
      <p style={{ fontSize: 14, color: inkMid, margin: "0 0 14px", lineHeight: 1.6 }}>
        Someone who has navigated a career change has demonstrated something that is genuinely hard to teach:
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 14 }}>
        {qualities.map((q, i) => (
          <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
            <span style={{ color: green, fontWeight: 700, flexShrink: 0, fontSize: 14, marginTop: 1 }}>✓</span>
            <p style={{ fontSize: 14, fontWeight: i < 2 ? 600 : 400, color: ink, margin: 0, lineHeight: 1.5 }}>{q}</p>
          </div>
        ))}
      </div>
      <p style={{ fontSize: 14, color: ink, margin: 0, lineHeight: 1.6, borderTop: `1px solid rgba(63,111,99,0.2)`, paddingTop: 14, fontWeight: 500 }}>
        That is not a liability. In most good organisations, it is exactly what they are looking for.
      </p>
    </div>
  );
}

export default function ArticleCareerChangers() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="Interview tips for career changers"
    >
      <p>Changing careers is one of the most common things people do - and one of the things candidates feel most uncertain about walking into an interview room. The anxiety usually comes from the same place: "I do not have direct experience in this field. Why would they choose me over someone who does?"</p>

      <p>Here is the thing. That question is understandable, but it is the wrong frame. The right question is: what do I have that is genuinely valuable here, and how do I make that visible?</p>

      <p>This article is about how to answer that question - and how to use it to perform better in interviews than candidates who have spent their whole career in one lane.</p>

      <h2>Why career changers often undersell themselves</h2>

      <p>Most career changers walk into interviews in a defensive crouch. They lead with apology. They frame their background as a gap rather than an asset. They spend so much energy addressing what they lack that they never get to what they bring.</p>

      <p>Experienced interviewers find this frustrating, because the candidate sitting across from them often has exactly the kind of perspective they are looking for - someone who has seen how things work in a different industry, who brings a different lens, who has not been institutionalised into doing things one way. That is valuable. The candidate just is not selling it.</p>

      <p>The mindset shift that changes everything: you are not trying to convince someone to overlook your background. You are trying to show them why your background is an advantage.</p>

      <h2>Do the translation work before the interview</h2>

      <p>The most important preparation you can do as a career changer is translate your experience into the language of the new field before you walk into the room.</p>

      <TranslationFlow />

      <p>The translation work is your job, not the interviewer's. If you make them do it themselves, most of them will not. If you walk them through it clearly, you remove the uncertainty that makes interviewers hesitant.</p>

      <h2>Frame your career change as a decision, not a drift</h2>

      <p>One of the first things an interviewer will want to understand is why you are making this change. The answer matters more than most career changers realise.</p>

      <DecisionVsDrift />

      <p>Even if your career change was partly reactive - a redundancy, a burnout, a life change - you can frame the forward movement as deliberate. What did you do once you decided to move in this direction? What have you learned? What have you built? That is the story to tell.</p>

      <h2>Prepare for the experience gap question directly</h2>

      <p>At some point, the interviewer will raise the fact that you do not have direct experience in this field. Do not wait for them to bring it up as a challenge. Acknowledge it yourself, and then immediately pivot to what you do have.</p>

      <GapScript />

      <p>What you should never do is leave the gap unaddressed and hope the interviewer does not notice. They will notice. The question is whether they hear about it from you, framed positively, or whether it just sits there as an unspoken concern.</p>

      <h2>Use your outsider perspective as a genuine selling point</h2>

      <p>Every industry has things it does because it has always done them that way. Career changers can see those things clearly in a way that people who have grown up in the industry often cannot.</p>

      <p>If your research into the new field has surfaced something you find genuinely interesting - a problem the industry has not solved, a practice that seems to be changing, something that your previous experience gives you a different view on - bring it into the conversation. It demonstrates that you have done serious research and distinguishes you from every other candidate who is just talking about their qualifications.</p>

      <h2>What to do if you are asked about salary expectations</h2>

      <p>This comes up more often for career changers because there is genuine uncertainty about where you sit in a new market. Do your research before the interview - look at salary data for the role, the sector, and the seniority level you are targeting - and be ready to give a considered range rather than a number pulled from the air.</p>

      <p>If you are moving into a role at a lower seniority level than you have held before, be honest about the fact that you understand the market rate and you are comfortable with it. If you can address that concern directly - "I understand this is an entry-level salary for this field and I am committed to building here properly" - you remove a real hesitation.</p>

      <h2>The career changer advantage</h2>

      <p>Here is what most career changers never hear: the people who are hardest to hire are the ones who have only ever done one thing in one way in one type of organisation. They are often skilled, but they are narrow. They struggle when the context changes.</p>

      <CareerChangerAdvantage />

      <p>Your job in the interview is not to apologise for the path you have taken. It is to make the case that the path you have taken has made you better at this than the candidate who has never left their lane.</p>

      <p>Most career changers can make that case. Very few of them do.</p>

    </ArticleLayout>
  );
}