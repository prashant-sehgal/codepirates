'use client'

import React from 'react'
import { useSignIn } from '../contexts/SignInContext'

interface Props {
  children: React.ReactNode
}

export default function SignInForm(props: Readonly<Props>) {
  const { handleSubmitSignInForm } = useSignIn()
  return (
    <form
      onSubmit={handleSubmitSignInForm}
      className="php-email-form"
      data-aos="fade-up"
      data-aos-delay={200}
    >
      {props.children}
    </form>
  )
}
