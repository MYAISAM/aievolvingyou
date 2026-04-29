import ArticleLayout from "./ArticleLayout";

const nextArticle = {
  slug: "star-method",
  label: "Next up",
  title: "The STAR method explained with real examples",
  excerpt: "Situation, Task, Action, Result. The most reliable structure for behavioural answers but most people use it wrong. Here's how to use it right.",
};

// Inline styles shared across visuals
const colours = {
  green: "#3F6F63",
  greenLight: "#edf4f2",
  orange: "#D47A2C",
  orangeLight: "#fdf0e4",
  ink: "#111111",
  inkMid: "#555555",
  border: "rgba(0,0,0,0.07)",
  surface: "#f9f9f9",
};

// Four category cards
function CategoryGrid() {
  const categories = [
    {
      number: "01",
      label: "Past experience",
      question: "What have you actually done?",
      framework: "STAR",
      colour: "#e8f4f0",
    },
    {
      number: "02",
      label: "Skills and competency",
      question: "What are you good at?",
      framework: "Claim + Evidence + Relevance",
      colour: "#fdf0e4",
    },
    {
      number: "03",
      label: "Motivation and fit",
      question: "Why do you want this?",
      framework: "Research + Alignment + Enthusiasm",
      colour: "#f0f0fd",
    },
    {
      number: "04",
      label: "Challenging questions",
      question: "How do you handle pressure?",
      framework: "Bridge / Clarify / Reframe",
      colour: "#fdf4e4",
    },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
      gap: 12,
      margin: "24px 0 32px",
    }}>
      {categories.map((cat) => (
        <div key={cat.number} style={{
          background: cat.colour,
          borderRadius: 10,
          padding: "20px 20px 18px",
          display: "flex",
          flexDirection: "column",
          gap: 8,
        }}>
          <span style={{
            fontSize: 11, fontWeight: 700,
            color: colours.inkMid, letterSpacing: "0.06em",
          }}>
            {cat.number}
          </span>
          <p style={{
            fontSize: 15, fontWeight: 700,
            color: colours.ink, margin: 0,
            lineHeight: 1.3,
          }}>
            {cat.label}
          </p>
          <p style={{
            fontSize: 13, color: colours.inkMid,
            margin: 0, lineHeight: 1.5,
          }}>
            {cat.question}
          </p>
          <div style={{
            marginTop: 6,
            fontSize: 11, fontWeight: 600,
            color: colours.green,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}>
            {cat.framework}
          </div>
        </div>
      ))}
    </div>
  );
}

// Framework step flow
function FrameworkSteps({ steps }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      margin: "16px 0 24px",
      alignItems: "center",
    }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{
            background: colours.greenLight,
            borderRadius: 8,
            padding: "8px 14px",
            fontSize: 13, fontWeight: 600,
            color: colours.green,
          }}>
            {step}
          </div>
          {i < steps.length - 1 && (
            <span style={{ color: colours.inkMid, fontSize: 14 }}>→</span>
          )}
        </div>
      ))}
    </div>
  );
}

// Trap callout box
function Trap({ children }) {
  return (
    <div style={{
      background: "#fff8f4",
      border: "1.5px solid #f5ddc8",
      borderRadius: 8,
      padding: "12px 16px",
      margin: "16px 0 24px",
      fontSize: 14,
      color: colours.inkMid,
      lineHeight: 1.6,
    }}>
      <span style={{ fontWeight: 600, color: colours.orange }}>Trap to avoid: </span>
      {children}
    </div>
  );
}

