import React from 'react'
import { PolymorphicComponentProps } from './button.type'
import clsx from 'clsx'
import { ApolloCache, DefaultContext, MutationFunctionOptions } from '@apollo/client'

type ButtonProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    children: React.ReactNode
    className?: string
    variant: 'primary' | 'link'
    onClick?:() => void
  }>

const btnClasses = 'px-4 py-3 transition duration-300'

const VARIANTS = {
  primary: 'bg-[#6d67ff] text-blue-100 hover:bg-[#3d3fdb]',
  link: 'text-[#6d67ff] hover:text-[#3d3fdb]  !px-0 !pb-1',
}

export default function Button<C extends React.ElementType  = 'button'>(
  props: ButtonProps<C>
) {
  const { children, as, className, variant, ...buttonProps } = props
  const Component = as || 'button'
  return (
    <Component
      className={clsx(className, btnClasses, variant && VARIANTS[variant])}
      {...buttonProps}
    >
      {children}
    </Component>
  )
}
