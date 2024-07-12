'use client'

import { useMenu } from '@/app/context/menu-context'
import Link from 'next/link'
import { MouseEvent } from 'react'

export default function PortfolioLink() {
  const { scrollTo } = useMenu()

  function scrollToPortfolio(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    scrollTo('portfolio')
  }
  
  return (
    <Link
      id="portfolio-link"
      href="#portfolio"
      className="opacity-0 hidden md:block my-7 xl:my-10 mx-auto w-5 relative border-0 border-none transition-all duration-200 ease-[cubic-bezier(.3,0,0.5,1)]"
      onClick={scrollToPortfolio}
    >
      <div className="w-5 h-8 shadow-[inset_0_0_0_2px_#111827] rounded-3xl cursor-pointer transition-all duration-200 translate-y-0 after:content-[''] after:w-1 after:h-1.5 after:bg-gray-900 after:ml-2 after:top-2 after:rounded-sm after:absolute after:transition after:duration-300 after:animate-scroll" />
    </Link>
  )
}