# SKILL — Article Visual Components

## Purpose
Reusable inline React components for article pages. These live inside the article JSX file itself — no separate imports needed. Copy the component you need, paste it above the default export, and use it inline in the JSX body.

## Design tokens (consistent across all components)
```js
const green = "#3F6F63";
const greenLight = "#edf4f2";
const orange = "#D47A2C";
const ink = "#111111";
const inkMid = "#555555";
const border = "rgba(0,0,0,0.07)";
const surface = "#f9f9f9";
```

---

## 1. CategoryGrid
Use for: displaying 2-4 named categories, each with a label, question, and framework name.
Example use: Four types of interview question overview.

```jsx
function CategoryGrid({ categories }) {
  // categories: [{ number, label, question, framework, colour }]
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 12, margin: "24px 0 32px" }}>
      {categories.map((cat) => (
        <div key={cat.number} style={{ background: cat.colour, borderRadius: 10, padding: "20px 20px 18px", display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ fontSize: 11, fontWeight: 700, color: inkMid, letterSpacing: "0.06em" }}>{cat.number}</span>
          <p style={{ fontSize: 15, fontWeight: 700, color: ink, margin: 0, lineHeight: 1.3 }}>{cat.label}</p>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{cat.question}</p>
          <div style={{ fontSize: 11, fontWeight: 600, color: green, letterSpacing: "0.04em", textTransform: "uppercase" }}>{cat.framework}</div>
        </div>
      ))}
    </div>
  );
}
```

---

## 2. FrameworkSteps
Use for: showing a named framework as a horizontal step flow (e.g. STAR, Claim+Evidence+Relevance).

```jsx
function FrameworkSteps({ steps }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, margin: "16px 0 24px", alignItems: "center" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ background: greenLight, borderRadius: 8, padding: "8px 14px", fontSize: 13, fontWeight: 600, color: green }}>{step}</div>
          {i < steps.length - 1 && <span style={{ color: inkMid, fontSize: 14 }}>→</span>}
        </div>
      ))}
    </div>
  );
}
```

---

## 3. Trap
Use for: "trap to avoid" callout at the end of a section.

```jsx
function Trap({ children }) {
  return (
    <div style={{ background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 8, padding: "12px 16px", margin: "16px 0 24px", fontSize: 14, color: inkMid, lineHeight: 1.6 }}>
      <span style={{ fontWeight: 600, color: orange }}>Trap to avoid: </span>
      {children}
    </div>
  );
}
```

---

## 4. Mistake
Use for: listing common mistakes with ✗ icon. Stack multiple Mistake components together.

```jsx
function Mistake({ title, children }) {
  return (
    <div style={{ background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 8, padding: "12px 16px", margin: "10px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ color: orange, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✗</span>
      <div>
        <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 4px" }}>{title}</p>
        <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>{children}</p>
      </div>
    </div>
  );
}
```

---

## 5. WeakStrong
Use for: side-by-side weak answer vs strong answer comparison. Best used once per article.

```jsx
function WeakStrong({ weak, strong }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 28px" }}>
      <div style={{ background: "#fff4f4", border: "1.5px solid #f5c6c6", borderRadius: 10, padding: "16px 18px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: "#c0392b", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Weak answer</p>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.6, margin: 0 }}>{weak}</p>
      </div>
      <div style={{ background: "#f0f9f5", border: "1.5px solid #a8d5bc", borderRadius: 10, padding: "16px 18px" }}>
        <p style={{ fontSize: 11, fontWeight: 700, color: green, letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 10 }}>Strong answer</p>
        <p style={{ fontSize: 13, color: inkMid, lineHeight: 1.6, margin: 0 }}>{strong}</p>
      </div>
    </div>
  );
}
```

---

## 6. NumberedSteps
Use for: sequential preparation steps or processes. Renders as a vertical numbered list.

```jsx
function NumberedSteps({ steps }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "20px 0 28px" }}>
      {steps.map((step, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i + 1}</span>
          <p style={{ fontSize: 14, color: inkMid, margin: 0, lineHeight: 1.55 }}>{step}</p>
        </div>
      ))}
    </div>
  );
}
```

---

## 7. Checklist
Use for: a set of must-have criteria or qualities with ✓ icons.

```jsx
function Checklist({ items }) {
  // items: [{ label, detail }]
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start", background: surface, border: `1px solid ${border}`, borderRadius: 8, padding: "12px 16px" }}>
          <span style={{ width: 24, height: 24, borderRadius: "50%", background: greenLight, color: green, fontSize: 12, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>✓</span>
          <div>
            <p style={{ fontSize: 14, fontWeight: 600, color: ink, margin: "0 0 3px" }}>{item.label}</p>
            <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{item.detail}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 8. TwoColumnTimeline
Use for: before/after, day-before/morning-of, or any two-phase split.

```jsx
function TwoColumnTimeline({ left, right }) {
  // left/right: { label, colour, accentColour, items: string[] }
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, margin: "20px 0 32px" }}>
      {[left, right].map((col, i) => (
        <div key={i} style={{ background: col.colour, borderRadius: 10, padding: "20px 20px 18px" }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: col.accentColour, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{col.label}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {col.items.map((item, j) => (
              <div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ color: col.accentColour, fontWeight: 700, flexShrink: 0, fontSize: 13, marginTop: 1 }}>✓</span>
                <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.5 }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 9. StrategyCards
Use for: numbered strategy options, each with a label, description, and example.

```jsx
function StrategyCards({ strategies }) {
  // strategies: [{ number, label, description, example }]
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
```

---

## 10. AvoidList
Use for: things not to do, rendered as ✗ callout list.

```jsx
function AvoidList({ items }) {
  // items: [{ title, detail }]
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0 28px" }}>
      {items.map((item, i) => (
        <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "12px 16px", background: "#fff8f4", border: "1.5px solid #f5ddc8", borderRadius: 8 }}>
          <span style={{ color: orange, fontWeight: 700, fontSize: 16, flexShrink: 0, marginTop: 1 }}>✗</span>
          <p style={{ fontSize: 13, color: inkMid, margin: 0, lineHeight: 1.55 }}>
            <strong style={{ color: ink }}>{item.title}</strong> {item.detail}
          </p>
        </div>
      ))}
    </div>
  );
}
```

---

## 11. CalloutBlock
Use for: a prominent highlighted section — advantage callouts, key principles, closing emphasis.

```jsx
function CalloutBlock({ label, labelColour, borderColour, bgColour, children }) {
  return (
    <div style={{ background: bgColour, border: `2px solid ${borderColour}`, borderRadius: 10, padding: "22px 24px", margin: "16px 0 28px" }}>
      <p style={{ fontSize: 13, fontWeight: 700, color: labelColour, margin: "0 0 12px", letterSpacing: "0.04em", textTransform: "uppercase" }}>{label}</p>
      {children}
    </div>
  );
}
```

---

## Rules
- No em dashes anywhere. Use a regular hyphen or restructure the sentence.
- All components use inline styles only — no CSS classes.
- Keep component names PascalCase and define them above the default export.
- Every article needs a `nextArticle` prop passed to ArticleLayout (except the last in the series).
- CTA button in ArticleLayout is green (#3F6F63), not orange. Orange is for purchase actions only.