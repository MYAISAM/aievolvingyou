export const TOOLKIT_SLUGS = Object.freeze({
  procurementQuestions: "ai-procurement-questions",
  candidateTransparencyGuide: "candidate-transparency-guide",
  biasAuditChecklist: "bias-audit-checklist",
  aiHiringPolicyFramework: "ai-hiring-policy-framework",
  completeBundle: "complete-ai-hiring-toolkit-bundle",
});

export function toolkitUrl(slug) {
  return `/resources?toolkit=${slug}`;
}
