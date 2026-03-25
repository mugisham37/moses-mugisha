import type { Metadata } from 'next'
import { Syne, Inter } from 'next/font/google'
import './globals.css'
import { Nav } from '../components/layout/Nav'
import { Footer } from '../components/layout/Footer'
import { SmoothScrollProvider } from '../components/layout/SmoothScrollProvider'

const syne = Syne({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-syne',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Moses Mugisha — Designer & Developer',
  description: 'Portfolio of Moses Mugisha, UI & Product Designer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body>
        <SmoothScrollProvider>
          <div className="page-wrapper">
            <Nav />
            <div className="main-content" style={{ marginTop: 96, marginBottom: 800 }}>
              {children}
            </div>
            <Footer />
          </div>
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
