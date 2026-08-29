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
  { title: 'Github', url: 'https://github.com/diegochagas', openInNewTab: true },
  { title: 'Linkedin', url: 'https://www.linkedin.com/in/diegorchagas/', openInNewTab: true },
]