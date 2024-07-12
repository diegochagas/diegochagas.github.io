interface Portfolio {
  title: string
  description: string
  startYear: number
  endYear?: number
  url: string
}

export const portfolio: Portfolio[] = [
  // {
  //   title: 'PIPT: Petrobras',
  //   description: 'Energy market front-end development',
  //   startYear: 2024,
  //   url: 'https://pipt-dsv.petrobras.com.br/',
  // },
  {
    title: 'Shell Energy',
    description: 'Energy market front-end development',
    startYear: 2024,
    url: 'https://gateway.shellenergy.com/',
  },
  {
    title: 'Cropwise',
    description: 'Farm market front-end development',
    startYear: 2023,
    url: 'https://www.cropwise.com/',
  },
  {
    title: 'Vidua Wonen',
    description: 'Housing market front-end development',
    startYear: 2022,
    url: 'https://www.viduawonen.nl/en/particulieren',
  },
  {
    title: 'Vodafone UK',
    description: 'E-commerce front-end development',
    startYear: 2022,
    url: 'https://www.vodafone.co.uk/smart-watches-and-wearables',
  },
  {
    title: 'Cloe',
    description: 'Learning platform front-end development',
    startYear: 2020,
    endYear: 2021,
    url: 'https://cloeapp.com/',
  },
  {
    title: 'Site Blindado',
    description: 'Security company front-end development',
    startYear: 2019,
    endYear: 2020,
    url: 'https://app.siteblindado.com/',
  },
  {
    title: 'Carrefour',
    description: 'E-commerce front-end development',
    startYear: 2018,
    url: 'https://www.carrefour.com.br/',
  },
  {
    title: 'Grand Optical',
    description: 'Eyeglasses manufacturer front-end development',
    startYear: 2017,
    url: 'https://www.grandoptical.com/',
  },
  {
    title: 'Pacifika',
    description: 'Clothing brand front-end development',
    startYear: 2017,
    url: 'https://www.pacifika.com.co/',
  },
  {
    title: 'Nestlé',
    description: 'Food company responsive design',
    startYear: 2016,
    url: 'https://www.nestle.com.br/',
  },
  {
    title: 'Under Armour',
    description: 'Sportswear company responsive design',
    startYear: 2016,
    url: 'https://www.underarmour.com.br/',
  },
]