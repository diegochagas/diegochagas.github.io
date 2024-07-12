interface Contact {
  title: string
  url: string
  initial?: string
}

export const contacts: Contact[] = [
  { initial: 'E', title: 'drochachagas@gmail.com', url: 'mailto:drochachagas@gmail.com' },
  { initial: 'P', title: '+55 (13) 99132-2882', url: 'https://wa.me/5513991322882' },
]

export const social: Contact[] = [
  { title: 'LinkedIn', url: 'https://www.linkedin.com/in/diegorchagas' },
  { title: 'Github', url: 'https://github.com/diegochagas' },
  { title: 'Instagram', url: 'https://www.instagram.com/diegorchagas' },
  { title: 'X', url: 'https://x.com/diegorchagas' },
]