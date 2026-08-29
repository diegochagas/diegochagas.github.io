import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Diego Chagas — Blog'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'white',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          paddingLeft: 80,
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
            fontSize: 128,
            fontWeight: 800,
            color: '#111827',
            letterSpacing: '-0.04em',
          }}
        >
          Blog
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
