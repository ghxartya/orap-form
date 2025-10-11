'use client'

import { useEffect } from 'react'

import { useStore } from '@/store'

import Modal from '@/ui/modal/Modal'

export default function Profile() {
  const { setIsModalOpen } = useStore()

  useEffect(() => setIsModalOpen({ DeliveryAddressModal: true }), [])

  return (
    <Modal
      id='DeliveryAddressModal'
      heading='ProfilePage.modals.DeliveryAddressModal.heading'
    >
      <></>
    </Modal>
  )
}
