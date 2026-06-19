import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
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

// Four beats, kept, it is the structural spine of the bank
function FourBeats() {
  const beats = [
    { number: "01", label: "Name a real weakness", detail: "Not a strength in disguise. Something you actually find hard, or used to." },
    { number: "02", label: "Show you know it is a weakness", detail: "Self-awareness is the thing they are testing. Acknowledge it plainly." },
    { number: "03", label: "Describe what you have done about it", detail: "Concrete action. Not 'I try to be more aware of it', but something specific you actually did." },
    { number: "04", label: "Show progress", detail: "You do not need to be cured. You need to show movement. Where are you now compared to a year ago?" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 32px" }}>
      {beats.map((beat) => (
        <div key={beat.number} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em", flexShrink: 0, marginTop: 2 }}>{beat.number}</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 3px" }}>{beat.label}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{beat.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ArticleWeaknessExamples() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title="Weakness question examples: answers you can actually use"
    >
      {/* TRIMMED: was a full strategy preamble duplicating the parent article. Now one cross-ref sentence. */}
      <p>The strategy behind the weakness question is covered in full in <a href="/resources/weakness-question" style={{ color: green, fontWeight: 600 }}>The Weakness Question</a>. This article is the bank, built answers across roles and seniority levels, structured around the four beats every strong answer hits, ready to adapt to your own experience.</p>

      <h2>The four beats every strong answer hits</h2>

      <FourBeats />

      <h2>The examples</h2>

      <p>Each answer below is built around a real weakness, uses the four beats, and is adapted for a specific role or seniority level. Take the structure and the logic, not the words. Your answer needs to be yours.</p>

      <ExampleAnswer
        role="Early career"
        weakness="Difficulty asking for help"
        answer="I used to find it hard to ask for help when I was stuck, I wanted to figure things out myself, which sometimes meant I took longer than I needed to and missed things I could have caught earlier with a quick conversation. I have worked on recognising earlier when I am spinning my wheels, and I now set myself a threshold: if I have not made progress in 30 minutes on something I expected to take 10, I ask. It has made me faster and more accurate, and I have found that the people I ask usually appreciate being useful."
        why="Relatable at early career level, names the real cost (slower, missed things), has a specific mechanism (30-minute rule), ends on progress and a secondary insight."
      />

      <ExampleAnswer
        role="Mid-level"
        weakness="Taking on too much"
        answer="My instinct is to say yes to things, which has sometimes meant I overpromised and delivered less than I wanted to. I have got better at pausing before agreeing to something and asking myself: do I have the capacity to do this properly, or am I just being optimistic? I have also got better at being honest earlier when something is going to slip rather than staying quiet and hoping I can catch up. My manager has told me my delivery has become more predictable, which I think is the right direction."
        why="Names the real weakness without catastrophising, shows evolved self-awareness, has a concrete behaviour change, ends with external evidence."
      />

      <ExampleAnswer
        role="Mid-level"
        weakness="Conflict avoidance"
        answer="I used to avoid difficult conversations longer than I should have, I would wait too long, hoping things would resolve themselves, and they rarely did. I recognised the pattern about two years ago and made a deliberate effort to address disagreements earlier. I have found it helps to separate the issue from the person and to go in with questions rather than accusations. It is still not my favourite thing to do, but I have had several conversations in the last year that I would previously have delayed and they have gone well."
        why="Honest about the real cost (things did not resolve), has a specific technique, shows genuine rather than complete resolution."
      />

      <ExampleAnswer
        role="Senior"
        weakness="Impatience with slow progress"
        answer="I can be impatient when things are moving slowly, particularly when I can see what needs to happen and there are process or decision-making delays in the way. Early in my career that impatience sometimes came out in ways that were not helpful. I have learned to use it more constructively, I now channel it into being specific about what is blocking progress and who needs to make a decision, rather than just being frustrated. I also have a better sense now of when slowness is actually caution, which is sometimes the right call."
        why="Appropriate self-awareness at a senior level, names early unhelpful version, shows matured handling, acknowledges legitimate counter-perspective."
      />

      <ExampleAnswer
        role="Senior"
        weakness="Overcommunicating detail"
        answer="I am thorough by nature, which is mostly a strength, but it used to mean I would share more detail than people needed, particularly with senior stakeholders who wanted the conclusion first. I have worked on reading the room better and calibrating how much context is actually useful in a given situation. I now start with the headline and offer to go deeper rather than starting with everything and hoping they follow. The feedback I have had is that my communication has become cleaner."
        why="Frames a real weakness that does not feel threatening, has a specific behaviour change, ends with external validation."
      />

      <ExampleAnswer
        role="Career changer"
        weakness="New to the sector's terminology and norms"
        answer="I am coming from a different sector, which means there are things in this industry I am still learning, the specific language, the typical processes, the informal norms. I do not think that is a disqualifying gap, because most of what I have done translates, but I want to be honest that I am in a learning curve on the sector-specific pieces. I have already started, I have been reading trade publications, talking to people in the industry, and I joined a relevant professional group three months ago. I learn industry context quickly, but I would rather name the gap honestly than pretend it is not there."
        why="Honest about a real limitation that the interviewer has already spotted, frames it proportionately, shows active mitigation, demonstrates self-awareness that builds trust."
      />

      <h2>A note on adapting these</h2>

      <p>None of these answers should be taken word for word. The weakness has to be real, yours, not borrowed. The action has to be specific to what you actually did. The progress has to be something you can speak to naturally when asked a follow-up.</p>

      <p>Use these as proof that the structure works and as a sense of the register. Then go back to your own experience and build the answer from there.</p>

    </ArticleLayout>
  );
}
