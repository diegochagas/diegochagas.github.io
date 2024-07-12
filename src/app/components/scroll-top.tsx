'use client'

import { MouseEvent, useEffect, useState } from 'react'
import Icon from './icons'
import { useMenu } from '../context/menu-context'
import { animateScroll } from 'react-scroll'

export default function ScrollTop() {
  const { isMenuOpen } = useMenu()
  const [showArrow, setShowArrow] = useState(false)
  const opacity = showArrow ? 'opacity-100' : 'opacity-0'

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY >= 400)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
}, [])

  function onScrollTo(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    animateScroll.scrollToTop({
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  return (
    <a
      href="#"
      className={`${isMenuOpen ? 'hidden' : 'block'} fixed right-3.5 ${opacity} translate-z-0 transition-all duration-300 bg-gray-900/30 hover:bg-gray-900 w-11 h-11 bottom-3.5 z-50 p-3 border-0 border-none rounded-full`}
      onClick={onScrollTo}
    >
      <Icon name="arrow-up" size={20} />
    </a>
  )
}