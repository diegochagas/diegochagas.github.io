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
      // eslint-disable-next-line react-hooks/set-state-in-effect -- legacy scroll trigger, kept as-is (react-hooks 7 rule); refactor when this component is next touched
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