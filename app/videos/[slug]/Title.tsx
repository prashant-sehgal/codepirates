import React from 'react'

interface Props {
  children: string
}

export default function Title(props: Readonly<Props>) {
  return <h2 className="project-title">{props.children}</h2>
}
