import type { SubmitHandler } from 'react-hook-form'

import type { FormData, FormProps } from './form.interface'

export default function Form({ handleSubmit, children, ...rest }: FormProps) {
  const onSubmit: SubmitHandler<FormData> = data =>
    alert(JSON.stringify(data, null, 2))

  return (
    <form onSubmit={handleSubmit(onSubmit)} {...rest}>
      {children}
    </form>
  )
}
