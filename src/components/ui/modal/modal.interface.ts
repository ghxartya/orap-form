import type { Store } from '@/types/store.interface'

import type { HeadingProps } from '@/ui/heading/heading.interface'

export interface ModalProps {
  id: keyof Store['isModalOpen']
  heading: HeadingProps['tKey']
  children: React.ReactNode
}
