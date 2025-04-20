'use client'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export default function SignInWithGoogle() {
  return (
    <button
      type="button"
      className="signinBtn"
      onClick={() => signIn('google')}
    >
      <Image src="/google-logo.png" alt="google" width={25} height={25} />
      Continue With Google
    </button>
  )
}
