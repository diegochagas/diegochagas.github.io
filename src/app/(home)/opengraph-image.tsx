import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Developer Photo'
export const size = {
  width: 950,
  height: 1120,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  const imageURL = new URL('/bg_home.png', 'https://www.diegochagas.com').toString()

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
        <img src={imageURL} alt="Developer Photo'" style={{ height: '100%' }} />
      </div>
    ),
    {
      ...size
    }
  )
}