import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

export default function ArticleSpecificity() {
  return (
    <ArticleLayout
      bucket="Interview prep"
      title={`"I'm a good communicator" is killing your applications`}
    >
      <p>I want you to read this sentence and tell me what it tells you about the person who wrote it.</p>

      <p>"I am a highly motivated, results-driven professional with excellent communication skills and a proven track record of success."</p>

      <p>Nothing. It tells you absolutely nothing.</p>

      <p>And yet some version of that sentence appears on the majority of CVs and cover letters. Candidates write it. Hiring managers read it. Nobody remembers it. And then people wonder why they are not getting called back.</p>

      <p>The problem in one sentence: generic language is invisible. And invisible applications do not get interviews.</p>

      <h2>Why generic language feels safe but is not</h2>

      <p>I understand why people write this way. It feels professional. It feels like you are saying the right things. But language so broad it cannot be wrong is also language so broad it cannot be right. It cannot distinguish you from anyone else, because anyone else could have written it too.</p>

      <p>Think about it from the interviewer's perspective. They are reading thirty applications for one role. Twenty-five of them describe someone who is "passionate about delivering results", "a natural team player", and "comfortable working in fast-paced environments." After the fifth one, those phrases stop registering.</p>

      <p>Then they hit an application that says: "I reduced customer complaint resolution time by 40% by redesigning our escalation process, something I did in the first three months of the role without being asked."</p>

      <p>That one they remember. That one gets the call.</p>

      <h2>The specificity principle</h2>

      <p>Every claim you make about yourself needs to be backed by a specific example with a result.</p>

      <p>Not "I am a strong communicator." But: what did you communicate, to whom, in what context, and what happened as a result?</p>

      <p>Not "I work well under pressure." But: what specific pressure did you face, what did you do, and what was the outcome?</p>

      <p>Not "I have a proven track record of success." But: what did you achieve, by how much, and how?</p>

      <p>The specificity principle applies everywhere, your CV, your cover letter, your interview answers, your LinkedIn profile, your elevator pitch. A vague claim is always weaker than a specific example.</p>

      {/* ADDED: cross-reference to Article 5 */}
      <p>The same principle applies one step earlier. In the article on ATS-friendly CVs we covered how a skill listed but not demonstrated in your experience is just a claim. Specificity is what turns a claim into evidence, whether on a CV or in an answer.</p>

      <h2>What specificity actually looks like</h2>

      <p>The same statement written three ways:</p>

      <p><strong>Communication skills</strong></p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "12px 0 20px" }}>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Vague</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I have excellent communication skills."</p>
        </div>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Better</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I am comfortable communicating with stakeholders at all levels."</p>
        </div>
        <div style={{ background: "#fff", border: `1.5px solid rgba(63,111,99,0.3)`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Specific</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I presented quarterly performance data to a board of twelve non-technical directors every quarter for two years. I redesigned the format in my first six months to lead with business implications rather than methodology, which cut the average decision-making time in those meetings from three weeks to one."</p>
        </div>
      </div>

      <p><strong>Leadership</strong></p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "12px 0 20px" }}>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Vague</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I have strong leadership skills."</p>
        </div>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Better</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I have led teams in fast-paced environments."</p>
        </div>
        <div style={{ background: "#fff", border: `1.5px solid rgba(63,111,99,0.3)`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Specific</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I managed a team of seven during a period when we lost two senior members in the same month. I restructured the workload, ran weekly one-to-ones to keep morale up, and we delivered the quarter on target. Two of the remaining team members were promoted within six months."</p>
        </div>
      </div>

      <p><strong>Working under pressure</strong></p>

      <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "12px 0 20px" }}>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Vague</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I perform well under pressure."</p>
        </div>
        <div style={{ background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: inkMid, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Better</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"I have managed multiple competing deadlines effectively."</p>
        </div>
        <div style={{ background: "#fff", border: `1.5px solid rgba(63,111,99,0.3)`, borderRadius: 8, padding: "10px 14px" }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: green, textTransform: "uppercase", letterSpacing: "0.06em", margin: "0 0 6px" }}>Specific</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>"In my last role we had three major client deliverables land in the same two-week window. I mapped out the dependencies, had a direct conversation with each client about what was realistic, and negotiated revised timelines on two of the three without losing any of them. All three were delivered within a month of the original dates."</p>
        </div>
      </div>

      <h2>Why people do not do this</h2>

      <p><strong>They think their examples are not impressive enough.</strong> They are. A specific example from a small team or an entry-level role is worth more than a vague claim about a senior one. "I redesigned our onboarding checklist and reduced new starter mistakes in the first week by half" is more compelling than "I have extensive experience improving operational processes."</p>

      <p><strong>They have not done the work of identifying their examples.</strong> Most people have more specific, compelling stories than they realise, they just have not sat down to surface them.</p>

      <p><strong>They are worried about being too specific.</strong> A specific example proves the general capability. It makes the claim believable. And it invites the interviewer to ask follow-up questions, which is exactly what you want.</p>

      <h2>How to apply this right now</h2>

      <p>Take your current CV or a recent cover letter and highlight every phrase that could have been written by anyone. "Strong communication skills." "Team player." "Results-oriented." "Passionate about delivering excellence."</p>

      <p>For every highlighted phrase, ask yourself: what is the actual thing I did that I am trying to describe here? Then write that instead.</p>

      <p>If you cannot think of a specific example for a claim you are making, that is useful information. Either you need to dig deeper to find the example, or that claim is not as strong as you thought it was and you should drop it.</p>

      <h2>In the interview room</h2>

      <p>The specificity principle does not stop when you get the interview. When an interviewer asks "tell me about yourself", the worst answer is a vague summary of your career. The best answer is a tight, specific narrative that connects your actual experience to the actual role.</p>

      <p>When they ask "what are your strengths?", the worst answer is a list of adjectives. The best answer is two or three strengths, each backed by a specific example and connected to what they need.</p>

      <p>In every case, the pattern is the same. Claim plus evidence plus relevance. The claim without the evidence is just noise.</p>

      <h2>The thing to remember</h2>

      <p>Stop telling people what you are like. Show them what you have done.</p>

      <p>"I am a good communicator" tells an interviewer nothing they could not have made up themselves. A specific story about what you communicated, to whom, and what happened as a result, that is something they can evaluate, remember, and talk about in a debrief.</p>

      <p>That is the specificity principle. And once you start applying it, you will find you feel more confident talking about yourself, because you are not making claims anymore. You are just telling the truth, with enough detail that it lands.</p>

    </ArticleLayout>
  );
}
