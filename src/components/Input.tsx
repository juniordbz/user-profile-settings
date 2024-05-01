import { ComponentProps } from 'react'

export interface InputPrefixProps extends ComponentProps<'div'> {}
export function InputPrefix(props: InputPrefixProps) {
  return <div {...props} />
}

export interface InputControlProps extends ComponentProps<'input'> {}
export function InputControl(props: InputControlProps) {
  return (
    <input
      className="flex-1  border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export interface InputRootProps extends ComponentProps<'div'> {}

export function InputRoot(props: InputRootProps) {
  return (
    <div
      className="1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  )
}
