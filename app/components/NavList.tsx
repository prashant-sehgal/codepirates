import Link from 'next/link'
import React from 'react'

export default function NavList() {
  return (
    <ul>
      <li>
        <Link href="/#hero" className="active">
          Home
        </Link>
      </li>
      <li>
        <Link href="/#explore">Explore</Link>
      </li>
      <li>
        <Link href="/#contact">Contact</Link>
      </li>
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
    </ul>
  )
}
