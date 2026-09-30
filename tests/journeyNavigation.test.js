import test from 'node:test'
import assert from 'node:assert/strict'
import { journeys, activeJourney, journeyLinkState, nextInJourney, articleCta, isCoachJourneyEnd } from '../src/pages/journeyNavigation.js'
import { articleMetadataBySlug } from '../src/articles/articleMetadata.js'

test('all configured articles exist and sequences contain no duplicates', () => {
  for (const journey of journeys) {
    assert.equal(new Set(journey.sequence).size, journey.sequence.length)
    for (const path of journey.articles) assert.ok(articleMetadataBySlug[path], path)
  }
})
test('each journey carries context into its articles and next steps', () => {
  for (const journey of journeys) {
    for (const path of journey.articles) {
      const state = journeyLinkState({ pathname: journey.path }, path)
      const location = { pathname: path, state }
      assert.equal(activeJourney(location)?.path, journey.path)
      const next = nextInJourney(journey, path)
      if (next) assert.deepEqual(journeyLinkState(location, next), state)
    }
  }
})
test('direct and unrelated article entries never claim an originating journey', () => {
  const path = '/resources/four-types-of-interview-question'
  assert.equal(activeJourney({ pathname: path }), undefined)
  assert.equal(activeJourney({ pathname: path, state: { journeyPath: '/candidates/no-interviews' } }), undefined)
  assert.equal(journeyLinkState({ pathname: '/candidates/no-interviews' }, path), null)
})
test('application sequence ends within applications and suppresses old Coach CTAs', () => {
  const journey = journeys.find(item => item.id === 'no-interviews')
  assert.equal(nextInJourney(journey, journey.sequence.at(-1)), null)
  for (const path of journey.articles) assert.equal(articleCta(articleMetadataBySlug[path]), null)
  assert.equal(articleCta(articleMetadataBySlug['/resources/star-method']), 'interview-coach')
})

test('Coach completion applies only to the final articles of the two interview journeys', () => {
  for (const journey of journeys) {
    for (const path of journey.articles) {
      const expected = ['interview-soon', 'interviews-no-offers'].includes(journey.id) && path === journey.sequence.at(-1)
      assert.equal(isCoachJourneyEnd(journey, path), expected, `${journey.id}: ${path}`)
    }
  }
  assert.equal(isCoachJourneyEnd(undefined, '/resources/ai-interview-prep'), false)
  assert.equal(isCoachJourneyEnd(journeys[0], undefined), false)
})

const resource = slug => `/resources/${slug}`
const orgExpectations = [
  ['assessing-ai-tools', ['ai-procurement-mistakes', 'vendor-questions'], [], 'ai-procurement-questions'],
  ['governance', ['how-many-ai-tools-in-hiring', 'ai-hiring-ownership'], ['eu-ai-act-hiring', 'ai-hiring-bias'], 'ai-hiring-policy-framework'],
  ['candidate-transparency', ['what-to-tell-candidates-about-ai', 'ai-hiring-trust-problem'], [], 'candidate-transparency-guide'],
  ['bias', ['ai-hiring-bias', 'how-many-ai-tools-in-hiring', 'ai-hiring-ownership'], ['vendor-questions'], 'bias-audit-checklist'],
]

test('Organisation sequences, supporting links and toolkit endpoints match the locked journeys', async () => {
  const { organisationNextAction } = await import('../src/pages/journeyNavigation.js')
  assert.equal(journeys.filter(j => j.audience === 'organisation').length, 4)
  for (const [id, sequence, supporting, toolkit] of orgExpectations) {
    const journey = journeys.find(j => j.id === id)
    assert.deepEqual(journey.sequence, sequence.map(resource))
    assert.deepEqual(journey.supporting, supporting.map(resource))
    assert.deepEqual(journey.articles, [...sequence, ...supporting].map(resource))
    for (const [index, path] of journey.sequence.entries()) {
      assert.deepEqual(organisationNextAction(journey, path), index === sequence.length - 1
        ? { toolkit } : { article: resource(sequence[index + 1]) })
    }
    for (const path of journey.supporting) {
      assert.equal(nextInJourney(journey, path), null)
      assert.deepEqual(organisationNextAction(journey, path), { article: journey.start })
    }
  }
})

test('shared Organisation articles retain entry-specific context after history state restoration', async () => {
  const { organisationNextAction } = await import('../src/pages/journeyNavigation.js')
  for (const id of ['governance', 'bias']) {
    const journey = journeys.find(j => j.id === id)
    for (const slug of ['how-many-ai-tools-in-hiring', 'ai-hiring-ownership', 'ai-hiring-bias']) {
      const pathname = resource(slug)
      // A refresh restores the browser history entry's serialized router state.
      const state = JSON.parse(JSON.stringify(journeyLinkState({ pathname: journey.path }, pathname)))
      const restored = activeJourney({ pathname, state })
      assert.equal(restored.path, journey.path)
      if (slug === 'ai-hiring-ownership') {
        assert.deepEqual(organisationNextAction(restored, pathname), { toolkit: journey.toolkit.slug })
      }
    }
  }
  const pathname = resource('ai-hiring-ownership')
  assert.equal(activeJourney({ pathname }), undefined)
  assert.equal(articleCta(articleMetadataBySlug[pathname]), 'toolkit-4')
  assert.equal(activeJourney({ pathname, state: { journeyPath: '/organisations/candidate-transparency' } }), undefined)
  assert.equal(organisationNextAction(journeys[0], pathname), null)
})
