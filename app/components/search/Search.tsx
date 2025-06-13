'use client'
import { useCallback, useState } from 'react'
import Overlay from './Overlay'
import SearchInput from './SearchInput'
import Suggestions from './Suggestions'
import { useSearch } from '@/app/contexts/search.context'

export default function Search() {
  const [query, setQuery] = useState('')
  const { isVisible, toggleSearch } = useSearch()

  const closeSearch = useCallback(function () {
    setQuery('')
    toggleSearch()
  }, [])

  if (isVisible)
    return (
      <Overlay>
        <SearchInput
          query={query}
          setQuery={setQuery}
          closeSearch={closeSearch}
        />
        <Suggestions query={query} />
      </Overlay>
    )
}
