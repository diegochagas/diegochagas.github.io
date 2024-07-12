'use client'

import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from 'react'
import { scroller } from 'react-scroll'

interface MenuContextType {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
  scrollTo: (section: string) => void
}

const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
  scrollTo: () => {}
})

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function scrollTo(section: string) {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    });
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen, scrollTo }}>
      {children}
    </MenuContext.Provider>
  )
}

export const useMenu = () => useContext(MenuContext)
