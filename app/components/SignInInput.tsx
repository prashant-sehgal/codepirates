'use client'
import React from 'react'
import { useSignIn } from '../contexts/SignInContext'

export default function SignInInput() {
  const { email, setEmail } = useSignIn()
  return (
    <input
      type="email"
      className="form-control"
      name="email"
      placeholder="Enter your email address"
      value={email}
      onChange={(event) => setEmail(event.target.value)}
      required
    />
  )
}
