import { useState } from "react";
import { Link } from "react-router-dom";

const articles = [
  {
    bucket: "Interview Resources",
    title: "The STAR method explained - with three real examples you can actually learn from",
    excerpt: "Most interview advice tells you what STAR stands for. What it doesn't tell you is why most people's answers still fall flat - and what the difference looks like in practice.",
    href: "/resources/star-method",
  },
  {
    bucket: "Interview Resources",
    title: 'The weakness question: why "I\'m a perfectionist" is the worst answer',
    excerpt: "Every hiring manager has heard it. Every time someone says it, the pen stops moving. Here's how to answer this question in a way that actually builds confidence rather than destroying it.",
    href: "/resources/weakness-question",
  },
  {
    bucket: "Interview Resources",
    title: "The 4 types of interview question - and how to answer each one",
    excerpt: "Every question you'll ever be asked in a job interview falls into one of four categories. Once you know which one you're dealing with, you know exactly how to structure your answer.",
    href: "/resources/four-types-of-interview-question",
  },
  {
    bucket: "Interview Resources",
    title: '"I\'m a good communicator" is killing your applications',
    excerpt: "Generic language is invisible. And invisible applications don't get interviews. Here's the specificity principle - the single most important shift you can make in how you present yourself.",
    href: "/resources/specificity-principle",
  },
  {
    bucket: "Interview Resources",
    title: "How to use AI to prep for interviews without sounding like a robot",
    excerpt: "AI is the best interview prep tool available right now. Most people are using it wrong. Here's the difference between using it as a thinking partner and using it as a crutch.",
    href: "/resources/ai-interview-prep",
  },
  {
    bucket: "Interview Resources",
    title: "I hadn't interviewed in over 10 years. Here's what I had to relearn.",
    excerpt: "I'd spent years coaching candidates through interviews. When I had to interview again myself, I found out how much of that advice is easier to give than to take.",
    href: "/resources/interviewing-after-long-gap",
  },
];

export default function Resources() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section
      id="resources"
      style={{
        borderTop: "1px solid rgba(0,0,0,0.08)",
        padding: "64px 0",
      }}
    >
      <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px" }}>
        <span style={{
          display: "inline-block",
          fontSize: 11, fontWeight: 600,
          letterSpacing: "0.07em", textTransform: "uppercase",
          padding: "3px 10px", borderRadius: 20,
          background: "#f2f2f2", color: "#999999",
        }}>
          Resources
        </span>

        <h2 style={{
          fontSize: 26, fontWeight: 700,
          letterSpacing: "-0.015em",
          marginBottom: 6, marginTop: 10, color: "#111111",
        }}>
          Interview guides and articles.
        </h2>

        <p style={{
          fontSize: 15, color: "#555555", fontWeight: 300,
          marginBottom: 36, lineHeight: 1.7, maxWidth: 480,
        }}>
          Practical resources for candidates navigating modern interview
          processes. More articles on AI, hiring, and the future of work coming
          soon.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {articles.map((article, i) => (
            <Link
              key={i}
              to={article.href}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                display: "block",
                background: "#f9f9f9",
                border: `1.5px solid ${hoveredIndex === i ? "#111111" : "rgba(0,0,0,0.07)"}`,
                borderRadius: 12,
                padding: "22px 24px",
                textDecoration: "none",
                transition: "all 0.18s",
                transform: hoveredIndex === i ? "translateY(-2px)" : "none",
                boxShadow: hoveredIndex === i ? "0 8px 24px rgba(0,0,0,0.07)" : "none",
              }}
            >
              <span style={{
                display: "inline-block",
                fontSize: 10, fontWeight: 600,
                letterSpacing: "0.07em", textTransform: "uppercase",
                padding: "2px 8px", borderRadius: 20,
                background: "#edf4f2", color: "#3F6F63",
                marginBottom: 10,
              }}>
                {article.bucket}
              </span>

              <h3 style={{
                fontSize: 16, fontWeight: 600, color: "#111111",
                lineHeight: 1.35, marginBottom: 8, letterSpacing: "-0.01em",
              }}>
                {article.title}
              </h3>

              <p style={{
                fontSize: 14, color: "#555555",
                lineHeight: 1.65, fontWeight: 300, marginBottom: 14,
              }}>
                {article.excerpt}
              </p>

              <span style={{ fontSize: 13, fontWeight: 600, color: "#3F6F63" }}>
                Read article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}