import React from 'react'
import { RenderIfProps } from '@/Sharedcomponents/renderIf/renderIf.types'

export default function RenderIf(props: RenderIfProps) {
  const { condition, children } = props
  if (!condition) {
    return null
  }
  return <>{children}</>
}
