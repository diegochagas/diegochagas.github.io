'use client'

import { useMenu } from "../context/menu-context"

export function Curtain() {
  const { isMenuOpen } = useMenu()

  return (
    <div className={`${isMenuOpen ? 'h-full top-auto bottom-0' : 'h-0 top-0 bottom-auto'} fixed w-full left-0 overflow-hidden z-40 bg-gray-900 bg-center translate3d-0 transition-[height] duration-500 ease-[cubic-bezier(.3,0,0.5,1)]`} />
  )
}