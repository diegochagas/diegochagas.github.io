'use client'

import Icon from '@/app/components/icons'
import { useMenu } from '@/app/context/menu-context'
import Link from 'next/link'

export default function Signature() {
  const { isMenuOpen } = useMenu()

  return (
    <div className={`${isMenuOpen ? 'fixed bottom-0 left-0 justify-center' : 'relative justify-end'} w-full flex items-center col-span-4 z-40`}>
      <p className="text-zinc-500 my-0 ml-0 mr-2 text-sm font-normal pt-0.5 pb-1 text-right">
        &copy; {!isMenuOpen ? '2016 — ' : ''}{new Date().getFullYear()} Diego Chagas<br />
        {!isMenuOpen && (
          // <span>Made in Sao Paulo, Brazil.</span>
          <small>
            Certifications&nbsp;—&nbsp;
            <a className="hover:font-bold" href="https://www.credly.com/badges/23085f89-d2da-4db0-ab8f-adc8037fdc21/linked_in_profile" target="_blank" rel="noopener noreferrer">Microsoft</a>&nbsp;/&nbsp;
            <a className="hover:font-bold" href="https://certificates.cs50.io/8d5d4b5f-5ebd-451d-a46b-e8dd93338bf6.png?size=letter" target="_blank" rel="noopener noreferrer">Harvard</a>&nbsp;/&nbsp;
            <a className="hover:font-bold" href="/abacus-institute-of-studies" target="_blank" rel="noopener noreferrer">Abacus</a>
          </small>
        )}
      </p>
      {!isMenuOpen && (
        <Link className="text-neutral-300 font-extrabold tracking-widest flex items-center" href="/">
          <Icon name="code" />
        </Link>
      )}
    </div>
  )
}