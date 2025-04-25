'use client'
import { signIn } from 'next-auth/react'
import { createContext, useContext, useState } from 'react'

interface Props {
  children: React.ReactNode
}

interface Context {
  email: string
  setEmail: (email: string) => void
  handleSubmitSignInForm(event: React.FormEvent<HTMLFormElement>): void
}

const SignInContext = createContext<Context | undefined>(undefined)

export default function SignInProvider(props: Readonly<Props>) {
  const [email, setEmail] = useState('')

  async function handleSubmitSignInForm(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault()

    const response = await signIn('email', {
      email,
      redirect: false,
      callbackUrl: '/',
    })

    if (response?.ok) return
    else throw new Error("something wen't wrong")
  }

  return (
    <SignInContext.Provider value={{ email, setEmail, handleSubmitSignInForm }}>
      {props.children}
    </SignInContext.Provider>
  )
}

export function useSignIn() {
  const context = useContext(SignInContext)

  if (context === undefined) {
    throw new Error('useSignIn must be used within a SignInProvider')
  }
  return context
}
