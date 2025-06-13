import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function Main(props: Readonly<Props>) {
  return <main className="main">{props.children}</main>
}
