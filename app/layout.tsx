import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Karma Farm LLC',
  description: 'We make apps that help neighbors help each other.',
  keywords: 'Karma Farm, Write-It-Down, Focus Flow, community apps, iOS apps',
  authors: [{ name: 'Karma Farm LLC' }],
  openGraph: {
    title: 'Karma Farm LLC',
    description: 'We make apps that help neighbors help each other.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
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