import { ComponentProps } from 'react'

export interface RootProps extends ComponentProps<'div'> {}

export function Root(props: RootProps) {
  return <div {...props} />
}
