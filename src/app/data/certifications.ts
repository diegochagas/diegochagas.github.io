import { iconName } from "../components/icons"

interface Certifications {
  title: string
  description: string
  year: number
  url: string
  icon: iconName
}

export const certifications: Certifications[] = [
  {
    title: 'Abacus Institute Of Studies',
    description: 'New Zealand Certificate in English Language',
    year: 2018,
    url: '/abacus',
    icon: 'abacus'
  },
  {
    title: 'Microsoft',
    description: 'Exam 480: Programming in HTML5 with JavaScript and CSS3',
    year: 2019,
    url: 'https://www.credly.com/badges/23085f89-d2da-4db0-ab8f-adc8037fdc21/linked_in_profile',
    icon: 'microsoft'
  },
  {
    title: 'Harvard University',
    description: 'Introduction to Computer Science Certificate',
    year: 2020,
    url: 'https://certificates.cs50.io/8d5d4b5f-5ebd-451d-a46b-e8dd93338bf6.png?size=letter',
    icon: 'harvard'
  },
]