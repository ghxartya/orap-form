import Image from 'next/image'

export default function Background() {
  return (
    <div className='absolute top-0 right-0 bottom-0 left-0 z-[-1]'>
      <Image
        className='!h-auto'
        src='/background.jpg'
        alt='Background'
        fill
        priority
        quality={100}
      />
    </div>
  )
}
