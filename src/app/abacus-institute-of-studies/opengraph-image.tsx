import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Abacus Title'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/jpg'
 
export default async function Image() {
  const imageURL = new URL('/abacus/abacus-title.jpg', 'https://www.diegochagas.com').toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imageURL} alt="Abacus Title" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size
    }
  )
}