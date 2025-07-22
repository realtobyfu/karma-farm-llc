import AppCard from '@/components/AppCard'
import Image from 'next/image'

export default function AppsPage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold text-text-primary mb-4">
              Our Applications
            </h1>
            <p className="text-lg text-text-secondary">
              Each app we create is carefully designed to solve real problems and 
              bring people together. Explore our growing suite of community-focused applications.
            </p>
          </div>
        </div>
      </section>

      {/* Karma Farm Detailed Section */}
      <section id="karma-farm" className="py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-20 h-20 bg-primary-green rounded-2xl flex items-center justify-center text-white text-3xl">
                  🌱
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-text-primary">Karma Farm</h2>
                  <span className="text-sm bg-primary-green text-white px-3 py-1 rounded-full">Available Now</span>
                </div>
              </div>
              
              <p className="text-lg text-text-secondary mb-6">
                Karma Farm is a revolutionary community platform that transforms the way neighbors 
                help each other. By gamifying acts of kindness and skill sharing, we make helping 
                others fun and rewarding.
              </p>

              <div className="space-y-4 mb-8">
                <h3 className="text-xl font-semibold text-text-primary">Key Features</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <h4 className="font-medium text-text-primary">Location-Based Discovery</h4>
                      <p className="text-sm text-text-secondary">Find help and opportunities near you</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">⭐</span>
                    <div>
                      <h4 className="font-medium text-text-primary">Karma System</h4>
                      <p className="text-sm text-text-secondary">Earn points by helping others</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">💬</span>
                    <div>
                      <h4 className="font-medium text-text-primary">Real-Time Chat</h4>
                      <p className="text-sm text-text-secondary">Connect instantly with your community</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🛡️</span>
                    <div>
                      <h4 className="font-medium text-text-primary">Verified Profiles</h4>
                      <p className="text-sm text-text-secondary">Safe and trusted community members</p>
                    </div>
                  </div>
                </div>
              </div>

              <a 
                href="#" 
                className="btn-primary inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download on App Store
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-green to-primary-blue opacity-20 blur-3xl"></div>
                <Image
                  src="/logo.png"
                  alt="Karma Farm App"
                  width={300}
                  height={300}
                  className="relative z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Apps Grid */}
      <section className="py-20 bg-background-secondary">
        <div className="container">
          <h2 className="text-3xl font-bold text-text-primary text-center mb-12">
            Coming Soon
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div id="write-it-down">
              <AppCard
                name="Write-It-Down"
                description="Your thoughts deserve a beautiful home. Write-It-Down combines elegant design with powerful features to create the perfect digital notebook."
                icon="✏️"
                color="bg-primary-blue"
                features={[
                  "Rich text editing with markdown support",
                  "Seamless cloud synchronization",
                  "Smart folder organization",
                  "Full-text search across all notes",
                  "Dark mode support"
                ]}
                status="coming-soon"
              />
            </div>
            
            <div id="focus-flow">
              <AppCard
                name="Focus Flow"
                description="Take control of your time and boost productivity. Focus Flow helps you work smarter, not harder, with scientifically-backed time management techniques."
                icon="⏱️"
                color="bg-primary-purple"
                features={[
                  "Customizable Pomodoro timer",
                  "Task prioritization system",
                  "Detailed productivity analytics",
                  "Multiple focus mode presets",
                  "Calendar integration"
                ]}
                status="coming-soon"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Be the first to know when our new apps launch. Join our mailing list 
              for exclusive early access and updates.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-green"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}