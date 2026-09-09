import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 14, background: '#c9f36b', color: '#10140e', fontSize: 25, fontWeight: 800, fontFamily: 'Arial' }}>
      A7
    </div>,
    { ...size },
  )
}
