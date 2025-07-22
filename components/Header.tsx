'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/apps', label: 'Our Apps' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/80 backdrop-blur-md shadow-lg' 
        : 'bg-white/70 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-primary-blue rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
              <Image
                src="/logo.png"
                alt="Karma Farm LLC"
                width={48}
                height={48}
                className="relative z-10 w-12 h-12 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <span className="font-display font-bold text-xl text-gray-900 group-hover:text-primary-green transition-colors duration-300">
              Karma Farm LLC
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative font-medium transition-colors duration-300 ${
                    isActive 
                      ? 'text-primary-green' 
                      : 'text-gray-600 hover:text-primary-green'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-green to-emerald-500 rounded-full"></span>
                  )}
                  <span className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-green to-emerald-500 rounded-full transform origin-left transition-transform duration-300 ${
                    isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`}></span>
                </Link>
              )
            })}
            
            <Link
              href="/apps"
              className="ml-4 px-6 py-2.5 bg-gradient-to-r from-primary-green to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-green/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 transform ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
              <span className={`block h-0.5 w-full bg-gray-600 rounded-full transition-all duration-300 transform ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="px-4 py-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-primary-green/10 to-emerald-500/10 text-primary-green' 
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-green'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            })}
            
            <div className="pt-4 mt-4 border-t border-gray-100">
              <Link
                href="/apps"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-primary-green to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}