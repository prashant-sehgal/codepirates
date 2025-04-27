'use client'
import { FluentProvider, webLightTheme } from '@fluentui/react-components'
import React from 'react'

interface Props {
  children: React.ReactNode
}

export default function UIProvider(props: Readonly<Props>) {
  return <FluentProvider theme={webLightTheme}>{props.children}</FluentProvider>
}
