import test from 'node:test'
import assert from 'node:assert/strict'
import { build } from 'esbuild'
import { mkdtemp, writeFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { createRequire } from 'node:module'
import { journeys } from '../src/pages/journeyNavigation.js'

// Render the real layout to catch competing/default CTAs that pure routing tests miss.
test('Organisation pages render the locked routes and journey-specific primary actions', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'aiey-render-test-'))
  try {
    const result = await build({
      stdin: { contents: `
        import React from 'react';
        import { renderToStaticMarkup } from 'react-dom/server';
        import { MemoryRouter } from 'react-router-dom';
        import ArticleLayout from './src/articles/ArticleLayout.jsx';
        import ToolkitDetailModal from './src/components/ToolkitDetailModal.jsx';
        import { OrganisationsLanding, OrganisationJourney } from './src/pages/Organisations.jsx';
        export { ArticleLayout, OrganisationsLanding, OrganisationJourney, ToolkitDetailModal };
        export function render(component, props, entry) {
          return renderToStaticMarkup(React.createElement(MemoryRouter, { initialEntries: [entry] }, React.createElement(component, props)));
        }
      `, resolveDir: process.cwd() },
      bundle: true, platform: 'node', format: 'cjs', jsx: 'automatic', write: false,
      define: { 'process.env.NODE_ENV': '"production"' },
    })
    const filename = join(directory, 'render.cjs')
    await writeFile(filename, result.outputFiles[0].text)
    const { render, ArticleLayout, OrganisationsLanding, OrganisationJourney, ToolkitDetailModal } = createRequire(import.meta.url)(filename)
    const bundle = { slug: 'complete-ai-hiring-toolkit-bundle', price: '£199', whatsIncluded: [], bestFor: [] }
    for (const journey of journeys.filter(j => j.audience === 'organisation')) {
      const toolkit = { ...journey.toolkit, whatsIncluded: [], bestFor: [], price: '£49', href: 'https://example.com/buy', ctaLabel: 'Buy toolkit' }
      const modal = render(ToolkitDetailModal, { toolkit, bundle, onClose() {} }, '/resources')
      assert.ok(modal.includes('Get all four practical AI hiring toolkits for £199.'))
      assert.ok(modal.includes('href="/resources?toolkit=complete-ai-hiring-toolkit-bundle"'))
      assert.ok(modal.indexOf('Buy toolkit') < modal.indexOf('Need the full set?'))
      assert.ok(modal.includes('href="https://example.com/buy"'))
    }
    const bundleModal = render(ToolkitDetailModal, { toolkit: bundle, bundle, onClose() {} }, '/resources')
    assert.ok(!bundleModal.includes('Need the full set?'))
    const orgs = journeys.filter(j => j.audience === 'organisation')
    const landing = render(OrganisationsLanding, { showIllustration: false }, '/organisations')
    for (const journey of orgs) {
      assert.ok(landing.includes(`href="${journey.path}"`))
      const page = render(OrganisationJourney, { journey }, journey.path)
      assert.equal(page.includes('Keep reading'), journey.sequence.length > 1)
      for (const pathname of journey.articles) {
        const html = render(ArticleLayout, { title: 'Test article' }, { pathname, state: { journeyPath: journey.path } })
        const actions = html.slice(html.indexOf('class="article-next-actions"'))
        assert.ok(html.includes(`href="${journey.path}"`), 'active journey back link')
        assert.ok(actions.includes(`href="/resources?toolkit=${journey.toolkit.slug}"`))
        assert.ok(!actions.includes('class="article-cta article-cta--toolkit"'), 'no competing default toolkit card')
        const final = pathname === journey.sequence.at(-1)
        const primary = actions.match(/class="journey-next__card" href="([^"]+)"/)[1]
        const next = journey.sequence[journey.sequence.indexOf(pathname) + 1] || journey.start
        assert.equal(primary, final ? `/resources?toolkit=${journey.toolkit.slug}` : next)
        assert.equal(actions.includes('class="article-cta__secondary"'), !final)
        assert.ok(actions.indexOf('Browse all organisation guidance') > actions.indexOf('journey-next__card'))
      }
    }
    const direct = render(ArticleLayout, { title: 'Ownership' }, '/resources/ai-hiring-ownership')
    assert.ok(direct.includes('class="article-cta article-cta--toolkit"'))
    assert.ok(direct.includes('href="/resources?toolkit=ai-hiring-policy-framework"'))
    assert.ok(!direct.includes('class="journey-next__card"'))
  } finally {
    await rm(directory, { recursive: true, force: true })
  }
})
