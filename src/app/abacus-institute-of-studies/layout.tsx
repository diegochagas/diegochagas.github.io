import { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
  title: 'New Zealand Certificate in English Language - Abacus Institute Of Studies',
  description: 'Abacus Institute of Studies is an NZQA approved Category 1 Institution which delivers business, IT & English language qualifications at Christchurch and Auckland Campuses. Our vision is to lead the education sector, demonstrating best practice in teaching, learning and assessment, creating productive, efficient and professional graduates.',
}

export default function AbacusLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}
    </>
  )
}
