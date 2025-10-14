import clsx from 'clsx'
import { memo, useCallback, useMemo, useState } from 'react'
import { useInView } from 'react-intersection-observer'

import { useIntlMessages } from '@/hooks/useIntlMessages'

import type { Option } from '@/ui/select/select.interface'
import Span from '@/ui/select/span/Span'

import type { ListProps } from './list.interface'

interface InfiniteListProps extends ListProps {
  itemsPerPage?: number
}

const List = ({
  isOpen,
  selected,
  handleOpen,
  setSelected,
  options,
  className,
  searchQuery,
  setSearchQuery,
  isCountrySelect,
  itemsPerPage = 5,
  ...rest
}: InfiniteListProps) => {
  const [loadedCount, setLoadedCount] = useState(itemsPerPage)

  const loadedOptions = useMemo(() => {
    return options.slice(0, loadedCount)
  }, [options, loadedCount])

  const hasMore = useMemo(() => {
    return loadedCount < options.length
  }, [loadedCount, options.length])

  const handleSelect = useCallback(
    (option: Option) => {
      setSelected(option)
      handleOpen(false, false)
    },
    [setSelected, handleOpen]
  )

  const loadMore = useCallback(() => {
    setLoadedCount(prev => Math.min(prev + itemsPerPage, options.length))
  }, [itemsPerPage, options.length])

  const { ref: sentinelRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
    skip: !isOpen || !hasMore,
    rootMargin: '0px 0px 50px 0px'
  })

  useMemo(() => {
    if (inView && hasMore) loadMore()
  }, [inView, hasMore, loadMore])

  useMemo(() => {
    setLoadedCount(itemsPerPage)
  }, [options, itemsPerPage])

  const messages = useIntlMessages()
  const { country } = messages.ProfilePage.modals.DeliveryAddressModal.inputs

  return (
    <ul
      {...rest}
      id='dropdown-list'
      className={clsx(
        'bg-brand-background border-gray transition-max-height-visibility pointer-events-none invisible absolute top-full z-10 max-h-0 w-full overflow-y-auto rounded-b-sm border border-t-0 shadow duration-300 will-change-auto focus-visible:outline-none',
        { '!pointer-events-auto !visible max-h-80': isOpen },
        className
      )}
    >
      <input
        type='text'
        id='dropdown-search'
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder={country.search.placeholder}
        className='text-brand-blue font-arial leading-medium selection:text-brand-blue/75 border-gray bg-brand-background placeholder:text-brand-blue/75 w-full border-0 border-b-1 p-3 text-base font-normal focus-visible:outline-none'
      />
      {loadedOptions.length > 0 ? (
        loadedOptions.map(option => {
          const optionKey = option.id
          const isOptionSelected = optionKey === selected.id

          return (
            <li
              key={optionKey}
              onClick={() => handleSelect(option)}
              className={clsx(
                'bg-brand-background hover:bg-gray-background cursor-pointer px-3 py-5 transition-colors duration-300',
                { '!bg-gray': isOptionSelected }
              )}
            >
              <Span option={option} isCountrySelect={isCountrySelect} />
            </li>
          )
        })
      ) : (
        <li className='bg-brand-background px-3 py-5'>
          <Span
            option={{
              id: '1',
              value: country.search.error
            }}
            isCountrySelect={false}
          />
        </li>
      )}
      {hasMore && (
        <div
          ref={sentinelRef}
          className='pointer-events-none invisible h-1'
          aria-hidden='true'
        />
      )}
    </ul>
  )
}
export default memo(List)
