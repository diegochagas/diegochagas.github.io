import { ReactNode } from 'react'
import { MenuProvider } from '../context/menu-context'
import { Curtain } from '../components/curtain'
import NavBar from './components/header/navbar'
import Header from './components/header'
import { Footer } from './components/footer'

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <MenuProvider>
      <Curtain />
      
      <NavBar />
      <Header />

      {children}

      <Footer />
    </MenuProvider>
  )
}
