import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-pattern-dots-dark"></div>
      
      {/* Gradient orbs */}
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-primary-green/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary-blue/10 rounded-full blur-3xl"></div>

      <div className="container relative z-10 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-primary-blue rounded-full blur-lg opacity-50"></div>
                <Image
                  src="/logo.png"
                  alt="Karma Farm LLC"
                  width={48}
                  height={48}
                  className="relative z-10 w-12 h-12"
                />
              </div>
              <span className="font-display font-bold text-2xl">
                Karma Farm LLC
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Building community through technology. Creating innovative apps that 
              connect people and foster meaningful relationships in the digital age.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: 'twitter', href: '#' },
                { icon: 'github', href: '#' },
                { icon: 'linkedin', href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group"
                  aria-label={social.icon}
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon === 'twitter' && (
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    )}
                    {social.icon === 'github' && (
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    )}
                    {social.icon === 'linkedin' && (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/apps', label: 'Our Apps' },
                { href: '/about', label: 'About Us' },
                { href: '/contact', label: 'Contact' }
              ].map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-green rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Apps */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6 text-white">Our Apps</h3>
            <ul className="space-y-3">
              {[
                { href: '/apps#karma-farm', label: 'Karma Farm', status: 'live' },
                { href: '/apps#write-it-down', label: 'Write-It-Down', status: 'coming' },
                { href: '/apps#focus-flow', label: 'Focus Flow', status: 'coming' }
              ].map((app, index) => (
                <li key={index}>
                  <Link 
                    href={app.href} 
                    className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-primary-blue rounded-full group-hover:w-2 transition-all duration-300"></span>
                    {app.label}
                    {app.status === 'live' && (
                      <span className="text-xs bg-primary-green/20 text-primary-green px-2 py-1 rounded-full">Live</span>
                    )}
                    {app.status === 'coming' && (
                      <span className="text-xs bg-primary-orange/20 text-primary-orange px-2 py-1 rounded-full">Soon</span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-8 border-t border-white/10 mb-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="font-display font-semibold text-xl mb-2">Stay in the Loop</h4>
              <p className="text-gray-300">Get updates on new apps and features.</p>
            </div>
            <form className="flex gap-3 w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-green/50 focus:border-primary-green transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-primary-green to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary-green/25 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>
            © {currentYear} Karma Farm LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}