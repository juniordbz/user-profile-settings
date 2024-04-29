'use client'
import { ChangeEvent, ComponentProps } from 'react'
import { UseFileInput } from './Root'

export interface ControlProps extends ComponentProps<'input'> {}

export function Control(props: ControlProps) {
  const { id, onFilesSelected } = UseFileInput()

  function handleFilesSelected(e: ChangeEvent<HTMLInputElement>) {
    if (!e.target.files?.length) {
      return
    }

    const files = Array.from(e.target.files)

    onFilesSelected(files)
  }

  return (
    <input
      {...props}
      type="file"
      className="sr-only"
      id={id}
      onChange={handleFilesSelected}
    />
  )
}
