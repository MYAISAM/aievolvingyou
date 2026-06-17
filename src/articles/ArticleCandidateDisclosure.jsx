import ArticleLayout from "./ArticleLayout";

const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const orangeLight = "#fff8f4";
const orangeBorder = "#f5ddc8";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";

function ThingRow({ number, label, detail }) {
  return (
    <div style={{
      display: "flex",
      gap: 14,
      alignItems: "flex-start",
      background: surface,
      border: `1px solid ${border}`,
      borderRadius: 8,
      padding: "13px 16px",
    }}>
      <span style={{
        fontSize: 11,
        fontWeight: 700,
        color: green,
        letterSpacing: "0.06em",
        flexShrink: 0,
        minWidth: 24,
        marginTop: 2,
      }}>
        {number}
      </span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 3px" }}>{label}</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{detail}</p>
      </div>
    </div>
  );
}

function FourThings() {
  const things = [
    { number: "01", label: "Where AI is used", detail: "Which stages of the process it touches, named plainly. For example, that software helps sort applications, or that an interview is recorded and analysed." },
    { number: "02", label: "What it affects", detail: "What the tool actually influences. Whether it shapes which applications get looked at first, or contributes to a score, rather than implying it makes the final call when it does not." },
    { number: "03", label: "What stays human", detail: "Where a person still makes or reviews the decision. This is the reassurance candidates are really looking for, and it is the part most disclosures leave out." },
    { number: "04", label: "How to reach a person", detail: "A named contact or route, and the option to ask for a human to review their application. A right nobody knows they have is not much of a right." },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, margin: "20px 0 32px" }}>
      {things.map((t) => (
        <ThingRow key={t.number} number={t.number} label={t.label} detail={t.detail} />
      ))}
    </div>
  );
}

function ExampleBox({ kind, label, text }) {
  const isWeak = kind === "weak";
  return (
    <div style={{
      background: isWeak ? orangeLight : "#f5fbf7",
      border: `1px solid ${isWeak ? orangeBorder : "rgba(63,111,99,0.3)"}`,
      borderRadius: 10,
      padding: "1rem 1.25rem",
    }}>
      <p style={{
        fontSize: 10,
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.07em",
        color: isWeak ? orange : green,
        margin: "0 0 8px",
      }}>
        {label}
      </p>
      <p style={{ fontSize: 13.5, color: inkMid, lineHeight: 1.6, margin: 0, fontStyle: "italic" }}>
        {text}
      </p>
    </div>
  );
}

function MistakeItem({ label, detail }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <p style={{ fontSize: 14, fontWeight: 700, color: ink, margin: "0 0 3px" }}>{label}</p>
      <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.6 }}>{detail}</p>
    </div>
  );
}

