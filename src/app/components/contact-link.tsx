'use client'

import { useEffect, useState } from 'react'
import { useMenu } from '../context/menu-context'
import Icon from './icons'

export function ContactLink() {
  const { scrollTo } = useMenu()
  const [showLink, setShowLink] = useState(true)
  
  useEffect(() => {
    const handleScroll = () => {
      const contactPosition = document.getElementById('contact')?.getBoundingClientRect().top ?? 9999
      setShowLink(contactPosition > 700)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <span
      className={`${showLink ? 'xl:block' : ''} hidden bg-gray-900/30 hover:bg-gray-900 fixed w-11 hover:w-32 h-11 left-10 bottom-10 z-30 p-3 border-0 border-none rounded-full transition-all duration-200 translate-z-0 group cursor-pointer`}
      onClick={() => scrollTo('contact')}
    >
      <Icon className="block float-left mr-2 overflow-hidden" name="contact" />
      <span className="block w-0 group-hover:w-auto float-left overflow-hidden text-xs font-medium text-white opacity-0 group-hover:opacity-100 mt-0.5 transition-custom-width-opacity">Contact me</span>
    </span>
  )
}