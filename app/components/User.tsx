'use client'
import { signIn, useSession } from 'next-auth/react'
import React from 'react'

export default function User() {
  const { data: session } = useSession()

  if (session?.user) return <div>User</div>

  return (
    <button
      className="btn-getstarted flex-md-shrink-0"
      style={{ border: 'none' }}
      onClick={() => signIn()}
    >
      Sign In
    </button>
  )
}
