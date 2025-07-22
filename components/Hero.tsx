import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="absolute inset-0 bg-pattern-dots opacity-40"></div>
      </div>

      {/* Animated orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary-green/20 to-emerald-500/20 rounded-full blur-3xl animate-morph"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-primary-blue/20 to-cyan-500/20 rounded-full blur-3xl animate-morph animation-delay-2000"></div>

      <div className="container relative z-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-slide-in-bottom">
            <div className="inline-flex items-center gap-2 bg-primary-green/10 text-primary-green px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-green"></span>
              </span>
              Building the future of community tech
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-extrabold text-gray-900 mb-6 leading-tight">
              Where Technology
              <br />
              Meets <span className="gradient-text-animated">Humanity</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              We're reimagining how communities connect, collaborate, and care for each other through beautifully crafted mobile experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-16">
              <Link href="/apps" className="btn-primary group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Apps
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
              <Link href="/about" className="btn-secondary">
                Our Story
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-8 justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-green to-emerald-500 border-2 border-white flex items-center justify-center text-white text-xs font-bold">
                    {String.fromCharCode(65 + i)}
                  </div>
                ))}
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-500">Trusted by</p>
                <p className="font-bold text-gray-900">10,000+ Users</p>
              </div>
            </div>
          </div>

          {/* Interactive Visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-square">
              {/* Floating cards */}
              <div className="absolute top-0 right-0 w-48 glass-card p-6 animate-float animation-delay-1000 shadow-xl">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-bold text-gray-900 mb-1">Karma Farm</h4>
                <p className="text-sm text-gray-600">Connect & earn karma</p>
              </div>
              
              <div className="absolute bottom-16 left-0 w-48 glass-card p-6 animate-float animation-delay-2000 shadow-xl">
                <div className="text-4xl mb-3">✏️</div>
                <h4 className="font-bold text-gray-900 mb-1">Write-It-Down</h4>
                <p className="text-sm text-gray-600">Capture your thoughts</p>
              </div>
              
              <div className="absolute top-1/3 right-1/4 w-48 glass-card p-6 animate-float shadow-xl">
                <div className="text-4xl mb-3">⏱️</div>
                <h4 className="font-bold text-gray-900 mb-1">Focus Flow</h4>
                <p className="text-sm text-gray-600">Master your time</p>
              </div>

              {/* Central logo */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-primary-blue rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
                  <Image
                    src="/logo.png"
                    alt="Karma Farm Logo"
                    width={200}
                    height={200}
                    className="relative z-10 w-48 h-48"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}