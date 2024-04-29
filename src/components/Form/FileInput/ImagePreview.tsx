'use client'

import { User } from 'lucide-react'
import { UseFileInput } from './Root'
import { useMemo } from 'react'

export function ImagePreview() {
  const { files } = UseFileInput()

  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null
    }

    return URL.createObjectURL(files[0])
  }, [files])

  if (previewURL === null) {
    return (
      <div className=" flex size-16 items-center justify-center rounded-full bg-violet-50">
        <User className="size-8 text-violet-500" />
      </div>
    )
  } else {
    return (
      <img
        src={previewURL}
        alt=""
        className="size-16 rounded-full object-cover"
      />
    )
  }
}
