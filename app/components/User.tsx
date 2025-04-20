'use client'
import { signIn, useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

export default function User() {
  const { data: session } = useSession()

  if (session?.user) return <div>User</div>

  return (
    <Link href="/signin" className="btn-getstarted flex-md-shrink-0">
      Sign In
    </Link>
  )
}