export default function ArticleCandidateDisclosure() {
  return (
    <ArticleLayout
      track="orgs"
      bucket="For Organisations"
      title="What should candidates be told about AI?"
      hideCoachCta={true}
    >

      {/* Standfirst */}
      <p style={{
        borderLeft: `3px solid ${green}`,
        paddingLeft: "1rem",
        fontSize: 14,
        color: inkMid,
        lineHeight: 1.65,
        margin: "0 0 1.75rem",
      }}>
        Candidates do not need to understand your technology. They need to understand four things: where AI is used, what it affects, what a person still decides, and how to reach one. Say those clearly, in plain language, at the point they apply, and you have done the part that matters. The rest is detail they did not ask for.
      </p>

      <hr style={{ border: "none", borderTop: `1px solid ${border}`, margin: "2rem 0" }} />

      <p>Most transparency debates start in the wrong place. Teams ask what they are legally required to disclose. Candidates ask a different question: "How does this affect me?" This gap is what causes poor communication.</p>

      <p>When I talk to hiring teams about telling candidates how AI is used, the question is almost never whether to do it. It is how much to say. And that is where most of them get stuck.</p>

      <p>People imagine that being transparent about AI means publishing something close to a technical specification. Since that feels both exposing and impossible, they end up saying nothing at all. Or they swing the other way and drop a vague sentence into a privacy policy that no candidate will ever open, then call it disclosure. Both are misreadings of what candidates are actually asking for.</p>

      <p>There is a separate piece on this site about why candidate transparency matters at all. I am going to take that as read here. This article is the practical companion to it: not the case for doing it, but a guide to what you actually say.</p>

      <h2>What to disclose: the four things candidates actually need</h2>

      <p>Strip away the anxiety about how much to reveal and the requirement is surprisingly small. A candidate needs four things, and none of them is technical.</p>

      <FourThings />

      <p>Notice what is not on that list. Not how the model works. Not what data it was trained on. Not the vendor's methodology. Candidates are not trying to audit your system. They are trying to understand where they stand and whether a human is involved. Give them those four things and the vast majority will feel informed rather than processed, which is the entire point.</p>

      <h2>When to tell them</h2>

      <p>The second thing teams get wrong is timing. Even organisations that disclose well often put everything in one place, usually a privacy notice linked at the bottom of the careers page, and consider the job done. Technically it is disclosure. In practice it is a vault nobody opens.</p>

      <p>Disclosure works when it arrives at the moment it becomes relevant. If software helps sort applications, the place to say so is on the application form, not three clicks away. If an interview will be recorded and analysed, candidates should know before they sit down to it, not in a policy they accepted weeks earlier. The test is simple. At each point where AI is about to affect someone, can they see, right there, that it is happening and what it means for them?</p>

      <p>This sounds like more work than a single notice, and it is slightly more, but it is also the difference between a candidate feeling informed and a candidate feeling that something was technically mentioned so it could be defended later. Those are very different experiences, and candidates can tell which one they are getting.</p>

      <h2>What you do not need to disclose</h2>

      <p>Transparency has a ceiling as well as a floor, and it is worth being clear about the ceiling, because fear of it is what makes teams freeze.</p>

      <p>You do not need to disclose proprietary technical detail, model internals, scoring weights, or every implementation decision behind your process. None of that helps a candidate understand where they stand, most of it you could not meaningfully explain in a sentence anyway, and some of it you may be contractually unable to share. A candidate needs to know that software helps sort applications. They do not need the algorithm that does it.</p>

      <div style={{
        background: greenLight,
        borderLeft: `3px solid ${green}`,
        borderRadius: "0 10px 10px 0",
        padding: "1rem 1.25rem",
        fontSize: 14,
        fontWeight: 600,
        color: "#2d5249",
        margin: "1.5rem 0",
        lineHeight: 1.6,
      }}>
        Transparency is about what the AI does to the candidate, not how it works inside. You owe them clarity about their position, not a tour of your stack.
      </div>

      <p>The one caution here is that this is not a licence to be vague about the things that do matter. "We use technology to support our process" hides behind the no-need-to-explain-internals principle while dodging all four of the things candidates genuinely need. Withholding the algorithm is fine. Withholding whether a human is involved is not.</p>

      <h2>What good disclosure actually reads like</h2>

      <p>This is the part worth getting right, so here is the difference made concrete. Same hiring stage, same underlying tool, two ways of telling the candidate.</p>

      <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "1.25rem 0 1.5rem" }}>
        <ExampleBox
          kind="weak"
          label="Weak: technically disclosed, practically useless"
          text="We may use technology, including automated tools, as part of our recruitment process. For further information, please refer to our privacy policy."
        />
        <ExampleBox
          kind="strong"
          label="Clear: a candidate knows where they stand"
          text="We use software to help us sort applications and shortlist for this role. It looks at how your experience matches the requirements in the job description. A member of our team reviews the shortlist before anyone is rejected or invited to interview. If you would like to know more, or ask for a person to review your application, contact our talent team at [email]."
        />
      </div>

      <p>The second version is barely longer. It uses no jargon. And it does all four jobs: it names where AI is used, what it affects, what stays human, and how to reach someone. A candidate who reads it knows exactly where they stand. That is the whole standard, and you can apply it to any stage of your process by asking the same question of every notice you write: after reading this, would the candidate know what is happening to them and who to talk to?</p>

      <p>Writing that once for every stage where AI shows up is the fiddly part, and it is exactly what the <a href="/resources#toolkits" style={{ color: green, fontWeight: 600, textDecoration: "none" }}>Candidate Transparency Guide</a> is built to do for you, with ready wording stage by stage. But even if you write your own from scratch, the test above is the only one that matters.</p>

      <h2>The common mistakes</h2>

      <p>Most poor disclosure is not dishonest. It falls into one of a few familiar traps, and once you can name them they are easy to avoid.</p>

      <div style={{
        background: surface,
        borderRadius: 10,
        border: `0.5px solid ${border}`,
        padding: "1.1rem 1.25rem",
        margin: "1.25rem 0 2rem",
      }}>
        <MistakeItem
          label="The vague catch-all"
          detail="A single line about using technology that is broad enough to cover anything and specific enough to inform no one. It exists to be pointed at later, not to be read."
        />
        <MistakeItem
          label="The buried notice"
          detail="Accurate disclosure placed where no candidate will find it, usually a policy linked in a footer. Disclosed in theory, hidden in practice."
        />
        <MistakeItem
          label="The legalese wall"
          detail="Technically complete, written for a lawyer rather than a candidate, and abandoned by the second sentence. Compliance without communication."
        />
        <MistakeItem
          label="The human review that is not real"
          detail="Claiming a person reviews decisions when in practice they rubber stamp whatever the tool produced. This is the most damaging mistake, because it is the one candidates will eventually discover, and it converts a transparency effort into a credibility problem."
        />
      </div>

      <h2>The legal minimum is not the communication standard</h2>

      <p>There is a floor here, and it is worth knowing where it sits. Under UK GDPR, candidates have rights around decisions made by solely automated means that have a significant effect on them, including the right to be informed and to ask for human involvement. The EU AI Act treats AI used in hiring as high risk and attaches transparency obligations to it. If you operate in or recruit into those jurisdictions, those duties already apply to you.</p>

      <p>But here is the thing I would want every hiring leader to take from this. Meeting the legal minimum and communicating well are not the same exercise, and treating them as the same is how organisations end up technically compliant and completely opaque.</p>

      <div style={{
        background: surface,
        borderLeft: `2px solid ${border}`,
        padding: "0.65rem 1rem",
        fontSize: 13.5,
        color: inkMid,
        fontStyle: "italic",
        margin: "1.25rem 0",
      }}>
        The legal minimum tells you what you must say to avoid a penalty. The communication standard is what you say so a candidate actually understands. The gap between the two is where the entire candidate experience lives.
      </div>

      <p>You can satisfy every legal requirement with a dense notice in a policy nobody reads and still leave every applicant confused about what happened to them. That is compliant. It is not transparent. The four things, delivered in plain language at the right moment, are what close the gap, and almost none of that is mandated by law. It is simply the difference between covering yourself and being understood.</p>

      <p>Compliance protects you from a regulator. Communication is what the candidate actually experiences. Aim only for the first and you will hit neither well. Aim for the second and the first tends to take care of itself.</p>

      {/* Foot CTA */}
      <div style={{
        borderTop: `0.5px solid ${border}`,
        marginTop: "2.75rem",
        paddingTop: "1.5rem",
      }}>
        <p style={{ fontSize: 14, color: inkMid, lineHeight: 1.6, margin: "0 0 1.25rem" }}>
          If you would rather not write this from scratch for every stage of your process, the wording is already done for you.
        </p>
        <p style={{
          fontSize: 10,
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: green,
          margin: "0 0 8px",
        }}>
          Put it into practice
        </p>
        <p style={{ fontSize: 13, fontWeight: 700, color: ink, margin: "0 0 4px" }}>
          Candidate Transparency Guide
        </p>
        <p style={{ fontSize: 12.5, color: inkMid, margin: "0 0 12px", lineHeight: 1.55 }}>
          What to tell candidates about AI at each stage of your process, with ready to use wording, an audit sheet, and the legal context behind it. The practical version of everything in this article.
        </p>
        <a
          href="/resources#toolkits"
          style={{
            display: "inline-block",
            background: green,
            color: "#ffffff",
            fontSize: 13,
            fontWeight: 600,
            padding: "9px 16px",
            borderRadius: 6,
            textDecoration: "none",
          }}
        >
          See all organisational tools →
        </a>
      </div>

    </ArticleLayout>
  );
}