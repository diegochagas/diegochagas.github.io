'use client'

import { useMenu } from "@/app/context/menu-context"
import { menu } from "@/app/data/menu"

export default function NavBar() {
  const { scrollTo, isMenuOpen, setIsMenuOpen } = useMenu()

  function scrollToSection(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, section: string, isExternalLink: boolean) {
    if (!isExternalLink) {
      event.preventDefault()

      scrollTo(section)
    }
    
    setIsMenuOpen(false)
  }

  return (
    <nav className={`${isMenuOpen ? 'flex opacity-100' : 'hidden opacity-0'} transition-opacity duration-500 fixed z-40 w-full h-full items-center justify-center`}>
      <div className="text-zinc-500 text-center">
        <h5 className="uppercase text-sm px-1.5 tracking-[.4em]">Menu</h5>
        <ul className="pt-2.5 text-4xl md:text-5xl lg:text-7xl font-extrabold ">
          {menu.map((item, index) => (
            <li key={item.title} className="hover:text-white py-0.5 group">
              <a
                href={item.url}
                className="relative"
                target={index >= 4 ? '_blank' : '_self' }
                onClick={(event) => scrollToSection(event, item.url, index >= 4)}
              >
                <div className="hidden md:block absolute w-20 lg:w-28 h-1.5 lg:h-2 bottom-6 lg:bottom-9 -left-24 lg:-left-32 group-hover:bg-white" />
                <span>{item.title}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}