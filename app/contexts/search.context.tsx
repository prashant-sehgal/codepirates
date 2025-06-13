'use client'
import { createContext, useCallback, useContext, useState } from 'react'

interface TypeSearchContext {
  isVisible: boolean
  toggleSearch: () => void
}
const SearchContext = createContext<TypeSearchContext | undefined>(undefined)

interface Props {
  children: React.ReactNode
}
export default function SearchProvider(props: Readonly<Props>) {
  const [isVisible, setIsVisible] = useState(false)

  const toggleSearch = useCallback(function () {
    setIsVisible((current) => !current)
  }, [])

  return (
    <SearchContext.Provider value={{ isVisible, toggleSearch }}>
      {props.children}
    </SearchContext.Provider>
  )
}

export function useSearch() {
  const context = useContext(SearchContext)

  if (context === undefined) {
    throw new Error('useSearch must be used within a SearchProvider')
  }
  return context
}
