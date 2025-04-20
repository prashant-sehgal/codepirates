'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function AuthGuard(props: Readonly<Props>) {
  const { data: session } = useSession()

  if (session?.user) return props.children
}
