'use client' // Error components must be Client Components

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="text-center py-4">
      <h2 className="py-4 text-xl font-semibold text-destructive">出错了!</h2>
      <Button onClick={reset}>刷新</Button>
    </div>
  )
}
