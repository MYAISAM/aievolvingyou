import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import termsOfBusiness from '../../legal/terms-of-business.md?raw'
import privacyPolicy from '../../legal/privacy-policy.md?raw'
import termsOfUse from '../../legal/terms-of-use.md?raw'

const legalDocuments = {
  terms: termsOfBusiness,
  privacy: privacyPolicy,
  'terms-of-use': termsOfUse,
}

export default function LegalPage({ documentKey }) {
  const content = legalDocuments[documentKey]

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [documentKey])

  return (
    <main className="legal-page">
      <article className="legal-document">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            table: ({ children }) => (
              <div className="legal-table-wrap">
                <table>{children}</table>
              </div>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </article>
    </main>
  )
}
