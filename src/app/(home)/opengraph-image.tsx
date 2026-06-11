import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Diego Chagas — Senior React & Next.js Developer'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const imageURL = new URL('/bg_home.png', 'https://diegochagas.com').toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 80,
            maxWidth: 720,
          }}
        >
          <div
            style={{
              fontSize: 28,
              letterSpacing: '0.4em',
              textTransform: 'uppercase',
              color: '#71717a',
            }}
          >
            Diego Chagas
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 64,
              fontWeight: 800,
              color: '#111827',
              lineHeight: 1.1,
            }}
          >
            Senior React & Next.js Developer
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 28,
              color: '#71717a',
            }}
          >
            diegochagas.com
          </div>
        </div>
        <img
          src={imageURL}
          alt=""
          style={{ height: '630px', objectFit: 'cover' }}
        />
      </div>
    ),
    {
      ...size
    }
  )
}
