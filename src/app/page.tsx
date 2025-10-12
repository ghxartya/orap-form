'use client'

import { type ChangeEvent, type FocusEvent, useEffect } from 'react'
import {
  Controller,
  type ControllerRenderProps,
  useForm
} from 'react-hook-form'

import { useStore } from '@/store'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import { normalizeNumeric } from '@/utils/normalizeNumeric'
import { normalizeWhitespace } from '@/utils/normalizeWhitespace'

import Button from '@/ui/button/Button'
import Form from '@/ui/form/Form'
import type { FormData } from '@/ui/form/form.interface'
import Input from '@/ui/input/Input'
import Modal from '@/ui/modal/Modal'
import Select from '@/ui/select/Select'
import type { Options } from '@/ui/select/select.interface'

export default function Profile() {
  const messages = useIntlMessages()
  const { inputs } = messages.ProfilePage.modals.DeliveryAddressModal

  const { setIsModalOpen } = useStore()
  useEffect(() => setIsModalOpen({ DeliveryAddressModal: true }), [])

  const {
    control,
    formState: { errors },
    handleSubmit
  } = useForm<FormData>({
    mode: 'onChange',
    defaultValues: {
      city: 'Montgomery',
      zip: '14193',
      street: 'Margaretenstraße',
      house: '10',
      flat: '282'
    }
  })

  const handleNormalizeWhitespace = (
    event: FocusEvent<HTMLInputElement>,
    field: ControllerRenderProps<FormData>
  ) => field.onChange(normalizeWhitespace(event.target.value))

  const handleNormalizeNumeric = (
    event: ChangeEvent<HTMLInputElement>,
    field: ControllerRenderProps<FormData>,
    allowSpecial?: boolean
  ) => field.onChange(normalizeNumeric(event.target.value, allowSpecial))

  const options: Options = [
    { id: 1, value: 'Germany' },
    { id: 2, value: 'Ukraine' },
    { id: 3, value: 'Russia' }
  ]

  return (
    <Modal
      id='DeliveryAddressModal'
      heading='ProfilePage.modals.DeliveryAddressModal.heading'
    >
      <Form
        className='flex flex-col items-start gap-4 self-stretch'
        handleSubmit={handleSubmit}
      >
        <Select options={options} />
        <Controller
          name='city'
          control={control}
          rules={{
            required: inputs.city.error.required,
            minLength: { value: 2, message: inputs.city.error.length },
            maxLength: { value: 30, message: inputs.city.error.length }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              onBlur={event => handleNormalizeWhitespace(event, field)}
              label='ProfilePage.modals.DeliveryAddressModal.inputs.city.label'
              error={errors.city?.message}
            />
          )}
        />
        <Controller
          name='zip'
          control={control}
          rules={{
            maxLength: { value: 10, message: inputs.zip.error.overlong }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              onChange={event => handleNormalizeNumeric(event, field)}
              label='ProfilePage.modals.DeliveryAddressModal.inputs.zip.label'
              error={errors.zip?.message}
            />
          )}
        />
        <Controller
          name='street'
          control={control}
          rules={{
            required: inputs.street.error.required,
            minLength: { value: 2, message: inputs.street.error.length },
            maxLength: { value: 30, message: inputs.street.error.length }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              onBlur={event => handleNormalizeWhitespace(event, field)}
              label='ProfilePage.modals.DeliveryAddressModal.inputs.street.label'
              error={errors.street?.message}
            />
          )}
        />
        <Controller
          name='house'
          control={control}
          rules={{
            required: inputs.house.error.required,
            maxLength: { value: 15, message: inputs.house.error.overlong }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              onChange={event => handleNormalizeNumeric(event, field, true)}
              label='ProfilePage.modals.DeliveryAddressModal.inputs.house.label'
              error={errors.house?.message}
            />
          )}
        />
        <Controller
          name='flat'
          control={control}
          rules={{
            maxLength: { value: 15, message: inputs.flat.error.overlong }
          }}
          render={({ field }) => (
            <Input
              {...field}
              type='text'
              onChange={event => handleNormalizeNumeric(event, field, true)}
              label='ProfilePage.modals.DeliveryAddressModal.inputs.flat.label'
              error={errors.flat?.message}
            />
          )}
        />
        <Button
          type='submit'
          className='mt-2 self-stretch'
          tKey='ProfilePage.modals.DeliveryAddressModal.action'
        />
      </Form>
    </Modal>
  )
}
