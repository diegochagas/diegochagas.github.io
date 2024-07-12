'use client'

import { useMenu } from '@/app/context/menu-context'
import { MouseEvent } from 'react'

interface LinkProject {
  url: string
  title: string
  isLast: boolean
}

export default function LinkProject({ url, title, isLast }: LinkProject) {
  const { scrollTo } = useMenu()

  function scrollToPortfolio(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    scrollTo('portfolio')
  }

  return (
    <a
      href={url}
      className="relative border-0 border-none inline-block no-underline transition-all duration-200"
      target="_blank"
      onClick={isLast ? undefined : scrollToPortfolio}
    >
      {title}
    </a>
  )
}