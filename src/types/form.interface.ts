type Inputs =
  IntlMessages['ProfilePage']['modals']['DeliveryAddressModal']['inputs']

export type FormData = { [Key in keyof Inputs]: string }
