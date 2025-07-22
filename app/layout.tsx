import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Karma Farm LLC - Building Community Through Technology',
  description: 'Karma Farm LLC creates innovative mobile applications that foster community connections and promote helping others. Discover our apps including Karma Farm, Write-It-Down, and Focus Flow.',
  keywords: 'Karma Farm, community apps, mobile applications, iOS apps, helping others, skill sharing',
  authors: [{ name: 'Karma Farm LLC' }],
  openGraph: {
    title: 'Karma Farm LLC',
    description: 'Building Community Through Technology',
    images: ['/logo.png'],
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow pt-20">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}