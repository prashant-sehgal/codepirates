'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function User() {
  const { data: session } = useSession()

  if (session?.user)
    return (
      <button
        className="btn-getstarted flex-md-shrink-0"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    )

  return (
    <Link href="/signin" className="btn-getstarted flex-md-shrink-0">
      Sign In
    </Link>
  )
}
