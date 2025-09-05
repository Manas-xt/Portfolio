import type { Metadata, Viewport } from 'next'
import { Poppins, Outfit } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Manas Kumar - Full Stack Developer & 3D Enthusiast',
    template: '%s | Manas Kumar Portfolio'
  },
  description: 'Experienced Full Stack Developer specializing in React, Node.js, and Three.js. Creating innovative web applications with cutting-edge 3D graphics and modern technologies.',
  keywords: [
    'Manas Kumar',
    'Full Stack Developer',
    'React Developer',
    'Node.js Developer', 
    'Three.js',
    'JavaScript',
    'TypeScript',
    'Web Development',
    'Frontend Developer',
    'Backend Developer',
    'Portfolio',
    '3D Graphics',
    'WebGL',
    'Next.js',
    'MERN Stack'
  ],
  authors: [{ name: 'Manas Kumar', url: 'https://manaskumar.tech' }],
  creator: 'Manas Kumar',
  publisher: 'Manas Kumar',
  applicationName: 'Manas Kumar Portfolio',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  category: 'technology',
  classification: 'Portfolio Website',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://manaskumar.tech',
    siteName: 'Manas Kumar Portfolio',
    title: 'Manas Kumar - Full Stack Developer & 3D Enthusiast',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, and Three.js. Creating innovative web applications with cutting-edge 3D graphics.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Manas Kumar - Full Stack Developer Portfolio',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@manaskumar',
    creator: '@manaskumar',
    title: 'Manas Kumar - Full Stack Developer & 3D Enthusiast',
    description: 'Experienced Full Stack Developer specializing in React, Node.js, and Three.js. Creating innovative web applications.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  alternates: {
    canonical: 'https://manaskumar.tech',
    languages: {
      'en-US': 'https://manaskumar.tech',
    },
  },
  other: {
    'linkedin:profile': 'https://linkedin.com/in/manas-xt',
    'github:profile': 'https://github.com/Manas-xt',
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' }
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Manas Kumar',
    url: 'https://manaskumar.tech',
    image: 'https://manaskumar.tech/profile-image.jpg',
    sameAs: [
      'https://linkedin.com/in/manas-xt',
      'https://github.com/Manas-xt',
      'https://twitter.com/manaskumar'
    ],
    jobTitle: 'Full Stack Developer',
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance'
    },
    alumniOf: 'Your University/College',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'India'
    },
    email: 'manas2005k@gmail.com',
    telephone: '+91-9257793866',
    knowsAbout: [
      'JavaScript',
      'TypeScript', 
      'React',
      'Node.js',
      'Three.js',
      'Next.js',
      'Full Stack Development',
      '3D Graphics',
      'Web Development'
    ]
  }

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#111827" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Manas Kumar" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://github.com" />
        <link rel="dns-prefetch" href="https://api.github.com" />
      </head>
      <body className={`${poppins.variable} ${outfit.variable} font-sans bg-gray-900 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
