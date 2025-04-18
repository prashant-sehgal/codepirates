'use client'
import { SessionProvider } from 'next-auth/react'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function AuthProvider(props: Readonly<Props>) {
  return <SessionProvider>{props.children}</SessionProvider>
}
