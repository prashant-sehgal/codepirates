import React from 'react'
import styles from './Search.module.css'
import { useSearch } from '@/app/contexts/SearchContext'

interface Props {
  query: string
  setQuery: (value: string) => void
  closeSearch: () => void
}

export default function SearchInput(props: Readonly<Props>) {
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        value={props.query}
        onChange={(e) => props.setQuery(e.target.value)}
        className={styles.searchInput}
        autoFocus
      />

      <button
        className={styles.closeButton}
        onClick={() => props.closeSearch()}
      >
        <i className="bi bi-x-lg"></i>
      </button>
    </>
  )
}
