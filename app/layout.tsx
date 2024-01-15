import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'owkor',
  description: 'owkor',
  manifest: 'site.webmanifest',
  icons: {
    icon: ['/favicon-32x32.png', '/favicon-16x16.png'],
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
    },
  },
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
