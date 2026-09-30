import { candidateJourneys } from './candidateJourneys.js'
import { organisationJourneys } from './organisationJourneys.js'

export const journeys = [
  ...candidateJourneys.map(journey => ({ ...journey, audience: 'candidate', path: `/candidates/${journey.id}` })),
  ...organisationJourneys.map(journey => ({ ...journey, audience: 'organisation', path: `/organisations/${journey.id}` })),
].map(journey => {
  const sequence = journey.sequence || [journey.start, ...journey.supporting]
  const contextual = (journey.contextual || []).map(item => Array.isArray(item) ? `/resources/${item[1]}` : item)
  return { ...journey, sequence, articles: [...new Set([...sequence, ...contextual, ...journey.supporting, ...(journey.diagnostics || []).map(item => item.slug)])] }
})

export function journeysForArticle(path) {
  return journeys.filter(journey => journey.articles.includes(path))
}

// History state belongs to this entry, not a global last-visited journey.
// Validate membership so unrelated articles never inherit a misleading back link.
export function activeJourney(location) {
  return journeys.find(journey => journey.path === location.state?.journeyPath && journey.articles.includes(location.pathname))
}

export function journeyLinkState(location, destination) {
  const journey = journeys.find(item => item.path === location.pathname) || activeJourney(location)
  return journey?.articles.includes(destination) ? { journeyPath: journey.path } : null
}

export function nextInJourney(journey, path) {
  const index = journey.sequence.indexOf(path)
  return index < 0 ? null : journey.sequence[index + 1] || null
}

// Supporting reading rejoins the main sequence without becoming a required step.
export function organisationNextAction(journey, path) {
  if (journey?.audience !== 'organisation' || !journey.articles.includes(path)) return null
  if (journey.sequence.at(-1) === path) return { toolkit: journey.toolkit.slug }
  return { article: nextInJourney(journey, path) || journey.start }
}

export function libraryForArticle(article) {
  return article?.track === 'org'
    ? { path: '/resources#organisation-library', label: 'Browse all organisation guidance & tools' }
    : { path: '/resources#candidate-library', label: 'Browse all candidate guides' }
}

export function articleCta(article) {
  const applicationArticle = journeysForArticle(article?.slug).some(item => item.audience === 'candidate' && !item.coach)
  return applicationArticle ? null : article?.cta
}

// Only the final main-sequence article completes a Coach journey.
// Optional supporting reading keeps its existing navigation.
export function isCoachJourneyEnd(journey, path) {
  return Boolean(path && journey?.audience === 'candidate' && journey.coach && journey.sequence.at(-1) === path)
}
