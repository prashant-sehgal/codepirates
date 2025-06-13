import React from 'react'
import styles from './Search.module.css'
import NoResults from './NoResults'

interface Suggestion {
  title: string
  url: string
}

const dummySuggestions: Suggestion[] = [
  { title: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
  { title: 'React Official Site', url: 'https://reactjs.org' },
  { title: 'Tailwind CSS', url: 'https://tailwindcss.com' },
  { title: 'MDN Web Docs', url: 'https://developer.mozilla.org' },
]

interface Props {
  query: string
}
export default function Suggestions(props: Readonly<Props>) {
  const filteredSuggestions = dummySuggestions.filter((s) =>
    s.title.toLowerCase().includes(props.query.toLowerCase())
  )

  return (
    <div className={styles.suggestions}>
      {filteredSuggestions.length ? (
        filteredSuggestions.map((suggestion, idx) => (
          <a
            key={idx}
            href={suggestion.url}
            className={styles.suggestionItem}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{suggestion.title}</span>
            <small>{suggestion.url}</small>
          </a>
        ))
      ) : (
        <NoResults />
      )}
    </div>
  )
}
