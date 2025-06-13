import Link from 'next/link'
import React from 'react'

export default function BrandTitle() {
  return (
    <Link href="/" className="logo d-flex align-items-center me-auto me-xl-0">
      <h1 className="sitename">CODE PIRATES</h1>
    </Link>
  )
}
