import { ComponentProps } from 'react'

export interface ControlProps extends ComponentProps<'input'> {}

export function Control(props: ControlProps) {
  return <input {...props} type="file" className="sr-only" id="photo" />
}
