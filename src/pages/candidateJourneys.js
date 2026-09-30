const resource = (slug) => `/resources/${slug}`

// Optional video on any journey: video: { title, description, href, platform }.
// Use platform: "TikTok" or "YouTube"; href should be an approved individual video URL.
// Leave it unset until a relevant TikTok or YouTube Short is selected.
export const candidateJourneys = [
  {
    id: 'interview-soon',
    navigationLabel: 'Interview coming up',
    sequence: ['four-types-of-interview-question', 'star-method', 'specificity-principle', 'weakness-question', 'ai-interview-prep'].map(resource),
    title: 'I’ve got an interview coming up',
    description: 'Choose your examples, work on your answers and get some practice before the interview.',
    start: resource('four-types-of-interview-question'),
    startCopy: 'First, understand what the interviewer is asking. Then choose the right examples and structure for your answer.',
    supporting: ['star-method', 'specificity-principle', 'weakness-question', 'ai-interview-prep'].map(resource),
    contextual: ['career-changers', 'interviewing-after-long-gap', 'weakness-question-examples'].map(resource),
    coach: true,
  },
  {
    id: 'interviews-no-offers',
    navigationLabel: 'Interviews but no offers',
    sequence: ['specificity-principle', 'star-method', 'four-types-of-interview-question', 'ai-interview-prep', 'weakness-question'].map(resource),
    title: 'I’m getting interviews but not offers',
    description: 'Work out what isn’t landing and improve the way you explain your experience.',
    start: resource('specificity-principle'),
    startCopy: 'Can the interviewer tell what you did, how you did it and what changed? Start with those details. They make your experience easier to understand.',
    diagnostics: [
      { title: 'Poor structure', copy: 'Do you spend so long setting the scene that you rush what you did and how it turned out? Give those parts enough time.', slug: resource('star-method') },
      { title: 'Answering the wrong question type', copy: 'Are you giving a past example when the question asks how you would approach a new situation?', slug: resource('four-types-of-interview-question') },
      { title: 'Sounding too rehearsed or AI-written', copy: 'Could you explain the same experience in your own words if the interviewer asked a follow-up?', slug: resource('ai-interview-prep') },
    ],
    supporting: ['weakness-question'].map(resource),
    coach: true,
  },
  {
    id: 'no-interviews',
    navigationLabel: 'Applying but not getting interviews',
    sequence: ['applications-you-never-hear-back-from', 'do-ats-systems-reject-75-percent', 'how-ai-screening-actually-works', 'can-you-tell-when-ai-is-screening-your-application', 'the-cv-didnt-change', 'ats-friendly-cvs-what-matters'].map(resource),
    title: 'I’m applying but not getting interviews',
    description: 'Look at the roles you’re applying for, what your CV says about you and whether it’s reaching the right people.',
    start: resource('applications-you-never-hear-back-from'),
    startCopy: 'When you hear nothing back, it’s hard to know what to change. This guide explains why good applications can go unseen and what you can do about it.',
    supporting: ['do-ats-systems-reject-75-percent', 'how-ai-screening-actually-works', 'can-you-tell-when-ai-is-screening-your-application', 'the-cv-didnt-change', 'ats-friendly-cvs-what-matters'].map(resource),
    coach: false,
  },
]

export const popularHelp = [
  ['STAR', 'star-method'],
  ['Weakness questions', 'weakness-question'],
  ['Vague answers / specificity', 'specificity-principle'],
  ['Career change', 'career-changers'],
  ['Employment gap', 'interviewing-after-long-gap'],
  ['Using AI properly', 'ai-interview-prep'],
  ['ATS and AI screening', 'how-ai-screening-actually-works'],
].map(([label, slug]) => ({ label, slug: resource(slug) }))
