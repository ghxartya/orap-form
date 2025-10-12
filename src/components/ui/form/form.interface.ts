import type { FormHTMLAttributes } from 'react'
import type { UseFormHandleSubmit } from 'react-hook-form'

type Inputs =
  IntlMessages['ProfilePage']['modals']['DeliveryAddressModal']['inputs']

export type FormData = { [Key in keyof Inputs]: string }

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  handleSubmit: UseFormHandleSubmit<FormData>
}
