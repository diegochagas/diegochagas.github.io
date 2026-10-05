interface MenuProps {
  title: string
  url: string
  openInNewTab?: boolean
}

export const menu: MenuProps[] = [
  { title: 'About me', url: 'about-me' },
  { title: 'Portfolio', url: 'portfolio' },
  { title: 'Skills', url: 'skills' },
  { title: 'Contact', url: 'contact' },
  { title: 'Blog', url: '/blog' },
]