export default function ArticleFourTypes() {
  return (
    <ArticleLayout
      bucket="Interview Resources"
      title="The 4 types of interview question - and how to answer each one"
      nextArticle={nextArticle}
    >
      <p>Here's something most interview prep advice misses: every question you'll ever be asked in a job interview falls into one of four categories. Once you know which category you're dealing with, you know exactly how to structure your answer.</p>

      <p>I've been working in talent and career development for over 20 years. The single most useful thing I can share - the thing that changes how people perform most quickly - is this framework.</p>

      <h2>The four categories</h2>

      <p>Every interview question is trying to find out one of four things:</p>

      <CategoryGrid />

      <h2>Category 1: Past experience questions</h2>

      <p><strong>What they sound like:</strong> "Tell me about a time when...", "Give me an example of when you led a project under pressure.", "Describe a situation where you had to change your approach mid-way through something."</p>

      <p><strong>What the interviewer is actually asking:</strong> Have you done this before? Or something close enough that I can trust you to do it here?</p>

      <p><strong>Framework: STAR</strong></p>

      <FrameworkSteps steps={["Situation", "Task", "Action", "Result"]} />

      <p>The most important part is the Action. Most people spend too long on the Situation and rush the Action. A strong answer runs about 90 seconds to two minutes when spoken, uses "I" not "we" when describing what you did, and ends on a clear, concrete result.</p>

      <Trap>Telling a story where things were difficult but then everything just sort of worked out without being clear about what you did to make it work.</Trap>

      <h2>Category 2: Skills and competency questions</h2>

      <p><strong>What they sound like:</strong> "What are your key strengths?", "How would you describe your communication style?", "Walk me through how you approach [specific task]."</p>

      <p><strong>What the interviewer is actually asking:</strong> Can you do the job? And do you know yourself well enough to articulate that clearly?</p>

      <p><strong>Framework: Claim + Evidence + Relevance</strong></p>

      <FrameworkSteps steps={["Claim", "Evidence", "Relevance"]} />

      <p>Most people only do the first part. They say "I'm a strong communicator" and then wait. That's a claim with nothing behind it. Every candidate in that waiting room is saying the same thing.</p>

      <p><em>Example:</em> "I'd say one of my genuine strengths is translating complex information for non-specialist audiences. In my last role I was responsible for presenting data analysis to a board with very little technical background - I developed a format that focused on business implications rather than methodology, and we went from 20-minute presentations with lots of questions to 10-minute sessions where decisions were made on the spot. I imagine that kind of communication is relevant here given the cross-functional nature of the role."</p>

      <Trap>Being too vague or listing too many things. Pick two or three genuine strengths and go deep on them.</Trap>

      <h2>Category 3: Motivation and fit questions</h2>

      <p><strong>What they sound like:</strong> "Why do you want to work for us?", "What draws you to this role?", "Where do you see yourself in five years?", "Why are you leaving your current job?"</p>

      <p><strong>What the interviewer is actually asking:</strong> Do you actually want this specific job, or are we just next on your list? And are you going to stay?</p>

      <p><strong>Framework: Research + Alignment + Enthusiasm</strong></p>

      <FrameworkSteps steps={["Research", "Alignment", "Enthusiasm"]} />

      <p>Evidence that you've done your research. A clear line connecting what they're doing to what you genuinely want from your career. And some actual enthusiasm - not performed excitement, but a clear sense that this role makes sense for you right now.</p>

      <p><em>Example:</em> "I've been following what you've been doing in the sustainability space for the last couple of years - particularly the supplier transparency work you published last year, which isn't something many companies at your scale have done publicly. That kind of approach to accountability is what I want to be part of. I've spent the last four years building operational experience, and I'm now looking for somewhere I can bring that into a context where the mission actually matters to me."</p>

      <Trap>Treating "why are you leaving your current role" as needing a completely different answer. Keep the focus on what this new opportunity offers rather than what the old one lacks.</Trap>

      <h2>Category 4: Challenging questions</h2>

      <p><strong>What they sound like:</strong> "What's your greatest weakness?", "Tell me about a time you failed.", "Describe a situation where you disagreed with your manager.", "Tell me about a time you made a mistake."</p>

      <p><strong>What the interviewer is actually asking:</strong> How do you handle pressure? Are you self-aware? Can you be honest when it's uncomfortable?</p>

      <p><strong>Framework: Bridge / Clarify / Reframe / Authentic</strong></p>

      <FrameworkSteps steps={["Bridge", "Clarify", "Reframe", "Authentic"]} />

      <p><strong>Bridge</strong> - acknowledge the question honestly, then pivot to a strength or learning.</p>
      <p><strong>Clarify</strong> - ask a brief question to buy thinking time and show considered judgment. Works well on vague questions.</p>
      <p><strong>Reframe</strong> - turn a genuine challenge into a growth story. Name the difficulty, show the arc of learning, land on where you are now.</p>
      <p><strong>Authentic</strong> - be honest and professional. Don't blame colleagues, don't overshare. You can acknowledge something hard without turning the interview into a therapy session.</p>

      <p>The instinct most candidates have with challenging questions is to minimise or deflect. That instinct is wrong. An interviewer who gets a genuine, considered answer - even if it's not flattering - tends to trust the candidate more, not less.</p>

      <Trap>Answering the weakness question with "I'm a perfectionist." Every interviewer has heard this a hundred times. It signals you're not willing to engage with the question properly.</Trap>

      <h2>How to use this framework in practice</h2>

      <p>Before any interview, go through the job description and write down five or six questions you expect to be asked. Categorise each one. Once you know the category, you know the structure. Then it's just a matter of choosing the right example or framing for your specific situation.</p>

      <p>The candidates who perform best in interviews aren't the ones with the most impressive CVs. They're the ones who are clearest about what the question is actually asking and most direct in answering it.</p>

    </ArticleLayout>
  );
}