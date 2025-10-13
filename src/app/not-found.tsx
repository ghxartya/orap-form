'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

import { Icons } from '@/ui/icons'

export default function NotFound() {
  const { replace } = useRouter()

  useEffect(() => replace('/'), [])

  return (
    <div className='flex h-screen w-full items-center justify-center bg-white/50'>
      <style jsx global>
        {`
          body {
            overflow-y: hidden;
          }
        `}
      </style>
      <Icons.Spinner size={36} className='text-brand-blue' />
    </div>
  )
}
