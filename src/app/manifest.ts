import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Manas Kumar Portfolio',
    short_name: 'Manas Kumar',
    description: 'Full Stack Developer & 3D Enthusiast - Portfolio Website',
    start_url: '/',
    display: 'standalone',
    background_color: '#111827',
    theme_color: '#111827',
    orientation: 'portrait-primary',
    scope: '/',
    categories: ['portfolio', 'developer', 'technology'],
    lang: 'en',
    dir: 'ltr',
    icons: [
      {
        src: '/icon.ico',
        sizes: '16x16 32x32',
        type: 'image/x-icon',
      },
      {
        src: '/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
      },
      {
        src: '/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
      },
    ],
  }
}
