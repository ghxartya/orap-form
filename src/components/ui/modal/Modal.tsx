import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { useDebounceCallback } from 'usehooks-ts'

import { useStore } from '@/store'

import Heading from '@/ui/heading/Heading'
import { Icons } from '@/ui/icons'
import Toggle from '@/ui/toggle/Toggle'

import type { ModalProps } from './modal.interface'

export default function Modal({ id, heading, children }: ModalProps) {
  const { isModalOpen, setIsModalOpen } = useStore()
  const [isReadyToClose, setIsReadyToClose] = useState(false)

  const isOpen = isModalOpen[id]
  const closeModal = () => isReadyToClose && setIsModalOpen({ [id]: false })
  const readyToClose = useDebounceCallback(() => setIsReadyToClose(true), 300)

  useEffect(() => {
    if (isOpen && !isReadyToClose) readyToClose()
    else if (!isOpen && isReadyToClose) setIsReadyToClose(false)
  }, [isOpen])

  return (
    <div
      className={clsx(
        'transition-opacity-visibility bg-brand-blue/80 pointer-events-none invisible fixed top-0 right-0 bottom-0 left-0 z-[1000] cursor-pointer opacity-0 duration-300',
        { '!pointer-events-auto !visible opacity-100': isOpen }
      )}
      onClick={closeModal}
    >
      {isOpen && (
        <style jsx global>
          {`
            body {
              overflow-y: hidden;
            }
          `}
        </style>
      )}
      <div
        className={clsx(
          'custom-container',
          'flex h-full items-center justify-center'
        )}
      >
        <div
          id='modal-content'
          className={clsx(
            'flex max-h-3/4 w-full max-w-[637px] scale-90 cursor-default flex-col items-start gap-6 overflow-x-hidden overflow-y-auto rounded-sm bg-white px-6 py-8 transition-transform duration-300 will-change-transform',
            { '!scale-100': isOpen }
          )}
          onClick={event => event.stopPropagation()}
        >
          <div className='flex w-full items-center justify-between'>
            <Heading selectable={false} nowrap tKey={heading} />
            <Toggle
              label='toggle modal close'
              disabled={!isReadyToClose}
              onClick={closeModal}
            >
              <Icons.Modal.Close className='text-brand-blue' />
            </Toggle>
          </div>
          {children}
        </div>
      </div>
    </div>
  )
}
