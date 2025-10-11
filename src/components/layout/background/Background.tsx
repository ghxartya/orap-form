'use client'

import Image from 'next/image'

import { useStore } from '@/store'

export default function Background() {
  const { setIsModalOpen } = useStore()

  return (
    <div
      className='absolute top-0 right-0 bottom-0 left-0 z-[-1]'
      onClick={() => setIsModalOpen({ DeliveryAddressModal: true })}
    >
      <Image
        className='!h-auto select-none'
        src='/background.jpg'
        alt='Background'
        fill
        priority
        quality={100}
        draggable={false}
      />
    </div>
  )
}
