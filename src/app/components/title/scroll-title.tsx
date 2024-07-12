'use client'

import { useEffect, useState } from 'react'
import Icon from '../icons'

interface ScrollTitleProps {
  title: string
}

export default function ScrollTitle({ title }: ScrollTitleProps) {
  const [isTyped, setIsTyped] = useState(false)

  useEffect(() => {
    
  }, [])
  
  useEffect(() => {
    const handleScroll = () => {
      const screenPosition = document.getElementById(title.toLowerCase())?.getBoundingClientRect().top ?? 0
      const position = window.scrollY
      
      if (screenPosition && position >= screenPosition) {
        setIsTyped(true)
      }
    }

    window.addEventListener('scroll', handleScroll)

    if(window.innerHeight > 699 && (title === 'Portfolio')) {
      setIsTyped(true)
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [title])

  return (
    <Icon name="code" text={title} isTyped={isTyped} startTypedCounter />
  )
}