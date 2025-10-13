type IsModalOpen = {
  [Key in keyof IntlMessages['ProfilePage']['modals']]?: boolean
}

export interface Store {
  isModalOpen: IsModalOpen
  setIsModalOpen: (value: Store['isModalOpen']) => void
}
