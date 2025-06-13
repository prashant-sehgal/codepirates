'use client'
import React from 'react'
import { useSearch } from '../contexts/search.context'

export default function ToggleSearch() {
  const { toggleSearch } = useSearch()
  return (
    <button className="btn-getstarted border-0" onClick={() => toggleSearch()}>
      Search
    </button>
  )
}
